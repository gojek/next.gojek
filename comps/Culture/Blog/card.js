import Link from '../../Common/link';

function Card(props) {
  return (
    <div className="col-md-6 col-lg-4 pr-4">
      <div className="card my-4">
        <div
          className="placeholder bg-img"
          style={{ backgroundImage: `url(${props.data.img})` }}
        ></div>
        <div className="card-body px-0">
          <p className="card-name blogHeading pointer font-weight-bold text-lead">
            How We Pushed a Million Keys to Redis in Seconds{' '}
          </p>
          <p className="card-text blogDescription mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <Link href="" text="Read full story" color="text-green-light" />
        </div>
      </div>
    </div>
  );
}

export default Card;
