import React, { useEffect } from 'react';

const Card = React.memo((props) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(../img/home/kingsly.png)`,
        backgroundColor: `${props.data.bgColr}`,
      }}
    >
      <div className="card-body row d-flex align-items-end justify-content-center p-0">
        <p className="text-center">Kingsly - Your own x.509 cert manager</p>
      </div>
    </div>
  );
});

export default Card;
