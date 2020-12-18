import { useState } from 'react';
import { scroller } from 'react-scroll';
import axios from 'axios';
import Moment from 'react-moment';

import { getLatestPosts, getTags, getFeaturedPosts, getPosts, search } from '../../api/posts';

import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '../../comps/BlogNew';
import FeaturedPosts from '~/../../comps/BlogNew/featured';
import { CTA } from '../../comps/BlogNew/cta';
import CommonCta from '~/../../comps/Common/Cta';

function Blog(props) {
  const [tag, setTag] = useState('tech');
  const [keyword, setkeyword] = useState('');
  const [articles, setarticles] = useState([]);
  const [clicked, setclicked] = useState(false);

  const changeTag = (tagName) => {
    setTag(tagName);
    scroller.scrollTo(tagName, {
      offset: -125,
      smooth: 'easeOutCubic',
      duration: 500,
      delay: 0,
    });
  };
  const changeClicked = () => {
    setTag(true);
  };

  const changekeyword = (keyword) => {
    setkeyword(keyword);
    axios
      .get('https://blog.gojek.io/ghost/api/v3/content/posts/?key=dc81903c2020e7c9d2f8bafcf7')
      .then((res) => {
        console.log('herr', res.data.posts);
        setarticles(
          res.data.posts.filter((data) => {
            return data.title.toLowerCase().includes(keyword.toLowerCase());
          }),
        );
      })
      .catch((err) => {
        console.log('error in request', err);
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
        {/* {!clicked && (
          <img onClick={changeClicked} className="img-fluid" src="/img/blog/search.svg" />
        )}
        {clicked && ( */}
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
        {/* )} */}
      </div>

      {keyword === '' && (
        <section className="post-feed container mt-5">
          <BlogNew
            heading="Latest"
            posts={props.latestPosts}
            link="blog/all"
            pageName="all-posts"
          />
        </section>
      )}

      {keyword === '' && (
        <section className="py-3" style={{ backgroundColor: '#f2f2f2' }}>
          <div className="post-feed">
            <FeaturedPosts heading="Tech" posts={props.featuredPosts} />
          </div>
        </section>
      )}

      {keyword === '' && (
        <section className="post-feed container mt-5 pt-5">
          <BlogNew heading="Tech" posts={props.techPosts} link="tech" pageName="all-posts" />
        </section>
      )}

      {keyword === '' && (
        <div className="mt-5">
          <CTA
            title="Build the tech that powers an entire country."
            href="/jobs"
            hrefText="Apply Now"
          />
        </div>
      )}

      {keyword === '' && (
        <section className="post-feed container mt-5 pt-5">
          <BlogNew heading="Data" posts={props.dataPosts} link="data" pageName="all-posts" />
        </section>
      )}

      {keyword === '' && (
        <section className="post-feed container mt-5">
          <BlogNew heading="Culture" posts={props.culturePosts} link="data" pageName="all-posts" />
        </section>
      )}
      {keyword === '' && (
        <section className="post-feed container mt-5">
          <BlogNew heading="News" posts={props.newsPosts} link="news" pageName="all-posts" />
        </section>
      )}

      <section className="container py-5">
        {keyword !== '' && <h1 className="heading pb-4">Search Results for '{keyword}'</h1>}
        <div className="row posts">
          {articles.map((post) => (
            <div className="col-md-4 mb-md-5">
              <a href={`/blog/${post.slug}`} className="post">
                <div className="card border-0 bg-transparent">
                  <React.Fragment>
                    <div
                      className={`thumbnail small`}
                      style={{ backgroundImage: `url(${post.feature_image})` }}
                    />
                  </React.Fragment>
                  <div className="card-body px-0">
                    <h5 className={`${post.featured ? 'featured' : ''} title`}>{post.title}</h5>
                    <p className={`${post.featured ? 'featured' : ''} description`}>
                      {' '}
                      {post.excerpt}...
                    </p>
                    <React.Fragment>
                      <div className="mt-3 meta">
                        <p className="mb-0 author">{post.author}</p>
                        <p className="date-time">
                          <Moment format="MMM DD">{post.published_at}</Moment> | 5mins
                        </p>
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CommonCta mobile />
      {/* End CTA */}
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

  dataPosts.forEach((post) => {
    post.featured = false;
  });
  dataPosts[0].featured = true;

  newsPosts.forEach((post) => {
    post.featured = false;
  });
  newsPosts[0].featured = true;

  culturePosts.forEach((post) => {
    post.featured = false;
  });
  culturePosts[0].featured = true;

  // Featured artticles

  return { latestPosts, tags, featuredPosts, techPosts, dataPosts, newsPosts, culturePosts };
};

export default Blog;
