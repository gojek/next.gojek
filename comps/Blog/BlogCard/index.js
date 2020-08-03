import Moment from 'react-moment';

import OpenMedium from '~/../../comps/Common/openMedium';
import styles from '~/../../comps/Blog/BlogCard/index.module.scss';

function BlogCard(props) {
  const { data: blog } = props;

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className={`card bg-transparent px-md-0 px-1 ${styles.card} ${styles.article}`}>
        <img
          src={blog.thumbnail}
          className={`bg-orange pointer img-fluid ${styles.cardImgTop}`}
          alt={blog.title}
          onClick={() => OpenMedium(blog.link)}
        />
        {/* {props.showTag && (
          <span className={`text-white text-uppercase ${styles.tag}`}>{blog.categories[0]}</span>
        )} */}
        <div className="card-body px-0 pt-4 post">
          <h5 className={`pt-2 pointer ${styles.title}`} onClick={() => OpenMedium(blog.link)}>
            {blog.title}
          </h5>
          <p className={`pt-3 ${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
          </p>
          <div className={`mt-3 ${styles.meta}`}>
            <p className={`mb-0 ${styles.author}`}>{blog.author}</p>
            <p className={styles.date_time}>
              <Moment format="MMM DD">{blog.pubDate}</Moment> | 5 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
