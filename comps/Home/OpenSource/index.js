import { opensourceProjects } from '../data';
import Slider from 'react-slick';
import Slide from './slide';

const settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
};

function Project(props) {
  return (
    <div className="container text-center open-source">
      <h1 className="head">Open Source</h1>
      <p className="pb-5 px-5">
        We encounter tough problems every day, and figure out how to tackle them by doing what we do
        best — building stuff. As firm believers in the pursuit of a collective quest for
        excellence, <strong>the tools we build are diligently open-sourced </strong> so others can
        learn from us, just as we have from the community.
      </p>
      <div id="opensource-carousel">
        <Slider {...settings}>
          {opensourceProjects.map((data) => (
            <Slide data={data} />
          ))}
        </Slider>
      </div>
      <a href="#" className="text-yellow link">
        Chek them out
        <i className="fa fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
}

export default Project;
