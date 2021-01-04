function Slide(props) {
  const { data } = props;
  const anchor = (
    <a className="text-green-light link" href={data.linkURL}>
      {data.linkText}
    </a>
  );

  return (
    <div className={`${data.bgClass} card align-items-center justify-content-around p-4`}>
      <div class="card-body flex-grow-0">
        <h2 className="heading">{data.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        ></p>
        {data.linkText ? anchor : ''}
      </div>
      <img src={data.img} class="card-img-bottom img-fluid illustration" alt={data.title} />
    </div>
  );
}

export default Slide;
