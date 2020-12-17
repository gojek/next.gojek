import { featuredArticles } from './data';

import styles from './index.module.scss';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function FeaturedPosts(props) {
  return (
    <section className="py-5 posts text-left">
      <h1
        className={`mb-5 ${styles.featuredHeading} text-md-center pt-4`}
      >{`Featured Articles`}</h1>
      <div className="container pb-4 d-none d-md-block">
        <div className="row">
          {props.posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <a href={post.link}>
                <div
                  className={`thumbnail ${styles.blogImg}`}
                  style={{ backgroundImage: `url(${post.feature_image})` }}
                ></div>
                <span className="text-white text-uppercase tag shadow">{post.tag}</span>
                <h5 className="title pt-4">
                  {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="d-md-none">
        <Slider {...sliderSettings}>
          {featuredArticles.map((post) => (
            <div className="col-md-4" key={post.id}>
              <a href={post.link}>
                <div
                  className={`thumbnail ${styles.blogImg}`}
                  style={{ backgroundImage: "url('/img/placeholder3.jpeg')" }}
                ></div>
                <span className="text-white text-uppercase tag shadow">{post.tag}</span>
                <h5 className="title pt-4">
                  {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
                </h5>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturedPosts;
