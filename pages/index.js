import { useState } from 'react';
import Slider from 'react-slick';
import HomeSlider from '~/../../comps/Home/slider';
import Goals from '~/../../comps/Home/Goals';
import { InView } from 'react-intersection-observer';
import DynamicComponentWithNoSSR from '~/../../comps/Stories/export';

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
      entry.intersectionRect.bottom < 500 &&
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
          changeBg('#ffa000', true, entry);
        }}
      >
        <section
          id="banner"
          className="bg-orange-lightest full-height py-5 d-flex align-items-center watch"
          watch="#ffa000"
        >
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-12 col-lg-6 order-1 order-lg-0">
                <h1 className="banner-head text-white mt-5">Build products that build nations</h1>
                <a href="#" className="text-pink link">
                  Check out Jobs
                  <i
                    className="fa fa-arrow-right ml-2"
                    style={{ fontSize: '16px', lineHeight: 'normal' }}
                  />
                </a>
              </div>
              <div className="col-12 col-lg-5 homeBannerImage">
                <img src="/img/banner.png" className="img-fluid banner-img" alt="Gojek Banner" />
              </div>
            </div>
          </div>
        </section>
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
          className="full-height d-flex align-items-center py-5 transport watch"
          watch="#fff"
        >
          <div className="container text-center pt-5">
            <h1 className="header pt-5 text-white">Gojek is Indonesia’s first decacorn.</h1>
            <p className="mt-3 mb-5 text-white">
              A one-stop solution for life’s daily frictions. An ecosystem of 20+ products that does
              over 7 million orders a month. <br />
              <strong>All within a single app — a SuperApp.</strong>
            </p>

            <div className="row justify-content-center pb-5">
              <div id="products-carousel" className="col-md-8 pb-5 text-dark">
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
          changeBg('#fff', false, entry);
        }}
      >
        <section id="vision" className="full-height d-flex align-items-center watch" watch="#fff">
          <div className="container py-0 ">
            <Goals />
            {/* <div className="row align-items-end py-0 py-md-4">
              <div className="col-md-6">
                <div className="mx-4">
                  <h1 className="header">Gojek Vision & Mission</h1>
                  <p className="mb-0 pr-0 pr-md-2">
                    We harness cutting edge technology to solve problems that matter to our users.
                    On a larger scale, we’re dedicated to creating (and scaling) positive
                    socio-economic impact on our ecosystem of users.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <div className="card bg-green-light mx-1">
                  <img
                    src="/img/banner-4.png"
                    alt=""
                    className="illustration img-fluid mx-auto mb-n3 d-block"
                  />
                  <span className="highlight py-4 bg-green">2Million+ Driver Partners</span>
                </div>
              </div>
            </div>

            <div className="row align-items-end py-4">
              <div className="col-md-6">
                <div className="card bg-orange-light mt-5 pb-0 mx-1">
                  <img
                    src="/img/banner-5.png"
                    alt=""
                    className="illustration img-fluid mx-auto d-block"
                  />
                  <p className="highlight py-4 bg-orange">400k+ Merchant Partners</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-pink-light mt-5 mx-1">
                  <img
                    src="/img/banner-6.png"
                    alt=""
                    className="illustration img-fluid mx-auto d-block"
                  />
                  <p className="highlight py-4 bg-pink">50k+ Service Providers</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </InView>

      {/* Scale - New*/}
      <section className="bg-black scale py-5">
        <div className="container">
          <div className="row align-items-center full-height ">
            <div className="col-md-4 text-white">
              <h1 className="title">Scale</h1>
              <p className="description">
                Once a call-centre operation trying to make a dent in Jakarta’s traffic by
                organising bike taxi (ojek) services, Gojek is now Southeast Asia’s answer to the
                trials of daily life. Since the launch of our SuperApp in 2015, we’ve contributed
                over $3 billion in added value to the Indonesian economy, scaled order volumes 1100x
                and expanded to Vietnam, Thailand, and Singapore.{' '}
              </p>
            </div>
            <div className="col-md-8">
              <div className="row justify-content-around">
                <div className="col-md-6 mt-5 text-center">
                  <img src="./img/one.png" className="w-100 img-fluid border-0 mx-auto d-block" />
                </div>
                <div className="col-md-6 mt-5">
                  <img src="./img/one.png" className="w-100 img-fluid border-0 mx-auto d-block" />
                </div>
                <div className="col-md-6 mt-5">
                  <img src="./img/one.png" className="w-100 img-fluid border-0 mx-auto d-block" />
                </div>
                <div className="col-md-6 mt-5">
                  <img src="./img/one.png" className="w-100 img-fluid border-0 mx-auto d-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Scale - New */}

      {/* scale section */}
      {/* <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#00aa13', true, entry);
        }}
      >
        <section
          id="scale"
          className="bg-green-light full-height d-flex align-items-center watch"
          watch="#00aa13"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-white">
                <h1 className="header">Scale</h1>
                <p>
                  Once a call-centre operation trying to make a dent in Jakarta’s traffic by
                  organising bike taxi (ojek) services, Gojek is now Southeast Asia’s answer to the
                  trials of daily life. Since the launch of our SuperApp in 2015, we’ve contributed
                  XXXX amount to Indonesia’s economy, scaled order volumes 1100x and expanded to
                  Vietnam, Thailand, and Singapore.{' '}
                </p>
              </div>
            </div>

            <div className="row mt-4 locations justify-content-center">
              <div className="col-md-3 col-10">
                <div className="card bg-yellow">
                  <img src="/img/orders-new.jpg" alt="" className="img-fluid d-block location" />
                </div>
                <p className="highlight py-3">Indonesia</p>
              </div>
              <div className="col-md-3 col-10">
                <div className="card bg-teal">
                  <img src="/img/orders-new.jpg" alt="" className="img-fluid d-block location" />
                </div>
                <p className="highlight py-3">Singapore</p>
              </div>
              <div className="col-md-3 col-10">
                <div className="card bg-teal">
                  <img src="/img/orders-new.jpg" alt="" className="img-fluid d-block location" />
                </div>
                <p className="highlight py-3">Singapore</p>
              </div>
              <div className="col-md-3 col-10">
                <div className="card bg-teal">
                  <img src="/img/orders-new.jpg" alt="" className="img-fluid d-block location" />
                </div>
                <p className="highlight py-3">Singapore</p>
              </div>
            </div>
          </div>
        </section>
      </InView> */}

      {/* funding section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', false, entry);
        }}
      >
        <section
          id="funding"
          className="full-height d-flex align-items-center py-5 watch"
          watch="#fff"
          // style={{ backgroundImage: `url(${fundingBg})` }}
        >
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-12 col-lg-7 px-4 pb-5">
                <h1 className="header mb-3">Funding</h1>
                <p>
                  We’ve also raised a fair amount of capital along the way, including our recently
                  concluded Series F round. Gojek is fortunate to count Sequoia Capital, Google,
                  Tencent Holdings, JD.com, and Visa, among its investors.
                </p>
                <div className="mt-4 investors d-flex justify-content-between flex-wrap">
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                  <img
                    src="/img/logo-horizontal.svg"
                    alt="Logo placeholder"
                    className="img-fluid logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </InView>

      {/* open source section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#fff', false, entry);
        }}
      >
        <section
          id="open-source"
          className="full-height d-flex align-items-center py-5 watch"
          watch="#fff"
        >
          <div className="container text-center pt-5">
            <h1 className="header pt-5">Open Source</h1>
            <p className="mt-3 mb-5">
              We encounter tough problems every day, and figure out how to tackle them by doing what
              we do best — building stuff. As firm believers in the pursuit of a collective quest
              for excellence, the tools we build are diligently open-sourced so others can learn
              from us, just as we have from the community.
            </p>
            {/* Slider  */}
            <div id="opensource-carousel">
              <Slider
                slidesToShow={3}
                responsive={[
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 576,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>
                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>

                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>

                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>

                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>

                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>

                <div>
                  <div className="card mx-3"></div>
                  <p className="highlight">
                    Kingsly <br /> <span>Your own x.509 cert manager</span>
                  </p>
                </div>
              </Slider>
            </div>
            <div className="cta">
              <a href="#" className="text-yellow link">
                Check them out
                <i
                  className="fa fa-arrow-right ml-2"
                  style={{ fontSize: '16px', lineHeight: 'normal' }}
                />
              </a>
            </div>

            {/* End Slider */}
          </div>
        </section>
      </InView>

      {/* Social impact section */}
      <InView
        as="div"
        threshold={[0.9, 0.1]}
        onChange={(inView, entry) => {
          changeBg('#d0006f', true, entry);
        }}
      >
        <section
          id="social-impact"
          className="bg-black full-height d-flex align-items-center py-5 watch"
          watch="#d0006f"
        >
          <div className="container text-white">
            <div className="row">
              <div className="col-lg-5 pr-5 pt-4">
                <h1
                  className="header pt-1"
                  onClick={() => document.getElementById('insta-stories').focus()}
                >
                  Social Impact
                </h1>
                <p className="mb-3">
                  The Gojek story is not just about helping customers book rides and buy things. We
                  strive to better the lives of our partners in measurable ways.
                </p>
                <p className="mb-3">
                  The average Gojek driver partner is able to generate revenue of xxx, while
                  merchants who sign up for GoFood have reported order volumes increasing by as much
                  as 345%.
                </p>
                <p>
                  The income generated by Gojek partners alone has contributed xxx to Indonesia’s
                  economy.
                </p>
                <a href="#" className="text-yellow link">
                  See more stories{' '}
                  <i
                    className="fa fa-arrow-right ml-2"
                    style={{ fontSize: '16px', lineHeight: 'normal' }}
                  />
                </a>
              </div>
              <div className="col-lg-7 pl-2 pt-4 pt-lg-0" id="insta-stories">
                <DynamicComponentWithNoSSR />
              </div>
            </div>
          </div>
        </section>
      </InView>
    </div>
  );
}

export default HomePage;
