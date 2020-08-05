import React, { Component, createRef } from 'react';
import Search from './search';
import List from './list';
import Banner from '../banner';
import Link from 'next/link';

import { departments, locations } from '../data.js';
import {withRouter} from 'next/router';
import { listChopper } from '../../../utils/services';

class JobsList extends Component {
  state = {
    data: this.props.data,
    filteredData: this.props.data,
    selectedDepartments: [],
    selectedLocations: [],
    keyword: '',
    chopNumber: 10,
  };


  componentDidMount() {
    console.log('this.props', this.props.router);
    // if (location.hash === '#all') {
    //   return this.setState({ chopNumber: null });
    // }
    // return this.setState({ chopNumber: 10 });
  }

  // componentDidUpdate() {
  //   if (location.hash !== this.value) {
  //     return this.setState({ chopNumber: location.hash === '#all' ? null : 10 });
  //   }
  // }

  handleSearchChange = (value, name) => {
    const { data } = this.props;
    const { filteredData, selectedLocations, selectedDepartments, keyword } = this.state;
    const filteredDataResults = (filteredData.length > 0 ? filteredData : data).filter(
      (array_el) => {
        switch (name) {
          case 'selectedDepartments':
            return value && value.length > 0 && array_el.categories.department === value[0].label;
          case 'keyword':
            return array_el.text
              .toLowerCase()
              .trim()
              .includes(value.toLowerCase().trim());

          case 'selectedLocations':
            return value && value.length > 0 && array_el.categories.location === value[0].label;
        }
      },
    );
    console.log('here', filteredDataResults, name, value);
    this.setState({
      filteredData: filteredDataResults,
      keyword: name === 'keyword' ? value : keyword,
      selectedDepartments: name === 'selectedDepartments' ? value : selectedDepartments,
      selectedLocations: name === 'selectedLocations' ? value : selectedLocations,
    });
  };

  getData = () => {
    const { data } = this.props;
    const {
      filteredData,
      keyword,
      selectedDepartments,
      selectedLocations,
      chopNumber,
    } = this.state;
    return !keyword && selectedDepartments.length === 0 && selectedLocations.length === 0
      ? listChopper(data, chopNumber)
      : filteredData.length > 10 && chopNumber
      ? listChopper(filteredData, chopNumber)
      : filteredData;
  };

  render() {
    const { filteredData, selectedDepartments, selectedLocations } = this.state;
    return (
      <div>
        <section id="banner" className=" full-height py-5 d-flex align-items-end">
          <div className="container">
            <Banner />
            <div className="pt-5">
              <Search
                departmentValue={selectedDepartments}
                locationValue={selectedLocations}
                departments={departments}
                locations={locations}
                onChange={this.handleSearchChange}
                onChangeCallback={this.handleSearchChange}
              />
              <div class="col pt-5 d-flex justify-content-between">
                <p>
                  <strong>288 Opportunities</strong> found across <strong>20 Departments</strong>{' '}
                  and <strong>8 Locations</strong>{' '}
                </p>
                <Link href="/jobs?all" class="text-green link">
                  View all jobs
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <List openPositions={this.getData()} />
      </div>
    );
  }
}

export default withRouter(JobsList);
