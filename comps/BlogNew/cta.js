import { ctaData } from './data';

import styles from './index.module.scss';

export function CTA(props) {
  return (
    <section className={`${styles.ctaPurple} py-5`}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="img-fluid mx-auto d-block" src={ctaData.image} alt={ctaData.title} />
        </div>
        <div className="col-md-5 pl-5">
          <h1 className={`text-white mb-5 ${styles.ctaTitle}`}>{ctaData.title}</h1>
          <a href={ctaData.link} className={`${styles.ctaLink}`}>
            {ctaData.linkText} <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
