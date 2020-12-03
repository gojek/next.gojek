import { useState, useEffect } from 'react';
import Search from '~/../../comps/Careers/JobsList/search';

function MobileSearch(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button
        className="btn btn-success rounded-pill px-5 mt-3 py-2"
        onClick={() => handleExpand()}
      >
        Find Jobs
      </button>
      {expanded ? (
        <div className="fixed-top mobile-search text-white text-left footer px-4 py-4">
          <div className="row pt-3 justify-content-between">
            <img src="/img/gojek-tech-white-logo.png" alt="Gojek" />
            <button className="btn text-white" onClick={() => handleExpand()}>
              <span>
                <i class="fas fa-times"></i>
              </span>
            </button>
          </div>
          <p className="pt-5 pb-3 pr-5 header">
            Join a company that strives to support you. Not just 'your best work', but all of you.
          </p>
          <Search
            options={props.options}
            locations={props.locations}
            onChange={props.onChange}
            onChangeCallback={props.onChangeCallback}
          />
          <button className="btn btn-success rounded-pill px-5 mt-4" onClick={() => handleExpand()}>
            Search
          </button>
          <div className="fixed-bottom results p-4">
            <div className="row justify-content-between ">
              <div className="col-6">
                <p className="mb-0">
                  <strong>{props.searchJobs().length} Opportunities</strong> found across{' '}
                  <strong>
                    {props.selctedFilters.department.length > 0
                      ? props.selctedFilters.department.length
                      : 'all'}{' '}
                    Departments
                  </strong>{' '}
                  and{' '}
                  <strong>
                    {props.selctedFilters.location.length > 0
                      ? props.selctedFilters.location.length
                      : 'all'}{' '}
                    Locations
                  </strong>{' '}
                </p>
              </div>
              <div className="col-5 align-self-end px-0">
                <a href="/jobs/all" className="text-white link">
                  View all jobs
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default MobileSearch;
