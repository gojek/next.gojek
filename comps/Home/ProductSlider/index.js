import { useState, useEffect } from 'react';

import { departments } from '../data';
import Slider from 'react-slick';
import Slide from './slide';
import MobileSlider from './mobileSlide';

function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    speed: '1000',
    afterChange: (current) => setActiveProduct(current),
  };

  return (
    <div>
      <div className="container pt-0 pt-md-5">
        <div className="row pb-md-5">
          <h1 className="heading-sm mx-4 pb-5 d-none d-md-block">
            We have 20+ products and do over 7 million orders a day
            <br />
            across{' '}
            <span className={`${activeProduct === 0 ? 'text-green-light' : 'text-white'}`}>
              Transport &amp; Logistics
            </span>
            ,{' '}
            <span className={`${activeProduct === 2 ? 'text-red' : 'text-white'}`}>
              Food &amp; Shopping
            </span>
            ,{' '}
            <span className={`${activeProduct === 1 ? 'text-blue' : 'text-white'}`}>Payments</span>,{' '}
            <span className={`${activeProduct === 4 ? 'daily-needs' : 'text-white'}`}>
              Daily needs
            </span>
            ,{' '}
            <span className={`${activeProduct === 5 ? 'text-purple' : 'text-white'}`}>
              Business
            </span>{' '}
            and{' '}
            <span className={`${activeProduct === 3 ? 'text-pink-light' : 'text-white'}`}>
              Lifestyle
            </span>{' '}
            .
          </h1>
          <h1 className="heading-sm px-5 pb-2 d-md-none text-center">
            We have 20+ products and do over 7 million orders a day across...
          </h1>
        </div>
      </div>
      <div className="d-none d-md-block container-fluid">
        <div className="product-wrapper">
          <Slider {...settings}>
            {departments.map((data, i) => (
              <Slide data={data} activeProduct={activeProduct} key={i} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="d-md-none px-4">
        {departments.map((data, i) => (
          <MobileSlider data={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
