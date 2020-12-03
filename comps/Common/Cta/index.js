function CommonCta(props) {
  console.log('props', props);

  return (
    <section className="px-5 pt-4 commonFooter d-none d-md-block">
      <div className="container">
        <div className="cta p-5">
          <div className="col-12 col-md-7 py-3">
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
    </section>
  );
}

export default CommonCta;
