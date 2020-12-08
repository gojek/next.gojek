import { fundingLogos } from './data';

function Funding() {
  return (
    <div className="row">
      {fundingLogos.map((funding) => (
        <div className="col-4 mb-5">
          <div className="logo">
            <img src={funding.logo} className="img-fluid rounded-pill px-2 px-lg-5 align-middle" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Funding;
