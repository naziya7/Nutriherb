// // Products
// import React from 'react';
// import './Products.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
// import 'swiper/swiper.min.css';

// export default function Products() {
//   SwiperCore.use([Autoplay]);
//   return (
//     <section className="products" id="products">
//       <h1 className="heading">
//         our
//         {' '}
//         <span>products</span>
//       </h1>
//       <div className="products-slider slider">
//         <div className="wrapper swiper-wrapper">
//           <Swiper
//             loop
//             spaceBetween={20}
//             autoplay={{ delay: 7500, disableOnInteraction: false }}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             centeredSlides
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: { slidesPerView: 3 },
//             }}
//             style={{ padding: '1rem' }}
//           >
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-1.png" alt="" />
//                 <h3>fresh orange</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-2.png" alt="" />
//                 <h3>fresh onion</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-3.png" alt="" />
//                 <h3>fresh meat</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-4.png" alt="" />
//                 <h3>fresh cabage</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>

//       <div className="products-slider">
//         <div className="wrapper swiper-wrapper">
//           <Swiper
//             loop
//             spaceBetween={20}
//             autoplay={{ delay: 7500, disableOnInteraction: false }}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             centeredSlides
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: { slidesPerView: 3 },
//             }}
//             style={{ padding: '1rem' }}
//           >
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-5.png" alt="" />
//                 <h3>fresh potato</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-6.png" alt="" />
//                 <h3>fresh avocado</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-7.png" alt="" />
//                 <h3>fresh carrot</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="box">
//                 <img src="image/product-8.png" alt="" />
//                 <h3>green lemon</h3>
//                 <div className="price">$4.99/ -- 10.99/-</div>
//                 <div className="stars">
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStar} />
//                   <FontAwesomeIcon icon={faStarHalfAlt} />
//                 </div>
//                 <button type="button" className="btn">
//                   add to cart
//                 </button>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import products from "./products.json"; // Import the JSON file

export default function Products() {
  SwiperCore.use([Autoplay]);

  // Helper function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
    }
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }

    return stars;
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      <div className="products-slider">
        <div className="wrapper">
          <Swiper
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 500, disableOnInteraction: false }}
            speed={900}
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="box">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className="price">{product.price}</div>
                  {/* <div className="stars">{renderStars(product.rating)}</div> */}
                  {/* <button type="button" className="btn">
                    add to cart
                  </button> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
}
