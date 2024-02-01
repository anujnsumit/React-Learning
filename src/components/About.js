import React,{useContext} from "react";
import userContext from "../utils/userContext";

const About=()=>{
    const {loggedInUser}=useContext(userContext)
    return(
        <>
        <h3>About</h3>
        <p>{loggedInUser}</p>
        </>
    )
}

export default About;