import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Router from 'next/router';
import Navbar from '~/../../comps/Navbar';
import JobsTable from '~/../../comps/Careers/jobsTable';
import CommonCta from '~/../../comps/Common/Cta';
import { teamsData } from '../../comps/Team/data.js';
import List from '~/../../comps/Careers/JobsList/list';
import Slider from 'react-slick';

const blogsSliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function CareersPage(props) {
  const router = useRouter();
  const teamValue = router.query.id;
  const [jobs, setJobs] = useState([]);

  const teamData = teamsData[teamValue];
  console.log('props', teamsData[teamValue]);

  useEffect(() => {
    console.log('careers props', props);
    if (teamsData[teamValue]) {
      const CareersData = props.data;
      let jobs = [];

      CareersData.map((job, i) => {
        let { team } = job.categories;
        let { department } = job.categories;
        let { location } = job.categories;

        // to check the department name for department page
        if (team == 'Finance & Accounting') {
          jobs.push(job);
        }
      });

      setJobs(jobs);
    }
  }, []);

  const teamSections = (data) => {
    return (
      <div>
        <section id="banner" className="teams-banner py-5 d-flex blackBackground">
          <div className="container pt-5 align-self-center">
            <div className="row justify-content-center pt-0 pt-md-5">
              <div className="col-md-12 col-lg-6 text-white">
                <h1 className="banner-head my-5" style={{ color: '#ffd25c' }}>
                  Team: {data.name}
                </h1>
                <p className="mb-5">{data.desc.prefix}</p>
                <h2 className="heading">{data.desc.main}</h2>
                <p className="mt-5 d-none d-md-block">{data.desc.suffix}</p>
              </div>
              <div className="col-lg-6">
                <div
                  className="shadow my-5 d-none d-lg-block"
                  style={{
                    height: '32rem',
                    borderRadius: '3rem',
                    backgroundColor: '#f2d4d7',
                    backgroundImage: `url(${data.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="teamsJobs">
          <div className="d-md-none px-3 mb-5">
            <div
              className="shadow"
              style={{ height: '14rem', borderRadius: '3rem', backgroundColor: '#f2d4d7' }}
            ></div>
          </div>
          <div className="">
            {jobs.length > 0 ? (
              <List openPositions={jobs} heading="Current Open Positions" />
            ) : (
              <p className="text-center py-5" style={{ fontSize: '1.5rem' }}>
                Currently we don't have any openings under Kernel, please check back later. Thanks
              </p>
            )}
          </div>
        </section>

        {/* blogs section */}
        <section id="blogs" className="team-blogs py-3">
          <p className="mb-md-5 px-4 container">
            (blog section) Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="d-none d-md-block container list pt-0">
            <div className="row">
              {data.blogs.map((blog, i) => {
                return (
                  <div className="col-md-4 px-3">
                    <div className="card my-4 mx-1">
                      <div className="placeholder"></div>
                      <div className="card-body pb-0">
                        <p className="card-text pointer">
                          {blog.desc}
                          <br />
                          {blog.time} min read | {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-4 mt-3">
              <a className="link text-green-light pl-4" href="/blog">
                Read more blogs
                <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
              </a>
            </div>
          </div>
          <div className="d-md-none">
            <Slider {...blogsSliderSettings}>
              {data.blogs.map((blog, i) => {
                return (
                  <div>
                    <div className="px-3">
                      <div className="card my-4 mx-1">
                        <div className="placeholder"></div>
                        <div className="card-body pb-0">
                          <p className="card-text pointer">{blog.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="pb-4">
              <a className="link text-green-light pl-4" href="/blog">
                Read more blogs
                <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const teamNotFound = (
    <section id="banner" className="teams-banner py-5 d-flex blackBackground">
      <div className="container pt-5 align-self-center">
        <h1 className="my-5" style={{ color: '#ffd25c' }}>
          Couldn't find the team you are looking for... please try again later
        </h1>
      </div>
    </section>
  );

  return (
    <div className="text-left">
      <Head>
        <title>Gojek | Teams | {teamData ? teamsData[teamValue].value : 'Not found'}</title>
      </Head>
      <Navbar whiteNav />
      {/* banner */}
      {/* <div className="blackBackground"></div> */}
      {teamData ? teamSections(teamData) : teamNotFound}
      {/* works with us section */}
      <section id="team-workWithUs" className="container my-5 px-5 py-4 d-none d-md-block">
        <div className="row cta">
          <div className="col-12 col-md-5 align-self-center">
            <img
              className="img-fluid mx-auto d-block rounded-pill"
              src="/img/blog-cta.jpg"
              alt="Work with gojek"
            />
          </div>
          <div className="col-12 col-md-6 py-5">
            <h2 className="heading text-white">Wondering what it's like to work with us?</h2>
            <a className="link" href="/life-at-gojek">
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
