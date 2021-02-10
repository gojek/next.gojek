import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';
import Departments from '../../comps/Careers/Departments';
import Teams from '../../comps/Careers/Teams';

function Jobs(props) {
  const router = useRouter();
  const params = router.query;
  const recentjobs = props.data;

  function handleChange(val) {
    router.query = {};
    router.push('/jobs', { shallow: true });
  }

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek Careers | Check out the current job openings at Gojek Tech</title>
      </Head>
      <Navbar />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <JobsList data={recentjobs} showAllJobs={false} onSelectFilter={handleChange} />

      {/* Departments */}
      <section className="bg-black full-height py-md-5" id="departments">
        <Departments data={recentjobs} />
      </section>
      {/* End Departments */}

      {/* Teams */}
      {/* <section id="teams" className="full-height align-items-center py-5">
        <Teams data={recentjobs} />
      </section> */}
      {/* End Teams */}
    </div>
  );
}

// to fetch the jobs description
export async function getServerSideProps(ctx) {
  let apiUrl =
    'https://api.lever.co/v0/postings/gojek?department=Design&department=Engineering&department=People and Culture&department=Program Management&department=Product&department=Science';

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

  // Get all jobs
}

export default Jobs;
