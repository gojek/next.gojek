function Slide(props) {
  const { data, activeProduct } = props;

  return (
    <div className="text-white product">
      <div className={`card p-md-5 p-3 ${data.bgClass}`}>
        <div className="card-body pt-5">
          <div className="container">
          <h2 className="card-title heading-sm pb-md-5">{data.name}</h2>
          <div className="row">
            {data.products.map((product) => (
              <div className="col-lg-3 col-md-4 pb-md-5" key={product.id}>
                {
                  product.img &&
                <img src={product.img} alt={product.title} className="img-fluid pb-md-3" />
                }
                {
                  ! product.img &&
                  <p>{product.title}</p>
                }
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Slide;
