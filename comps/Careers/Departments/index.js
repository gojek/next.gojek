import _ from 'underscore';

import Card from './card';
import { departments, banner } from '../data.js';

function Departments(props) {
  // Get departmetnwise job count
  const openPositionCount = _.countBy(props.data, function(currentObject) {
    return currentObject.categories.department;
  });

  // Sort departments in desc order to get the highest openin gpositions
  // 1st and second highest open positions to be displayed in 1st and
  // last position in the grid. So sort the array and place the second
  // object at the end of the array
  departments.map((department) => {
    department['count'] = openPositionCount[department.label] || 0;
  });

  const sortedDepartments = _.sortBy(departments, 'count').reverse();

  sortedDepartments.push(sortedDepartments.splice(1, 1)[0]);

  return (
    <div className="container departments text-white">
      <h1 className="header">{banner.departmentData.title}</h1>
      <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
        {banner.departmentData.description}
      </p>
      <div className="card-columns text-left pt-5">
        {sortedDepartments.map((department, i) => {
          if (i !== 1)
            return (
              <Card
                slug={department.value}
                bg={i > 1 ? department.bgColor : department.bgImg}
                bgType={i > 1 ? 'color' : 'img'}
                label={department.label}
                openings={department.count}
                index={i}
              />
            );
        })}

        {/* NEEDS OPTIMIZATION */}
        <Card
          slug={sortedDepartments[1].value}
          bg={sortedDepartments[1].bgImg}
          bgType="img"
          label={sortedDepartments[1].label}
          openings={sortedDepartments[1].count}
          index={1}
        />
      </div>
    </div>
  );
}

export default Departments;
