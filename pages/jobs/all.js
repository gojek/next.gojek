import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';

function AllJobs(props) {
  const router = useRouter();
  const params = router.query;
  const [navbarLight, setNavbarLight] = useState(true);
  const [navbarBG, setNavbarBG] = useState(true);

  const openPosisitions = props.data;

  useEffect(() => {
    console.log('suto applied filters', params);
  }, []);

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Careers</title>
      </Head>
      <Navbar light={navbarLight} bg={navbarBG} careers />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <JobsList
        data={openPosisitions}
        showAllJobs
        jobsHeading="All Open Positions"
        selectedDepartment={params.d}
      />
    </div>
  );
}

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

export default AllJobs;
