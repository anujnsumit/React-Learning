import { useEffect, useState } from "react"

const useFetchData=(url,resId='')=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        try {
        const res=await fetch(`${url}restaurantId=${resId}`);
        const resJson=await res.json();
        setData(resJson.data.cards)
        } catch (error) {
          console.log(error)  
        }
    }
    
    return data;
}

export default useFetchData;