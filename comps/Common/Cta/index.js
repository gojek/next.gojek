function CommonCta(props) {
  return (
    <section className="commonFooter">
      <div className="px-5 pt-4 d-none d-md-block">
        <div className="container">
          <div className="cta p-5">
            <div className="col-12 col-lg-7 py-3">
              <p className="text-white">
                We’re dedicated to creating (and scaling) positive socio-economic impact for our
                ecosystem of users.{' '}
              </p>
              <a className="link" href="#">
                Join Us
                <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {props.mobile ? (
        <div className="d-md-none">
          <div className="cta p-5">
            <div className="py-5">
              <p className="text-white">
                We’re dedicated to creating (and scaling) positive socio-economic impact for our
                ecosystem of users.{' '}
              </p>
              <a className="link" href="/jobs">
                Join Us
                <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}

export default CommonCta;
