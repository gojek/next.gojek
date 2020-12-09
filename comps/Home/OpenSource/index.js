import { opensourceProjects } from '../data';
import Slider from 'react-slick';
import Slide from './slide';
import Link from '../../Common/link';

const settings = {
  centerMode: false,
  infinite: true,
  slidesToShow: 1,
};

function Project(props) {
  return (
    <div className="container  py-5">
      <div className="row">
        <div className="col-md-4 my-auto">
          <h1 className="heading pb-5">We ❤️ open source. </h1>
          <p className="text-lead pb-5 pr-5">
            As firm believers in the pursuit of a collective quest for excellence, the tools we
            build are diligently open-sourced so others can learn from us, just as we have from the
            community.
          </p>

          <Link href="#" text="Check them out" color="text-green-light" />
        </div>
        <div className="col-md-8">
          <Slider {...settings}>
            <div
              className={`card text-white shadow`}
              style={{ backgroundImage: 'url(../img/home/open-source/heimdall.svg)' }}
            >
              <div className="card-body pb-0">
                <p>dd</p>
              </div>
            </div>

            <div
              className={`card text-white shadow`}
              style={{ backgroundImage: 'url(../img/home/open-source/heimdall.svg)' }}
            >
              <div className="card-body pb-0">
                <p>dd</p>
              </div>
            </div>

            <div
              className={`card text-white shadow`}
              style={{ backgroundImage: 'url(../img/home/open-source/heimdall.svg)' }}
            >
              <div className="card-body pb-0">
                <p>dd</p>
              </div>
            </div>

            <div
              className={`card text-white shadow`}
              style={{ backgroundImage: 'url(../img/home/open-source/heimdall.svg)' }}
            >
              <div className="card-body pb-0">
                <p>dd</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Project;
