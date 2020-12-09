import React, { useEffect } from 'react';

const Card = React.memo((props) => {
  const { data } = props;
  return (
    <div class="card mb-3 border-0" style={{ backgroundColor: `#ffc41c`, borderRadius: '40px' }}>
      <div class="card-body" style={{ backgroundImage: `url(${data.image})` }}></div>
      <h5 class=" text-center py-4">
        <span className="title">{data.title} - </span>
        <span className="description">{data.description}</span>
      </h5>
    </div>
  );
});

export default Card;
