import { useState } from 'react';
import { scroller } from 'react-scroll';
import axios from 'axios';
import Moment from 'react-moment';

import { getAllPosts } from '../../api/posts';

import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import CommonCta from '~/../../comps/Common/Cta';
import BlogNew from '../../comps/BlogNew';

function allPosts(props) {
  const [tag, setTag] = useState('all');
  const [articles, setarticles] = useState([]);
  const [keyword, setkeyword] = useState('');
  const [clicked, setclicked] = useState(false);
  const [pagenumber, setpageNo] = useState(1);

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
    setclicked(true);
  };
  const handleClose = () => {
    setkeyword('');
    setclicked(false);
  };

  const changekeyword = (keyword) => {
    setkeyword(keyword);
    axios
      .get(
        'https://blog.gojek.io/ghost/api/v3/content/posts/?key=dc81903c2020e7c9d2f8bafcf7&limit=all',
      )
      .then((res) => {
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
    { name: 'Design', slug: 'design' },
    { name: 'Stories', slug: 'stories' },
    { name: 'News', slug: 'news' },
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
        {!clicked && (
          <Tags
            tags={tags}
            onClick={changeTag}
            activeTag={tag}
            handlesearchClicked={changeClicked}
            clicked={clicked}
            page="all-blogs"
          />
        )}

        {clicked && (
          <div class="input-group my-5">
            <label htmlFor="search" class="sr-only">
              Keyword
            </label>
            <input
              type="text"
              id="search"
              autoFocus
              class="form-control search-blog px-0"
              style={{ borderBottom: '1px solid green' }}
              onChange={(event) => changekeyword(event.target.value)}
              placeholder="Search blogs_"
            />
            <div class="input-group-append" style={{ borderBottom: '1px solid green' }}>
              <span
                aria-hidden="true"
                style={{ fontSize: '2rem' }}
                className="text-green-light pointer"
                onClick={handleClose}
              >
                &times;
              </span>
            </div>
          </div>
        )}

        {/* All Posts */}
        {keyword === '' && (
          <div>
            <BlogNew heading="All blogs" posts={props.posts} pageName="all-posts" />
            <p className="text-center">
              {/* <a href="" className={`text-green-light`}>
                onClick={loadMoreposts()}
                See More <img src="/img/arrow-right-green.svg" className="pl-2" alt="View Blogs" />
              </a> */}
            </p>
          </div>
        )}

        {/* End All Posts */}
      </div>

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

allPosts.getInitialProps = async () => {
  const posts = await getAllPosts();

  posts.forEach((post) => {
    post.featured = false;
  });

  return { posts };
};

export default allPosts;
