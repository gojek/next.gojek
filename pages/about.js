import PageMeta from '../comps/Common/head';
import Navbar from '~/../../comps/Navbar';
import Milestones from '../comps/About/milestone';

function About() {
  return (
    <div>
      <PageMeta
        title="Gojek Tech"
        description="Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire."
      />
      <Navbar whiteNav />

      <Milestones />

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
