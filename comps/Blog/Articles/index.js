import Link from 'next/link';
import Post from './post';

function Articles(props) {
  const { posts } = props;
  console.log('post', posts);
  return (
    <>
      <h1 className="my-5">{props.title}</h1>
      <div className="row">
        {posts.map((post) => (
          <Post data={post} type={props.type} />
        ))}
      </div>
    </>
  );
}

export default Articles;
