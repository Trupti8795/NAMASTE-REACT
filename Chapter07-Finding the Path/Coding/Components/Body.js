import RestaurantCard from "./RestaurantCard";
import { Swiggy_API_URL} from "../Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


function filterData(searchText, allRestaurants) {
    const newFilterData =  allRestaurants.filter((restaurant ) => 
       restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
)
   return newFilterData;
}

//Build Body Component
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] =  useState([]);
    const [filterdRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect (() => {
        getRestaurants();
    },[])

    //Call an actual api to get data
    async function getRestaurants() {
      //handle the error using try and catch 
      try {

        const data = await fetch (Swiggy_API_URL);
        const json = await data.json();

        //setallrestaurants data
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

      } catch(error) {
        console.log(error)
      }
      
    }

    
    const offline = true;
    if(offline) {
    return <h1>please check yout Internt connection!!</h1>
  }

    //use search function if data is empty show error message
    const searchData = (searchText, allRestaurants) => {
        if (searchText !== "") {
          const data =  filterData(searchText, allRestaurants);
          console.log(searchText);
          setFilteredRestaurants(data);
          setErrorMessage("");  
          if (data.length === 0) {
            setErrorMessage("No  matches restaurant found");
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(allRestaurants);
        }
    };


  // if allRestaurants is empty don't render restaurants cards(Early return)
  if (!allRestaurants) return null;

    console.log("render")
    return (
      
        <>
            <div className="search-container">
                <input 
                type="text"
                className="input-type"
                placeholder="Search a Restaurant"
                value= {searchText}
                onChange = {(e) => setSearchText(e.target.value)}
                />

                <button 
                className="search-btn"
                 // update the state of restaurants list
                onClick={() => { 
                  //user click on search button searchdata function is called
                  searchData(searchText, allRestaurants);
                }}
                >Search</button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}


    {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filterdRestaurants.map((restaurant) => {
            return (
              <Link
                to = {"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard  {...restaurant.data} />
              </Link>
            ); 
          })}
        </div>
      )}
      </>
    );
  };

  export default Body;