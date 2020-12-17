import { useState } from 'react';
import { scroller } from 'react-scroll';
import { getPost } from '../../api/posts';

import Head from 'next/head';
import Moment from 'react-moment';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '../../comps/BlogNew';
import FeaturedPosts from '~/../../comps/BlogNew/featured';
import { CTA } from '../../comps/BlogNew/cta';

function BlogDetails(props) {
  const { post } = props;
  console.log('post', post);
  const tags = [
    {
      name: `Tech`,
      slug: `tech`,
    },
    {
      name: `Data`,
      slug: `data`,
    },
    {
      name: `Culture`,
      slug: `culture`,
    },
    {
      name: `News`,
      slug: `news`,
    },
    {
      name: `Design`,
      slug: `design`,
    },
    {
      name: `Stories`,
      slug: `stories`,
    },
  ];
  return (
    <div className="text-center text-md-left blog-page">
      <Head>
        <title>Gojek | Blogs</title>
      </Head>
      <Navbar whiteNav />
      {/* banner section */}
      <section className="py-5">
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

        <div className="container">
          <div className="row">
            <article className="post-details">
              <header className="post-full-header">
                <h1 className="post-full-title font-weight-bold">{post.title}</h1>

                <p className="post-full-custom-excerpt">{post.excerpt}</p>

                {/* <div className="post-full-byline">
                  <section className="post-full-byline-content">
                    <ul className="author-list">
                      <li className="author-list-item">
                        <p className="author-avatar">
                          {post.primary_author.profile_image ? (
                            <img
                              className="author-profile-image"
                              src={post.primary_author.profile_image}
                              alt={post.primary_author.name}
                            />
                          ) : (
                            <img
                              className="default-avatar"
                              src="/images/icons/avatar.svg"
                              alt={post.primary_author.name}
                            />
                          )}
                        </p>
                      </li>
                    </ul>

                    <section className="post-full-byline-meta">
                      <h4 className="author-name text-dark text-capitalize">
                        {post.primary_author.name}
                      </h4>
                      <div className="byline-meta-content">
                        <time className="byline-meta-date" dateTime="2020-05-22">
                          <Moment format="MMM DD, YYYY">{post.published_at}</Moment>
                        </time>
                      </div>
                    </section>
                  </section>
                </div> */}
              </header>
              {/* Post image */}
              <figure className="post-full-image">
                <img src={post.feature_image} alt={post.title} />
              </figure>
              {/* End Post image */}

              {/* Content */}
              <section className="post-full-content">
                <div className="post-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.html,
                    }}
                  />
                </div>
              </section>
              {/* End Content */}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

BlogDetails.getInitialProps = async (ctx) => {
  const post = await getPost(ctx.query.slug);

  // Featured artticles

  return { post };
};

export default BlogDetails;
