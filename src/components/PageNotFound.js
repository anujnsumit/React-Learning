
import {useRouteError} from "react-router-dom";
const PageNotFound=()=>{
    const error=useRouteError();
return(
    <>
    <h2>{error.status} {error.statusText}</h2>
    </>
)
}

export default PageNotFound; 