import React, { useEffect } from 'react';

const Card = React.memo((props) => {
  const { data } = props;
  return (
    <div class="card mb-3 border-0">
      <div class="card-body position-relative">
        <img src={data.image} alt={data.title} className="img-fluid image-cap" />
        <div className="caption position-relative px-3  text-center">
          <h5
            class={`py-md-3 position-absolute w-100 ${data.id === 1 ? '' : 'text-white'}`}
            style={{ bottom: '5%' }}
          >
            <span className="title">{data.title} - </span>
            <span className="description">{data.description}</span>
          </h5>
        </div>
      </div>
    </div>
  );
});

export default Card;
