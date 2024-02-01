import {useParams} from "react-router-dom";
import { RES_DETAIL_URL } from "../utils/constants";
import useFetchData from "../utils/useFetchData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetails=()=>{
    const {resId}=useParams();
    const [isShowItem,setShowItem]=useState([0]);
    const data=useFetchData(RES_DETAIL_URL,resId)
    const itemCards=data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(el=>el?.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const toggleSection = (index) => {
        const isOpen = isShowItem.includes(index);
        setShowItem((prevOpenSections) => {
          if (isOpen) {
            return prevOpenSections.filter((item) => item !== index);
          } else {
            return [...prevOpenSections, index];
          }
        });
      };
    return(
        <>
        <div className="text-center">
            <h1 className="text-2xl font-bold my-6">{data[0]?.card?.card?.info?.name}</h1>
            <p className="font-bold text-lg">{data[0]?.card?.card?.info?.cuisines.join(",")} - {data[0]?.card?.card?.info?.costForTwoMessage}</p>

            {Array.isArray(itemCards) && itemCards.map((el,index)=>
            <div key={el?.card?.info?.id}>
                <RestaurantCategory 
                data={el?.card?.card}
                showItem={isShowItem.includes(index)}
                setShowItem={()=>toggleSection(index)}
                />
            </div>)}
        </div>
        </>
    )
}

export default RestaurantDetails;