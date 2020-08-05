import { useState } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';
import Departments from '../../comps/Careers/Departments';
import Teams from '../../comps/Careers/Teams';

import { openPosisitions } from '../../comps/Careers/data.js';

function Jobs(props) {
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
      <JobsList data={openPosisitions} showAllJobs={true} />

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

export default Jobs;
