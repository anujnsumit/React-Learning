import { useEffect, useState } from "react"
import { API_URL_LISTING } from "./constant";


export const useFetchData=()=>{
const[resList,setResList]=useState([]);
const[filterTopRated,setFilterTopRated]=useState([]);

useEffect(()=>{
    const getData=async()=>{
     const data=await fetch(API_URL_LISTING);
     const res=await data.json();
     setResList(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     );
     setFilterTopRated(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
   getData();
},[]);

return [resList,setResList,filterTopRated];
}

