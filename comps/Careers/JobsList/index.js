import React, { Component } from 'react';
import Search from './search';
import List from './list';
import Banner from '../banner';
import { departments, locations } from '../data.js';
import _, { filter, remove } from 'underscore';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router';

class JobsList extends Component {
  state = {
    data: this.props.data,
    filteredData: this.props.data,
    selectedDepartments: [],
    selectedLocations: [],
    keyword: '',
    keywordList: [],
    expanded: false,
  };

  componentDidMount() {
    let selectedDepartments = _.map(departments, 'label');

    let jobs = _.filter(this.props.data, function(item) {
      return selectedDepartments.includes(item.categories.department);
    });
    this.setState({ data: jobs });

    if (this.props.selectedDepartment && this.props.selectedDepartment !== '') {
      var obj = [
        {
          value: this.props.selectedDepartment,
          label: this.props.selectedDepartment,
          bgColor: '',
          bgImg: '',
          isSelected: true,
        },
      ];
      this.setState({ selectedDepartments: obj });
    }
  }

  handleExpand = () => {
    const expanded = this.state.expanded;
    this.setState({ expanded: !expanded });
  };

  handleSearchChange = (value, name) => {
    this.setState({ [name]: value }, () => {});
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState((prevState) => ({
        keywordList: [...prevState.keywordList, this.state.keyword],
      }));
      this.setState({ keyword: '' });
    }
  };

  // This function collects ALL keys that are selected fromt dropdown then create a new obj to compare to filter.
  filteredCollected = () => {
    const collectedTrueKeys = {
      department: [],
      location: [],
    };
    const { selectedDepartments, selectedLocations } = this.state;
    for (let i in selectedDepartments) {
      if (selectedDepartments[i])
        collectedTrueKeys.department.push(selectedDepartments[i]['label']);
    }
    for (let i in selectedLocations) {
      if (selectedLocations[i]) collectedTrueKeys.location.push(selectedLocations[i]['label']);
    }
    return collectedTrueKeys;
  };

  // **************** SEARCH Filter ****************
  searchJobs = () => {
    const filteredJobs = this.multiPropsFilter(this.state.data, this.filteredCollected());
    let ary = [];

    if (this.state.keywordList.length === 0) {
      return filteredJobs;
    } else {
      filteredJobs.filter((job) => {
        this.state.keywordList.map((keyword) => {
          if (job.text.toLowerCase().includes(keyword.toLowerCase())) {
            ary.push(job);
          }
        });
      });

      return ary;
    }
  };

  multiPropsFilter = (jobs, filters) => {
    const filterKeys = Object.keys(filters);
    return jobs.filter((job) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(job['categories'][key])) {
          return job['categories'][key].some((keyEle) => filters[key].includes(keyEle));
        }
        return filters[key].includes(job.categories[key]);
      });
    });
  };

  updateState(type, value) {
    let departments = this.state.selectedDepartments;
    let locations = this.state.selectedLocations;
    let keywords = this.state.keywordList;

    if (type === 'filter') {
      if (_.find(departments, { label: value })) {
        const i = _.findIndex(departments, { label: value });
        departments.splice(i, 1);
        this.setState({ selectedDepartments: departments });
      }

      if (_.find(locations, { label: value })) {
        const i = _.findIndex(locations, { label: value });
        locations.splice(i, 1);
        this.setState({ selectedLocations: locations });
      }
    } else {
      const index = keywords.indexOf(value);
      if (index > -1) {
        keywords.splice(index, 1);
      }
      this.setState({ keywordList: keywords });
    }
  }

  clearAllFilters() {
    this.setState({ keywordList: [] });

    let departments = this.state.selectedDepartments;
    this.setState({ selectedDepartments: departments.splice(0, departments.length) });
    this.setState({ selectedDepartments: [] });

    let locations = this.state.selectedLocations;
    this.setState({ selectedLocations: locations.splice(0, locations.length) });
    this.setState({ selectedLocations: [] });

    this.setState({ keyword: '' });
  }

  render() {
    const { showAllJobs } = this.props;
    const selctedFilters = this.filteredCollected();
    const filters = _.union(selctedFilters.department, selctedFilters.location);
    const jobListHeading =
      this.state.keywordList.length > 0 || filters.length > 0
        ? 'Search Results…'
        : 'Recent Open Positions';
    const heading = this.props.jobsHeading || jobListHeading;

    return (
      <div className="careers">
        <section id="banner" className="py-5 d-flex align-items-end align-items-xl-center">
          <div className="container">
            <Banner handleExpand={this.handleExpand} />
            <div className="pt-5 d-none d-md-block">
              <Search
                options={departments}
                locations={locations}
                onChange={this.handleSearchChange}
                onChangeCallback={this.handleSearchChange}
                keyword={this.state.keyword}
                onKeyDown={this.handleKeyDown}
                onKeyDownCallback={this.handleKeyDown}
              />

              {(filters.length > 0 || this.state.keywordList.length > 0) && (
                <div className="mt-5">
                  Filters:{' '}
                  {this.state.keywordList.length > 0 &&
                    this.state.keywordList.map((keyword, i) => {
                      return (
                        <p className="d-inline-block job-tag ml-3" key={i}>
                          {keyword}{' '}
                          <i
                            className="fas fa-times align-middle pointer"
                            onClick={() => this.updateState('keyword', keyword)}
                          ></i>
                        </p>
                      );
                    })}
                  {filters.map((name, i) => {
                    return (
                      <p className="d-inline-block job-tag ml-3" key={i}>
                        {name}{' '}
                        <i
                          className="fas fa-times align-middle pointer"
                          onClick={() => this.updateState('filter', name)}
                        ></i>
                      </p>
                    );
                  })}
                  <p className="d-inline clear-filters ml-3" onClick={() => this.clearAllFilters()}>
                    Clear all filters
                  </p>
                </div>
              )}

              <div className="pt-3 mt-4 d-flex justify-content-between">
                <p className="job-results-text">
                  <strong>
                    {this.searchJobs().length}{' '}
                    {/* {this.searchJobs().length === 1 ? 'Opportunity' : 'Opportunities'}{' '} */}
                  </strong>{' '}
                  open jobs found
                  {/* {' '}
                  <strong>
                    {selctedFilters.department.length > 0
                      ? selctedFilters.department.length
                      : 'all'}{' '}
                    {selctedFilters.department.length === 1 ? 'department' : 'departments'}
                  </strong>{' '}
                  and{' '}
                  <strong>
                    {selctedFilters.location.length > 0 ? selctedFilters.location.length : 'all'}{' '}
                    {selctedFilters.location.length === 1 ? 'Location' : 'Locations'}
                  </strong>{' '} */}
                </p>
              </div>
            </div>

            <div className="d-block d-md-none">
              {this.state.expanded && (
                <div className="fixed-top mobile-search text-white text-left footer px-4 py-4">
                  <div className="row pt-3 justify-content-between mx-0">
                    <img
                      src="/img/gojek-tech-white-logo.png"
                      alt="Gojek"
                      className="img-fluid"
                      style={{ height: '2rem' }}
                    />
                    <button className="btn text-white" onClick={() => this.handleExpand()}>
                      <span>
                        <i className="fas fa-times"></i>
                      </span>
                    </button>
                  </div>
                  <p className="pt-5 pb-3 pr-5 header">
                    Join a company that strives to support you. Not just 'your best work', but all
                    of you.
                  </p>
                  <Search
                    options={departments}
                    locations={locations}
                    onChange={this.handleSearchChange}
                    onChangeCallback={this.handleSearchChange}
                    keyword={this.state.keyword}
                    onKeyDown={this.handleKeyDown}
                    onKeyDownCallback={this.handleKeyDown}
                    mobileFilters
                  />

                  {(filters.length > 0 || this.state.keywordList.length > 0) && (
                    <div className="mt-5">
                      Filters:{' '}
                      {this.state.keywordList.length > 0 &&
                        this.state.keywordList.map((keyword, i) => {
                          return (
                            <p className="d-inline-block job-tag bg-white text-dark ml-3" key={i}>
                              {keyword}{' '}
                              <i
                                className="fas fa-times align-middle pointer"
                                onClick={() => this.updateState('keyword', keyword)}
                              ></i>
                            </p>
                          );
                        })}
                      {filters.map((name, i) => {
                        return (
                          <p className="d-inline-block job-tag bg-white text-dark  ml-3" key={i}>
                            {name}{' '}
                            <i
                              className="fas fa-times align-middle pointer"
                              onClick={() => this.updateState('filter', name)}
                            ></i>
                          </p>
                        );
                      })}
                      &nbsp;&nbsp;&nbsp;
                      <p className="d-inline pointer" onClick={() => this.clearAllFilters()}>
                        <u>
                          <i>Clear all filters</i>
                        </u>
                      </p>
                    </div>
                  )}

                  <div className="fixed-bottom results p-4">
                    <div className="d-flex align-items-end justify-content-between">
                      <p className="mb-0 job-results-text mobile">
                        <strong>
                          {this.searchJobs().length}{' '}
                          {/* {this.searchJobs().length === 1 ? 'Opportunity' : 'Opportunities'}{' '} */}
                        </strong>{' '}
                        open jobs found
                        {/* {' '}
                        <strong>
                          {selctedFilters.department.length > 0
                            ? selctedFilters.department.length
                            : 'all'}{' '}
                          {selctedFilters.department.length === 1 ? 'department' : 'departments'}
                        </strong>{' '}
                        and{' '}
                        <strong>
                          {selctedFilters.location.length > 0
                            ? selctedFilters.location.length
                            : 'all'}{' '}
                          {selctedFilters.location.length === 1 ? 'Location' : 'Locations'}
                        </strong>{' '} */}
                      </p>

                      {(filters.length > 0 || this.state.keywordList.length > 0) && (
                        <a href="#" onClick={() => this.handleExpand()} className="text-white link">
                          View jobs <img src="/img/white-arrow-right.svg" alt="join Us" />
                        </a>
                      )}
                      {filters.length == 0 && this.state.keywordList.length == 0 && (
                        <a href="/careers/all" className="text-white link">
                          View all jobs <img src="/img/white-arrow-right.svg" alt="join Us" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Show filters if selected */}
              {(filters.length > 0 || this.state.keywordList.length > 0) && !this.state.expanded && (
                <div className="fixed-bottom results p-4 bg-green-light text-white text-left mobile-applied-filters">
                  <div className="d-flex align-items-end justify-content-between">
                    <p className="mb-0 job-results-text mobile">
                      <strong>
                        {this.searchJobs().length}{' '}
                        {/* {this.searchJobs().length === 1 ? 'Opportunity' : 'Opportunities'}{' '} */}
                      </strong>{' '}
                      open jobs found
                      {/* {' '}
                      <strong>
                        {selctedFilters.department.length > 0
                          ? selctedFilters.department.length
                          : 'all'}{' '}
                        {selctedFilters.department.length === 1 ? 'department' : 'departments'}
                      </strong>{' '}
                      and{' '}
                      <strong>
                        {selctedFilters.location.length > 0
                          ? selctedFilters.location.length
                          : 'all'}{' '}
                        {selctedFilters.location.length === 1 ? 'Location' : 'Locations'}
                      </strong>{' '} */}
                    </p>

                    {(filters.length > 0 || this.state.keywordList.length > 0) && (
                      <a href="#" onClick={() => this.handleExpand()} className="text-white link">
                        Filters <img src="/img/white-arrow-right.svg" alt="join Us" />
                      </a>
                    )}
                  </div>
                </div>
              )}
              {/* End filters */}
            </div>
          </div>
        </section>

        <List
          openPositions={
            showAllJobs || this.searchJobs().length <= 10
              ? this.searchJobs()
              : this.searchJobs().slice(0, 10)
          }
          showAllJobs={showAllJobs}
          showSearchedJobs={
            (filters.length > 0 || this.state.keywordList.length > 0) &&
            this.searchJobs().length < 10
              ? false
              : true
          }
          showCTA={this.searchJobs().length > 10 ? true : false}
          heading={heading}
        />
      </div>
    );
  }
}

export default JobsList;
