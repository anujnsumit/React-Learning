import { useEffect, useState } from "react";
import ResturantCard,{WithRestaurantPromoted} from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const topRatedRestaurant = () => {
        const result = data.filter(el => el.info.avgRating > 4.2)
        setFilterData(result);
    }
  const RestaurantPromotedCard=WithRestaurantPromoted(ResturantCard)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
    try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        setData(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterData(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    } catch (error) {
        console.log(error)
    }
    }
    return (
        <>
        {Array.isArray(data) && data.length==0 ?
          <Shimmer/>:
        <div className="body">
            <div className="search">
                <input
                    className="inputtext"
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={({ target: { value } }) => { setSearchText(value) }} />
                <button className="searchbtn" onClick={() => {
                    const filterdResCard = data.filter((ele) =>
                        ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterData(filterdResCard);
                    setSearchText("")
                }
                }>search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={topRatedRestaurant}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filterData.map(el =>
                <Link to={`/resturant-details/${el.info.id}`} key={el.info.id}>
                  {el.info?.veg ?<RestaurantPromotedCard resData={el}/>: <ResturantCard resData={el}/>}
                    </Link>
                )
                }
            </div>
        </div>}
        </>
    )
}

export default Body;