import React, { Component } from 'react';
import Search from './search';
import List from './list';
import Banner from '../banner';
import { departments, locations } from '../data.js';
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

  // componentDidMount() {
  //   console.log('this.props', location.hash);
  //   if (location.hash !== '#all') {
  //     this.setState({ chopNumber: 10 });
  //   }
  // }

  // componentDidUpdate() {
  //   if (location.hash === '#all') {
  //     this.setState({chopNumber:null});
  //   }
  // }

  applyExistingFilters = (filteredResults) => {
    const { filteredData, selectedLocations, selectedDepartments, keyword } = this.state;

    let departmentSelected = [];

    if (selectedDepartments.length > 0) {
      departmentSelected = filteredResults.filter(
        (result) =>
          selectedDepartments.filter(
            (department) => result.categories.department === department.label,
          ).length > 0,
      );
    }

    if (selectedLocations.length > 0) {
      departmentSelected = filteredResults.filter(
        (result) =>
          selectedLocations.filter((location) => result.categories.location === location.label)
            .length > 0,
      );
    }

    console.log('filteredResults', filteredResults);

    return departmentSelected.length > 0 ? departmentSelected : filteredResults;
  };

  handleSearchChange = (value, name) => {
    const { data } = this.props;
    const { filteredData, selectedLocations, selectedDepartments, keyword } = this.state;
    const filteredDataResults = (filteredData.length > 0 ? filteredData : data).filter(
      (array_el) => {
        // let condition;
        // let depCondition;
        // let locCondition;

        // if (selectedDepartments.length) {
        //   depCondition =
        //     value && value.length > 0 && array_el.categories.department === value[0].label;
        // }
        // if (selectedLocations.length) {
        //   locCondition = value && value.length > 0 && array_el.categories.location === value[0].label;
        // }

        // if (keyword.length) {
        //   condition = value && value.length > 0 && array_el.categories.location === value[0].label;
        // }

        // return

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
    const existingFilterData = this.applyExistingFilters(filteredDataResults);
    this.setState({
      filteredData: existingFilterData,
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
                <a href="#all" class="text-green link">
                  View all jobs
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <List openPositions={this.getData()} />
      </div>
    );
  }
}

export default JobsList;
