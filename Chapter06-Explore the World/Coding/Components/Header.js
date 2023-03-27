import foodverylogo from "../images/foodvery.svg";
import { useState } from "react";


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
    
    return (
      <div className="header">
        <Applogo/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            {/*use conditional operator */}
            {isSignedIn ? (
              <button onClick={() => setIsSignedin(false)}><li>Sign Out</li></button>
            ) : (
              <button onClick={() => setIsSignedin(true)}><li>Sign In</li></button>
            )}
            <li>Cart<i class="fa-solid fa-cart-shopping" /></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  