import { ctaData } from './data';

import styles from './index.module.scss';

export function CTA(props) {
  return (
    <div className="container">
      <section className={`${styles.ctaPurple} py-4`}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <img
              className="img-fluid mx-auto d-block rounded-md-pill"
              src={ctaData.image}
              alt={props.title}
            />
          </div>
          <div className="col-md-5 pl-md-5 px-5 px-md-0">
            <div className="d-none d-md-block">
              <h1
                style={{
                  fontSize: props.font === 'small' ? '20px' : '',
                  lineHeight: props.font === 'small' ? '30px' : '',
                }}
                className={`text-white mb-3 ${styles.ctaTitle}`}
              >
                {props.title}
              </h1>
              <a href={props.href} className={`${styles.ctaLink}`}>
                {props.hrefText} <img src="/img/life-at-gojek/arrow-right.svg" alt="Right arrow" />
              </a>
            </div>
            <div className="d-md-none text-center px-0">
              <h1 className={`text-white my-4 ${styles.ctaTitle}`}>{ctaData.xsTitle}</h1>
              <a href={props.href} className={`${styles.ctaLink}`}>
                {props.hrefText} <img src="/img/life-at-gojek/arrow-right.svg" alt="Right arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
