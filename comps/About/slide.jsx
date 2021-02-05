function Slide(props) {
  const { data } = props;
  const anchor = (
    <a className="text-green-light link" target="_blank" href={data.linkURL}>
      {data.linkText}
    </a>
  );

  return (
    <div className={`${data.bgClass} ${data.bgPattern}`}>
      <div className="container">
        <div className="row full-height d-flex align-items-center justify-content-md-around justify-content-lg-between">
          <img
            src={data.img}
            alt={data.title}
            className={`${data.id % 2 === 1 ? 'order-1' : 'order-2'} img-fluid col-md-6`}
          />
          <div className={`${data.id % 2 === 0 ? 'order-1' : 'order-2'} col-md-4`}>
            <h2 className="heading">{data.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></p>
            {data.linkText ? anchor : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
