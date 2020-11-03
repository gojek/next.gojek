import { useState, useEffect } from 'react';

import { departments } from '../data';
import Slider from 'react-slick';
import Slide from './slide';

function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '100px',
    afterChange: (current) => setActiveProduct(current),
  };

  return (
    <div>
      <div className="container">
        <div className="row pb-5">
          <h1 className="heading-sm w-75 mx-4 pb-5">
            We have 20+ products and do over 7 million orders a day across
            <span className={`${activeProduct === 0 ? 'text-green' : 'text-white'}`}>
              Transport &amp; Logistics
            </span>
            ,{' '}
            <span className={`${activeProduct === 2 ? 'text-orange' : 'text-white'}`}>
              Food &amp; Shopping
            </span>
            ,{' '}
            <span className={`${activeProduct === 1 ? 'text-blue' : 'text-white'}`}>Payments</span>,{' '}
            <span className={`${activeProduct === 5 ? 'text-yellow-light' : 'text-white'}`}>
              Business and Lifestyle
            </span>{' '}
            .
          </h1>
        </div>
      </div>
      <Slider {...settings}>
        {departments.map((data, i) => (
          <Slide data={data} activeProduct={activeProduct} key={i} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
