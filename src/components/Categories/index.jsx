/* eslint-disable */

// import React from "react";
// import "./Categories.css";
// import categories from "./categories.json"; // Import JSON data

// // Reusable Category Card Component
// const CategoryCard = ({ name, image, discount }) => {
//   return (
//     <div className="box">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <button type="button" className="btn">Check Now</button>
//     </div>
//   );
// };

// export default function Categories() {
//   return (
//     <section className="categories" id="categories">
//       <h1 className="heading">
//         products <span>categories</span>
//       </h1>
//       <div className="box-container">
//         {categories.map((category) => (
//           <CategoryCard
//             key={category.id}
//             name={category.name}
//             image={category.image}
//             discount={category.discount}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import './Categories.css';
import categories from './categories.json'; // Import JSON data
import productsData from '../Products/products.json'; // Import Products JSON

import backSvg from "./svg/back.svg"

const CategoryCard = ({ category, isFlipped, onFlip }) => {
  return (
    <div className={`box ${isFlipped ? 'flipped' : ''}`}>
      {!isFlipped ? (
        <>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          <p>{category.discount}</p>
          <button
            type="button"
            className="btn"
            onClick={() => onFlip(category.type)}
          >
            Check Now
          </button>
        </>
      ) : (
        <div className="products-list">
          <div className="categoryHeader">
            <button type="button" className="btn1" onClick={() => onFlip(null)}>
              <img src={backSvg}/> 
            </button>
            <h3>{category.name}</h3>
          </div>

          <ul className="categoryBox">
            {productsData[category.type]?.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Categories() {
  const [flippedCategory, setFlippedCategory] = useState(null);

  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products <span>categories</span>
      </h1>
      <div className="box-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isFlipped={flippedCategory === category.type}
            onFlip={setFlippedCategory}
          />
        ))}
      </div>
    </section>
  );
}
