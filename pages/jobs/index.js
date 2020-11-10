import { useState } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';
import Departments from '../../comps/Careers/Departments';
import Teams from '../../comps/Careers/Teams';

import { openPosisitions } from '../../comps/Careers/data.js';

function Jobs(props) {
  console.log('props', props);
  const router = useRouter();
  const [navbarLight, setNavbarLight] = useState(true);
  const [navbarBG, setNavbarBG] = useState(true);

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Careers</title>
      </Head>
      <Navbar light={navbarLight} bg={navbarBG} careers />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <JobsList data={openPosisitions} showAllJobs={false} />

      {/* Departments */}
      <section className="bg-black full-height py-5" id="departments">
        <Departments data={openPosisitions} />
      </section>
      {/* End Departments */}

      {/* Teams */}
      <section id="teams" className="full-height align-items-center py-5">
        <Teams data={openPosisitions} />
      </section>
      {/* End Teams */}
    </div>
  );
}

// to fetch the jobs description
export async function getServerSideProps(ctx) {
  const apiUrl = `https://api.lever.co/v0/postings/gojek`;

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

export default Jobs;
