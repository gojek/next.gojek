import Link from 'next/link';
import Post from './post';

function Articles(props) {
  const { posts } = props;
  return (
    <>
      <h1 className="my-5">{props.title}</h1>
      <div className="row">
        {posts.map((post, i) => (
          <Post data={post} type={props.type} key={i} />
        ))}
      </div>
    </>
  );
}

export default Articles;
