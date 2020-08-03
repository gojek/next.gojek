import React, { Component } from 'react';
import Search from './search';
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
    this.setState({ [name]: value }, () => {
      const { selectedDepartments, data } = this.state;
      const filteredData = data.filter(function(array_el) {
        return (
          selectedDepartments.filter(function(anotherOne_el) {
            return anotherOne_el.label == array_el.categories.department;
          }).length > 0
        );
      });
      this.setState({ filteredData: filteredData });
    });
  };

  render() {
    const { filteredData } = this.state;
    const openPositions = filteredData.length > 10 ? filteredData.slice(0, 10) : filteredData;
    return (
      <div>
        <Search
          options={departments}
          locations={locations}
          onChange={this.handleSearchChange}
          onChangeCallback={this.handleSearchChange}
        />

        {/* Jobs */}
        <div className="h-100 bg-white mt-5">
          <h1 className="subhead">Recent Open Positions</h1>

          <div className="table-head row" style={{ fontSize: '20px' }}>
            <div className="col-md-6">
              <p className="text-green-light">Job Title</p>
            </div>
            <div className="col-md-3">
              <p className="text-green-light">Department</p>
            </div>
            <div className="col-md-3">
              <p className="text-green-light">Location</p>
            </div>
          </div>
          {openPositions.map((data) => (
            <div className="table-body row">
              <div className="col-md-6">
                <p className="">{data.text}</p>
              </div>
              <div className="col-md-3">
                <p className="">{data.categories.department}</p>
              </div>
              <div className="col-md-2">
                <p className="">Bangalore</p>
              </div>
              <div className="col-md-1">
                <p className="">{'>'}</p>
              </div>
            </div>
          ))}
        </div>
        {/* End Jobs */}
      </div>
    );
  }
}

export default JobsList;
