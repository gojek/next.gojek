import { techFacts } from './data';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Scrollbar, A11y]);

function TechFacts() {
  return (
    <div>
      <div className="pt-5 d-none d-md-block">
        {techFacts.map((data, i) => (
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
        ))}
      </div>
      <div className="d-md-none mb-5">
        <Swiper spaceBetween={32} slidesPerView={1} navigation>
          {techFacts.map((data, i) => (
            <SwiperSlide>
              <div
                className="card text-white px-5 border-0 my-3 shadow mx-md-0"
                style={{ backgroundColor: data.bgColor }}
                key={i}
              >
                <div className="card-body pb-0 pt-4">
                  <div className="row">
                    <div className={`col-md-6 px-0 align-self-center py-5 text-center`}>
                      <h3 className="description text-lead font-demi">{data.content}</h3>
                    </div>
                    <div className={`col-md-6 px-0 align-self-end`}>
                      <img src={data.image} alt={data.content} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TechFacts;
