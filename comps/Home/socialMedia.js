import styles from './home.module.scss';
import Slider from 'react-slick';

import { socialMediaData } from './data';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
};

const socialIcons = [
  {
    icon: 'fa-instagram',
    title: '',
  },
  {
    icon: 'fa-',
    title: '',
  },
  {
    icon: '',
    title: '',
  },
];

function SocialMedia() {
  return (
    <div className="d-flex flex-column justify-content-around full-height">
      <div></div>
      <div>
        <div
          className={`${styles.socialMediaDescription} my-5`}
          dangerouslySetInnerHTML={{
            __html: socialMediaData.description,
          }}
        ></div>
        <div className="d-none d-md-block">
          <div className="row pb-5 ">
            <div className="col-md-4 ">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>

            <div className="col-md-4 ">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>

            <div className="col-md-4 ">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block d-md-none pb-5">
          <Slider {...sliderSettings}>
            <div className="col-md-12 pl-0">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>
            <div className="col-md-12 pl-0">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>
            <div className="col-md-12 pl-0">
              <div
                class={`${styles.socialMediaCard} card border-0`}
                style={{ backgroundImage: `url(/img/home/open-source/heimdall.svg)` }}
              >
                <a href="" target="_blank"></a>
              </div>
            </div>
          </Slider>
        </div>

        <div className="mb-5 my-md-5">
          <div className="w-100 text-md-center">
            <a className={`${styles.moreBtn} btn bg-green-light rounded-pill px-4 text-white`} href="https://www.instagram.com/lifeatgojek/" target="_blank">
              <i className={`fab fa-instagram pt-2 ${styles.icon}`}></i>
              <span className="align-middle"> More like this</span>
            </a>
          </div>
          <div className=" pt-5 mt-md-5 row justify-content-center">
            <div className="col-md-5 pb-5">
              <p className={` d-md-inline-block pr-3 pb-3 ${styles.name}`}>Life at Gojek</p>
              <ul className="list-inline d-md-inline-block">
                <li className="list-inline-item mr-3">
                  <a href="#" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-instagram align-middle ${styles.icon}`}></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-instagram align-middle ${styles.icon}`}></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-youtube align-middle ${styles.icon}`}></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <p className={` d-md-inline-block pr-3 pb-3 ${styles.name}`}>Gojek Tech</p>
              <ul className="list-inline d-md-inline-block">
                <li className="list-inline-item mr-3">
                  <a href="https://www.instagram.com/gojek.tech/" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-instagram align-middle ${styles.icon}`}></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="https://www.linkedin.com/company/gojektech/" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-linkedin-in align-middle ${styles.icon}`}></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured" target="_blank" className={`${styles.socialIcon} text-white`}>
                    <i className={`fab fa-youtube align-middle ${styles.icon}`}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SocialMedia;
