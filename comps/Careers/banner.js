import { banner } from './data';
import MobileSearch from './mobileSearch';

function Banner(props) {
  return (
    <div className="row align-items-center mt-md-5">
      <div className="col-md-5">
        <img src={banner.bannerImg} className="img-fluid banner-img" alt="Gojek Careers Banner" />
      </div>
      <div className="col-md-7">
        <div className="d-none d-md-block">
          <h1 className="banner-head w-75">{banner.title}</h1>
          <p>{banner.subHead}</p>
        </div>
        <div className="d-md-none px-5 xsSection">
          <h3 className="banner-head">
            {banner.title} <i class="fas fa-heart heart"></i>
          </h3>
          <p>{banner.subHead}</p>
          <MobileSearch {...props} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
