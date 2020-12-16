import { useState } from 'react';

function List(props) {
  const { openPositions } = props;
  // const [limit, setLimit] = useState(10);
  // const [openPositions, setOpenPositions] = useState(props.openPositions.slice(0, 10));

  // const handleExpand = (xs) => {
  //   let newLimit = limit + 10,
  //     newList = props.openPositions.slice(0, newLimit);
  //   setLimit(newLimit);
  //   setOpenPositions(newList);
  //   let elmnt = document.getElementById(`${xs ? 'xs' : ''}${newList.length - 11}`);
  //   elmnt.scrollIntoView();
  // };

  return (
    <section className="mb-md-5 pb-md-5" id="job-list">
      {/* desktop view */}
      <div className="container mb-5 d-none d-md-block">
        <div className="listings bg-white shadow px-5 pt-5 pb-4" style={{ borderRadius: '3rem' }}>
          <h1 className="header mb-5">{props.heading}</h1>
          <div className="job">
            <div className="jobs-table-header row" style={{ fontSize: '1.25rem' }}>
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
              {openPositions.length > 0 ? (
                openPositions.map((data, key) => (
                  <a href={`/jobs/${data.id}`} className="table-row">
                    <div className="job-row row py-3" key={key} id={key}>
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
                        <div className="mb-0">
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="">
                  <div className="text-center">
                    <strong className="py-5 d-block">No Jobs!</strong>
                  </div>
                  <div className="text-center mt-5">
                    <a href="/jobs/all" className="text-green-light link btn">
                      View all jobs
                      <img
                        src="/img/right-arrow.svg"
                        className="align-middle ml-2 img-fluid"
                        alt="All jobs"
                      />
                    </a>
                  </div>
                </div>
              )}
              {props.showCTA && !props.showAllJobs && (
                <div className="text-center mt-5">
                  <a href="/jobs/all" className="text-green-light link btn">
                    View all jobs
                    <img
                      src="/img/right-arrow.svg"
                      className="align-middle ml-2 img-fluid"
                      alt="All jobs"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="xs-listings py-5 d-md-none text-left">
        <h1 className="header mt-4 mb-1 pb-2 px-5">{props.heading}</h1>
        <div className="job">
          <div className="pb-3">
            {openPositions.length > 0 ? (
              openPositions.map((data, key) => (
                <div className={key % 2 === 0 ? 'even' : 'odd'} key={key}>
                  <a href={`jobs/${data.id}`}>
                    <div className="py-3 px-5" key={key} id={`xs${key}`}>
                      <p className="title mb-0">{data.text}</p>
                      <p className="sub-title mb-0">
                        {data.categories.department}
                        {data.categories.department ? ', ' : ''} {data.categories.location}
                      </p>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <strong className="py-5">No Jobs!</strong>
              </div>
            )}
            {props.showCTA && (
              <div className="mt-4 pl-5">
                <button className="text-green link btn">
                  View more
                  <img
                    src="/img/right-arrow.svg"
                    className="align-middle ml-2 img-fluid"
                    alt="All jobs"
                  />
                </button>
              </div>
            )}
            {!props.showAllJobs && !props.showCTA && (
              <div className="mt-4 pl-5">
                <a href="/jobs/all" className="text-green-light link btn">
                  View all jobs
                  <img
                    src="/img/right-arrow.svg"
                    className="align-middle ml-2 img-fluid"
                    alt="All jobs"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default List;
