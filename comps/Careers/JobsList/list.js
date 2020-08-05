function List(props) {
  const { openPositions } = props;
  return (
    <section className="full-height mb-5">
      <div className="container mb-5">
        <div className="listings bg-white shadow px-5 pt-5 pb-4" style={{ borderRadius: '3rem' }}>
          <h1 className="header mb-4" style={{ fontSize: '2rem;' }}>
            Recent Open Positions
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
              {console.log('openPositions', openPositions)}
              {openPositions.length > 0 ? (
                openPositions.map((data) => (
                  <div className="table-row row py-3">
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
                      <p className="mb-0">
                        <i class="fas fa-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <strong>No Jobs!</strong>
                </div>
              )}

              <div className="text-center mt-5">
                <Link href="/jobs?all" className="text-green-light font-weight-bold mx-auto view-jobs">
                  View all jobs {`  `}
                  <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default List;
