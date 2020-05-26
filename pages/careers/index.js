import { useState } from 'react';
import Select from 'react-select';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
import JobCard from '~/../../comps/Careers/jobCard';

function CareersPage(props) {
  const [departmentList, setDepartmentList] = useState([
    { label: 'department1', value: 1 },
    { label: 'department2', value: 2 },
    { label: 'department3', value: 3 },
    { label: 'department4', value: 4 },
    { label: 'department5', value: 5 },
  ]);
  const [department, setDepartment] = useState(null);
  const [locationList, setLocationList] = useState([
    { label: 'location1', value: 1 },
    { label: 'location2', value: 2 },
    { label: 'location3', value: 3 },
    { label: 'location4', value: 4 },
    { label: 'location5', value: 5 },
  ]);
  const [location, setLocation] = useState(null);
  return (
    <div className="text-center text-md-left">
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
              <p className="py-4">
                Join a company that strives to support you. Not just 'your best work', but all of
                you.
              </p>
            </div>
          </div>

          <form className="pt-0 pt-md-5">
            <div className="row">
              <div className="col-md-6 py-3 py-md-0">
                <input
                  type="text"
                  className="form-control rounded-pill shadow"
                  placeholder="Keyword Search"
                />
              </div>
              <div className="col-md-3 py-3 py-md-0">
                <Select
                  classNamePrefix="select"
                  value={department}
                  isSearchable={true}
                  name="Department"
                  className="form-control rounded-pill shadow"
                  placeholder="Department"
                  options={departmentList}
                  isMulti
                  onChange={(value) => {
                    setDepartment(value);
                    console.log('department value', value);
                  }}
                />
              </div>
              <div className="col-md-3 py-3 py-md-0">
                <Select
                  classNamePrefix="select"
                  value={location}
                  isSearchable={true}
                  name="Location"
                  isMulti
                  className="form-control rounded-pill shadow"
                  placeholder="Location"
                  options={locationList}
                  onChange={(value) => {
                    console.log('location value', value);
                  }}
                />
              </div>

              <div className="col pt-5 d-flex justify-content-between">
                <p>288 Opportunities found across 20 Departments and 8 Locations </p>
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
      <section className="test">
        <div className="container mb-5">
          <div
            className="listings bg-white shadow py-5 px-2 px-md-5"
            style={{ borderRadius: '3rem' }}
          >
            <h1 className="header mb-4" style={{ fontSize: '2rem' }}>
              Recent Open Positions
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
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                </tbody>
              </table>
              <div className="text-center mt-5">
                <a href="#" className="text-green-light font-weight-bold mx-auto view-jobs">
                  View all jobs
                  <i className="fas fa-long-arrow-alt-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* category section */}
      <section id="departments" className="bg-black text-white full-height py-0 py-md-5">
        <div className="container departments">
          <h1 className="header">Choose where you belong</h1>
          <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="card-columns text-left pt-5">
            <div className="card highlight bg-green-light">
              <div className="card-body">
                <h2 className="header">Engineering</h2>
                <p className="sub-head">114 Openings</p>
              </div>
            </div>

            <div className="card " style={{ backgroundColor: '#ff7f32' }}>
              <div className="card-body">
                <h2 className="header">Program Management</h2>
                <p className="sub-head">9 Openings</p>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: '#ff808b' }}>
              <div className="card-body">
                <h2 className="header">Product</h2>
                <p className="sub-head">23 Openings</p>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: '#7ccc6c' }}>
              <div className="card-body">
                <h2 className="header">Design</h2>
                <p className="sub-head">7 Openings</p>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: '#d48bc8' }}>
              <div className="card-body">
                <h2 className="header">People and Culture</h2>
                <p className="sub-head">9 Openings</p>
              </div>
            </div>

            <div className="card highlight" style={{ backgroundColor: '#32ebe1' }}>
              <div className="card-body">
                <h2 className="header">Science</h2>
                <p className="sub-head">41 Openings</p>
              </div>
            </div>
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
              <div className="card my-4"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4"></div>
            </div>
            <div className="col-md-6">
              <div className="card my-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
