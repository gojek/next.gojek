import Slider from 'react-slick';
import { departments } from './data';

function HomeSlider(props) {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
  };
  return (
    <Slider
      {...settings}
      // customPaging={(i) => {
      //   return (
      //     <a className="dot" style={{ borderColor: departments[i].borderColor, color: '#000' }}>
      //       {departments[i].name}
      //     </a>
      //   );
      // }}
      // responsive={[
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       dots: false,
      //     },
      //   },
      // ]}
      // beforeChange={(oldSlide, nextSlide) => {
      //   $('#products')
      //     .removeClass()
      //     .addClass('full-height d-flex align-items-center ' + departments[nextSlide].bgClass);
      // }}
    >
      {departments.map((department, i) => (
        <div key={i}>
          <div className="card shadow mb-5 mx-3">
            <div className="card shadowCard" />
            <h5 className={`card-title subhead my-4 ${department.class}`}>{department.name}</h5>
            <div className="card-body mx-auto partner-logos d-flex justify-content-center flex-wrap">
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
              <img
                src="/img/logo-horizontal.svg"
                alt="Logo placeholder"
                className="img-fluid logo"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HomeSlider;
