// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

// import './Blogs.css';

// export default function Blogs() {
//   const blogsData = [
//     {
//       id: 1,
//       imgSrc: 'image/blog-1.jpg',
//       title: 'Fresh And Organic Vegetables And Fruits',
//       date: '1st May, 2021',
//       author: 'user',
//       shortDescription: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.',
//       fullDescription: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita. Quisquam, laudantium? Consequatur, ipsa! Repellendus, obcaecati!',
//     },
//     {
//       id: 2,
//       imgSrc: 'image/blog-2.jpg',
//       title: 'How to Grow Your Own Vegetables',
//       date: '5th May, 2021',
//       author: 'user',
//       shortDescription: 'Discover simple ways to grow vegetables at home.',
//       fullDescription: 'Discover simple ways to grow vegetables at home. Tips include soil preparation, sunlight needs, and pest control to maximize your yield.',
//     },
//     {
//       id: 3,
//       imgSrc: 'image/blog-3.jpg',
//       title: 'The Benefits of Organic Eating',
//       date: '10th May, 2021',
//       author: 'user',
//       shortDescription: 'Eating organic can greatly improve your overall health.',
//       fullDescription: 'Eating organic can greatly improve your overall health. Organic foods reduce exposure to harmful pesticides and promote sustainable farming.',
//     },
//   ];

//   return (
//     <section className="blogs" id="blogs">
//       <h1 className="heading">
//         our <span>blogs</span>
//       </h1>
//       <div className="box-container">
//         {blogsData.map((blog) => (
//           <BlogBox key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function BlogBox({ blog }) {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="box">
//       <img src={blog.imgSrc} alt={blog.title} />
//       <div className="content">
//         <div className="icons">
//           <a href="/">
//             <FontAwesomeIcon icon={faUser} /> by {blog.author}
//           </a>
//           <a href="/">
//             <FontAwesomeIcon icon={faCalendar} /> {blog.date}
//           </a>
//         </div>
//         <h3>{blog.title}</h3>
//         <p>
//           {showMore ? blog.fullDescription : blog.shortDescription}
//         </p>
//         <button className="btn" onClick={() => setShowMore(!showMore)}>
//           {showMore ? 'Read Less' : 'Read More'}
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import blogsData from './blogs.json'; // Import blogs JSON
import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>
      <div className="box-container">
        {blogsData.map((blog) => (
          <BlogBox key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

function BlogBox({ blog }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="box">
      <img src={blog.imgSrc} alt={blog.title} />
      <div className="content">
        <div className="icons">
          {/* <a href="/">
            <FontAwesomeIcon icon={faUser} /> by {blog.author}
          </a> */}
          <a href="/">
            <FontAwesomeIcon icon={faCalendar} /> {blog.date}
          </a>
        </div>
        <h3>{blog.title}</h3>
        <p>{showMore ? blog.fullDescription : blog.shortDescription}</p>
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
