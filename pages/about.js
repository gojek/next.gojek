import { useState } from 'react';
import Navbar from '~/../../comps/Navbar';
import Milestones from '../comps/About/milestone';
import WhatsAppForm from '../comps/Common/Footer/whatsAppform';

function About() {
  const [active, setactive] = useState(false);
  return (
    <div>
      <Navbar whiteNav />

      <Milestones />

      {/* Floating whatsApp button */}
      <div className="container">
        <div className={`whatsappContainer`}>
          {!active && (
            <div className={`whatsappPopup`}>
              <p onClick={() => setactive(true)} className="pointer">
                <img src="/img/whatsapp-logo.svg" alt="WhatsApp" />
              </p>
            </div>
          )}

          {active && (
            <div className={`whatsAppPopover text-white p-5`}>
              <WhatsAppForm setactive={setactive} src={'popup'} />
            </div>
          )}
        </div>
      </div>
      {/* End floating button */}
      <section className="bg-green-light text-white py-5">
        <div className="container">
          <h1 className="heading mb-3">About Us</h1>
          <p>
            Gojek is a Super App. It’s one app for ordering food, commuting, digital payments,
            shopping, hyper-local delivery, getting a massage and two dozen services. It is
            Indonesia’s first and fastest growing unicorn building an on-demand empire across
            Southeast Asia.
          </p>
          <p>
            As of 2018, Gojek processed more than $9 billion annualized gross transaction value
            (GTV) across all markets where it operates - in Singapore, Thailand and Vietnam. The
            Gojek app was launched in 2015, and is now the largest consumer transactional technology
            group on a GTV-basis in Southeast Asia.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
