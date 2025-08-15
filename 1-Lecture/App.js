// config driving ui
// ui changes like offer on website dependes on the location or the can change the ui with the help of config(backend data) data 

// config driving ui:- our website is controlled with the data backend data (api data)


import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(first)


// const root = ReactDOM.createRoot(document.getElementById('root')) ;

const Header = () => {
    return (
        <div
            className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s" />
            </div>

            <div className="navitems" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = (props) => {

    const {cuisine, resName} = props
    return (
        <div
            className="res-card"
            style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/b8eda9a1-a975-4a61-9fcc-790e6871e673_10590.JPG"
                alt="res-logo"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3 starts</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const resturant =  [
                  {
                    "info": {
                      "id": "72821",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/1f9d675e-7e2e-4a7a-a494-6bdf23af4853_72821.jpg",
                      "locality": "Dodda Kannali",
                      "areaName": "Kaikondrahalli",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "53K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 06:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-dodda-kannali-kaikondrahalli-rest72821",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "618083",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "d3pgrav1whn3gzcvy5qk",
                      "locality": "Kadubisanahalli",
                      "areaName": "Kadubeesanahalli",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5.3K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 03:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.4",
                          "ratingCount": "14"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-kadubisanahalli-kadubeesanahalli-rest618083",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10590",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/b8eda9a1-a975-4a61-9fcc-790e6871e673_10590.JPG",
                      "locality": "Bellandur",
                      "areaName": "Bellandur",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "721",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 03:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "6.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-bellandur-rest10590",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "551489",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/f03abe88-560a-42f8-9178-503f5644d93a_551489.jpg",
                      "locality": "Kaverappa Layout",
                      "areaName": "Kadubeesanahalli",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3818",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5.1K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 00:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/bakingo-kaverappa-layout-kadubeesanahalli-rest551489",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "339080",
                      "name": "Starbucks Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/13/6f76c5a7-0057-4c5b-b9fa-cfa5f8a0020b_339080.jpg",
                      "locality": "Bellandur",
                      "areaName": "Bellandur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.4,
                      "parentId": "195515",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "2.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-bellandur-rest339080",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "825649",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/f4eefd9c-269a-4c82-a782-d0a0c7267768_825649.JPG",
                      "locality": "Bellandur",
                      "areaName": "Eco World",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "1040",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-bellandur-eco-world-rest825649",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23690",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/d61e9419-2ab9-4b16-93f8-ba3178a0fc17_23690.jpg",
                      "locality": "ORR Central Mall",
                      "areaName": "Bellandur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "68K+",
                      "sla": {
                        "deliveryTime": 12,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 06:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20RX%20listing%2018px.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20RX%20listing%2018px.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-orr-central-mall-bellandur-rest23690",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23825",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/b293393a-fe31-4b8f-9a43-165c73df4d80_23825.JPG",
                      "locality": "Central Mall",
                      "areaName": "Bellandur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹55"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-central-mall-bellandur-rest23825",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "25793",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/358815e6-41ec-447b-bf13-fc9c5ff78d73_25793.JPG",
                      "locality": "KVR layout",
                      "areaName": "Bellandur",
                      "costForTwo": "₹550 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "18K+",
                      "sla": {
                        "deliveryTime": 12,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-kvr-layout-bellandur-rest25793",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263484",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263484.JPG",
                      "locality": "Bellandur",
                      "areaName": "Bellandur",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "Chaat",
                        "Snacks",
                        "Bakery",
                        "Street Food",
                        "healthy",
                        "Home Food",
                        "Maharashtrian",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "281782",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "4.7K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹84"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "589"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-bellandur-rest263484",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10829",
                      "name": "California Burrito",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/e34bef6b-77b4-42ee-af99-3aa57c759535_10829.jpg",
                      "locality": "EcoWorld",
                      "areaName": "Bellandur",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Mexican",
                        "American",
                        "Salads",
                        "Continental",
                        "Keto",
                        "Healthy Food",
                        "Beverages",
                        "Snacks",
                        "Desserts",
                        "Fast Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "432183",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/california-burrito-ecoworld-bellandur-rest10829",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "81645",
                      "name": "Samosa Party",
                      "cloudinaryImageId": "iqxbbmgdtch9u09wxhng",
                      "locality": "Bellandur",
                      "areaName": "Bellandur",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Chaat",
                        "Street Food",
                        "Sweets",
                        "Desserts",
                        "Punjabi",
                        "Bakery"
                      ],
                      "avgRating": 4.5,
                      "parentId": "6364",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Snacks.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.6",
                          "ratingCount": "25"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/samosa-party-bellandur-rest81645",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "692398",
                      "name": "Taco Bell",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/bfc773bd-baf2-413c-8a16-253211bea6da_692398.JPG",
                      "locality": "RMZ Ecoworld",
                      "areaName": "Mahadevapura",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Mexican",
                        "Fast Food",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "1557",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.8K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹30"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/taco-bell-rmz-ecoworld-mahadevapura-rest692398",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "382646",
                      "name": "Wendy's Burgers",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/8bda89fb-63ed-4d00-965d-50dfd2141f42_382646.JPG",
                      "locality": "Outer Ring Rd",
                      "areaName": "Kadubisanhalli FC",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "972",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.8K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹55"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-outer-ring-rd-kadubisanhalli-fc-rest382646",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "231485",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/b861a580-dc11-4a5f-9a75-e9879cfad7a5_231485.jpg",
                      "locality": "Outer Ring Road",
                      "areaName": "Bellandur Sarjapur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5.6K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-outer-ring-road-bellandur-sarjapur-rest231485",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "88946",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/b8a4e510-3c54-4623-bd35-d6c1fdcc4203_88946.JPG",
                      "locality": "doddamma temple",
                      "areaName": "Bellandur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "21809",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "6.9K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹88"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-doddamma-temple-bellandur-rest88946",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "579803",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/a1d5d4f0-84b9-4ced-a5e2-e13f23ed9ff4_579803.jpg",
                      "locality": "Elegance Opal Apartment",
                      "areaName": "Bellandur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.5K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-02 01:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-elegance-opal-apartment-bellandur-rest579803",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "88953",
                      "name": "Oven Story Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/ce437ca0-f750-410f-8a63-77bb42762da9_88953.jpg",
                      "locality": "doddamma temple",
                      "areaName": "Bellandur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3534",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:59:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹77"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/oven-story-pizza-doddamma-temple-bellandur-rest88953",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "725077",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/dcb2f260-c62d-4c32-93ba-9961181845bf_725077.jpg",
                      "locality": "Jupiter Block",
                      "areaName": "Prestige Tech Park",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "fastfood",
                        "Asian",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "1776",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "897",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-08 00:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wow-momo-jupiter-block-prestige-tech-park-rest725077",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "48220",
                      "name": "Kanti Sweets",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/5caf865c-4842-48fa-b155-f93478373943_48220.jpg",
                      "locality": "Bellandur Main Rd",
                      "areaName": "Bellandur New",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Sweets"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "4700",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "9.8K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-01 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7128d60a-9c3a-4afe-a4c3-a95162670a6a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-bellandur-main-rd-bellandur-new-rest48220",
                      "type": "WEBLINK"
                    }
                  }
                ]

const Body = () => {
    return (
        <div
            className="body">
            <div
                className="search"
            >Search</div>
            <div
                className="res-container">
                <RestaurantCard resName = "Kfc" cuisine = "Burger, Fast-Food" />
                <RestaurantCard resName = "Meghna biryani" cuisine = "Indian, Asian" />
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>

            <Header />
            <Body />
        </div>
    )
}

root.render(<AppLayout />)

