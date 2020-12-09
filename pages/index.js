import Navbar from '~/../../comps/Navbar';
import ProductSlider from '../comps/Home/ProductSlider';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import Link from '../comps/Common/link';
import CommonCta from '~/../../comps/Common/Cta';
import Funding from '../comps/Home/funding';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function Home(props) {
  return (
    <div>
      <Navbar />
      <section className="py-5 d-flex align-items-md-center align-items-start home">
        <div className="container">
          <div className="row align-items-center">
            <h1 className="heading pt-5 text-white d-block d-md-none px-3 pt-5">
              Gojek is a<br /> SuperApp.{' '}
            </h1>

            <h1 className="heading pt-5 d-none d-md-block">Gojek is a SuperApp. </h1>
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

          <div className="row funding mt-md-5 pt-md-5 d-flex">
            <div className="col-4 mt-md-5 pt-md-5 align-self-center">
              <img
                src="./img/home/funding/gojek-funding.png"
                alt="Funding Gojek"
                className="img-fluid illustration"
              />
            </div>
            <div className="col-8  mt-md-5 pt-md-5">
              <h1 className="heading mt-4">Funding</h1>
              <p className="description my-4">
                We’ve raised a fair amount of capital along the way, and recently closed our Series
                F funding round. Gojek is fortunate to count Sequoia Capital, Google, Tencent
                Holdings, JD.com, and Visa, among its investors.
              </p>
              <div className="d-none d-md-block">
                <Funding />
              </div>
            </div>
            <div className="d-md-none funding px-4 my-5">
              <Funding />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white social-media">
        <div className="container py-5">
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
                <a
                  href="https://www.instagram.com/gojek.tech/"
                  target="_blank"
                  className="card border-0"
                >
                  <img src="/img/home/social/Insta.png" alt="GOJEK Tech Instagram page" />
                </a>
              </div>
              <div className="col-md-4 mb-5">
                <a
                  href="https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured"
                  target="_blank"
                  className="card border-0"
                >
                  <img src="/img/home/social/youtube.png" alt="GOJEK Tech Youtube channel" />
                </a>
              </div>
              <div className="col-md-4 mb-5">
                <a
                  href="https://www.facebook.com/gojektech"
                  target="_blank"
                  className="card border-0"
                >
                  <img src="/img/home/social/Fb.png" alt="GOJEK Tech Facebook page" />
                </a>
              </div>
              <div className="col-md-4 mb-5">
                <a
                  href="https://twitter.com/gojektech"
                  target="_blank"
                  className="card border-0"
                >
                  <img src="/img/home/social/Twitter.png" alt="GOJEK Tech Twitter account" />
                </a>
              </div>
              <div className="col-md-4 mb-5">
                {/* <div
                  className="card position-relative"
                > */}
                <a
                  href="https://www.linkedin.com/company/gojektech/"
                  target="_blank"
                  className="card border-0"
                >
                  <img src="/img/home/social/LinkedIn.png" alt="GOJEK Tech LinkedIn page" />
                </a>
                {/* </div> */}
              </div>
              <div className="col-md-4 mb-5">
                <a
                  href="https://www.gojek.io/articles/"
                  target="_blank"
                  className="card"
                  style={{ backgroundImage: `url(/img/home/social/blog-thumbnail.png)` }}
                >
                  {/* <div
                    className="card position-relative"
                  ></div> */}
                </a>
              </div>
            </div>
          </div>
          <div className="d-md-none">
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
        </div>
      </section>

      {/* CTA */}
      <CommonCta mobile />
      {/* End CTA */}
    </div>
  );
}

export default Home;
