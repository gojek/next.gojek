import { ctaData } from './data';

import styles from './index.module.scss';

export function CTA(props) {
  return (
    <section className={`${styles.ctaPurple} py-5`}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="img-fluid mx-auto d-block" src={ctaData.image} alt={ctaData.title} />
        </div>
        <div className="col-md-5 pl-md-5 px-5 px-md-0">
          <div className="d-none d-md-block">
            <h1 className={`text-white mb-5 ${styles.ctaTitle}`}>{ctaData.title}</h1>
            <a href={ctaData.link} className={`${styles.ctaLink}`}>
              {ctaData.linkText} <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
          <div className="d-md-none">
            <h1 className={`text-white my-4 ${styles.ctaTitle}`}>{ctaData.xsTitle}</h1>
            <a href={ctaData.xsLink} className={`${styles.ctaLink}`}>
              {ctaData.xsLinkText} <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
