import { useState, useEffect } from 'react';
import Head from 'next/head';
import Select, { components } from 'react-select';
import fetch from 'isomorphic-unfetch';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
import JobCard from '~/../../comps/Careers/jobCard';

function CareersPage(props) {
  const [departmentList, setDepartmentList] = useState([]);
  const [department, setDepartment] = useState(null);
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState(null);
  const [parentJobList, setParentJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [departmentCountArray, setDepartmentCountArray] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [changed, setChanged] = useState(false);
  const [maxJobs, setMaxJobs] = useState(10);

  useEffect(() => {
    console.log('careers props', props);
    let departmentJson = [],
      departmentArray = [],
      departmentCountArray = [],
      departmentCount = [],
      locationJson = [],
      locationArray = [],
      parentArray = [];

    props.data.map((job, i) => {
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
        locationJson.push({ label: location, value: location });
      }
      parentArray.push({
        title: job.text,
        department: department,
        location: location,
        id: job.id,
      });
    });
    // to calculate openings in each department
    departmentArray.map((dep) => {
      let openings = departmentCountArray.filter(function(value) {
        return value === dep;
      }).length;
      departmentJson.push({ label: dep, value: `${dep} (${openings})` });
      departmentCount.push({
        department: dep,
        count: openings,
      });
    });
    departmentCount.sort(function(a, b) {
      return a.count - b.count;
    });
    departmentCount.reverse();
    console.log('count depart', departmentCount);
    setDepartmentList(departmentJson);
    setLocationList(locationJson);
    setParentJobList(parentArray);
    setFilteredJobList(parentArray);
    setDepartmentCountArray(departmentCount);
    setChanged(true);
  }, []);

  //   filtering data
  useEffect(() => {
    console.log('fitering', searchText);
    let keyword = searchText.trim();
    if (department == null && location == null && keyword == '' && changed) {
      setFilteredJobList(parentJobList);
    } else if (changed) {
      let departmentFilters = [],
        locationFilters = [],
        filteredArray = [];
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

  // function to apply department filter
  const selectDepartment = (index) => {
    setLocation(null);
    setSearchText('');
    setDepartment([
      {
        label: departmentCountArray[index].department,
        value: `${departmentCountArray[index].department} (${departmentCountArray[index].count})`,
      },
    ]);
    var elmnt = document.getElementById('filters');
    elmnt.scrollIntoView();
  };

  const Option = (props) => {
    return (
      <div>
        {' '}
        <components.Option {...props}>
          {' '}
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
            style={{ display: 'inline' }}
          />{' '}
          <label style={{ display: 'inline' }}>{props.value}</label>{' '}
        </components.Option>{' '}
      </div>
    );
  };

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Careers</title>
      </Head>
      <Navbar bg="#f7ce55" careers />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <section id="banner" className=" full-height py-5 d-flex align-items-end">
        <div className="container">
          <div className="row align-items-end pb-0 pb-md-5">
            <div className="col-md-5">
              <img src={bannerImage} className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
            <div className="col-md-7">
              <h1 className="banner-head">
                We give you <br /> leverage to create <br /> impact at scale.
              </h1>
              <p className="py-4" id="filters">
                Join a company that strives to support you. Not just 'your best work', but all of
                you.
              </p>
            </div>
          </div>

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
              <div className="col-md-6 col-lg-3 py-3 py-lg-0">
                <Select
                  components={{ Option }}
                  closeMenuOnSelect={false}
                  classNamePrefix="select"
                  value={department}
                  isSearchable={true}
                  name="Department"
                  placeholder="Department"
                  options={departmentList}
                  isMulti
                  isClearable={false}
                  onChange={(value) => {
                    setDepartment(value);
                    console.log('department value', value);
                  }}
                />
              </div>
              <div className="col-md-6 col-lg-3 py-3 py-lg-0">
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

              <div className="col-12 pt-5 d-flex justify-content-between">
                <p>
                  <strong>{filteredJobList.length} Opportunities</strong> found across{' '}
                  <strong>
                    {department ? department.length : departmentList.length} Departments
                  </strong>{' '}
                  and <strong>{location ? location.length : locationList.length} Locations</strong>
                </p>
                <a href="#" className="text-green link">
                  View all jobs
                  <i
                    className="fa fa-arrow-right ml-2"
                    style={{ fontSize: '16px', lineHeight: 'normal' }}
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* jobs list section */}
      <section id="job-list">
        <div className="container mb-5">
          <div className="listings bg-white py-5 px-2 px-md-5" style={{ borderRadius: '3rem' }}>
            {parentJobList.length == 0 ? (
              <p>
                We are currently not hiring, please check back later <br />
                Thank you
              </p>
            ) : filteredJobList.length == 0 ? (
              <p>
                No results found <br /> Try changing the filter or reset all filters
              </p>
            ) : (
              <div>
                <h1 className="header mb-4" style={{ fontSize: '2rem' }}>
                  {location == null && department == null && searchText == ''
                    ? 'Recent Open Positions'
                    : 'Search results...'}
                </h1>
                <div className="job">
                  <table className="table table-borderless">
                    <thead>
                      <tr className="text-green-light tableHeading">
                        <th scope="col">Job Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Location</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredJobList.map((job, i) => {
                        if (i < maxJobs - 2) return <JobCard data={job} key={i} />;
                      })}
                    </tbody>
                  </table>
                  <div className="text-center mt-5">
                    {filteredJobList.length > maxJobs && (
                      <span
                        className="text-green-light font-weight-bold mx-auto view-jobs clearIcon"
                        onClick={() => setMaxJobs(maxJobs + 10)}
                      >
                        View all jobs
                        <i className="fas fa-long-arrow-alt-right align-middle"></i>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* category section */}
      <section
        id="departments"
        className={`bg-black text-white full-height py-0 py-md-5 ${
          parentJobList.length == 0 ? 'd-none' : ''
        }`}
      >
        <div className="container departments">
          <h1 className="header">Choose where you belong</h1>
          <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="card-columns text-left pt-5">
            {departmentCountArray.map((department, i) => {
              if (i < 6 && i != 1)
                return (
                  <div
                    className={`card ${i == 0 ? 'highlight ' : ''}${`department${i}`}`}
                    onClick={() => {
                      selectDepartment(i);
                    }}
                  >
                    <div className="card-body">
                      <h2 className="header">{departmentCountArray[i].department}</h2>
                      <p className="sub-head">{departmentCountArray[i].count} Openings</p>
                    </div>
                  </div>
                );
            })}
            {departmentCountArray.length > 1 && (
              <div
                className="card highlight"
                style={{ backgroundColor: '#32ebe1' }}
                onClick={() => {
                  selectDepartment(1);
                }}
              >
                <div className="card-body">
                  <h2 className="header">{departmentCountArray[1].department}</h2>
                  <p className="sub-head">{departmentCountArray[1].count} Openings</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location section */}
      <section id="locations" className="full-height d-flex align-items-center py-5">
        <div className="container locationPadding">
          <h1 className="header">Our Locations</h1>
          <p className="mt-4 mb-5" style={{ maxWidth: '48rem' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="row">
            <div className="col-md-6">
              <div className="card my-4 mx-1"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4 mx-1"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4 mx-1"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4 mx-1"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// to fetch the jobs json
export async function getServerSideProps(ctx) {
  const apiUrl = 'https://api.lever.co/v0/postings/gojek?mode=json';

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return { props: { data } };
    } else {
      return await { props: { data: [] } };
    }
  } catch (error) {
    // Network error
    return { props: { data: [] } };
  }
}

export default CareersPage;
