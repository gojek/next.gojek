import Slider from 'react-slick';
import _ from 'underscore';

import { teams, teamsSliderSettings, banner } from '../data.js';

function Teams(props) {
  const openPositionCount = _.countBy(props.data, function(currentObject) {
    return currentObject.categories.team;
  });

  teams.map((team) => {
    team['count'] = openPositionCount[team.name] || 0;
  });

  return (
    <div className="mb-5 mb-md-0">
      <div className="container locationPadding py-4 py-md-5 text-left px-5">
        <div className="d-md-none">
          <h1 className="header">{banner.teamData.xsTitle}</h1>
          <p className="mt-4 mb-4" style={{ maxWidth: '48rem' }}>
            {banner.teamData.xsDescription}
          </p>
        </div>
        <div className="d-none d-md-block">
          <h1 className="header pt-5">{banner.teamData.title}</h1>
          <p className="mt-4 mb-5" style={{ maxWidth: '48rem' }}>
            {banner.teamData.description}
          </p>
        </div>
      </div>
      <Slider {...teamsSliderSettings}>
        {teams.map((team, i) => {
          return (
            <a
              className={`teams text-left px-md-4 ${team.slug}`}
              key={i}
              href={`/teams/${team.link}`}
            >
              <div className="card-body text-white">
                <h2 className="head mb-2 pt-md-5">{team.name}</h2>
                <p className="openings">{team.count} Openings</p>
              </div>
            </a>
          );
        })}
      </Slider>
    </div>
  );
}

export default Teams;
