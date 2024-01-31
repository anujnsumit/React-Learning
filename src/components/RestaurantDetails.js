import { useEffect } from "react";
import {useParams} from "react-router-dom";
import { RES_DETAIL_URL } from "../utils/constants";

const RestaurantDetails=()=>{
    const {resId}=useParams();

    useEffect(()=>{
    fetchData();
    },[])

const fetchData=async()=>{
    const data=await fetch(`${RES_DETAIL_URL}restaurantId=${resId}`);
    const res=await data.json();
}
    return(
        <>
        <h3>Restaurant</h3>
        </>
    )
}

export default RestaurantDetails;