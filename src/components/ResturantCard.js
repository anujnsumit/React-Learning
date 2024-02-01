import { CARD_IMG_URL } from "../utils/constants";

const ResturantCard=({resData})=>{
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    return(
    <div className="w-40 min-h-80 mx-8 my-8 shadow-xl rounded-lg hover:border-2 border-gray-200">
       <img className="rounded-md " alt='biryani image' src={`${CARD_IMG_URL}${cloudinaryImageId}`}/>
       <h3>{name}</h3>
       <h4 className="text-wrap overflow-hidden text-ellipsis">{cuisines.join(",")}</h4>
       <div className="card-items">
           <p>Rating {avgRating}</p>
       </div>
       <p>{costForTwo}</p>
    </div>
)
}

export const WithRestaurantPromoted=(Component)=>(props)=>{
return <div className="relative">
    <label className="p-2 m-2 absolute  bg-black text-white rounded-md">promoted</label><Component {...props}/>
    </div>
};

export default ResturantCard;