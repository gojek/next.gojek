import { useState } from 'react';
import { scroller } from 'react-scroll';
import { getLatestPosts, getTags, getFeaturedPosts, getPosts } from '../../api/posts';

import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '../../comps/BlogNew';
import FeaturedPosts from '~/../../comps/BlogNew/featured';
import { CTA } from '../../comps/BlogNew/cta';

function Blog(props) {
  const [tag, setTag] = useState('tech');

  const changeTag = (tagName) => {
    setTag(tagName);
    scroller.scrollTo(tagName, {
      offset: -125,
      smooth: 'easeOutCubic',
      duration: 500,
      delay: 0,
    });
  };

  const tags = [
    { name: 'Tech', slug: 'tech' },
    { name: 'Data', slug: 'data' },
    { name: 'Culture', slug: 'culture' },
    { name: 'News', slug: 'news' },
    { name: 'Design', slug: 'design' },
    { name: 'Stories', slug: 'stories' },
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
          <div className="row justify-content-around align-items-end">
            <div className="col-12 col-lg-6 order-1 order-lg-0 pr-md-2 px-5 px-md-5 ">
              <h1 className="banner-head text-white">
                Wondering <br className="d-none d-md-block" />
                how we do it all?
              </h1>
              <p className="text-white">
                Take a behind-the-scenes peek into the triumphs and tribulations it takes to build a
                #SuperApp.<i class="twa twa-railway-car"></i>
              </p>
            </div>
            <div className="col-12 col-lg-6 px-0 px-md-3">
              <img src="/img/Blog-Banner.png" className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Tags tags={tags} onClick={changeTag} activeTag={tag} />
      </div>

      <section className="post-feed pb-3 container">
        <div className="row">
          <BlogNew heading="Latest" posts={props.latestPosts} link="latest" pageName="all-posts" />
        </div>
      </section>

      <section className="post-feed pb-3 container">
        <div className="row">
          <FeaturedPosts heading="Tech" posts={props.featuredPosts} />
        </div>
      </section>

      {/* <section className="post-feed pb-3 container">
        <div className="row">
          <BlogNew heading="Tech" posts={props.techPosts} link="tech" pageName="all-posts" />
        </div>
      </section>
      <div className="container">
        <CTA
          title="Build the tech that powers an entire country."
          href="/jobs"
          hrefText="Apply Now"
        />
      </div>

      <section className="post-feed pb-3 container">
        <div className="row">
          <BlogNew heading="Data" posts={props.dataPosts} link="data" pageName="all-posts" />
        </div>
      </section>

      <section className="post-feed pb-3 container">
        <div className="row">
          <BlogNew heading="Culture" posts={props.culturePosts} link="data" pageName="all-posts" />
        </div>
      </section>

      <section className="post-feed pb-3 container">
        <div className="row">
          <BlogNew heading="News" posts={props.newsPosts} link="news" pageName="all-posts" />
        </div>
      </section> */}
    </div>
  );
}

Blog.getInitialProps = async () => {
  const latestPosts = await getLatestPosts();
  const tags = await getTags();
  const featuredPosts = await getFeaturedPosts();
  const techPosts = await getPosts('tech');
  const dataPosts = await getPosts('data');
  const culturePosts = await getPosts('culture');
  const newsPosts = await getPosts('news');

  featuredPosts.forEach((post) => {
    post.featured = false;
  });
  techPosts.forEach((post) => {
    post.featured = false;
  });
  techPosts[0].featured = true;

  // dataPosts.forEach((post) => {
  //   post.featured = false;
  // });
  // dataPosts[0].featured = true;

  // newsPosts.forEach((post) => {
  //   post.featured = false;
  // });
  // newsPosts[0].featured = true;

  // culturePosts.forEach((post) => {
  //   post.featured = false;
  // });
  // culturePosts[0].featured = true;

  // Featured artticles

  return { latestPosts, tags, featuredPosts, techPosts };
};

export default Blog;
