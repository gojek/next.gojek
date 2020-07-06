import { useState, useEffect } from 'react';

import JobCard from '~/../../comps/Careers/jobCard';

function JobsTable(props) {
  const [maxJobs, setMaxJobs] = useState(10);

  return (
    <div>
      <h1 className="header mb-4" style={{ fontSize: '2rem' }}>
        {props.filterApplied ? 'Search results...' : 'Recent Open Positions'}
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
          <tbody style={{ minHeight: '40vh' }}>
            {props.jobs.map((job, i) => {
              if (i < maxJobs) return <JobCard data={job} key={i} />;
            })}
          </tbody>
        </table>
        <div className="text-center mt-5">
          {props.careers ? (
            <p className="text-green link pointer" onClick={() => props.routeToAllJobs()}>
              View all jobs
              <i
                className="fa fa-arrow-right ml-2"
                style={{ fontSize: '16px', lineHeight: 'normal' }}
              />
            </p>
          ) : props.jobs.length > maxJobs ? (
            <span
              className="text-green-light font-weight-bold mx-auto view-jobs clearIcon"
              onClick={() => setMaxJobs(maxJobs + 10)}
            >
              View {props.jobs.length - maxJobs > 10 ? '10' : props.jobs.length - maxJobs} more jobs
              <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
export default JobsTable;
