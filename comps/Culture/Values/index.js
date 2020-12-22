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
                <ul className="d-none d-md-block pl-3">
                  <li>Be a pleasure to work with </li>
                  <li>Support others in areas beyond your scope </li>
                  <li>Consider how your actions affect others.</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Be a pleasure to work with </li>
              <li>Support others in areas beyond your scope </li>
              <li>Consider how your actions affect </li>
              others.
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li>Actively seek feedback </li>
                  <li>Proactively give helpful feedback </li>
                  <li>Genuinely act upon feedback given</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li> Actively seek feedback </li>
              <li>Proactively give helpful feedback </li>
              <li>Genuinely act upon feedback given</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li>Take calculated risks</li>
                  <li>Value failure as much as success </li>
                  <li>Have a strong sense of urgency</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Take calculated risks</li>
              <li>Value failure as much as success </li>
              <li> Have a strong sense of urgency</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li>Say what you mean</li>
                  <li>Have the courage to disagree </li>
                  <li> Have a strong moral compass</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Say what you mean</li>

              <li>Have the courage to disagree </li>
              <li>Have a strong moral compass</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li>Walk the talk</li>
                  <li>Get down in the trenches </li>
                  <li>Trust your team</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Walk the talk</li>
              <li>Get down in the trenches</li>
              <li>Trust your team</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li> Follow the numbers intensively</li>
                  <li> Find solutions in unexpected places </li>
                  <li> Learn independently and share knowledge</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Follow the numbers intensively</li>
              <li>Find solutions in unexpected places </li>{' '}
              <li>Learn independently and share knowledge</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li> Do your homework</li>
                  <li> Plan out every scenario </li>
                  <li> Take actions to reduce risk</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li> Do your homework</li>
              <li> Plan out every scenario</li>
              <li> Take actions to reduce risk</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li> Put the company before self</li>
                  <li>Be obsessed about customer problems</li>
                  <li> Have a purpose beyond personal success</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li> Put the company before self</li>
              <li> Be obsessed about customer problems</li>
              <li> Have a purpose beyond personal success</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li> State objectives in every interaction</li>
                  <li> Align early and consistently</li>
                  <li> Focus on what is actionable</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li> State objectives in every interaction</li>
              <li> Align early and consistently</li>
              <li> Focus on what is actionable</li>
            </ul>
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
                <ul className="d-none d-md-block pl-3">
                  <li> Go the extra mile</li>
                  <li> Think big</li>
                  <li> Love challenges</li>
                </ul>
              </div>
            </div>
            <ul className="d-md-none pt-4 pl-3">
              <li>Go the extra mile</li>
              <li>Think big</li>
              <li>Love challenges</li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Values;
