import { featuredArticles } from './data';

import styles from './index.module.scss';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

function FeaturedPosts(props) {
  return (
    <section className="pt-3 pb-5 posts text-left container">
      <h1
        className={`mb-5 ${styles.featuredHeading} text-md-center pt-4`}
      >{`Featured Articles`}</h1>
      <Slider {...sliderSettings}>
        {props.posts.map((post) => (
          <div className="" key={post.id}>
            <a href={`/blog/${post.slug}`} className="">
              <div
                className={`thumbnail mx-3 ${styles.blogImg}`}
                style={{ backgroundImage: `url(${post.feature_image})` }}
              ></div>
              <span className="text-white text-uppercase tag shadow">
                {post.primary_tag !== null ? post.primary_tag.name : ''}
              </span>
              <h5 className="title pt-4 px-3">
                {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
              </h5>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default FeaturedPosts;
