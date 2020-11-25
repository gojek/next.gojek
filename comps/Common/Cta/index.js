function Cta(props) {
  console.log('props', props);

  return (
    <section id="team-workWithUs" className="container my-5 px-5 pt-4">
      <div className="row cta">
        <div className="col-12 col-md-5"></div>
        <div className="col-12 col-md-6 py-5">
          <h2 className="heading text-white">Wondering what it's like to work with us?</h2>
          <a className="link" href="#">
            Find out
            <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
