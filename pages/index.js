import InstagramEmbed from 'react-instagram-embed';

import Navbar from '~/../../comps/Navbar';
import ProductSlider from '../comps/Home/ProductSlider';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import CommonCta from '~/../../comps/Common/Cta';
import Funding from '../comps/Home/funding';
import SocialMedia from '../comps/Home/socialMedia';

import styles from './index.module.scss';

const scalePointers = [
  '200 million+ completed orders per month',
  'As of 2019, the Gojek app has been downloaded almost 170 million times',
  '1100% growth in transactions from 2016 to 2019',
  'In 2019, we contributed $7 billion+ to the Indonesian economy',
];

function Home(props) {
  console.log('fdfd', props);
  return (
    <div>
      <Navbar />
      <section className={`py-5 d-flex align-items-md-center align-items-start ${styles.home}`}>
        <div className="container">
          <div className="row align-items-md-center align-items-start">
            <h1 className={`pt-5 px-4 ${styles.heading}`} style={{ marginTop: '50px' }}>
              Gojek is a<br /> SuperApp.{' '}
            </h1>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className={`bg-black text-white ${styles.products}`}>
        <ProductSlider />
      </section>
      {/* End Products section */}

      {/* Open Source */}
      <section className="my-md-5 pb-md-5 pt-5">
        <Projects />
      </section>
      {/* End open source */}

      <section className={`${styles.gojekBg} d-md-block d-none`}>
        <div className="container py-5 full-height d-flex flex-column justify-content-start">
          {/* Row for heading */}
          <div className="row justify-content-end">
            <div className={`col-md-6`}>
              <h4 className={`pt-0 pt-lg-5 ${styles.subHeading}`}>
                Once a call-centre <br /> operation in Jakarta, now{' '}
                <br className="d-none d-lg-block" />
                <span className="text-green-light">a Decacorn in Southeast Asia.</span>
              </h4>
              <ul className={`mt-5 ${styles.pointers} pl-3`}>
                {scalePointers.map((pointer) => (
                  <li className={`${styles.point}`}>{pointer}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.gojekBg} d-md-none d-block`}>
        <div className="container py-5 full-height d-flex flex-column justify-content-end">
          {/* Row for heading */}
          <div className="row justify-content-end">
            <h4 className={`pt-0 pt-lg-5 col-md-6 ${styles.subHeading}`}>
              Once a call-centre <br /> operation in Jakarta, now{' '}
              <br className="d-none d-lg-block" />
              <span className="text-green-light">a Decacorn in Southeast Asia.</span>
            </h4>
          </div>

          {/* Row for description */}
          <div className="row mt-auto mb-3 mb-md-5 justify-content-center justify-content-md-start pl-0 pl-md-5 text-white">
            <ul className={`ext-white col-8 col-md-6 ${styles.pointers}`}>
              <li className={`${styles.point}`}>200 million+ completed orders per month</li>
              <li className={`${styles.point}`}>
                As of 2019, the Gojek app has been downloaded almost 170 million times
              </li>
              <li className={`${styles.point}`}>1100% growth in transactions from 2016 to 2019</li>
              <li className={`${styles.point}`}>
                In 2019, we contributed $7 billion+ to the Indonesian economy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Facts */}
      <section className="bg-black text-white py-5">
        <div className="container pt-md-5">
          <h1 className={`text-center ${styles.fundingHeading}`}>
            Our tech powers
            <br className="d-block d-md-none" /> Southeast Asia
          </h1>

          <TechFacts />

          <div className="row mt-md-5 d-flex">
            <div className="col-4 mt-md-5 pt-md-5 align-self-center">
              <img
                src="./img/home/funding/gojek-funding.svg"
                alt="Funding Gojek"
                className={`img-fluid ${styles.illustration}`}
              />
            </div>
            <div className="col-8 mt-md-5 pt-md-5">
              <h1 className={`${styles.fundingHeading} heading mt-4`}>Funding</h1>
              <p className={`my-4 ${styles.fundingDescription}`}>
                We're incredibly thankful to have partners who help us realise our mission
              </p>
              <div className="d-none d-md-block">
                <Funding />
              </div>
            </div>
            <div className="d-md-none px-4 my-5">
              <Funding />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CommonCta mobile light halfBackground />
      {/* End CTA */}

      {/* <div className="container">
        <h1>Hello</h1>
        <InstagramEmbed
          url="https://instagr.am/p/Zw9o4/"
          clientAccessToken="276438368243|N37FEUhZRRuBewKrfO-5yGQ5Am0"
          maxWidth={500}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div> */}

      <section className={`${styles.socialMedia}`}>
        <h1 className="Social Media"></h1>
        <div className="container">
          <SocialMedia />
        </div>
      </section>
    </div>
  );
}

export default Home;
