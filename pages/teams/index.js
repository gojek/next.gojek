import { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Navbar from '~/../../comps/Navbar';
import JobsTable from '~/../../comps/Careers/jobsTable';
import CommonCta from '~/../../comps/Common/Cta';

function CareersPage(props) {
  console.log('props', props);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log('careers props', props);
    const CareersData = props.data;
    let jobs = [];

    CareersData.map((job, i) => {
      let { team } = job.categories;
      let { department } = job.categories;
      let { location } = job.categories;

      // to check the department name for department page
      if (team == 'Kernel') {
        jobs.push({
          title: job.text,
          department: department,
          location: location,
          id: job.id,
        });
      }
    });

    setJobs(jobs);
  }, []);

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Teams</title>
      </Head>
      <Navbar whiteNav />
      {/* banner */}
      {/* <div className="blackBackground"></div> */}
      <section id="banner" className="teams-banner py-5 d-flex blackBackground">
        <div className="container pt-5 align-self-center">
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
            className="listings bg-white py-5 px-2 px-md-5 "
            style={{ borderRadius: '3rem', paddingTop: '5rem' }}
          >
            {jobs.length > 0 ? (
              <JobsTable
                jobs={jobs}
                careers
                routeToAllJobs={() => Router.push('/careers/all-open-positions')}
              />
            ) : (
              <p className="text-center py-5" style={{ fontSize: '1.5rem' }}>
                Currently we don't have any openings under Kernel, please check back later. Thanks
              </p>
            )}
          </div>
        </div>
      </section>

      {/* blogs section */}
      <section id="blogs" className="d-flex align-items-center py-3">
        <div className="container list">
          <p className="mb-5 px-0 px-md-4">
            (blog section) Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="row">
            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 px-3">
              <div className="card my-4 mx-1">
                <div className="placeholder"></div>
                <div className="card-body pb-0">
                  <p className="card-text pointer">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br />0 min read | DD Month, YYYY
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 mt-3">
            <a className="link text-green-light pl-4" href="#">
              Read more blogs
              <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* works with us section */}
      <section id="team-workWithUs" className="container my-5 px-5 pt-4">
        <div className="row cta">
          <div className="col-12 col-md-5"></div>
          <div className="col-12 col-md-6 py-5">
            <h2 className="heading text-white">Wondering what it's like to work with us?</h2>
            <a className="link" href="#">
              Find out
              <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      <CommonCta />
    </div>
  );
}

// to fetch the jobs json
export async function getServerSideProps(ctx) {
  const apiUrl = 'https://api.lever.co/v0/postings/gojek?mode=json';

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return { props: { data } };
    } else {
      return await { props: { data: [] } };
    }
  } catch (error) {
    // Network error
    return { props: { data: [] } };
  }
}

export default CareersPage;
