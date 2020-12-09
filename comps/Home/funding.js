import { fundingLogos } from './data';

function Funding() {
  return (
    <div className="row">
      {fundingLogos.map((funding) => (
        <div className="col-4 mb-5 text-center">
          <div className="logo">
            <img src={funding.logo} className="img-fluid rounded-pill align-middle" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Funding;
