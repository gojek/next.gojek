const Link = (props) => {
  return (
    <a href={props.href} className={`${props.color} link`}>
      {props.text}

      <img
        src="/img/right-arrow.svg"
        className="align-middle ml-2 img-fluid d-inline-block"
        alt="Open source"
      />
    </a>
  );
};

export default Link;
