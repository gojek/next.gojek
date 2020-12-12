import React, { useEffect } from 'react';
import { socialImpact } from '../data';

const Card = React.memo((props) => {
  const { data } = props;
  return (
    <div
      className={`card text-white px-5 pt-3 border-0 mb-4 `}
      style={{
        backgroundColor: `${data.color}`,
        borderRadius: '40px',
      }}
    >
      <div className="card-body pb-0 ">
        <div className="row align-items-center">
          <div className="align-self-center">
            <h2 className="py-4 mx-auto text-left title">{data.title}</h2>
          </div>
          <div className={`col-md-9 ml-auto align-self-end`}>
            <img src={data.image} alt={data.title} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
