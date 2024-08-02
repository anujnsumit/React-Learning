import ResCard from "./ResturantCard";

const Body=()=>{
    return (
        <div className="body">
            <div className="src-box">
               <h3>Search</h3>
               <input 
               type="text" 
               placeholder="Search Food"
               />
            </div>
          <div className="res-container">
            <ResCard/>
          </div>
        </div>
    )
    }

    export default Body;