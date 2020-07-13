import { featuredArticles } from './data';

import styles from './index.module.scss';

function FeaturedPosts() {
  return (
    <section className="py-5 posts">
      <h1 className={`mb-5 ${styles.featuredHeading} text-center pt-4`}>{`Featured Articles`}</h1>
      <div className="container pb-4">
        <div className="row">
          {featuredArticles.map((post) => (
            <div className="col-md-4" key={post.id}>
              <a href={post.link}>
                <div
                  className={`mx-2 thumbnail ${styles.blogImg}`}
                  style={{ backgroundImage: "url('/img/placeholder3.jpeg')" }}
                ></div>
                <span className="text-white text-uppercase tag">{post.tag}</span>
                <h5 className="title pt-4">
                  {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
