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
      <section id="banner" className=" full-height py-5 d-flex align-items-end">
        <div className="container">
          <div className="row align-items-end pb-0 pb-md-5">
            <div className="col-md-7">
              <img
                src="./img/careers/banner.png"
                className="img-fluid banner-img"
                alt="Gojek Banner"
              />
            </div>
            <div className="col-md-5">
              <h1 className="head">
                We give you <br /> leverage to create <br /> impact at scale.
              </h1>
              <p className="py-4" id="filters">
                Join a company that strives to support you. Not just 'your best work', but all of
                you.
              </p>
            </div>
          </div>
          <JobsList data={openPosisitions} />
        </div>
      </section>
    </div>
  );
}

export default Jobs;
