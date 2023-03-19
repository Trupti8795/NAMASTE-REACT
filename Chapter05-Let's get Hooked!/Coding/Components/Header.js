import foodverylogo from "../images/foodvery.svg";


// Applogo component is functional component
const Applogo = () => {
    return (
      <img  src={foodverylogo} className="logo" alt="foodvery logo" />
    )
  }
  // Header component for header section 
  const Header = () => {
    return (
      <div className="header">
        <Applogo/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
            <li>Cart<i class="fa-solid fa-cart-shopping" /></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  