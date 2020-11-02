import Head from 'next/head';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
import ProductSlider from '../../comps/Home/ProductSlider';
import SlickSlider from '../../comps/Common/SlickSlider';
import { openPosisitions } from '../../comps/Careers/data.js';
import Perks from '../../comps/Culture/Perks';
import Blog from '../../comps/Culture/Blog';
import Link from '../../comps/Common/link';
import CardAnimation from '../../comps/Culture/CardAnimation';
import { socialImpact } from '../../comps/Culture/data';
import Values from '../../comps/Culture/Values';

import {perks} from '../../comps/Culture/data.js';
import {useState, useEffect} from 'react'
import { gsap } from 'gsap/dist/gsap';

function LifeAtGojek(props) {
  const [perksList, setPerksList] = useState(perks.slice(0,6)) 
  

  const handleViewMore = () => {
    
    if(perksList.length === 6 ) {
      setPerksList(perks.slice(0,12))
    }
    else if(perksList.length === 12 ) {
     setPerksList(perks.slice(0,18))
    }
    else if(perksList.length === 18 ) {
      setPerksList(perks.slice(0,24))
     }
     
  }

  useEffect(() => {
    const tl = gsap.timeline({repeat: -1, yoyo: true})

    tl.to('.view-more-button__icon', {
      y: 10,
      duration: 0.5
    })

    gsap.from('.single-perk-card', {
      x: 5,
      opacity: 0,
      duration: 1,
      stagger: 0.7
    })
  }, [])

  return (
    <div>
      <section className="banner life-at-gojek">
        <div className="container">
          <Navbar />
          <div className="row mx-0 align-items-center full-height-one text-white">
            <div className="col-md-6">
              <h1 className="heading pb-3">Culture </h1>
              <p className="pb-3">
                The biggest defining perk of Gojek is its culture. We have a cross-pollination of
                ideas from Singapore, Indonesia, Thailand, Vietnam, and India. Different cultures,
                different mindsets, unified in solving problems and learning.
              </p>
              <h5 className="heading-sm pb-3">
                We ardently believe failing is learning. If we’re not failing, <br />
                we’re not doing it right.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 values">
        <div className="container py-5">
          <h1 className="heading-sm py-5">
            Here are the <span className="text-green">10 values</span> that keep us going:
          </h1>
        </div>
        <div className="container-fluid">
          <Values />
        </div>
      </section>

      <section className="bg-black text-white py-5" id="cards">
        <div className="container">
          <h1 className="heading">Perks and Benefits</h1>
          <Perks perks={perksList} />

        {
          perksList.length < perks.length && (
            <div className="view-more-button">
              <i class="fas fa-chevron-down view-more-button__icon"  onClick={handleViewMore}></i>
            </div>
          )
        }
          
        </div>
      </section>

      <section className="social-impact my-5 py-5">
        <div className="container">
          <CardAnimation data={socialImpact} />
        </div>
      </section>

      <section className="py-5" id="openingsBlogs">
        <div className="container">
          <h1 className="heading">Our Stories</h1>
          <Blog />
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

export default LifeAtGojek;
