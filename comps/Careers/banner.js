function Banner(props) {
  return (
    <div className="row align-items-end pb-5">
      <div className="col-md-5">
        <img src="./img/careers/banner.png" className="img-fluid banner-img" alt="Gojek Banner" />
      </div>
      <div className="col-md-7">
        <h1 className="banner-head">
          We give you <br /> leverage to create <br /> impact at scale.
        </h1>
        <p>
          Join a company that strives to support you. Not just 'your best work', but all of you.
        </p>
      </div>
    </div>
  );
}

export default Banner;
