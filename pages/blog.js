import Navbar from '~/../../comps/Navbar';
import Tags from '../comps/Blog/Tag';
import Articles from '../comps/Blog/Articles';

import { getLatestPosts, getTags, getFeaturedPosts } from '../api/posts';

function Blog(props) {
  console.log('latestPosts', props.featuredPosts);
  return (
    <div className="text-center text-md-left mt-5">
      <Navbar />

      <div className="container">
        {/* Tags */}
        <Tags data={props.tags} />

        {/* Latest artices */}
        <Articles posts={props.latestPosts} title="Latest" viewAll={false} type="articles" />
        {/* End latest articles */}
      </div>

      {/* Featured articles */}
      <section className="bg-light">
        <div className="container">
          <Articles
            posts={props.featuredPosts}
            title="Featured Articles"
            viewAll={false}
            type="featured"
          />
        </div>
      </section>
      {/* End featured articles */}
    </div>
  );
}

Blog.getInitialProps = async () => {
  const latestPosts = await getLatestPosts();
  const tags = await getTags();
  const featuredPosts = await getFeaturedPosts();

  // TODO: JUNK
  // Update featured of all posts as false except for the first post
  latestPosts.forEach((post) => {
    post.featured = false;
  });
  latestPosts[0].featured = true;

  featuredPosts.forEach((post) => {
    post.featured = false;
  });

  // Featured artticles

  return { latestPosts, tags, featuredPosts };
};

export default Blog;
