import Moment from 'react-moment';

import OpenMedium from '~/../../comps/Common/openMedium';
import styles from '~/../../comps/Blog/BlogCard/index.module.scss';

function MainBlog(props) {
  const { data: blog } = props;

  return (
    <div className={`row pt-5 ${styles.mainArticle}`}>
      <div className={`col-12 col-lg-8 pr-4 pb-4 `}>
        <div className={`card pointer ${styles.card}`} onClick={() => OpenMedium(blog.link)}>
          <img src={blog.thumbnail} className={`img-fluid ${styles.cardImgTop}`} alt={blog.title} />
        </div>
      </div>
      <div className={`col-12 col-lg-4 pt-3 ${styles.main}`}>
        <h1 className={`pointer ${styles.title}`} onClick={() => OpenMedium(blog.link)}>
          {blog.title}
        </h1>
        <p className={styles.description}>
          A product perspective on the recently-introduced Pickup feature for our food delivery
          service — GoFood
        </p>

        <div className={`mt-5 ${styles.meta}`}>
          <p className="mb-0">{blog.author}</p>
          <p className={styles.date_time}>
            <Moment format="MMM DD">{blog.pubDate}</Moment> | 5 min read
          </p>
        </div>
      </div>
    </div>
  );
}
export default MainBlog;
