import React, { Component } from 'react';
import Search from './search';
import List from './list';
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

        <List openPositions={openPositions} />
      </div>
    );
  }
}

export default JobsList;
