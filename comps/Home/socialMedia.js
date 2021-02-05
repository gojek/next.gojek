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

const lifeAtGojekSocialAccounts = [
  {
    icon: '/img/icons/instagram.svg',
    title: 'Instagram',
    link: 'https://www.instagram.com/lifeatgojek/',
  },
  {
    icon: '/img/icons/linkedin.svg',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/gojek/life/engineering/',
  },
  {
    icon: '/img/icons/youtube.svg',
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured',
  },
];

const gojekTechSocialAccounts = [
  {
    icon: '/img/icons/instagram.svg',
    title: 'Instagram',
    link: 'https://www.instagram.com/gojek.tech/',
  },
  {
    icon: '/img/icons/linkedin.svg',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/gojektech/',
  },
  {
    icon: '/img/icons/twitter.svg',
    title: 'Twitter',
    link: 'https://twitter.com/gojektech',
  },
];

function SocialMedia(props) {
  const posts = props.posts.slice(0, 3);
  return (
    <div className="d-flex flex-column justify-content-around full-height">
      <div>
        <div
          className={`${styles.socialMediaDescription} mb-5`}
          dangerouslySetInnerHTML={{
            __html: socialMediaData.description,
          }}
        ></div>
        <div className="d-none d-md-block">
          <div className="row pb-5 ">
            {posts.map((post, i) => (
              <div className={` ${styles.socialMediaWrapper} col-md-4`} key={post.id}>
                <a href={post.permalink} target="_blank">
                  <div
                    className={`${styles.socialMediaCard} card border-0 shadow`}
                    style={{ backgroundImage: `url(${post.media_url})` }}
                  >
                    <div className={`${styles.socialMediaOverlay}`}>
                      <div
                        className={`${styles.overlayText} d-flex justify-content-center align-items-center`}
                      >
                        View post
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="d-block d-md-none pb-5">
          <Slider {...sliderSettings}>
            {posts.map((post, i) => (
              <div className="col-md-12 pl-0" key={post.id}>
                <a href={post.permalink} target="_blank">
                  <div
                    className={`${styles.socialMediaCard} card border-0 shadow-sm`}
                    style={{ backgroundImage: `url(${post.media_url})` }}
                  ></div>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        <div className="">
          <div className="w-100 text-md-center">
            <a
              className={`btn bg-green-light rounded-pill px-4 text-white ${styles.moreBtn}`}
              href="https://www.instagram.com/gojek.tech/"
              target="_blank"
            >
              <img
                src="/img/icons/instagram.svg"
                alt="Gojek Tech Instagram"
                className="mr-2 img-fluid"
              />{' '}
              More like this
            </a>
          </div>
          <div className="mt-md-5 row justify-content-center">
            <div className="col-md-5 pt-5 pt-md-0 d-lg-flex align-items-center">
              <p className={`pr-3 ${styles.name}`}>Life at Gojek</p>
              <ul className="list-inline d-md-inline-block">
                {lifeAtGojekSocialAccounts.map((lifeAtGojekSocialAccount, i) => (
                  <li className="list-inline-item mr-3" key={i}>
                    <a
                      href={lifeAtGojekSocialAccount.link}
                      target="_blank"
                      className={`${styles.socialIcon} text-white align-items-middle justify-content-center`}
                    >
                      <img
                        className="img-fluid"
                        src={lifeAtGojekSocialAccount.icon}
                        alt={lifeAtGojekSocialAccount.title}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-5 d-lg-flex align-items-center">
              <p className={`pr-3 ${styles.name}`}>Gojek Tech</p>
              <ul className="list-inline d-md-inline-block">
                {gojekTechSocialAccounts.map((gojekTechSocialAccount, i) => (
                  <li className="list-inline-item mr-3" key={i}>
                    <a
                      href={gojekTechSocialAccount.link}
                      target="_blank"
                      className={`${styles.socialIcon} text-white align-items-middle justify-content-center`}
                    >
                      <img
                        className="img-fluid"
                        src={gojekTechSocialAccount.icon}
                        alt={gojekTechSocialAccount.title}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
