import foodverylogo from "../images/foodvery.svg";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"


// Applogo component is functional component
const Applogo = () => {
    return (
      <img  src={foodverylogo} className="logo" alt="foodvery logo" />
    )
  }


  // Header component for header section 
  const Header = () => {
    // use useState for user logged in or logged out
    const [isSignedIn, setIsSignedin] = useState(true);
    const navigate = useNavigate();
    return (
      <div className="header">
        <Applogo/>
        <div className="nav-items">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><i className="fa-solid fa-cart-shopping" /></li>
             {/*use conditional operator */}
            <li>
              {isSignedIn ? (
                <button className="logout-btn" onClick={() => setIsSignedin(false)}>Sign Out</button>
              ) : (
                <button className="login-btn" onClick={() => navigate("/Login")}>Sign In</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  