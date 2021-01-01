import Link from '../../Common/link';

function Card(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div
          className="placeholder bg-img"
          style={{ backgroundImage: `url(${props.data.img})` }}
        ></div>
        <div className="card-body px-0 blog-card">
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.title,
            }}
            className="card-name blogHeading pointer font-weight-bold text-lead"
          >
            {/* {props.data.title}{' '} */}
          </p>
          <a href={props.data.link} className="text-green-light" target="_blank">
            Read full story <img src="/img/arrow-right-green.svg" alt="join Us" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
