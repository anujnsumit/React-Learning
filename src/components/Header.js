import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/userContext";
const Header=()=>{
 const {loggedInUser} =useContext(userContext)
return(
    <div className="flex justify-around shadow-lg bg-white">
      <img className='w-28' src={APP_LOGO_URL}/>
      <div className="flex items-center">
        <ul className="flex text-xl">
            <li className="p-10"><Link to="/">Home</Link></li>
            <li className="p-10"><Link to="/about">About</Link></li>
            <li className="p-10"><Link to="/contact">Contact Us</Link></li>
            <li className="p-10">Cart</li>
            <li className="p-10">{loggedInUser}</li>
        </ul>
      </div>
    </div>
    )}


export default Header;