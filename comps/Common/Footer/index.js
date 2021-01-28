import Links from './Links';
import WhatsAppForm from './whatsAppform';

function Footer(props) {

  return (
    <section className="py-5 footer">
      <div className="container pt-3 pt-md-0">
        <div className="row mx-0 text-white">
          <div className="col-md-6 order-md-first order-last">
            <Links />
          </div>
          <div
            className="col-md-6 order-md-last order-first px-0 p-md-5 px-3 py-5 boder-pill contact"
            style={{ backgroundColor: '#000' }}
          >
            <WhatsAppForm src={'footer'} />
          </div>
        </div>
      </div>
      <p className="text-white pt-3 pt-md-0 mt-0 mt-md-5 text-center">
        {' '}
        Gojek tech | <span>{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
