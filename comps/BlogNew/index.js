import styles from './index.module.scss';

import BlogCard from './blogCard';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function BlogNew(props) {
  const { heading, posts, id } = props;
  props.pageName !== 'all-posts' ? (posts[0].featured = true) : '';

  const allPosts = props.pageName ? posts : posts.slice(0, 4),
    mobileSliderPosts = allPosts.slice(1, 4);

  const items = allPosts.map((post, key) => (
    <React.Fragment key={post.guid} key={key}>
      <BlogCard post={post} tag={heading} />
    </React.Fragment>
  ));

  return (
    <section className="posts text-left" id={id}>
      <div className="d-flex justify-content-between align-items-end">
        <h1 className={styles.heading}>{heading}</h1>
        {props.pageName === 'blog' && (
          <p className="text-center">
            <a href={props.link} target="_blank" className={`text-green-light ${styles.readMore}`}>
              See All <img src="/img/arrow-right-green.svg" className="pl-2" alt="View Blogs" />
            </a>
          </p>
        )}
      </div>
      <hr />

      <div className="d-none d-md-block">
        <div className="row">{items}</div>
      </div>
      {props.pageName === 'blog' && (
        <div className="d-md-none">
          <BlogCard post={allPosts[0]} tag={heading} />
          <Slider {...sliderSettings}>
            {mobileSliderPosts.map((post) => {
              return <BlogCard post={post} tag={heading} />;
            })}
          </Slider>
        </div>
      )}
      {props.pageName !== 'blog' && (
        <div className="d-md-none d-block">
          <div className="row">{items}</div>
        </div>
      )}
    </section>
  );
}

export default BlogNew;
