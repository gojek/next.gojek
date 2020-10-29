const Link = (props) => {
  return (
    <a href={props.href} className={`${props.color} link`}>
      {props.text}
      <i className="ml-2 fas fa-long-arrow-alt-right align-middle"></i>
    </a>
  );
};

export default Link;
