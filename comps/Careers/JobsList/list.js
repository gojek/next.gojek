function List(props) {
  const { openPositions } = props;
  return (
    <section className="full-height mb-md-5 pb-md-5">
      {/* desktop view */}
      <div className="container mb-5 d-none d-md-block">
        <div className="listings bg-white shadow px-5 pt-5 pb-4" style={{ borderRadius: '3rem' }}>
          <h1 className="header my-5 pb-2" style={{ fontSize: '2rem;' }}>
            {props.heading}
          </h1>
          <div className="job">
            <div className="jobs-table-header row mb-4" style={{ fontSize: '20px' }}>
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
                  <a href={`jobs/${data.id}`}>
                    <div className="table-row row py-3" key={key}>
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
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <strong>No Jobs!</strong>
                </div>
              )}

              {!props.showAllJobs && (
                <div className="text-center mt-5">
                  <a href="/jobs/all" className="text-green link">
                    View all jobs
                    <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="xs-listings pt-5 pb-4 d-md-none text-left">
        <h1 className="header my-1 pb-2 px-5">{props.heading}</h1>
        <div className="job">
          <div className="pb-3">
            {openPositions.length > 0 ? (
              openPositions.map((data, key) => (
                <div className={key % 2 === 0 ? 'even' : 'odd'}>
                  <a href={`jobs/${data.id}`}>
                    <div className="py-3 px-5" key={key}>
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
                <strong>No Jobs!</strong>
              </div>
            )}

            {!props.showAllJobs && (
              <div className="mt-4 pl-5">
                <a href="/jobs/all" className="text-green link">
                  View all jobs
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
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
