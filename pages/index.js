import Navbar from '~/../../comps/Navbar';
import ProductSlider from '../comps/Home/ProductSlider';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import Link from '../comps/Common/link';
import CommonCta from '~/../../comps/Common/Cta';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function Home(props) {
  const fundingList = (
    <div className="row">
      <div className="col-4 mb-5">
        <div className="logo">
          <img
            src="./img/home/google.png"
            className="img-fluid rounded-pill px-2 px-lg-5 align-middle"
          />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/jd.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img
            src="./img/home/google.png"
            className="img-fluid rounded-pill px-2 px-lg-5 align-middle"
          />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/jd.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img
            src="./img/home/google.png"
            className="img-fluid rounded-pill px-2 px-lg-5 align-middle"
          />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/jd.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="logo">
          <img src="./img/home/tencent.png" className="img-fluid rounded-pill px-2 px-lg-5" />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Navbar />
      <section className="py-5 d-flex align-items-md-center home">
        <div className="container">
          <div className="align-items-center">
            <h1 className="heading pt-5 text-white d-md-none">Gojek is a SuperApp. </h1>
            <h1 className="heading pt-5 d-none text-white d-md-block">Gojek is a SuperApp. </h1>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="products bg-black text-white">
        <ProductSlider />
      </section>
      {/* End second section */}

      {/* Open Source */}
      <section className="my-5 pb-5 d-none d-md-block">
        <Projects />
      </section>
      {/* End open source */}

      <section className="pt-5 d-none d-lg-block">
        <div className="w-100 gojek-bg">
          <div className="container">
            <div
              className="row d-flex align-items-center justify-content-center"
              style={{ minHeight: '100vh' }}
            >
              <div className="col-md-6 align-self-end pb-xl-5 pointers text-white">
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
              <div className="col-md-6 align-self-start pt-5">
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

      {/* Tech Facts */}
      <section className="bg-gray pt-5 tech-facts">
        <div className="container pt-md-5">
          <h1 className="text-center py-5 heading">Tech Facts</h1>

          <TechFacts />

          <div className="row mt-md-5 pt-md-5 d-flex">
            <div className="col-8 offset-4 d-md-none">
              <h1 className="heading mb-4">Funding</h1>
            </div>
            <div className="col-4 mt-md-5 pt-md-5 align-self-md-center">
              <img src="./img/home/gojek-funding.PNG" alt="Funding Gojek" className="img-fluid" />
            </div>
            <div className="col-8 funding mt-md-5 pt-md-5">
              <h1 className="heading d-none d-md-block">Funding</h1>
              <p className="mb-5 description">
                We’ve raised a fair amount of capital along the way, and recently closed our Series
                F funding round. Gojek is fortunate to count Sequoia Capital, Google, Tencent
                Holdings, JD.com, and Visa, among its investors.
              </p>
              <div className="d-none d-md-block">{fundingList}</div>
            </div>
            <div className="d-md-none funding px-4 mt-4">{fundingList}</div>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white social-media">
        <div className="container pt-5 pb-4 pb-md-5">
          <div className="intro py-md-5 px-5 px-md-0">
            <h1 className="pb-4 heading">Social Media</h1>
            <p className="description">
              Want to know the daily challenges, unconventional work culture and inner workings of
              Southeast Asia’s largest startup? We have stories to tell.
            </p>
            <p>(Editorial favourite: Life At Gojek Instagram &amp; Gojek Tech Instagram)</p>
          </div>
          <div className="d-none d-md-block">
            <div className="row ">
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
        </div>
        <div className="d-md-none pb-5">
          <Slider {...sliderSettings}>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/gojek-instagram.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-instagram position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
            <div>
              <div
                className="card position-relative mx-2"
                style={{ backgroundImage: `url(/img/home/youtube.png)` }}
              >
                <a href="/" target="_blank" className="text-white">
                  <i className="fab fa-youtube position-absolute overlay-icon"></i>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* CTA */}
      <CommonCta mobile />
      {/* End CTA */}
    </div>
  );
}

export default Home;
