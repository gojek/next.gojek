function Slide(props) {
  const { data, activeProduct } = props;

  return (
    <div className="text-white product">
      <div className={`card mx-3 p-md-5 p-3 ${data.bgClass}`}>
        <div className="card-body">
          <h2 className="card-title heading-sm pb-md-5">{data.name}</h2>
          <div className="row mx-0">
            {data.products.map((product) => (
              <div className="col-md-3 pb-md-5" key={product.id}>
                <img src={product.img} alt={product.alt} className="img-fluid pb-md-3" />
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
