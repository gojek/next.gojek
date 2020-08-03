import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Slider from 'react-slick';
import fetch from 'isomorphic-unfetch';
import { InView } from 'react-intersection-observer';

import Navbar from '~/../../comps/Navbar';
import Jobs from '../../comps/Careers/jobs';
import { departments } from '../../comps/Careers/data';
import bannerImage from '~/../../static/banner.png';
import JobList from '~/../../comps/Careers/jobsList';

function CareersPage(props) {
  const router = useRouter();
  const [navbarLight, setNavbarLight] = useState(true);
  const [navbarBG, setNavbarBG] = useState(true);

  // function to chnage the navbar color on scroll
  const changeBg = (color, light, entry) => {
    if (entry.intersectionRatio >= 0.9 && entry.intersectionRatio != 0) {
      setNavbarBG(color);
      setNavbarLight(light);
    } else if (
      entry.intersectionRatio < 0.8 &&
      entry.intersectionRect.bottom < 300 &&
      entry.intersectionRatio != 0
    ) {
      setNavbarBG(color);
      setNavbarLight(light);
    }
  };

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
          <Jobs />
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
