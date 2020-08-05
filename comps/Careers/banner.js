import { banner } from './data';

function Banner() {
  return (
    <div className="row align-items-center mt-5">
      <div className="col-md-5">
        <img src={banner.bannerImg} className="img-fluid banner-img" alt="Gojek Careers Banner" />
      </div>
      <div className="col-md-7">
        <h1 className="banner-head w-75">{banner.title}</h1>
        <p>{banner.subHead}</p>
      </div>
    </div>
  );
}

export default Banner;
