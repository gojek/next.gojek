import { useState } from 'react';
import { useRouter } from 'next/router';
import PageMeta from '~/../../comps/Common/head';

import Navbar from '~/../../comps/Navbar';
import JobsList from '../../comps/Careers/JobsList/index';

function AllJobs(props) {
  const router = useRouter();
  const params = router.query;
  const [navbarLight, setNavbarLight] = useState(true);
  const [navbarBG, setNavbarBG] = useState(true);

  const openPosisitions = props.data;

  return (
    <div className="text-center text-md-left">
      <PageMeta
        title="Gojek Careers | Check out the current job openings at Gojek Tech"
        description="Gojek is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
      />
      <Navbar light={navbarLight} bg={navbarBG} careers />

      <div className="yellow-bg-gradient"></div>
      {/* banner and jobs section */}
      <JobsList
        data={openPosisitions}
        showAllJobs={true}
        jobsHeading="All Open Positions"
        selectedDepartment={params.d}
      />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const response = await fetch(process.env.jobDetailsApi);

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
