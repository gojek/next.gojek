import React, { Component } from 'react';
import Search from './search';
import List from './list';
import Banner from '../banner';
import { departments, locations } from '../data.js';
import _, { filter } from 'underscore';

class JobsList extends Component {
  state = {
    data: this.props.data,
    filteredData: this.props.data,
    selectedDepartments: '',
    selectedLocations: '',
    keyword: '',
  };

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

  render() {
    const { showAllJobs } = this.props;
    const heading = this.props.jobsHeading || 'Recent Open Positions';
    const selctedFilters = this.filteredCollected();
    const filters = _.union(selctedFilters.department, selctedFilters.location);

    return (
      <div>
        <section id="banner" className="full-height py-5 d-flex align-items-end">
          <div className="container">
            <Banner />
            <div className="pt-5">
              <Search
                options={departments}
                locations={locations}
                onChange={this.handleSearchChange}
                onChangeCallback={this.handleSearchChange}
              />
              {/* <div className="mt-4">
                {filters.length > 0 && (
                  <div>
                    <span>Filters:</span>
                    {filters.map((name) => {
                      return <span className="job-tag p-3 mr-3">{name}</span>;
                    })}
                  </div>
                )}
              </div> */}
              <div class="col pt-5 d-flex justify-content-between">
                <p>
                  <strong>288 Opportunities</strong> found across <strong>20 Departments</strong>{' '}
                  and <strong>8 Locations</strong>{' '}
                </p>
                {!this.props.showAllJobs && (
                  <a href="/jobs/all-jobs" class="text-green link">
                    View all jobs
                    <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
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
          heading={heading}
        />
      </div>
    );
  }
}

export default JobsList;