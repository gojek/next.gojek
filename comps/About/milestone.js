import Slider from 'react-slick';
import Slide from './slide';
import MobileSlider from './mobileSlide';
import { milestones } from './data';

function Milestones() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1.1,
        },
      },
    ],
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

      <div className="d-md-none py-5 pl-5 pr-0 mobile bg-black">
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
