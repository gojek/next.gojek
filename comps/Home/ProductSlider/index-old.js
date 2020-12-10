import { useState, useEffect } from 'react';

import { departments } from '../data';
import Slider from 'react-slick';
import Slide from './slide';

function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '100px',
    afterChange: (current) => setActiveProduct(current),
  };

  return (
    <div>
      <div className="container">
        <div className="row pb-md-5">
          <h1 className="heading-sm w-75 mx-4 pb-5 d-none d-md-block">
            We have 20+ products and do over 7 million orders a day across
            <span className={`${activeProduct === 0 ? 'text-green' : 'text-white'}`}>
              Transport &amp; Logistics
            </span>
            ,{' '}
            <span className={`${activeProduct === 2 ? 'text-orange' : 'text-white'}`}>
              Food &amp; Shopping
            </span>
            ,{' '}
            <span className={`${activeProduct === 1 ? 'text-blue' : 'text-white'}`}>Payments</span>,{' '}
            <span className={`${activeProduct === 5 ? 'text-yellow-light' : 'text-white'}`}>
              Business and Lifestyle
            </span>{' '}
            .
          </h1>
          <h1 className="heading-sm px-5 pb-2 d-md-none text-center">
            We have 20+ products and do over 7 million orders a day across...
          </h1>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Slider {...settings}>
          {departments.map((data, i) => (
            <Slide data={data} activeProduct={activeProduct} key={i} />
          ))}
        </Slider>
      </div>
      <div className="d-md-none px-4">
        {departments.map((data, i) => (
          <div className="mb-3">
            <button
              class={`btn w-100 text-white ${data.bgClass}`}
              data-toggle="collapse"
              data-target={`#${data.id}`}
              aria-expanded="false"
              aria-controls={data.id}
              type="button"
            >
              <div className="d-flex justify-content-between px-4">
                <p className="mb-0">{data.name}</p>
                <i class="fas fa-chevron-down align-self-center" aria-expanded="false"></i>
              </div>
              <div class="collapse text-left w-100 py-4" id={data.id}>
                <div className="p-4">
                  {data.products.map((product) => (
                    <div className="mb-4 px-2" key={product.id}>
                      <img src={product.img} alt={product.alt} className="img-fluid mb-2" />
                      <p className="mb-0 prod-desc">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
