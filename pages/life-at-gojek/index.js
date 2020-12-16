import Head from 'next/head';

import Navbar from '~/../../comps/Navbar';
import Perks from '../../comps/Culture/Perks';
import Blog from '../../comps/Culture/Blog';
import Values from '../../comps/Culture/Values/index';
import { CTA } from '../../comps/BlogNew/cta';
import { perks, mobilePerks } from '../../comps/Culture/data.js';
import CommonCta from '~/../../comps/Common/Cta';
import { useState, useEffect } from 'react';
import Impact from '~/../../comps/Culture/SocialImpact/index';
import { gsap } from 'gsap/dist/gsap';

function LifeAtGojek(props) {
  const [showPerks, setPerks] = useState(1);

  const handleViewMore = () => {
    if (showPerks !== 3) {
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
      <Navbar whiteNav />
      <section className="banner life-at-gojek">
        <div className="container">
          <div className="row mx-0 align-items-center full-height-one text-white">
            <div className="col-md-6 col-10 px-0 position-relative wrapper">
              <h1 className="heading pb-4 pb-md-3 bannerHeading">Culture </h1>
              <p className="pb-3">
                The biggest defining perk of Gojek is its culture. We have a cross-pollination of
                ideas from Singapore, Indonesia, Thailand, Vietnam, and India. Different cultures,
                different mindsets, unified in solving problems and learning.
              </p>
              <h5 className="heading-sm pb-3">
                We ardently believe failing is learning. If we’re not failing, we’re not doing it
                right.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 values">
        <div className="container py-5">
          <h1 className="heading-sm py-md-5">
            Here are the <span className="text-green">10 values</span> that keep us going:
          </h1>
        </div>
        <div className="container-fluid pb-5">
          <Values />
        </div>
      </section>

      <section className="bg-black text-white py-5 perks">
        <div className="container py-5">
          <h1 className="heading py-md-3 mb-md-0">Perks and Benefits</h1>
          <Perks perks={perks} showPerks={showPerks} mobilePerks={mobilePerks} />

          {showPerks < 3 && (
            <div className="view-more-button text-center">
              <i class="fas fa-chevron-down view-more-button__icon" onClick={handleViewMore}></i>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white mt-5 pt-5">
        <div className="container">
          <CTA
            title="We're dedicated to creating (and scaling) positive socio-economic impact for our ecosystem of users. "
            href="/jobs"
            hrefText="Apply Now"
            font="small"
          />
        </div>
      </section>

      <section className="my-md-5 pb-md-5 pt-5">
        <Impact />
      </section>

      <section className="py-5" id="openingsBlogs">
        <div className="container px-0 px-md-3">
          <h1 className="heading pl-4 pl-md-3">Our Stories</h1>
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
