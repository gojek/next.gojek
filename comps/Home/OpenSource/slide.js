function Slide(props) {
  const { data } = props;
  return (
    <div className="project text-white">
      <div
        className="card mx-3 bg-img"
        style={{ backgroundImage: `url(${data.image})`, backgroundColor: `${data.bgColr}` }}
      ></div>
      <div className="details">
        <p className="font-demi pt-5">{data.name}</p>
        <hr className="my-2" />
        <p className="pt-3 pb-5">{data.description}</p>
      </div>
    </div>
  );
}

export default Slide;
