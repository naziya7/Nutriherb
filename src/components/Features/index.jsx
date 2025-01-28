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
import React from 'react';
import './Features.css';
import featuresData from './features.json';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          {featuresData.map((feature, index) => (
            <div className="box" key={index}>
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href={feature.link} className="btn">read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}