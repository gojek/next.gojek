import Slider from 'react-slick';
import _ from 'underscore';

import styles from '../index.module.scss';

import { teamsSliderSettings, values } from '../data';

function Values() {
  return (
    <div className="row pb-5">
      <div className="col-md-2"></div>
      <div className="col-md-10 px-0 pb-5">
        <Slider {...teamsSliderSettings}>
          {values.map((value, index) => {
            return (
              <div className="px-3" key={index}>
                <div className="d-flex slide">
                  <img
                    src={value.img}
                    className={`img-fluid ${styles.valuesThumbnail}`}
                    alt={value.alt}
                  />
                  <div className="align-self-center align-self-md-start">
                    <h5
                      className={`mt-0 font-weight-bold ${styles.valuesHeading}`}
                      dangerouslySetInnerHTML={{
                        __html: value.heading,
                      }}
                    ></h5>

                    <ul className="d-none d-md-block pl-3">
                      {value.content.map((content, i) => {
                        return <li key={i}>{content} </li>;
                      })}
                    </ul>
                  </div>
                </div>
                <ul className="d-md-none pt-4 pl-3">
                  {value.content.map((content, i) => {
                    return <li key={i}>{content} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Values;
