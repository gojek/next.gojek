import Slider from 'react-slick';
import _ from 'underscore';

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
      <div className="container locationPadding py-5">
        <h1 className="header pt-4">{banner.teamData.title}</h1>
        <p className="mt-4 mb-5" style={{ maxWidth: '48rem' }}>
          {banner.teamData.description}
        </p>
      </div>
      <Slider {...temsSliderSettings}>
        {teams.map((team, i) => {
          return (
            <a className={`teams px-4 ${team.slug}`} key={i} href="/teams">
              <div className="card-body text-white">
                <h2 className="head mb-2 pt-5">{team.name}</h2>
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
