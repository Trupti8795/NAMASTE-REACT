import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Config";
import { useState } from "react";


function filterData(searchText, restaurants) {
    const newFilterData =  restaurants.filter((restaurant ) => 
       restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
)
   return newFilterData;
}

//Build Body Component
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] =  useState(restaurantList);
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
                onClick={() => { setRestaurants(filterData(searchText, restaurants));}}
                >Search</button>
            </div>
            <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
        </>

    )
  }

  export default Body;