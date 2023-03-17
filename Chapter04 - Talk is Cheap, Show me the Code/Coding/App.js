// # Chapter 04  - Talk is Cheap, show me the code

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
import foodverylogo from "./images/foodvery.svg"


// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// Title component is functional component
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


//Restaurant list in JSON for displaying dynamic restaurants
const restaurantList =  [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "211874",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "5012cb78-3473-42b4-b323-b0eba380e57e",
      "city": "204",
      "area": "Nadiad Locality",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "ysx8p598xb7t5h2pajoj",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "kwality-wall's-vadiwadi-vadiwadi",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "Opp swaminarayan mandir ,collage road nadiad",
      "locality": "Petlad Road",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6143362~p=1~eid=00000186-e104-4363-025f-8a7a00ec0144",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "211874",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "153492",
      "name": "New India Restaurant",
      "uuid": "113ee718-ae54-482c-9c51-aa7ae25040e2",
      "city": "204",
      "area": "Junaraopura",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "rbucumcmyiszfhderq1e",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 13,
      "minDeliveryTime": 13,
      "maxDeliveryTime": 13,
      "slaString": "13 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "new-india-restaurant-nadiad-locality-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "near nagar pilaka nadiad",
      "locality": "Shanti Nagar",
      "parentId": 146791,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "153492",
        "deliveryTime": 13,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 13,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "241688",
      "name": "Rabindra Nanking",
      "uuid": "129c28e9-1e49-42f1-8e38-a6403d12b3f3",
      "city": "204",
      "area": "Napad",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "c5eqbyoc0ebvgzhrvvln",
      "cuisines": [
        "Chinese",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "rabindra-nanking-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "OPP.D GOKUL VALLABHNAGAR AT NADIAD GUJARAT",
      "locality": "Vallabhnagar",
      "parentId": 164103,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "241688",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "406376",
      "name": "The Pizza King's",
      "uuid": "f473d0e3-c2d2-4d38-8137-b298a8aee310",
      "city": "204",
      "area": "Marida Road",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "o9sl9v32mhjyeywyzrec",
      "cuisines": [
        "Burgers",
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "the-pizza-kings-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "oPP gAYAKVAD gARRAJ,MARIDA rOAD At-ta-Nadiad nadiad H.o Nadiad Nadiad (kheda)Gujrat 387001",
      "locality": "Marida Road",
      "parentId": 212606,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6046257~p=4~eid=00000186-e104-4363-025f-8a7b00ec044f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "406376",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.7",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "624643",
      "name": "Manpasand Chinese Paubhaji & Pulav",
      "uuid": "7a6988e5-5ed7-4149-b965-68795ce1c457",
      "city": "204",
      "area": "Nadiad City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "bnvtkcnubsfewnamwzou",
      "cuisines": [
        "Chinese",
        "Street Food",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "manpasand-chinese-paubhaji-&-pulav-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "NR SANTRAM TEMPLE, OPEN AIR THEATER CORNER, AT-TA-NADIAD ,Nadiad H.O,Nadiad,NADIAD(KHEDA),Gujarat-387001",
      "locality": "Uttarsanda Road",
      "parentId": 371637,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "624643",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "185452",
      "name": "Ganga Gayatri Pavbhaji & Pulav",
      "uuid": "45a96c10-94a8-4754-8467-73b6d8741e0f",
      "city": "204",
      "area": "Shanti Nagar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "l2uo73hwd4td1ro1u7vs",
      "cuisines": [
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 0.6000000238418579,
      "slugs": {
        "restaurant": "ganga-gaytri-pavbhaji-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "Near sardar statue  Opp. Lovely paan. Near state bank rallway station. Nadiad 387001",
      "locality": "Pij Road",
      "parentId": 86072,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "185452",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "468778",
      "name": "The Cool Joint",
      "uuid": "018982f3-316f-496a-96d5-7f18ba54110a",
      "city": "204",
      "area": "College Road",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "cjmmyuxbcifj1qg1vns0",
      "cuisines": [
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "balkrishna-jaiswal-(-cool-joint-)-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "Suraj Plaza , Collage Road, Nadiad, Nadiad H.O, NADIAD(KHEDA), NADIAD(KHEDA), Gujarat - 387001",
      "locality": "Nairobi Colony",
      "parentId": 315345,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "20% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "20% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "20% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5960289~p=7~eid=00000186-e104-4363-025f-8a7c00ec0706",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "468778",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "177667",
      "name": "Suresh Nankin",
      "uuid": "133b51b0-1918-437d-89ec-7483786e8f07",
      "city": "204",
      "area": "Bhakti Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ec109q4tzq2bs7gswz75",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "suresh-nankin-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "shukhdi plase collage road vaniyawad carcal nadiad ",
      "locality": "Bhakti Nagar",
      "parentId": 197823,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "177667",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "558604",
      "name": "Navjivan Restaurant",
      "uuid": "aaf15c38-c5ea-490a-be68-b00c1c4dd36e",
      "city": "204",
      "area": "Nadiad City",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "fa8bee119f0bcc52bd63140aa45d5fe7",
      "cuisines": [
        "Chinese",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "navjivan-restaurant-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "Navjivan estaurant, Vaniyavad Circle, Nadiad",
      "locality": "Uttarsanda Road",
      "parentId": 144834,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "558604",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "153426",
      "name": "Shree Nathji Pav Bhaji",
      "uuid": "a9c82839-e23d-47d2-af69-c9c04ddd4628",
      "city": "204",
      "area": "Shanti Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "eb8kvrdnxnajfnxepgta",
      "cuisines": [
        "Fast Food",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 12000,
      "costForTwoString": "₹120 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "shree-nathji-paw-bhaji-nadiad-locality-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "santram road opp reymond showroom nadiad",
      "locality": "Santram Road",
      "parentId": 185209,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "153426",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "512969",
      "name": "Famous Pawbhaji Pulav Center",
      "uuid": "d488a60e-359e-4e03-a7db-73fa83473d15",
      "city": "204",
      "area": "Nadiad City",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "c1fujrathw8d0jc5irsy",
      "cuisines": [
        "Street Food",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 0.6000000238418579,
      "slugs": {
        "restaurant": "famous-pawbhaji-pulav-center-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "NEAR RAILWAY STATION AT -TA -NADIAD NADIAD",
      "locality": "Manek Chowk",
      "parentId": 307277,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "512969",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "522244",
      "name": "Jay Maharaj China Town",
      "uuid": "68f33522-00b8-4903-a6de-518844ffd1ee",
      "city": "204",
      "area": "Shanti Nagar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "x3qbmhvmhktsklm2ceu4",
      "cuisines": [
        "Indian",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "jay-maharaj-china-town-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "Nr. Railway Crossing, Petlad Road, At- Ta- Nadiad, Nadiad ( Kheda), Gujarat - 387002",
      "locality": "Petlad Road",
      "parentId": 311714,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "522244",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "600421",
      "name": "Hotel Manmohan",
      "uuid": "887557d6-976f-4c42-9a78-a468aa4628df",
      "city": "204",
      "area": "Nadiad City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "qbjj4rbc5bgae0nfbtai",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "hotel-manmohan-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "MVV4+WJM, Subhash Nagar, Nadiad, Gujarat 387002, India",
      "locality": "Nadiad City",
      "parentId": 100163,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "600421",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "153422",
      "name": "Shree Satyanarayan Ice Cream",
      "uuid": "fe4bedf8-0092-4da9-aa49-8a9f9b10c7e0",
      "city": "204",
      "area": "Shanti Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "lo0kuyfpqk6irgqpvphh",
      "cuisines": [
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 14000,
      "costForTwoString": "₹140 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "shree-satyanarayan-ice-cream-nadiad-locality-nadiad-nadiad",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "near bus stand ,nadiad",
      "locality": "Bus Stand Road",
      "parentId": 185623,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "153422",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "512970",
      "name": "Shree Gajanand Pavbhaji And Pulav",
      "uuid": "418170cf-3b5f-45b0-9bbf-e9ba92731c21",
      "city": "204",
      "area": "Nadiad City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "ki0grtymdmyzshxzyd3c",
      "cuisines": [
        "Street Food",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "shree-gajanand-pavbhaji-and-pulav-nadiad-city-nadiad-city",
        "city": "nadiad"
      },
      "cityState": "204",
      "address": "NEAR BLUE ROOM HOTEL BUS STAND NADIAD NADIAD",
      "locality": "Manek Chowk",
      "parentId": 306814,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free delivery",
        "shortDescriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "512970",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  }
];


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
        <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      </div>
      <div className="restro-details">
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
      </div>
      <div className="food-details">
        <h4><i class="fa-solid fa-star" />{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </div>

    </div>
  )
}

//Build Body Component
const Body = () => {
  return (
    <div className="restaurant-list">
     {
        restaurantList.map((restaurant) => {
          return <RestaurantCard  key={restaurant.data.id} {...restaurant.data}/>
        })
     }     
    </div>
  )
}

//Build Footer Component
const Footer = () => {
  <div className="footer">
    <h6>Copyright</h6>
  </div>
}

//Build a AppLayout component: Header, Body and Footer
const AppLayout = () => {
  return (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
  )
}


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout/>);
