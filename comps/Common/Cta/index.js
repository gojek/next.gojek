function CommonCta(props) {
  return (
    <section className={`py-5 commonFooter ${props.halfBackground ? 'joinus-cta' : ' bg-black'}`}>
      <div className="d-none d-md-block">
        <div className="container">
          <a href="/jobs">
            <div className="cta p-5">
              <div className="col-12 col-lg-7 py-3" style={{ fontFamily: 'Maison Nueue Demi' }}>
                <p className="text-white">
                  We’re dedicated to creating (and scaling) positive socio-economic impact for our
                  ecosystem of users.{' '}
                </p>
                <span className="link">
                  Join Us
                  <img src="/img/arrow-right-yellow.svg" className="pl-2" alt="join Us" />
                </span>
              </div>
            </div>
          </a>
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
                Join Us <img src="/img/arrow-right-yellow.svg" alt="join Us" />
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
