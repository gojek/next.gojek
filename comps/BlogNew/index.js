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
    <section className="mt-5 posts" id={link}>
      <h1 className={`my-5 ${styles.heading}`}>{props.pageName ? 'Latest' : heading}</h1>
      <div className="row">{items}</div>
      <p className="text-center mb-5">
        <a href={mediumLink} target="_blank" className={`text-green-light ${styles.readMore}`}>
          See More <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </p>
    </section>
  );
}

export default BlogNew;
