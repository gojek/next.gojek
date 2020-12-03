import Slider from 'react-slick';
import _ from 'underscore';

import { temsSliderSettings } from '../data';

function Values(props) {
  return (
    <div className="row pb-5">
      <div className="col-md-2"></div>
      <div className="col-md-10 px-0 pb-5">
        <Slider {...temsSliderSettings}>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/collaborate-with-compassion.svg"
                className="img-fluid "
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Collaborate <br />
                  with compassion
                </h5>
                <p className="d-none d-md-block">
                  - Be a pleasure to work with. <br />
                  - Support others in areas beyond your scope. <br />
                  - Consider how your actions affect <br />
                  others.
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Be a pleasure to work with. <br />
              - Support others in areas beyond your scope. <br />
              - Consider how your actions affect <br />
              others.
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/criticism is-a-gift.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Criticism <br />
                  is a gift
                </h5>
                <p className="d-none d-md-block">
                  - Actively seek feedback <br />
                  - Proactively give helpful feedback <br />- Genuinely act upon feedback given
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Actively seek feedback <br />
              - Proactively give helpful feedback <br />- Genuinely act upon feedback given
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/be-fast-and-fearless.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Be fast <br />
                  and fearless
                </h5>
                <p className="d-none d-md-block">
                  - Take calculated risks
                  <br />
                  - Value failure as much as success <br />- Have a strong sense of urgency
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Take calculated risks
              <br />
              - Value failure as much as success <br />- Have a strong sense of urgency
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/belief.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Stand up for
                  <br />
                  what you believe in
                </h5>
                <p className="d-none d-md-block">
                  - Say what you mean
                  <br />
                  - Have the courage to disagree <br />- Have a strong moral compass
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Say what you mean
              <br />
              - Have the courage to disagree <br />- Have a strong moral compass
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/earn-your-title.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Earn <br />
                  your title
                </h5>
                <p className="d-none d-md-block">
                  - Walk the talk
                  <br />
                  - Get down in the trenches <br />- Trust your team
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Walk the talk
              <br />
              - Get down in the trenches <br />- Trust your team
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/become-a-scientist.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Become
                  <br />a scientist
                </h5>
                <p className="d-none d-md-block">
                  - Follow the numbers intensively
                  <br />
                  - Find solutions in unexpected places <br />- Learn independently and share
                  knowledge
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Follow the numbers intensively
              <br />
              - Find solutions in unexpected places <br />- Learn independently and share knowledge
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/always-be-prepared.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Always <br />
                  be prepared
                </h5>
                <p className="d-none d-md-block">
                  - Do your homework
                  <br />
                  - Plan out every scenario <br />- Take actions to reduce risk
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Do your homework
              <br />
              - Plan out every scenario <br />- Take actions to reduce risk
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/its-not-about-you.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  It’s not
                  <br />
                  about you
                </h5>
                <p className="d-none d-md-block">
                  - Put the company before self
                  <br />
                  - Be obsessed about customer problems
                  <br />- Have a purpose beyond personal success
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Put the company before self
              <br />
              - Be obsessed about customer problems
              <br />- Have a purpose beyond personal success
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/communicate-with-purpose.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Communicate
                  <br />
                  with purpose
                </h5>
                <p className="d-none d-md-block">
                  - State objectives in every interaction
                  <br />
                  - Align early and consistently
                  <br />- Focus on what is actionable
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - State objectives in every interaction
              <br />
              - Align early and consistently
              <br />- Focus on what is actionable
            </p>
          </div>
          <div className="px-3">
            <div className="d-flex slide">
              <img
                src="../img/life-at-gojek/values/shoot-for-greatness.svg"
                className="img-fluid mr-4"
                alt="..."
              />
              <div className="align-self-center align-self-md-start">
                <h5 className="mt-0 text-lead font-weight-bold">
                  Shoot
                  <br />
                  for greatness
                </h5>
                <p className="d-none d-md-block">
                  - Go the extra mile
                  <br />
                  - Think big
                  <br />- Love challenges
                </p>
              </div>
            </div>
            <p className="d-md-none pt-4">
              - Go the extra mile
              <br />
              - Think big
              <br />- Love challenges
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Values;
