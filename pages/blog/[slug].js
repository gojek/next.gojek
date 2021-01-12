import { useState } from 'react';
import { scroller } from 'react-scroll';
import { getPost } from '../../api/posts';

import Head from 'next/head';
import Moment from 'react-moment';
import Navbar from '~/../../comps/Navbar';
import CommonCta from '~/../../comps/Common/Cta';
import DisqusComments from '~/../../comps/BlogNew/DisqusComments';

import { readingTime as readingTimeHelper } from '@tryghost/helpers';

function BlogDetails(props) {
  const { post } = props;

  const readingTime = readingTimeHelper(post);

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
      <Navbar />

      <section className="pb-5 mt-5 pt-5">
        <div className="container">
          <div className="row">
            <article className="post-details">
              <header className="post-full-header">
                <h1 className="post-full-title font-weight-bold">{post.title}</h1>

                <p className="post-full-custom-excerpt">{post.excerpt}</p>

                <div className="post-full-byline">
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
                        {/* <a
                                                    href={`tag/${post.primary_author.slug}`}
                                                > */}
                        {post.primary_author.name}
                        {/* </a> */}
                      </h4>
                      <div className="date-time">
                        <span>{readingTime}</span> &nbsp;| &nbsp;
                        <span>
                          <Moment format="MMM DD, YYYY">{post.published_at}</Moment>
                        </span>
                      </div>
                    </section>
                  </section>
                </div>
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

      <section className="mb-5">
        <DisqusComments
          id={post.id}
          title={post.title}
          url={`http://localhost:3030/blog/${post.slug}`}
        />
      </section>

      {/* CTA */}
      <CommonCta mobile />
      {/* End CTA */}
    </div>
  );
}

BlogDetails.getInitialProps = async (ctx) => {
  const post = await getPost(ctx.query.slug);

  // Featured artticles

  return { post };
};

export default BlogDetails;
