import { useState } from 'react';

import { goal } from '../data';

function Goals(props) {
  const [showFrontimage, setFrontimage] = useState(true);
  const [showBackimage, setBackImage] = useState(false);
  function handleMouseEnter() {
    setFrontimage(false);
    setBackImage(true);
  }
  function mouseLeave() {
    setFrontimage(true);
    setBackImage(false);
  }

  return (
    <section className="goal">
      <h1 className="head">{goal.title}</h1>
      <div className="row">
        <div className="col-md-6 mb-5">
          <p>{goal.description}</p>
        </div>
      </div>
      <div className="row">
        {goal.data.map((data) => (
          <div
            key={data.id}
            className="col-md-4"
            onMouseEnter={(e) => handleMouseEnter(e, data.id)}
            onMouseLeave={mouseLeave}
          >
            <div className="card" style={{ border: `1px solid ${data.color}` }}>
              <div className="mx-5 py-5" style={{ color: `${data.color}` }}>
                <h2 className="subhead mb-0">{data.title}</h2>
                <p className="font-extended-book pb-5">{data.subtitle}</p>
              </div>
              <figure>
                <img
                  src={data.img}
                  alt={`${data.title} ${data.subtitle}`}
                  className={`illustration img-fluid mx-auto
                mb-n5 ${showFrontimage ? ' d-block' : 'd-none'}`}
                />
                <img
                  src="/img/banner-5.png"
                  alt=""
                  // className="illustration img-fluid mx-auto mb-n3 d-none"
                  className={`illustration img-fluid mx-auto
                 ${showBackimage ? ' d-block' : 'd-none'}`}
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;
