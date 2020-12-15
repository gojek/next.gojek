import Link from '../../Common/link';

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div
          className="placeholder bg-img"
          style={{ backgroundImage: `url(${props.data.img})` }}
        ></div>
        <div className="card-body px-0">
          <p className="card-name blogHeading pointer font-weight-bold text-lead">
            How We Pushed a Million Keys to Redis in Seconds{' '}
          </p>
          <Link href="" text="Read full story" color="text-green-light" />
        </div>
      </div>
    </div>
  );
}

export default Card;
