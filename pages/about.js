function About() {
  return (
    <section
      className="mt-5 cta"
      style={{
        backgroundImage: `url('../img/home/bgimg.png')`,
      }}
    >
      <div className="container stats">
        <div className="box full-height">
          <div className="align-self-end pb-5 text-white">
            <ul>
              <li className="pb-3">200 million+ completed orders per month 1.</li>
              <li className="pb-3">
                As of 2019, the Gojek app has been downloaded almost 170 million times.
              </li>
              <li className="pb-3">1100% growth in transactions from 2016 to 2019.</li>
              <li className="pb-3">
                In 2019, we contributed $7 billion+ to the Indonesian economy.
              </li>
            </ul>
          </div>
          <div className="align-self-start pt-5 w-50">
            <h4>Once a call-centre operation in Jakarta, now a Decacorn in Southeast Asia.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
