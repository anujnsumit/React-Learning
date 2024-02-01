import { CARD_IMG_URL } from "../utils/constants";

const ItemList=({items})=>{
    return(
        <div>
         {items.map(el=>
         <div className="p-2 m-2 border-b-2 border-gray-200 flex text-left" key={el.card.info.id}>
          <div className="w-9/12">
           <div className="py-2"> 
            <span className="text-lg">{el?.card?.info?.name}</span>
            <span>- ₹{el?.card?.info?.price/100 || el?.card?.info?.defaultValue/100}</span>
            </div>
            <p>{el.card.info.description}</p>
            </div>
            <div className="relative w-3/12 p-4">
            <img src={`${CARD_IMG_URL}${el?.card?.info?.imageId}`}/>
            <button className="p-2 bg:white shadow-lg absolute bottom-0 left-8">Add +</button>
            </div>
         </div>)}
        </div>
    )
}

export default ItemList;