import PageMeta from '~/../../comps/Common/head';
import Navbar from '~/../../comps/Navbar';
import Perks from '../../comps/Culture/perks';
import Blog from '../../comps/Culture/Blog';
import Values from '../../comps/Culture/Values/index';
import { CTA } from '../../comps/BlogNew/cta';
import { perks, mobilePerks } from '../../comps/Culture/data.js';
import CommonCta from '~/../../comps/Common/Cta';
import { useState, useEffect } from 'react';
import Impact from '~/../../comps/Culture/SocialImpact/index';
import { gsap } from 'gsap/dist/gsap';

import styles from './index.module.scss';

function LifeAtGojek() {
  const [showPerks, setPerks] = useState(1);

  const handleViewMore = () => {
    if (showPerks < 2) {
      setPerks(showPerks + 1);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to('.view-more-button__icon', {
      y: 10,
      duration: 0.5,
    });

    gsap.from('.single-perk-card', {
      x: 10,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
  }, []);

  return (
    <div>
      <PageMeta
        title="Life@Gojek Tech"
        description="Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire."
      />

      <Navbar whiteNav />

      <section className={`${styles.banner}`}>
        <div className="container d-flex align-items-center full-height text-white">
          <div className="col-md-6 col-10 px-0 position-relative pt-md-5 mt-md-5 pb-5 pb-md-0 mb-5 mb-md-0">
            <h1 className={`pb-4 pb-md-3 ${styles.heading}`}>Culture </h1>
            <p className="pb-3">
              The biggest defining perk of Gojek is its culture. We have a cross-pollination of
              ideas from Singapore, Indonesia, Thailand, Vietnam, and India. Different cultures,
              different mindsets, unified in solving problems and learning.
            </p>
            <h5 className={`pb-3 ${styles.subHeading}`}>
              We ardently believe failing is <br className="d-block d-md-none" /> learning. If we’re
              not failing, <br className="d-block d-md-none" /> we’re not doing it right.
            </h5>
          </div>
        </div>
      </section>

      <section className="py-5 values">
        <div className="container py-3">
          <h1 className={`py-md-5 ${styles.valuesHeading}`}>Our values</h1>
        </div>
        <div className="container-fluid pb-3">
          <Values />
        </div>
      </section>

      <section className="bg-black text-white py-5 perks">
        <div className="container py-5">
          <h1 className={`py-md-3 mb-md-0 ${styles.heading}`}>We care for you</h1>
          <Perks perks={perks} showPerks={showPerks} mobilePerks={mobilePerks} />

          {showPerks < 2 && (
            <div className={`text-center`}>
              <i
                className={`fas fa-chevron-down view-more-button__icon `}
                onClick={handleViewMore}
              ></i>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white pt-0 mt-0 pb-5 pt-md-5 pb-md-5 mt-md-5 mb-md-5">
        <CTA
          title="We're dedicated to creating (and scaling) positive socio-economic impact for our ecosystem of users. "
          href="/jobs"
          hrefText="Apply Now"
          font="small"
        />
      </section>

      <section className="py-5">
        <Impact />
      </section>

      <section className="py-5" id="openingsBlogs">
        <div className="container">
          <h1 className={`${styles.heading} pb-4`}>Our Stories</h1>
          <Blog />
        </div>
      </section>

      {/* CTA */}
      <CommonCta mobile />
      {/* End CTA */}
    </div>
  );
}

export default LifeAtGojek;
