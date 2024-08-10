import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage=()=>{
    const err=useRouteError();
    return(
        <div>
            <Header/>
            Oops something went wrong, {err.status} page {err.statusText}
            <Footer/>
        </div>
    )
}


export default ErrorPage;