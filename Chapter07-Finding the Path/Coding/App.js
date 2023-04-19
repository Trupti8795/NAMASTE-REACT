/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"; //for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing



//Build a AppLayout component: Header, Body and Footer
const AppLayout = () => {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
    </React.Fragment>
  )
}

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/" , //show path for routing
    element: <AppLayout/>, //show component for particular path
    errorElement:  <Error/>,
    children: [
       // show children component for routing
       {
        path: "/",
        element: <Body/>,
       },
       {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId", //dynamic Routing
        element : <RestaurantMenu/>,
      },
    
  ],    
},
{
  path: "/login",
  element: <Login/>
}
]);


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router = {appRouter}/>);