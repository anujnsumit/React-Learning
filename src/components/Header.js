import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../utils/constants";
const Header=()=>(
    <div className="header">
      <div className="logo-container"><img className='logo' src={APP_LOGO_URL}/></div>
      <div className="nav-items">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
)

export default Header;