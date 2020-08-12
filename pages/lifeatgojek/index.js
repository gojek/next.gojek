import Head from 'next/head';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';

function LifeAtGojek(props) {
  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Careers</title>
      </Head>
      <Navbar bg="#f7ce55" />
      {/* banner and jobs section */}
      <section
        id="banner"
        className="py-5 d-flex align-items-center"
        style={{ backgroundColor: '#f7ce55', minHeight: '80vh' }}
      >
        <div className="container">
          <div className="row align-items-end pb-0 pb-md-5">
            <div className="col-md-6">
              <img
                src="/img/careers/banner.png"
                className="img-fluid banner-img"
                alt="Gojek Banner"
              />
            </div>
            <div className="col-md-6">
              <h1 className="banner-head">Build products that build nations</h1>
              <p className="pt-4 pb-2">
                Gojek operates in some of the world’s fastest growing markets, where Internet
                penetration is skyrocketing and large swathes of the population occupy dense urban
                environments.
              </p>
              <p className="bannerBold">
                We’ve built and scaled 20+ products, disrupted the status quo, and used technology
                to help people do more.
              </p>
              <p className="pt-2">
                While achieving this, we dispelled myths (like those about mythical man months) and
                scaled our volumes 1100x by adhering to lean engineering principles. We advocate
                Pair Programming and Test Driven Development, and we’re absolute suckers for clean
                code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories section */}
      <section id="stories">
        <div className="container">
          <h1 className="heading pr-0 pr-md-5 pb-5">
            We push boundaries, encounter tough technical problems, solve them, and ask for more.{' '}
          </h1>
          <div className="row">
            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name pointer">Why We Swear by the RCA</p>
                  <p className="card-text">
                    An account of how Gojek responds to production issues, and why the RCA is a
                    critical part of the process.
                  </p>
                  <a className="link text-green-light" href="#">
                    Read full story
                    <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name pointer">Why We Swear by the RCA</p>
                  <p className="card-text">
                    An account of how Gojek responds to production issues, and why the RCA is a
                    critical part of the process. RCA is a critical part of the process.
                  </p>
                  <a className="link text-green-light" href="#">
                    Read full story
                    <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name pointer">
                    Why We Swear by the RCA, Why We Swear by the RCA
                  </p>
                  <p className="card-text">
                    An account of how Gojek responds to production issues, and why the RCA is a
                    critical part of the process.
                  </p>
                  <a className="link text-green-light" href="#">
                    Read full story
                    <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cards section */}
      <section id="cards" className="bg-black text-white full-height py-0 py-md-5">
        <div className="container cards">
          <h1 className="header">Build better lives</h1>
          <div className="card-columns text-left pt-5">
            <div className="card" style={{ height: '22.5rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/six.png)` }}
                className="card-content mr-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '15.6rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/two.png)` }}
                className="card-content mr-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '22.5rem' }}>
              <div className="bg-red card-content mr-1"></div>
            </div>

            <div className="card" style={{ height: '18.3rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/five.png)` }}
                className="card-content mx-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '24.4rem' }}>
              <div className=" bg-blue card-content mx-1"></div>
            </div>

            <div className="card" style={{ height: '18.2rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/one.png)` }}
                className="card-content mx-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '22.5rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/four.png)` }}
                className="card-content ml-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '15.7rem' }}>
              <div
                style={{ backgroundImage: `url(/img/life-at-gojek/three.png)` }}
                className="card-content ml-1 bg-img"
              ></div>
            </div>

            <div className="card" style={{ height: '22.5rem' }}>
              <div className="bg-yellow-light card-content ml-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems section */}
      <section id="systems" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-4">
              <h1 className="banner-head">Build compassionate systems</h1>
            </div>
            <div className="col-12 col-lg-5 align-self-end">
              <p className="pr-0 pr-md-5 description">
                At Gojek, leadership is not a spot at the top of a ladder, it is an earned trait
                anyone can inherit. Everyone codes, irrespective of experience, and everyone rolls
                up their sleeves and gets down in the trenches when the going gets tough.{' '}
              </p>
            </div>
          </div>
          <div className="banner" style={{ backgroundColor: 'rgba(116, 210, 231, 0.3)' }}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <p className="description">
                  We use OKRs to guide an engineering organisation distributed across five countries
                  towards a singular mission, we write RCAs to help ourselves learn from mistakes,
                  and we document all of it for posterity.{' '}
                </p>
                <a className="link text-green-light pt-5" href="#">
                  Read full story
                  <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <h2 className="heading">
            When there is potential for genuine impact, it’s never about you.{' '}
          </h2>
          <div className="row justify-content-between py-4">
            <div className="col-12 col-md-6 pr-0 pr-md-5">
              <p>
                Just ask Gojek founder <strong>Nadiem Makarim</strong>, who left the company he
                helped build to become Indonesia’s Minister for Education and Culture, and help
                future generations achieve their fullest potential.
              </p>
            </div>
            <div className="col-12 col-md-6 pl-0 pl-md-5">
              <p>
                In order to continue creating impact at scale, we believe it is important to build a
                company with strong values, one that can endure long beyond the lifetimes of those
                who help build it today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-banner section */}
      <section
        id="mid-banner"
        className="py-5 d-flex align-items-center"
        style={{ backgroundColor: '#ffa000' }}
      >
        <div className="container py-5">
          <div className="row align-items-end pb-0 pb-md-5 justify-content-between">
            <div className="col-md-6">
              <img src={bannerImage} className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
            <div className="col-md-5">
              <h1 className="banner-head">Build startups within a startup</h1>
              <p className="pt-4 pb-4">
                As a company, Gojek has grown far beyond a scrappy startup. However, with three
                SuperApps serving multiple stakeholders within our ecosystem of products, there is
                always something fun to do.
              </p>
              <p className="bannerBold">
                Gojek’s larger platforms have multiple pods that handle hundreds of business use
                cases between them, operating with a level of autonomy that provides the
                fast-moving, high-impact thrill of a startup, within the safety net of a mature
                company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* feedback section */}
      <section
        id="feedback"
        className="text-white full-height py-0 py-md-5"
        style={{ backgroundColor: '#101820' }}
      >
        <div className="container cards">
          <div className="col-12 col-lg-7">
            <h1 className="header mb-5">Work with us. Work with the best in the business.</h1>
            <p>
              It doesn’t matter to us if you lead teams in the biggest companies in tech or live
              among the mountains and code for sheer pleasure. If you’ve got what it takes to help
              build a SuperApp, we’d love to work with you.{' '}
            </p>
          </div>
          <div className="card-columns text-left pt-5">
            <div className="card" style={{ height: '23.1rem' }}>
              <div className="card-content feedback mr-1"></div>
            </div>

            <div className="card" style={{ height: '23.1rem' }}>
              <div className="card-content feedback mr-1"></div>
            </div>

            <div className="card" style={{ height: '48.4rem' }}>
              <div className="card-content feedback mx-1"></div>
            </div>

            <div className="card" style={{ height: '23.1rem' }}>
              <div className="card-content feedback ml-1"></div>
            </div>

            <div className="card" style={{ height: '23.1rem' }}>
              <div className="card-content feedback ml-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* openings and blog section */}
      <section id="openingsBlogs">
        <div className="container">
          <div className="banner mt-0" style={{ backgroundColor: '#ace7f3' }}>
            <div className="row py-5">
              <div className="col-12 col-md-7">
                <h1 className="heading">
                  Getting into Gojek is not easy, but we strive to be a workplace that ensures the
                  decision to leave… is even harder.
                </h1>
                <a className="link text-green-light pt-5" href="#">
                  View open positions
                  <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    How We Pushed a Million Keys to Redis in Seconds{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    Code Coverage: From Failing the Build To Publishing The Report With Gitlab Pages{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    Introducing Trip Advisor, our new feature to help driver partners communicate
                    with customers and cut down cancellations.
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    How One Feature Helps Gojek Reduce Booking Cancellations{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    A product perspective on the recently-introduced Pickup feature for our food
                    delivery service — GoFood
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    How We Pushed a Million Keys to Redis in Seconds{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    Code Coverage: From Failing the Build To Publishing The Report With Gitlab Pages{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    Introducing Trip Advisor, our new feature to help driver partners communicate
                    with customers and cut down cancellations.
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pr-4">
              <div className="card my-4">
                <div className="placeholder"></div>
                <div className="card-body">
                  <p className="card-name blogHeading pointer">
                    How One Feature Helps Gojek Reduce Booking Cancellations{' '}
                  </p>
                  <p className="card-text blogDescription mb-3">
                    A product perspective on the recently-introduced Pickup feature for our food
                    delivery service — GoFood
                  </p>
                  <p className="mb-0">Lorem Ipsum</p>
                  <p className="blogDescription">Apr 01 | 5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LifeAtGojek;
