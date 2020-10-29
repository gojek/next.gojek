import { posts } from '../data';
import Card from './card';

function Blog() {
  return (
    <div className="row pt-5">
      {posts.map((post) => {
        return <Card data={post} />;
      })}
    </div>
  );
}

export default Blog;
