import Link from 'next/link';
import _ from 'underscore';

import { departments, banner } from '../data.js';

function Departments(props) {
  const openPositionCount = _.countBy(props.data, function(currentObject) {
    return currentObject.categories.department;
  });

  departments.map((department) => {
    department['count'] = openPositionCount[department.label] || 0;
  });

  const sortedDepartments = _.sortBy(departments, 'count').reverse();

  return (
    <div className="container departments text-white">
      <h1 className="header">{banner.departmentData.title}</h1>
      <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
        {banner.departmentData.description}
      </p>
      <div className="card-columns text-left pt-5">
        <Link href="#">
          <a
            className={`card text-white highlight department ${sortedDepartments[0].value}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.77)), url(${sortedDepartments[0].bgImg})`,
            }}
          >
            <div className="card-body">
              <h2 className="head mb-0">{sortedDepartments[0].label}</h2>
              <p className="openings">{sortedDepartments[0].count} Openings</p>
            </div>
          </a>
        </Link>
        {sortedDepartments.map((department, i) => {
          if (i > 1)
            return (
              <Link href="#">
                <a
                  className={`card text-white`}
                  style={{ backgroundColor: `${department.bgColor}` }}
                >
                  <div className="card-body">
                    <h2 className="head mb-0">{department.label}</h2>
                    <p className="openings">{department.count} Openings</p>
                  </div>
                </a>
              </Link>
            );
        })}
        <Link href="#">
          <a
            className={`card text-white highlight department ${sortedDepartments[1].value}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.77)), url(${sortedDepartments[0].bgImg})`,
            }}
          >
            <div className="card-body">
              <h2 className="head mb-0">{sortedDepartments[1].label}</h2>
              <p className="openings">{sortedDepartments[1].count} Openings</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Departments;
