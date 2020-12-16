import { socialImpact } from '../data';
import Slider from 'react-slick';
import Card from './card';

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

function Impact(props) {
  return (
    <div className="container py-5 social-impact pr-md-0">
      <div className="row">
        <div className="col-md-4 col-lg-3 my-auto">
          <h1 className="text-black pb-4">{socialImpact.heading}</h1>
          <p
            className="text-black"
            style={{ fontFamily: 'Maison Nueue Book', lineHeight: '1.6rem' }}
          >
            {socialImpact.description}
          </p>
        </div>
        <div className="col-md-8 col-lg-7 offset-lg-2 opensource pt-2 pt-md-0">
          <Slider {...settings}>
            {socialImpact.data.map((data, i) => (
              <Card data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Impact;
