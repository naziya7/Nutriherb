// // Features
// import React from 'react';
// import './Features.css';

// export default function Features() {
//   return (
//     <section className="features" id="features">
//       <div className="content">
//         <h1 className="heading">
//           our
//           {' '}
//           <span>features</span>
//         </h1>
//         <div className="box-container">
//           <div className="box">
//             <img src="image/feature-img-1.png" alt="" />
//             <h3>fresh and organic</h3>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
//             <a href="/" className="btn">read more</a>
//           </div>
//           <div className="box">
//             <img src="image/feature-img-2.png" alt="" />
//             <h3>free delivery</h3>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
//             <a href="/" className="btn">read more</a>
//           </div>
//           <div className="box">
//             <img src="image/feature-img-3.png" alt="" />
//             <h3>easy payment</h3>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
//             <a href="/" className="btn">read more</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import './Features.css';
import featuresData from './features.json';

export default function Features() {
  const [expanded, setExpanded] = useState(featuresData.map(() => false));

  const toggleDescription = (index) => {
    setExpanded((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our <span>features</span>
        </h1>
        <div className="box-container">
          {featuresData.map((feature, index) => {6
            const isExpanded = expanded[index];
            const descriptionToShow = isExpanded
              ? feature.description
              : feature.description.slice(0, 60) + (feature.description.length > 60 ? '...' : '');

            return (
              <div className={`box ${isExpanded ? 'expanded' : ''}`} key={index}>
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{descriptionToShow}</p>
                <div
                  className="btn"
                  onClick={() => toggleDescription(index)}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
                                                                                                 
