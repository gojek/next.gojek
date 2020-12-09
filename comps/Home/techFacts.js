import { techFacts } from './data';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function TechFacts() {
  const facts = (xs) => {
    return techFacts.map((data, i) => (
      <div
        className="card text-white px-5 border-0 my-3 shadow mx-3 mx-md-0"
        style={{ backgroundColor: data.bgColor }}
        key={i}
      >
        <div className="card-body pb-0 pt-4">
          <div className="row">
            <div
              className={`col-md-6 align-self-center py-5 ${
                i % 2 == '0' ? 'order-first' : 'order-last'
              }`}
            >
              <h3 className="description heading-sm">{data.content}</h3>
            </div>
            <div className={`col-md-6 align-self-end`}>
              <img src={data.image} alt={data.content} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <div className="pt-5 d-none d-md-block">{facts(false)}</div>
      <div className="d-md-none">
        <Slider {...sliderSettings}>{facts(true)}</Slider>
      </div>
    </div>
  );
}

export default TechFacts;
