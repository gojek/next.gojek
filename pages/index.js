import Navbar from '~/../../comps/Navbar';
import ProductSlider from '../comps/Home/ProductSlider';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import Link from '../comps/Common/link';
import CommonCta from '~/../../comps/Common/Cta';
import Funding from '../comps/Home/funding';
import Slider from 'react-slick';
import { socialMedia } from '../comps/Home/data.js';

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
          <div className="row align-items-md-center align-items-start">
            <h1
              className="heading pt-5 d-block d-md-none text-white px-4"
              style={{ marginTop: '50px' }}
            >
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
      <section className="my-md-5 pb-md-5 pt-5">
        <Projects />
      </section>
      {/* End open source */}

      <section className="gojek-bg">
        <div className="container py-5 full-height d-flex flex-column justify-content-start">
          {/* Row for heading */}
          <div className="row justify-content-end">
            <h4 className="heading-sm pt-0 pt-lg-5 col-md-6">
              Once a call-centre <br /> operation in Jakarta, now{' '}
              <br className="d-none d-lg-block" />
              <span className="text-green-light">a Decacorn in Southeast Asia.</span>
            </h4>
          </div>

          {/* Row for description */}
          <div className="row mt-auto mb-3 mb-md-5 pointers justify-content-center justify-content-md-start pl-0 pl-md-5">
            <ul className="text-lead text-white col-8 col-md-6">
              <li>200 million+ completed orders per month</li>
              <li>As of 2019, the Gojek app has been downloaded almost 170 million times</li>
              <li>1100% growth in transactions from 2016 to 2019</li>
              <li>In 2019, we contributed $7 billion+ to the Indonesian economy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Facts */}
      <section className="bg-gray pt-5 tech-facts">
        <div className="container pt-md-5">
          <h1 className="text-center py-5 heading">Our tech powers Southeast Asia</h1>

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
                We're incredibly thankful to have partners who help us realise our mission
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

      <section className="bg-black pt-5 text-white social-media">
        <div className="container py-5">
          <div className="intro py-md-5 px-5 px-md-0">
            <h1 className="pb-4 heading sr-only">Social Media</h1>
            <p className="description">
              Want to know the daily challenges, unconventional work culture and inner workings of
              Southeast Asia’s largest startup? We have stories to tell.
            </p>
            <p>
              (Editorial favourite:{' '}
              <a
                href="https://www.instagram.com/lifeatgojek/"
                target="_blank"
                className="text-green-light"
              >
                {' '}
                Life@Gojek{' '}
              </a>
              Instagram &amp;{' '}
              <a
                href="https://instagram.com/gojek.tech"
                target="_blank"
                className="text-orange-light"
              >
                {' '}
                Gojek Tech
              </a>{' '}
              Instagram)
            </p>
          </div>
          <div className="d-none d-md-block">
            <div className="row">
              {socialMedia.map((data, i) => (
                <div className="col-md-4 mb-5">
                  <a href={data.link} target="_blank" className="card border-0">
                    <img className="img-fluid" src={data.img} alt={data.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="d-md-none pt-5">
            <Slider {...sliderSettings}>
              {socialMedia.map((data, i) => (
                <div className="col-md-4 mb-5 pl-0">
                  <a href={data.link} target="_blank" className="card border-0">
                    <img className="img-fluid" src={data.img} alt={data.alt} />
                  </a>
                </div>
              ))}
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
