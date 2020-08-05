import { useState } from 'react';
import Slider from 'react-slick';
import HomeSlider from '~/../../comps/Home/slider';
import Goals from '~/../../comps/Home/Goals';
import { InView } from 'react-intersection-observer';
import DynamicComponentWithNoSSR from '~/../../comps/Stories/export';
import Project from '../comps/Home/OpenSource';

import Navbar from '~/../../comps/Navbar';

function HomePage(props) {
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
      <Navbar light={navbarLight} bg={navbarBG} />

      {/* banner section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#f74344', true, entry);
        }}
      >
        <section className="watch home-banner" watch="#ffa000"></section>
      </InView>

      {/* products section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', false, entry);
        }}
      >
        <section
          id="products"
          className="full-height d-flex align-items-center transport watch py-5 watch"
          watch="#fff"
        >
          <div className="container text-center">
            <h1 className="head text-white">Gojek is Indonesia’s first decacorn.</h1>
            <p className="text-white w-75 mx-auto font-demi pb-4">
              An ecosystem of 20+ products that does over 7 million orders a month across
              ride-hailing, food delivery, payments, logistics, entertainment, and lifestyle
              services. <strong>All within a single app — a SuperApp.</strong>
            </p>

            <div className="row justify-content-center ">
              <div id="products-carousel" className="col-md-8 text-dark">
                <HomeSlider />
              </div>
            </div>
          </div>
        </section>
      </InView>

      {/* vision section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#000', false, entry);
        }}
      >
        <section className="vision full-height d-flex align-items-center watch" watch="#000">
          <div className="container">
            <Goals />
          </div>
        </section>
      </InView>

      {/* Scale - New*/}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#101820', true, entry);
        }}
      >
        <section className="bg-black scale">
          <div className="container">
            <div className="row align-items-center full-height">
              <div className="col-md-4 text-white">
                <h1 className="head">Scale</h1>
                <p>
                  Once a call-centre operation trying to make a dent in Jakarta’s traffic by
                  organising bike taxi (ojek) services, Gojek is now Southeast Asia’s answer to the
                  trials of daily life. Since the launch of our SuperApp in 2015, we’ve contributed
                  over $3 billion in added value to the Indonesian economy, scaled order volumes
                  1100x and expanded to Vietnam, Thailand, and Singapore.{' '}
                </p>
              </div>
              <div className="col-md-8">
                <div className="row justify-content-around">
                  <div className="col-md-6">
                    <img
                      src="./img/home/gojek-indonasia.png"
                      className="mb-5 w-100 img-fluid border-0 mx-auto d-block"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./img/home/gojek-3.png"
                      className="mb-5 w-100 img-fluid border-0 mx-auto d-block"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./img/home/gojek-1.png"
                      className="mb-5 w-100 img-fluid border-0 mx-auto d-block"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./img/home/go-viet.png"
                      className="mb-5 w-100 img-fluid border-0 mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Scale - New */}
      </InView>

      {/* Funding */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', true, entry);
        }}
      >
        <section className="funding">
          <div className="container">
            <div className="row align-items-center full-height py-5">
              <div className="col-md-3">
                <img src="./img/funding.png" />
              </div>
              <div className="col-md-9">
                <h1 className="head">Funding</h1>
                <p className="w-75 pb-4">
                  We’ve raised a fair amount of capital along the way, and recently closed our
                  Series F funding round. Gojek is fortunate to count Sequoia Capital, Google,
                  Tencent Holdings, JD.com, and Visa, among its investors.
                </p>
                <div className="row justify-contet-around">
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                  <div className="col-md-4 mb-4">
                    <img src="./img/logo-horizontal.svg" className="img-fluid border logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InView>
      {/* End Funding */}

      {/* Open Source */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', false, entry);
        }}
      >
        <section
          id="open-source"
          className="full-height d-flex align-items-center watch pb-5"
          watch="#fff"
        >
          <Project />
        </section>
      </InView>

      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#101820', true, entry);
        }}
      >
        <section className="bg-black">
          <div className="container">
            <div className="row align-items-center full-height ">
              <div className="col-md-4 text-white">
                <h1 className="head">Social Impact</h1>
                <p className="pb-5">
                  The Gojek story is not just about helping customers book rides and buy things. An
                  equally important component is ensuring we better the lives of our partners in
                  some measurable way. The average Gojek driver partner is able to generate an
                  income in excess of Indonesia’s average minimum wage, while merchants who sign up
                  for GoFood have reported order volumes increasing by as much as 345%
                </p>
                <a href="#" className="text-yellow link">
                  Chek them out
                  <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div className="col-md-8">
                <div className="" id="insta-stories">
                  <DynamicComponentWithNoSSR />
                </div>
              </div>
            </div>
          </div>
        </section>
      </InView>
      {/* End Open Source */}
    </div>
  );
}

export default HomePage;
