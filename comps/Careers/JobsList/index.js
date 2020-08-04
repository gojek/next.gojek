import React, { Component } from 'react';
import Search from './search';
import Banner from '../banner';
import { departments, locations } from '../data.js';

class JobsList extends Component {
  state = {
    data: this.props.data,
    filteredData: this.props.data,
    selectedDepartments: ['All'],
    selectedLocations: ['All'],
    keyword: '',
  };

  handleSearchChange = (value, name) => {
    const { data } = this.props;
    const { filteredData } = this.state;
    const filteredDataResults = (filteredData.length > 0 ? filteredData : data).filter(
      (array_el) => {
        switch (name) {
          case 'selectedDepartments':
            return value.length > 0 && array_el.categories.department === value[0].label;
          case 'keyword':
            return array_el.text.includes(value);

          case 'selectedLocations':
            return value.length > 0 && array_el.categories.location === value[0].label;
        }
      },
    );
    console.log('here', filteredDataResults);
    this.setState({
      filteredData: filteredDataResults,
    });
  };

  render() {
    const { filteredData } = this.state;
    const openPositions = filteredData.length > 10 ? filteredData.slice(0, 10) : filteredData;
    return (
      <div>
        <section id="banner" className=" full-height py-5 d-flex align-items-end">
          <div className="container">
            <Banner />
            <div className="pt-5">
              <Search
                options={departments}
                locations={locations}
                onChange={this.handleSearchChange}
                onChangeCallback={this.handleSearchChange}
              />
              <div class="col pt-5 d-flex justify-content-between">
                <p>
                  <strong>288 Opportunities</strong> found across <strong>20 Departments</strong>{' '}
                  and <strong>8 Locations</strong>{' '}
                </p>
                <a href="#" class="text-green link">
                  View all jobs
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="full-height mb-5">
          <div className="container mb-5">
            <div
              className="listings bg-white shadow px-5 pt-5 pb-4"
              style={{ borderRadius: '3rem' }}
            >
              <h1 className="header mb-4" style={{ fontSize: '2rem;' }}>
                Recent Open Positions
              </h1>
              <div className="job">
                <div className="jobs-table-header row mb-4" style={{ fontSize: '20px' }}>
                  <div className="col-md-6">
                    <p className="head">Job Title</p>
                  </div>
                  <div className="col-md-3">
                    <p className="head">Department</p>
                  </div>
                  <div className="col-md-3">
                    <p className="head">Location</p>
                  </div>
                </div>
                <div className="pb-3">
                  {openPositions.map((data) => (
                    <div className="table-row row py-3">
                      <div className="col-md-6">
                        <p className="mb-0">{data.text}</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-0">{data.categories.department}</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-0">{data.categories.location}</p>
                      </div>
                      <div className="col-md-1">
                        <p className="mb-0">
                          <i class="fas fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-5">
                    <a href="#" className="text-green-light font-weight-bold mx-auto view-jobs">
                      View all jobs {`  `}
                      <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JobsList;
