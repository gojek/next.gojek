import React from 'react';

import styles from './index.module.scss';

const Card = React.memo((props) => {
  const { data } = props;
  return (
    <div className="card mb-3 border-0">
      <a href={data.url} target="_blank">
        <div className="card-body position-relative px-0">
          <img src={data.image} alt={data.title} className="img-fluid image-cap" />
          <div className="caption position-relative px-3  text-center">
            <h5
              className={`py-md-3 position-absolute w-100 ${
                data.id === 1 ? 'text-black' : 'text-white'
              }`}
            >
              <span className={` ${styles.projectTitle}`}>{data.title} - </span>
              <span className={` ${styles.projectDescription}`}>{data.description}</span>
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
});

export default Card;
