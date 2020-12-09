import { projects } from '../data';
import Slider from 'react-slick';
import Slide from './slide';
import Link from '../../Common/link';
import Card from './card';

const settings = {
  infinite: true,
  slidesToShow: 1,
  dots: true,
  arrows: false,
};

function Project(props) {
  return (
    <div className="container py-5 projects">
      <div className="row">
        <div className="col-md-4 my-auto">
          <h1 className="heading pb-5">We ❤️ open source. </h1>
          <p className="text-lead pb-5 pr-5">
            As firm believers in the pursuit of a collective quest for excellence, the tools we
            build are diligently open-sourced so others can learn from us, just as we have from the
            community.
          </p>

          <Link
            href="https://github.com/gojek"
            target="_blank"
            text="Check them out"
            color="text-green-light"
          />
        </div>
        <div className="col-md-8 opensource">
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
