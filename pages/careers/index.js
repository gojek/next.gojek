import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Slider from 'react-slick';
import fetch from 'isomorphic-unfetch';
import { InView } from 'react-intersection-observer';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
import JobList from '~/../../comps/Careers/jobsList';

function CareersPage(props) {
  const router = useRouter();
  const params = router.query;
  const [navbarLight, setNavbarLight] = useState(false);
  const [navbarBG, setNavbarBG] = useState('#f7ce55');
  const [departmentCountArray, setDepartmentCountArray] = useState([
    {
      name: 'Engineering',
      count: 0,
    },
    {
      name: 'Design',
      count: 0,
    },
    {
      name: 'People and Culture',
      count: 0,
    },
    {
      name: 'Program Management',
      count: 0,
    },
    {
      name: 'Product',
      count: 0,
    },
    {
      name: 'Science',
      count: 0,
    },
  ]);

  const queryDepartments = typeof params.d == 'string' ? [params.d] : params.d;
  const querylocations = typeof params.l == 'string' ? [params.l] : params.l;

  // function to chnage the navbar color on scroll
  const changeBg = (color, light, entry) => {
    console.log('section', color, entry);
    if (entry.intersectionRatio >= 0.9 && entry.intersectionRatio != 0) {
      setNavbarBG(color);
      setNavbarLight(light);
    } else if (
      entry.intersectionRatio < 0.8 &&
      entry.intersectionRect.bottom < 500 &&
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
          <JobList
            data={props.data}
            department={queryDepartments}
            location={querylocations}
            text={params.q}
            careers
            setDepartmentCount={(list) => setDepartmentCountArray(list)}
          />
        </div>
      </section>

      {/* Departments section */}
      {/* <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#000', true, entry);
        }}
      > */}
      <section id="departments" className="bg-black text-white full-height py-0 py-md-5">
        <div className="container departments">
          <h1 className="header">Choose where you belong</h1>
          <p style={{ maxWidth: '48rem' }} className="mt-4 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="card-columns text-left pt-5">
            {departmentCountArray.map((department, i) => {
              if (i < 6 && i != 1)
                return (
                  <Link href="/department/[id]" as={`/department/${departmentCountArray[i].name}`}>
                    <a
                      className={`card text-white ${i == 0 ? 'highlight ' : ''}${`department${i}`}`}
                    >
                      <div className="card-body">
                        <h2 className="header">{departmentCountArray[i].name}</h2>
                        <p className="sub-head">{departmentCountArray[i].count} Openings</p>
                      </div>
                    </a>
                  </Link>
                );
            })}
            {departmentCountArray.length > 1 && (
              <Link
                href="/department/[id]"
                as={`/department/${departmentCountArray[1].department}`}
              >
                <a className="card highlight department1 text-white">
                  <div className="card-body">
                    <h2 className="header">{departmentCountArray[1].name}</h2>
                    <p className="sub-head">{departmentCountArray[1].count} Openings</p>
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* </InView> */}

      {/* Teams section */}
      {/* <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', false, entry);
        }}
      > */}
      <section id="teams" className="full-height align-items-center py-5">
        <div className="container locationPadding pt-5">
          <h1 className="header pt-4">Teams</h1>
          <p className="mt-4 mb-5" style={{ maxWidth: '48rem' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <Slider
          slidesToShow={3}
          // infinite={false}
          centerMode
          responsive={[
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                // centerMode: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
          ]}
        >
          <div>
            <div className="card mx-1"></div>
          </div>
          <div>
            <div className="card mx-1"></div>
          </div>

          <div>
            <div className="card mx-1"></div>
          </div>

          <div>
            <div className="card mx-1"></div>
          </div>

          <div>
            <div className="card mx-1"></div>
          </div>

          <div>
            <div className="card mx-1"></div>
          </div>

          <div>
            <div className="card mx-1"></div>
          </div>
        </Slider>
      </section>
      {/* </InView> */}
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
