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
    selectedDepartments: '',
    selectedLocations: '',
    keyword: '',
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

  handleSearchChange = (value, name) => {
    this.setState({ [name]: value }, () => {});
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
    const filteredJobss = this.multiPropsFilter(this.state.data, this.filteredCollected());
    return filteredJobss.filter((job) => {
      return job.text.toLowerCase().includes(this.state.keyword);
    });
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
      this.setState({ keyword: '' });
    }
  }

  render() {
    const { showAllJobs } = this.props;
    const selctedFilters = this.filteredCollected();
    const filters = _.union(selctedFilters.department, selctedFilters.location);
    const jobListHeading =
      this.state.keyword !== '' || filters.length > 0 ? 'Search Results…' : 'Recent Open Positions';
    const heading = this.props.jobsHeading || jobListHeading;

    return (
      <div className="careers">
        <section id="banner" className="py-5 d-flex align-items-end align-items-xl-center">
          <div className="container">
            <Banner
              options={departments}
              locations={locations}
              onChange={this.handleSearchChange}
              onChangeCallback={this.handleSearchChange}
              searchJobs={this.searchJobs}
              selctedFilters={selctedFilters}
            />
            <div className="pt-5 d-none d-md-block">
              <Search
                options={departments}
                locations={locations}
                onChange={this.handleSearchChange}
                onChangeCallback={this.handleSearchChange}
                keyword={this.state.keyword}
              />
              <section className="">
                {(filters.length > 0 || this.state.keyword !== '') && (
                  <React.Fragment>
                    <div className="pt-5">
                      Filters:{' '}
                      {this.state.keyword !== '' && (
                        <p className="d-inline mt-5 job-tag ml-3">
                          {this.state.keyword}{' '}
                          <i
                            className="fas fa-times align-middle"
                            onClick={() => this.updateState('keyword', this.state.keyword)}
                          ></i>
                        </p>
                      )}
                      {filters.map((name, i) => {
                        return (
                          <p className="d-inline mt-5 job-tag ml-3" key={i}>
                            {name}{' '}
                            <i
                              className="fas fa-times align-middle"
                              onClick={() => this.updateState('filter', name)}
                            ></i>
                          </p>
                        );
                      })}
                    </div>
                  </React.Fragment>
                )}
              </section>
              <div className="col pt-5 d-flex justify-content-between">
                <p>
                  <strong>
                    {this.searchJobs().length}{' '}
                    {this.searchJobs().length === 1 ? 'Opportunity' : 'Opportunities'}{' '}
                  </strong>{' '}
                  found across{' '}
                  <strong>
                    {selctedFilters.department.length > 0
                      ? selctedFilters.department.length
                      : 'all'}{' '}
                    {selctedFilters.department.length === 1 ? 'Department' : 'Departments'}
                  </strong>{' '}
                  and{' '}
                  <strong>
                    {selctedFilters.location.length > 0 ? selctedFilters.location.length : 'all'}{' '}
                    {selctedFilters.location.length === 1 ? 'Location' : 'Locations'}
                  </strong>{' '}
                </p>
                {!showAllJobs && (
                  <a
                    href="/jobs/all"
                    className="button rounded-pill px-3 py-2 bg-green-light text-white"
                    style= {{
                      fontFamily: "Maison Nueue Demi"
                    }}
                  >
                    Find jobs
                  </a>
                )}
              </div>
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
          showCTA={this.searchJobs().length > 10 ? true : false}
          heading={heading}
        />
      </div>
    );
  }
}

export default JobsList;
