import Slider from 'react-slick';
import _ from 'underscore';

import { teams, banner } from '../../Careers/data';

function SlickSlider(props) {
  const temsSliderSettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const openPositionCount = _.countBy(props.data, function(currentObject) {
    return currentObject.categories.team;
  });

  teams.map((team) => {
    team['count'] = openPositionCount[team.name] || 0;
  });

  return (
    <div className="container">
      <Slider {...temsSliderSettings} className="values-slider">
        {teams.map((team, i) => {
          return (
            <div className={`bg-yellow card`} key={i}>
              <div className="text-white">
                <p>{team.count} Openings</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickSlider;
