import { LOGO_URL } from "../utils/constant";

const Header=()=>{
    return(
        <div className="header-container">
            <div className="logo-container">
              <img src={LOGO_URL}/>
            </div>
            <div className="nav-container">
             <ul className="nav-item"> 
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Testimonial</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Profile</a></li>
             </ul>
            </div>
        </div>
    )
}

export default Header;