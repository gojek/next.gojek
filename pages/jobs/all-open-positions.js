import { useState } from 'react';
import Head from 'next/head';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';

import { openPosisitions } from '../../comps/Careers/data.js';

function AllJobs() {
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
      <JobsList data={openPosisitions} showAllJobs={false} jobsHeading="All Open Positions" />
    </div>
  );
}

export default AllJobs;
