import { IMG_CDN_URL } from "../Config";


//Restaurant card component: Image, name, ratings and cuisine 
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    avgRating,
    lastMileTravelString,
    costForTwoString
  }
) => {
  return (
    <div className="card">

      <div className="restro-pic">
        <img src= {IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restro-details">
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
      </div>
      <div className="food-details">
        <h4 style = {avgRating < 4 ? {backgroundColor: "red" }: {color: "white"}}><i className="fa-solid fa-star" />{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </div>

    </div>
  )
}

export default RestaurantCard;