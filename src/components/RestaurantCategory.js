import ItemList from "./ItemLists";

const RestaurantCategory=({data,showItem,setShowItem})=>{
    return(
        <div className="w-6/12  my-4 m-auto bg:gray=50 shadow-lg p-4"> 
        <div className="flex justify-between cursor-pointer" onClick={()=>setShowItem()}>
           <span className="font-bold text-lg">{data?.title}({data.itemCards.length})</span>
           <span className="">🔽</span>
        </div>
        {showItem &&
        <ItemList items={data?.itemCards}/>}
    </div>
    )
}
export default RestaurantCategory;