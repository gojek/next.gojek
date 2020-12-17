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
  const { heading, posts, link } = props;
  posts[0].featured = true;

  const allPosts = props.pageName ? posts : posts.slice(0, 4),
    mobileSliderPosts = allPosts.slice(1, 4);
  const items = allPosts.map((post) => (
    <React.Fragment key={post.guid}>
      <BlogCard post={post} tag={heading} />
    </React.Fragment>
  ));

  const mediumLink = props.pageName
    ? 'https://blog.gojekengineering.com/allstories/home'
    : `https://blog.gojekengineering.com/${link}/home`;

  return (
    <section className="mt-5 posts text-left" id={link}>
      <div className="d-flex justify-content-between align-items-end">
        <h1 className={styles.heading}>{heading}</h1>
        <p className="text-center">
          <a href={mediumLink} target="_blank" className={`text-green-light ${styles.readMore}`}>
            See More <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </p>
      </div>
      <hr className="mb-3 d-block" />

      <div className="d-none d-md-block">
        <div className="row">{items}</div>
      </div>
      <div className="d-md-none">
        <BlogCard post={allPosts[0]} tag={heading} />
        <Slider {...sliderSettings}>
          {mobileSliderPosts.map((post) => {
            return <BlogCard post={post} tag={heading} />;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default BlogNew;
