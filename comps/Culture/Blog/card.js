import styles from '../index.module.scss';

function Card(props) {
  return (
    <div className="col-md-4 mb-5">
      <div className={`card ${styles.blogCard}`}>
        <div
          className={`bg-img ${styles.blogThumbnail}`}
          style={{ backgroundImage: `url(${props.data.img})` }}
        ></div>
        <div className="card-body px-0 blog-card py-4">
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.title,
            }}
            className={`card-name blogHeading pointer ${styles.postTitle}`}
          >
            {/* {props.data.title}{' '} */}
          </p>
          <a href={props.data.link} className={`${styles.readMore}`} target="_blank">
            Read full story{' '}
            <img src="/img/arrow-right-green.svg" alt="join Us" className="d-inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
