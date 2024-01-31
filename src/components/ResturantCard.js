import { CARD_IMG_URL } from "../utils/constants";


const ResturantCard=({resData})=>{
    console.log(resData,'resId')
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    return(
    <div className="res-card">
       <img className="recipe-img" alt='biryani image' src={`${CARD_IMG_URL}${cloudinaryImageId}`}/>
       <h3>{name}</h3>
       <h4 className="cuisine-text">{cuisines.join(",")}</h4>
       <div className="card-items">
           <p>Rating {avgRating}</p>
       </div>
       <p>{costForTwo}</p>
    </div>
)
}

export const WithRestaurantPromoted=(Component)=>(props)=>{
    console.log(Component,props,'props')
return <div><label>promoted</label><Component {...props}/></div>
};

export default ResturantCard;