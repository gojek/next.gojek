import Navbar from '~/../../comps/Navbar';
import ProductSlider from '../comps/Home/ProductSlider';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import Link from '../comps/Common/link';

function Home(props) {
  return (
    <div>
      <section className="banner home">
        <div className="container">
          <Navbar />
          <div className="row mx-0 align-items-center image-container">
            <h1 className="heading">Gojek is a SuperApp. </h1>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="products bg-black text-white">
        <ProductSlider />
      </section>
      {/* End second section */}

      {/* Open Source */}
      <section className="my-5 pb-5">
        <Projects />
      </section>
      {/* End open source */}

      {/* CTA */}
      <section className="position-relative full-height pt-5">
        <img src="../img/home/one.png" alt="" className="img-fluid w-100 bg" />
        <div className="position-absolute w-100" style={{ top: '0' }}>
          <div className="container">
            <div className="row d-flex ">
              <div className="col-md-6 align-self-end  pointers text-white">
                <ul className="text-lead pl-5">
                  <li className="pb-3">200 million+ completed orders per month 1.</li>
                  <li className="pb-3">
                    As of 2019, the Gojek app has been downloaded almost 170 million times.
                  </li>
                  <li className="pb-3">1100% growth in transactions from 2016 to 2019.</li>
                  <li className="pb-3">
                    In 2019, we contributed $7 billion+ to the Indonesian economy.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="heading-sm pt-5">
                  Once a call-centre
                  <br /> operation in Jakarta, now <br />
                  <span className="text-green-light">a Decacorn in Southeast Asia.</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA section  */}

      {/* Tech Facts */}
      <section className="bg-gray pt-5 tech-facts">
        <div className="container pt-5">
          <h1 className="text-center py-5 heading">Tech Facts</h1>

          <TechFacts />

          <div className="row mt-5 pt-5 d-flex">
            <div className="col-md-4 mt-5 pt-5">
              <img src="./img/home/gojek-funding.PNG" alt="Funding Gojek" />
            </div>
            <div className="col-md-8 funding mt-5 pt-5">
              <h1 className="heading">Funding</h1>
              <p className="my-5 description">
                We’ve raised a fair amount of capital along the way, and recently closed our Series
                F funding round. Gojek is fortunate to count Sequoia Capital, Google, Tencent
                Holdings, JD.com, and Visa, among its investors.
              </p>
              <div className="row">
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img
                      src="./img/home/google.png"
                      className="img-fluid rounded-pill px-5 align-middle"
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/jd.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img
                      src="./img/home/google.png"
                      className="img-fluid rounded-pill px-5 align-middle"
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/jd.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img
                      src="./img/home/google.png"
                      className="img-fluid rounded-pill px-5 align-middle"
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/jd.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="logo">
                    <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white social-media">
        <div className="container py-5">
          <div className="w-50 py-5">
            <h1 className="pb-4 heading">Social Media</h1>
            <p className="description">
              Want to know the daily challenges, unconventional work culture and inner workings of
              Southeast Asia’s largest startup? We have stories to tell.
            </p>
            <p>(Editorial favourite: Life At Gojek Instagram &amp; Gojek Tech Instagram)</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/gojek-instagram.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-instagram position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                className="card position-relative"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black cta py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card bg-green p-5 text-white">
                <div className="card-body">
                  <p className="w-75 text-lead">
                    We're dedicated to creating (and scaling) positive socio-economic impact for our
                    ecosystem of users.{' '}
                  </p>
                  {/* <a href="#" className="text-yellow link">
                    Join Us
                  </a> */}
                  <Link href="/jobs" text="Join Us" color="text-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA */}
    </div>
  );
}

export default Home;
