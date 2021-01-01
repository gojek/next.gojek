import styles from './home.module.scss';

import { fundingLogos } from './data';

function Funding() {
  return (
    <div className="row">
      {fundingLogos.map((funding) => (
        <div className="col-4 my-2 my-md-3 text-center">
          <div
            className={`${styles.fundingLogo}  d-flex align-items-center justify-content-center`}
          >
            <img src={funding.logo} className={`img-fluid ${styles.logoImg}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Funding;
