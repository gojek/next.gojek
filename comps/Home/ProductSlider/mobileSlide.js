import { useState } from 'react';

function MobileSlider(props) {
  const [expanded, setExpanded] = useState(false);

  const { data } = props;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`mb-3 product-tab px-5 ${expanded ? 'py-4 ' : 'py-2 '} ${data.bgClass}`}>
      <button
        className={`btn w-100 text-white px-0 ${data.bgClass}`}
        onClick={() => handleExpand()}
      >
        <div className="d-flex justify-content-between">
          <p className="mb-0 prod-title">{data.name}</p>
          <i
            className={`fas align-self-center ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            aria-expanded="false"
          ></i>
        </div>
      </button>
      {expanded ? (
        <div className="text-left w-100 pt-5" id={data.id}>
          {data.products.map((product) => (
            <div className="mb-5" key={product.id}>
              <img src={product.img} alt={product.alt} className="img-fluid mb-2" />
              <p
                className="mb-0 prod-desc"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              ></p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default MobileSlider;
