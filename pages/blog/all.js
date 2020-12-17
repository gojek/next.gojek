import { useState } from 'react';
import { scroller } from 'react-scroll';
import Router from 'next/router';

import { getAllPosts } from '../../api/posts';
import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '../../comps/BlogNew';

function allPosts(props) {
  const [tag, setTag] = useState('all');

  const changeTag = (tagName) => {
    setTag(tagName);
    Router.push(`/blog#${tagName}`);
  };

  const tags = [
    { name: 'Tech', slug: 'tech' },
    { name: 'Data', slug: 'data-science' },
    { name: 'Culture', slug: 'culture' },
    { name: 'News', slug: 'news' },
    { name: 'Design', slug: 'design' },
    { name: 'Stories', slug: 'gojek-stories' },
  ];

  return (
    <div className="text-center text-md-left blog-page">
      <Head>
        <title>Gojek | Blogs</title>
      </Head>
      <Navbar whiteNav />
      {/* banner section */}
      <section
        className="py-5 d-flex align-items-center blog-banner"
        style={{ backgroundColor: '#00a913' }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-12 col-md-5 col-lg-5 order-1 order-md-0">
              <h1 className="banner-head text-white pt-5 pt-md-0 px-4 px-md-0">
                Wondering <br className="d-none d-md-block" />
                how <br className="d-block d-md-none" /> we do it all?
              </h1>
              <p className="banner-sub-head text-white">
                Take a behind-the-scenes peek into the triumphs and tribulations it takes to build a
                #SuperApp.
              </p>
            </div>
            <div className="col-12 col-md-7 col-lg-7 px-0 px-md-3">
              <img
                src="/img/Blog-Banner.png"
                className="img-fluid banner-img mt-5 mt-md-0 px-3 px-md-0"
                alt="Gojek Banner"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Tags tags={tags} onClick={changeTag} activeTag={tag} />

        <div class="form-group">
          <label for="search" class="sr-only">
            Keyword
          </label>
          <input
            type="text"
            id="search"
            class="form-control"
            style={{ borderBottom: '1px solid green' }}
            onChange={(event) => changekeyword(event.target.value)}
          />
        </div>

        {/* Tech Posts */}
        <BlogNew heading="All" posts={props.posts} link="tech" pageName="all-posts" />
        {/* End Tech Posts */}
      </div>
    </div>
  );
}

allPosts.getInitialProps = async () => {
  const posts = await getAllPosts();

  // featuredPosts.forEach((post) => {
  //   post.featured = false;
  // });

  // Featured artticles

  return { posts };
};

export default allPosts;
