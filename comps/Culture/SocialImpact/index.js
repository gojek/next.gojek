import { socialImpact } from '../data';
import Slider from 'react-slick';
import Card from './card';

import styles from '../index.module.scss';

const settings = {
  infinite: true,
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

function Impact() {
  return (
    <div className="container pr-md-4 pr-lg-5 pr-xl-0">
      <div className="row">
        <div className="col-md-4 col-lg-3 my-auto">
          <h1 className={`${styles.heading} pb-4`}>{socialImpact.heading}</h1>
          <p className={`${styles.description}`}>{socialImpact.description}</p>
        </div>
        <div className="col-md-8 col-lg-7 offset-lg-2 opensource pt-2 pt-md-0">
          <Slider {...settings}>
            {socialImpact.data.map((data, i) => (
              <Card data={data} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Impact;
