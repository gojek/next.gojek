import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Router, { useRouter } from 'next/router';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
// import JobList from '~/../../comps/Careers/jobsList';

function CareersPage(props) {
  const router = useRouter();
  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Department</title>
      </Head>
      <Navbar bg="#f7ce55" careers />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <section id="banner" className=" full-height py-5 d-flex align-items-end">
        <div className="container">
          <div className="row align-items-end pb-0 pb-md-5">
            <div className="col-md-5">
              <img src={bannerImage} className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
            <div className="col-md-7">
              <h1 className="banner-head">
                We give you <br /> leverage to create <br /> impact at scale.
              </h1>
              <p className="py-4" id="filters">
                Join a company that strives to support you. Not just 'your best work', but all of
                you.
              </p>
            </div>
          </div>
          {/* <JobList data={props.data} departmentID={router.query.id} hideDepartments noParams /> */}
        </div>
      </section>
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
