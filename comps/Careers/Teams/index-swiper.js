import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'underscore';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { teams, temsSliderSettings, banner } from '../data.js';

function Teams(props) {
  const openPositionCount = _.countBy(props.data, function(currentObject) {
    return currentObject.categories.team;
  });

  teams.map((team) => {
    team['count'] = openPositionCount[team.name] || 0;
  });

  return (
    <div>
      <div className="container py-5">
        <h1 className="header pt-4">{banner.teamData.title}</h1>
        <p className="mt-4 mb-5" style={{ maxWidth: '48rem' }}>
          {banner.teamData.description}
        </p>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 px-0 pb-5">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            // loop={true}
            navigation
          >
            {teams.map((team, i) => {
              return (
                <SwiperSlide className={`teams px-4 ${team.slug}`} key={i}>
                  <a className={`teams px-4 ${team.slug}`} key={i}>
                    <div className="card-body text-white">
                      <h2 className="head mb-2 pt-5">{team.name}</h2>
                      <p className="openings">{team.count} Openings</p>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Teams;
