import { useState } from 'react';

function List(props) {
  const [limit, setLimit] = useState(20);
  const [openPositions, setOpenPositions] = useState(props.openPositions.slice(0, 20));

  const viewMore = () => {
    const newLimit = limit + 20,
      newList = props.openPositions.slice(0, newLimit);
    setOpenPositions(newList);
    setLimit(newLimit);
  };

  return (
    <section className="full-height mb-5">
      <div className="container mb-5">
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
                  <a href={`/jobs/${data.id}`}>
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

              {props.openPositions.length > limit ? (
                <div className="text-center mt-5">
                  <p
                    className="text-green-light font-weight-bold mx-auto view-jobs pointer"
                    onClick={() => viewMore()}
                  >
                    View more jobs {`  `}
                    <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default List;
