import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Select, { components } from 'react-select';
import Search from './search';

import JobsTable from '~/../../comps/Careers/jobsTable';
const searchData = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'people-and-culture', label: 'People and Culture' },
  { value: 'program-management', label: 'Program Management' },
  { value: 'product', label: 'Product' },
  { value: 'science', label: 'Science' },
];

function JobsList(props) {
  const router = useRouter();
  const [departmentList, setDepartmentList] = useState([]);
  const [department, setDepartment] = useState(null);
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState(null);
  const [parentJobList, setParentJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [changed, setChanged] = useState(false);
  const [maxJobs, setMaxJobs] = useState(10);

  useEffect(() => {
    const CareersData = [
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Engineering', location: 'Gurugram' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Design', location: 'Bangalore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Engineering', location: 'Bangalore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Product', location: 'Jakarta' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Engineering', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'full stack developer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Programm Management', location: 'Singapore' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
      {
        id: 1,
        text: 'Quality Engineer',
        categories: { department: 'Science', location: 'Bangkok' },
      },
    ];

    const CarseersData = props.data;
    let departmentJson = [],
      departmentArray = [
        'Engineering',
        'Design',
        'People and Culture',
        'Programm Management',
        'Product',
        'Science',
      ],
      departmentCountArray = [],
      departmentCount = [],
      locationJson = [],
      locationArray = ['Bangalore', 'Gurugram', 'Jakarta', 'Singapore', 'Bangkok', 'Vietnam'],
      parentArray = [];

    CareersData.map((job, i) => {
      let { department } = job.categories;
      let { location } = job.categories;
      //   to add unique department to dropdown
      if (departmentArray.indexOf(department) == -1 && department != null) {
        departmentArray.push(department);
      }
      department != null && departmentCountArray.push(department);

      //   to add unique location to dropdown
      if (locationArray.indexOf(location) == -1 && location != null) {
        locationArray.push(location);
      }

      // to check the department name for department page
      if ((props.departmentID && department == props.departmentID) || !props.departmentID) {
        parentArray.push({
          title: job.text,
          department: department,
          location: location,
          id: job.id,
        });
      }
    });

    // to calculate openings in each department
    departmentArray.map((dep) => {
      let openings = departmentCountArray.filter(function(value) {
        return value === dep;
      }).length;
      departmentCount.push({
        department: dep,
        count: openings,
      });
    });

    // to sort department according to number of openings
    departmentCount.sort(function(a, b) {
      return a.count - b.count;
    });
    departmentCount.reverse();
    console.log('count depart', departmentCount);
    props.setDepartmentCount && props.setDepartmentCount(departmentCount);

    // convert location array to dropdown data
    locationArray.map((location, i) => {
      locationJson.push({ label: location, value: location });
    });

    // convert sorted department array to dropdown data
    departmentCount.map((dep, i) => {
      departmentJson.push({ label: dep.department, value: `${dep.department} (${dep.count})` });
    });

    setChanged(true);
    setDepartmentList(departmentJson);
    setLocationList(locationJson);
    setParentJobList(parentArray);
    setFilteredJobList(parentArray);

    // analyse query params
    if (props.department) {
      let filterDepartments = [];
      departmentCount.map((dep, i) => {
        console.log('Dep', dep);
        props.department.indexOf(dep.department) > -1 &&
          filterDepartments.push({
            label: dep.department,
            value: `${dep.department} (${dep.count})`,
          });
      });
      setDepartment(filterDepartments);
    }
    if (props.location) {
      let filterLocation = [];
      props.location.map((location, i) => {
        filterLocation.push({
          label: location,
          value: location,
        });
      });
      setLocation(filterLocation);
    }
    props.text && setSearchText(props.text);
  }, []);

  //   filtering data
  useEffect(() => {
    let keyword = searchText.trim(),
      departmentFilters = [],
      locationFilters = [],
      filteredArray = [];
    if (department == null && location == null && keyword == '' && changed) {
      setFilteredJobList(parentJobList);
      !props.noParams && Router.replace(router.route);
    } else if (changed) {
      console.log('changed', departmentFilters);
      department != null
        ? department.map((filter) => {
            departmentFilters.push(filter.label);
          })
        : departmentList.map((filter) => {
            departmentFilters.push(filter.label);
          });
      location != null
        ? location.map((filter) => {
            locationFilters.push(filter.label);
          })
        : locationList.map((filter) => {
            locationFilters.push(filter.label);
          });
      parentJobList.map((job) => {
        let { department } = job,
          { location } = job,
          { title } = job;
        if (
          departmentFilters.indexOf(department) !== -1 &&
          locationFilters.indexOf(location) !== -1
        ) {
          if (keyword == '' || title.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) {
            filteredArray.push({
              title: title,
              department: department,
              location: location,
              id: job.id,
            });
          }
        }
      });
      setFilteredJobList(filteredArray);
      // change query params
      !props.noParams &&
        Router.replace({
          pathname: router.route,
          query: {
            ...(location != null && { l: locationFilters }),
            ...(department != null && { d: departmentFilters }),
            ...(keyword && { q: keyword }),
          },
        });
    }
  }, [location, department, searchText]);

  //   function to remove the filter
  const removeFilter = (type, value) => {
    let changedValue = [];
    if (type == 'department') {
      department.map((dep) => {
        dep.value != value && changedValue.push(dep);
      });
      setDepartment(changedValue.length > 0 ? changedValue : null);
    } else if (type == 'location') {
      location.map((loc) => {
        loc.value != value && changedValue.push(loc);
      });
      setLocation(changedValue.length > 0 ? changedValue : null);
    } else if (type == 'reset') {
      setDepartment(null);
      setLocation(null);
      setSearchText('');
    }
  };

  const routeToAllJobs = () => {
    let query = router.query;
    Router.push({
      pathname: '/careers/all-open-positions',
      query: query,
    });
  };

  const handleChange = (value) => {
    setDepartment(value);
  };

  return (
    <div>
      <form className="pt-0 pt-md-5">
        <div className="row">
          <div className="col-lg-6 py-3 py-md-0">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="&#xF002;  Keyword Search"
              className="form-control rounded-pill shadow fa"
            />
          </div>
          {!props.hideDepartments && ( // to avoid displaying department filter in department page
            <div className="col-md-6 col-lg-3 py-3 py-lg-0">
              <Search onChange={handleChange} options={searchData} />
            </div>
          )}
          <div
            className={`py-3 py-lg-0 ${!props.hideDepartments ? 'col-lg-3 col-md-6' : 'col-lg-6'}`}
          >
            <Select
              components={{ Option }}
              closeMenuOnSelect={false}
              classNamePrefix="select"
              value={location}
              isSearchable={true}
              name="Location"
              isMulti
              isClearable={false}
              placeholder="Location"
              options={locationList}
              onChange={(value) => {
                setLocation(value);
                console.log('location value', value);
              }}
            />
          </div>

          {/* to display filters applied */}
          {(department !== null || location !== null) && (
            <div className="col-12 pt-5 d-flex justify-content-start align-items-center flex-wrap">
              <span className="mt-1">Filters : </span>
              {department &&
                department.map((department, i) => {
                  return (
                    <span className="filter-badge badge p-3 mx-2 mt-1" key={i}>
                      {department.value}
                      <i
                        className="fa fa-times ml-2 clearIcon"
                        style={{ lineHeight: 'normal' }}
                        onClick={() => {
                          removeFilter('department', department.value);
                        }}
                      />
                    </span>
                  );
                })}
              {location &&
                location.map((location, i) => {
                  return (
                    <span className="filter-badge badge p-3 mx-2" key={1}>
                      {location.value}
                      <i
                        className="fa fa-times ml-2 clearIcon"
                        style={{ lineHeight: 'normal' }}
                        onClick={() => {
                          removeFilter('location', location.value);
                        }}
                      />
                    </span>
                  );
                })}
              <span
                onClick={() => {
                  removeFilter('reset', 0);
                }}
                className="clearIcon"
              >
                <u>Clear all filters</u>
              </span>
            </div>
          )}

          {parentJobList.length > 0 && (
            <div className="col-12 pt-5 d-flex justify-content-between">
              <p>
                <strong>{filteredJobList.length} Opportunities</strong> found across{' '}
                {!props.hideDepartments && (
                  <strong>
                    {department ? department.length : departmentList.length} Departments and
                  </strong>
                )}{' '}
                <strong>{location ? location.length : locationList.length} Locations</strong>
              </p>
              {props.careers && (
                <p href="#" className="text-green link pointer" onClick={() => routeToAllJobs()}>
                  View all jobs
                  <i
                    className="fa fa-arrow-right ml-2"
                    style={{ fontSize: '16px', lineHeight: 'normal' }}
                  />
                </p>
              )}
            </div>
          )}
        </div>
      </form>

      {/* job list section */}
      <div id="job-list">
        <div className="container my-5">
          <div className="listings bg-white py-5 px-2 px-md-5" style={{ borderRadius: '3rem' }}>
            {parentJobList.length == 0 ? (
              <p className="text-center" style={{ fontSize: '1.5rem' }}>
                Currently we don't have any openings for you, please check back later. Thanks
              </p>
            ) : filteredJobList.length == 0 ? (
              <p className="text-center" style={{ fontSize: '1.5rem' }}>
                No results found. Try changing the filter or reset all filters
              </p>
            ) : (
              <JobsTable
                jobs={filteredJobList}
                filterApplied={location != null || department != null || searchText != ''}
                careers={props.careers}
                routeToAllJobs={() => routeToAllJobs()}
              />
              // <div>
              //   <h1 className="header mb-4" style={{ fontSize: '2rem' }}>
              //     {location == null && department == null && searchText == ''
              //       ? 'Recent Open Positions'
              //       : 'Search results...'}
              //   </h1>
              //   <div className="job">
              //     <table className="table table-borderless">
              //       <thead>
              //         <tr className="text-green-light tableHeading">
              //           <th scope="col">Job Title</th>
              //           <th scope="col">Department</th>
              //           <th scope="col">Location</th>
              //           <th scope="col"></th>
              //         </tr>
              //       </thead>
              //       <tbody style={{ minHeight: '40vh' }}>
              //         {filteredJobList.map((job, i) => {
              //           if (i < maxJobs) return <JobCard data={job} key={i} />;
              //         })}
              //       </tbody>
              //     </table>
              //     <div className="text-center mt-5">
              //       {props.careers ? (
              //         <p className="text-green link pointer" onClick={() => routeToAllJobs()}>
              //           View all jobs
              //           <i
              //             className="fa fa-arrow-right ml-2"
              //             style={{ fontSize: '16px', lineHeight: 'normal' }}
              //           />
              //         </p>
              //       ) : filteredJobList.length > maxJobs ? (
              //         <span
              //           className="text-green-light font-weight-bold mx-auto view-jobs clearIcon"
              //           onClick={() => setMaxJobs(maxJobs + 10)}
              //         >
              //           View{' '}
              //           {filteredJobList.length - maxJobs > 10
              //             ? '10'
              //             : filteredJobList.length - maxJobs}{' '}
              //           more jobs
              //           <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
              //         </span>
              //       ) : (
              //         ''
              //       )}
              //     </div>
              //   </div>
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsList;
