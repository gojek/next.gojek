import PageMeta from '~/../../comps/Common/head';
import Navbar from '~/../../comps/Navbar';
import CommonCta from '~/../../comps/Common/Cta';
import styles from './index.module.scss';

function PrivacyPolicyPage(props) {
  return (
    <div className="text-center text-md-left">
      <PageMeta
        title="Privacy Policy | Gojek Tech"
        description="Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, and over a dozen services. It is Indonesia’s first and fastest growing decacorn building an on-demand empire."
      />
      <Navbar whiteNav />

      <section
        className="py-5 d-flex align-items-center"
        style={{ backgroundColor: '#00a913', minHeight: '50vh' }}
      >
        <div className="container mt-5">
          <div className="row justify-content-around align-items-center">
            <div className="col-12 col-md-5 col-lg-5 order-1 order-md-0">
              <h1 className="banner-head text-white pt-5 pt-md-0 px-4 px-md-0">Privacy Policy</h1>
            </div>
            <div className="col-12 col-md-7 col-lg-7 px-0 px-md-3"></div>
          </div>
        </div>
      </section>

      <section className="py-5 privacy-policy">
        <div className="container">
          <div className="row">
            <div className="mt-3">
              <h1 className={`my-4 ${styles.heading}`}>What you'll see:</h1>
              <ul className={styles.description}>
                <li>This would be your one-stop for all things Gojek</li>
                <li>
                  We'll send you links to our tech blogs, social media posts, community
                  events/webinar registration, stories of us in the news, etc.
                </li>
                <li>We strictly use this communication to send only Gojek related updates.</li>
              </ul>
            </div>

            <div>
              <h1 className={`my-4 ${styles.heading}`}>What you'll not see:</h1>
              <ul className={styles.description}>
                <li className="font-weight-bold">
                  We shall not share your phone number with any external parties or use your
                  personal information for our marketing purposes
                </li>
                <li>
                  We will not send any survey or request any card numbers, financial account
                  numbers, National Identification numbers, or other sensitive identifiers
                </li>
                <li>
                  We will not send product suggestions, app-review requests, cross-selling,
                  up-selling, discounts, and promotional content
                </li>
                <li>
                  Your contact details will not be used to reach out to you about open positions.
                </li>
                <li>
                  We do not respond to the messages. This number is only for one way communication.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h1 className={`my-4 ${styles.heading}`}>How to opt-out:</h1>
              <ul className={styles.description}>
                <li>
                  Just message <span className="font-weight-bold">“Stop” </span>in the same chat
                  you're receiving updates and you’ll no longer receive our updates
                </li>
                <li>
                  If you cancel the WhatsApp updates service, we shall delete your number from our
                  records.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CommonCta />
    </div>
  );
}

export default PrivacyPolicyPage;
