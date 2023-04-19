import Errorimage from "../images/404 Error.jpg";
import {useRouteError, Link} from  "react-router-dom"

const  Error = () => {
// call useRouteError so we can access error data while routing
  const err = useRouteError();
  //console.log(err)
    return (
        <div className="error-page">
            <img src={Errorimage} alt="404 error" />
            <h1>Oops! restaurant you are looking for can't be found</h1>
            <h3 className="error-data">{err.data}</h3>
            <h3 className="err-back-home">
                <Link to="/">Back Home</Link>
            </h3>
        </div>
    )
}

export default Error;