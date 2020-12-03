import { posts } from '../data';
import Card from './card';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function Blog() {
  return (
    <div>
      <div className="pt-4 d-none d-md-block">
        <div className="row">
          {posts.map((post) => {
            return <Card data={post} />;
          })}
        </div>
      </div>
      <div className="pt-4 d-md-none">
        <Slider {...sliderSettings}>
          {posts.map((post) => {
            return <Card data={post} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Blog;
