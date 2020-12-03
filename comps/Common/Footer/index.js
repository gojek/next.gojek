import Links from './Links';

function Footer(props) {
  return (
    <section className="py-5 footer">
      <div className="container pt-3 pt-md-0">
        <div className="row mx-0 text-white mt-md-5">
          <div className="col-md-6">
            <Links />
          </div>
          <div className="col-md-6 px-0 p-5 boder-pill contact" style={{ backgroundColor: '#000' }}>
            <p className="form-text">
              We'll strive to ensure you don’t mute us. Stories from our #SuperApp, straight to your
              WhatsApp.
            </p>
            <form>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg-transparent border-bottom rounded-0 pl-0"
                    placeholder="Enter your phone number here"
                  />
                </div>
              </div>
              <button className="btn rounded-pill bg-green mt-4 px-4 text-white">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-white pt-3 pt-md-5 mt-0 mt-md-5 text-center">
        {' '}
        Gojek tech | <span>{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
