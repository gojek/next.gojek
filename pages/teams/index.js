import Navbar from '~/../../comps/Navbar';
import JobCard from '~/../../comps/Careers/jobCard';

function CareersPage(props) {
  return (
    <div className="text-center text-md-left">
      <Navbar light bg="#000" />
      {/* banner */}
      <div className="blackBackground"></div>
      <section id="banner" className="teams-banner py-5 d-flex">
        <div className="container pt-5">
          <div className="row justify-content-center pt-5">
            <div className="col-md-12 col-lg-6 text-white">
              <h1 className="banner-head my-5" style={{ color: '#ffd25c' }}>
                Team: Kernel
              </h1>
              <p className="mb-5">
                In a nutshell, the Kernel team is responsible for running the core cloud platform
                that powers Gojek’s engineering ecosystem. We work to enable engineers to be more
                productive & deliver scalable, reliable products by building a PaaS that provide
                abstractions over distributed systems.
              </p>
              <h2 className="heading">
                Just like Gojek is the operating system for SEA markets, Kernel aims to be the
                operating system for Gojek.
              </h2>
              <p className="mt-5">
                Foundation team (Codename: Kernel), we are an Engineering Platform at Gojek that
                works on improving the Reliability and Productivity of engineers by building a PaaS
                for our product groups. In order to make underlying infrastructure invisible for our
                product engineers, we spend our time developing tools and platforms that provide
                abstractions over distributed systems. We currently have a team of 50+ engineers
                across 6 different locations - Bangalore, Gurgaon, Singapore, Jakarta, and Bangkok.”
              </p>
            </div>
            <div className="col-md-6 d-none d-lg-block">
              <div
                className="shadow my-5"
                style={{ height: '32rem', borderRadius: '3rem', backgroundColor: '#f2d4d7' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="teamsJobs">
        <div className="container">
          <div
            className="listings bg-white shadow py-5 px-2 px-md-5 "
            style={{ borderRadius: '3rem', paddingTop: '5rem' }}
          >
            <h1 className="header mb-4" style={{ fontSize: '2rem' }}>
              Recent Open Positions
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
                <tbody>
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                </tbody>
              </table>
              <div className="text-center mt-5">
                <a href="#" className="text-green-light font-weight-bold mx-auto view-jobs">
                  View all jobs
                  <i className="fas fa-long-arrow-alt-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section */}
      <section id="blogs" className="full-height d-flex align-items-center py-5">
        <div className="container list">
          <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="row">
            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem, modi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a className="link text-green-light pl-4" href="#">
            Read more blogs
            <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
