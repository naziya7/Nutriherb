
// import React from "react";
// import "./Products.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";
// import "swiper/swiper.min.css";
// import products from "./products.json"; // Import the JSON file

// export default function Products() {
//   SwiperCore.use([Autoplay]);

//   // Helper function to render stars
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
//     }
//     if (halfStar) {
//       stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
//     }

//     return stars;
//   };

//   return (
//     <section className="products" id="products">
//       <h1 className="heading">
//         our <span>products</span>
//       </h1>
//       <div className="products-slider">
//         <div className="wrapper">
//           <Swiper
//             loop={true}
//             spaceBetween={20}
//             autoplay={{ delay: 500, disableOnInteraction: false }}
//             speed={900}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             centeredSlides
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             style={{ padding: "1rem" }}
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div className="box">
//                   <img src={product.image} alt={product.name} />
//                   <h3>{product.name}</h3>
//                   <div className="price">{product.price}</div>
//                   {/* <div className="stars">{renderStars(product.rating)}</div> */}
//                   {/* <button type="button" className="btn">
//                     add to cart
//                   </button> */}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
        
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import productsData from "./products.json"; // Import the JSON file

export default function Products() {
  SwiperCore.use([Autoplay]);

  // State to track selected category (default: show all)
  const [selectedCategory, setSelectedCategory] = useState("vegetables");

  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      {/* Category Selection Buttons */}
      {/* <div className="category-buttons">
        {Object.keys(productsData).map((category) => (
          <button 
            key={category} 
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="products-slider">
        <div className="wrapper">
          <Swiper
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            speed={600} // Reduced speed for faster transition
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: "1rem" }}
          >
            {productsData[selectedCategory].map((product) => (
              <SwiperSlide key={product.id}>
                <div className="box">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  {/* <div className="price">{product.price || "Price not available"}</div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
