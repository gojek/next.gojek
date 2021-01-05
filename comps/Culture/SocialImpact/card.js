import React, { useEffect } from 'react';

import styles from '../index.module.scss';

const Card = React.memo((props) => {
  const { data } = props;

  return (
    <div
      className={`card text-white px-md-5 px-3 pt-md-5 pt-3 pb-0 border-0 mb-4 ${styles.impactCard}`}
      style={{
        backgroundColor: `${data.color}`,
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between px-4 pb-0">
        <h2
          className={`${styles.title}`}
          style={{
            fontSize: `${data.id === 4 ? '1.5rem' : 'normal'}`,
          }}
        >
          {data.title}
        </h2>
        <img className="img-fluid" src={data.image} alt={`Social Impact ${data.id}`} />
      </div>
    </div>
  );
});

export default Card;
