import Slider from 'react-slick';
import Slide from './slide';
import MobileSlider from './mobileSlide';
import { milestones } from './data';

function Milestones() {

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="container-fluid px-0 milestones">
      <div className="d-none d-md-block desktop">
        <Slider {...settings}>
          {milestones.map((data, i) => (
            <Slide data={data} key={i} />
          ))}
        </Slider>
      </div>

      <div className="d-md-none p-5 mobile">
        <Slider {...settings}>
          {milestones.map((data, i) => (
            <MobileSlider data={data} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Milestones;
