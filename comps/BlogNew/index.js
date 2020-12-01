import styles from './index.module.scss';

import BlogCard from './blogCard';

function BlogNew(props) {
  console.log('props', props);
  const { heading, posts, link } = props;
  posts[0].featured = true;

  const allPosts = props.pageName ? posts : posts.slice(0, 4);
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
      <div className="row justify-content-between align-items-center my-3 my-md-5 px-3">
        <h1 className={styles.heading}>{props.pageName ? 'Latest' : heading}</h1>
        <p className="text-center">
          <a href={mediumLink} target="_blank" className={`text-green-light ${styles.readMore}`}>
            See More <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </p>
      </div>
      <div className="row">{items}</div>
    </section>
  );
}

export default BlogNew;
