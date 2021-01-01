import Card from './card';
import Link from '../../Common/link';
import Slider from 'react-slick';
import styles from './index.module.scss';

import { projects } from '../data';

const settings = {
  infinite: true,
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function Project(props) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 my-auto">
          <h1 className={`${styles.heading} pb-4`}>We ❤️ open source. </h1>
          <p className={`${styles.subHeading}`}>
            As firm believers in the pursuit of a collective quest for excellence, the tools we
            build are diligently open-sourced so others can learn from us, just as we have from the
            community.
          </p>

          <Link
            href="https://github.com/gojek"
            target="_blank"
            text="Check them out"
            color="text-green-light"
            icon="/img/right-arrow.svg"
          />
        </div>
        <div className="col-md-7 offset-md-1 opensource pt-2 pt-md-0">
          <Slider {...settings}>
            {projects.data.map((data, i) => (
              <Card data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Project;
