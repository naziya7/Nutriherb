// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
        Fresh picked,  
          {' '}
          <span>perfectly</span>
          {' '}
          preserved !
        </h3>
        <p>
        Our promise is simple: nutritious, delicious, and sustainably sourced dehydrated products that bring convenience and health to your table.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </section>
  );
}
