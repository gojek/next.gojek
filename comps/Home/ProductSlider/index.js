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
    afterChange: (current) => setActiveProduct(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container pt-0 pt-md-5">
        <div className="row pb-md-5">
          <h1 className="heading-sm mx-4 pb-5 d-none d-md-block">
            We have 20+ products and do over 7 million orders a day across{' '}
            <span className={`${activeProduct === 0 ? 'text-green-light' : 'text-white'}`}>
              Transport &amp; Logistics
            </span>
            ,{' '}
            <span className={`${activeProduct === 1 ? 'text-red' : 'text-white'}`}>
              Food &amp; Shopping
            </span>
            ,{' '}
            <span className={`${activeProduct === 2 ? 'text-blue' : 'text-white'}`}>Payments</span>,{' '}
            <span className={`${activeProduct === 3 ? 'daily-needs' : 'text-white'}`}>
              Daily needs
            </span>
            ,{' '}
            <span className={`${activeProduct === 4 ? 'text-purple' : 'text-white'}`}>
              Business
            </span>{' '}
            and{' '}
            <span className={`${activeProduct === 5 ? 'text-pink-light' : 'text-white'}`}>
              Entertainment
            </span>
            .
          </h1>
          <h1 className="text-lead px-5 mx-auto pb-5 d-md-none text-center font-demi">
            We have 20+ products and do <br />
            over 7 million orders a day
            <br /> across...
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
