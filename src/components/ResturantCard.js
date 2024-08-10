import { useState } from "react";
import { IMAGE_URL } from "../utils/constant";
import { useFetchData } from "../utils/useFetch";

const ResCard = () => {
    const [resList,setResList,filterTopRated] = useFetchData();
    const[searchValue,setSearchValue]=useState("");

    const getTopRatedCard=()=>{
        setResList(filterTopRated.filter(el=>el.info.avgRating>4.4))
    }

    const filterResturant=(e)=>{
        setSearchValue(e.target.value);
        setResList(filterTopRated.filter(el=>el.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
   
    return (
        <>
        <div className="btn">
        <input 
        type="text" 
        placeholder="search list" 
        value={searchValue} 
        onChange={filterResturant}
        className="srch-box"/>
        <button onClick={getTopRatedCard}>Top Rated</button>
        </div>
        <div className="container-main">
            {resList.map(el =>
                <div className="card-container">
                    <div className="card-list">
                        <img src={`${IMAGE_URL}${el.info.cloudinaryImageId}`} width="350px" height="200px" />
                        <h3>{el.info.name}</h3>
                        <h4>{el.info.cuisines.join(",")}</h4>
                        <h4>{el.info.avgRating} stars</h4>
                        <h4>{el.info.sla.slaString}</h4>
                    </div>
                </div>)}
                </div>
        </>
    )
}

export default ResCard;