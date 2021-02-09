import { posts } from '../data';
import Card from './card';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows: false,
      },
    },
  ],
};

function Blog() {
  return (
    <div>
      {/* For Desktop */}
      <div className="d-none d-md-block">
        <div className="row pt-4">
          {posts.map((post) => {
            return <Card data={post} />;
          })}
        </div>
      </div>
      <div className="pt-4 px-0 d-md-none">
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
