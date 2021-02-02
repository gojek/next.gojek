import { useState } from 'react';
import Slider from 'react-slick';

import MobileSlider from './mobileSlide';
import Slide from './slide';
import styles from './index.module.scss';

import { departments } from '../data';

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
      <div className="container py-5">
        <h1 className={`pt-5 d-none d-md-block ${styles.heading}`}>
          We have 20+ products and do over 7 million orders a day across{' '}
          <span className={`${activeProduct === 0 ? 'text-green-light' : 'text-white'}`}>
            Transport &amp; Logistics
          </span>
          ,{' '}
          <span className={`${activeProduct === 1 ? 'text-red' : 'text-white'}`}>
            Food &amp; Shopping
          </span>
          , <span className={`${activeProduct === 2 ? 'text-blue' : 'text-white'}`}>Payments</span>,{' '}
          <span className={`${activeProduct === 3 ? 'daily-needs' : 'text-white'}`}>
            Daily needs
          </span>
          ,{' '}
          <span className={`${activeProduct === 4 ? 'text-purple' : 'text-white'}`}>Business,</span>{' '}
          <span className={`${activeProduct === 5 ? 'text-pink-light' : 'text-white'}`}>
            News &amp; Entertainment
          </span>
          .
        </h1>
        <h1 className={`px-5 mx-auto pb-5 d-md-none text-center  ${styles.subHeading}`}>
          We have 20+ products and do <br />
          over 7 million orders a day
          <br /> across...
        </h1>
      </div>
      <div className="py-5 mb-5 d-none d-md-block gojek-products">
        <div className={`${styles.productWrapper}`}>
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
