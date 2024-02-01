import { useEffect, useState } from "react";
import ResturantCard,{WithRestaurantPromoted} from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import { RES_LIST_API_URL } from "../utils/constants";


const Body = () => {
    const [filterData, setFilterData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const data=useFetchData(RES_LIST_API_URL);
    const restrauntLists=data[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const topRatedRestaurant = () => {
        const result = restrauntLists.filter(el => el.info.avgRating > 4.2)
        setFilterData(result);
    }
  const RestaurantPromotedCard=WithRestaurantPromoted(ResturantCard)
   
 
 useEffect(()=>{
    if(Array.isArray(restrauntLists)&& restrauntLists.length)
    setFilterData(restrauntLists)
},[restrauntLists])

    return (
        <>
        {Array.isArray(restrauntLists) && restrauntLists.length==0 ?
          <Shimmer/>:
        <div>
            <div className="justify-center flex m-4">
                <input
                    className="px-4 py-4 border-2 rounded-lg border-blue-400 text-xl"
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={({ target: { value } }) => { setSearchText(value) }} />
                <button className="ml-4 border-2 border-grey-400 rounded-lg bg-gray-400 text-white px-6 py-4" onClick={() => {
                    const filterdResCard = restrauntLists.filter((ele) =>
                        ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterData(filterdResCard);
                    setSearchText("")
                }
                }>search</button>
                <button className="py-2 px-4 border-2 ml-4 rounded-lg border-blue-400" onClick={topRatedRestaurant}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="flex content-between flex-wrap mt-6 ml-4 mr-4">
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