import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';
import Departments from '../../comps/Careers/Departments';
import Teams from '../../comps/Careers/Teams';
import { CTA } from '../../comps/BlogNew/cta';

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
        <title>Gojek | Careers</title>
      </Head>
      <Navbar />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <JobsList
        data={recentjobs}
        showAllJobs={false}
        // selectedDepartment={params.d}
        onSelectFilter={handleChange}
      />

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

      {/* CTA */}

      <section className="bg-black  py-5">
        <div className="container">
          <CTA title="Read stories from our Blog " href="/blog" hrefText="Read More" />
        </div>
      </section>
    </div>
  );
}

// to fetch the jobs description
export async function getServerSideProps(ctx) {
  let apiUrl =
    'https://api.lever.co/v0/postings/gojek?department=Design&department=Engineering&department=People and Culture&department=Program Management&department=Product&department=Science';
  // 'https://api.lever.co/v0/postings/gojek?department=Design&department=Engineering&department=People and Culture&department=Program Management&department=Product&department=Science&limit=10';
  // if (ctx.query.d) {
  //   apiUrl = `https://api.lever.co/v0/postings/gojek?department=${ctx.query.d}`;
  // }

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
