import { useState } from 'react';
import { scroller } from 'react-scroll';
import Router from 'next/router';

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
          <div className="row justify-content-around align-items-end">
            <div className="col-12 col-lg-5 order-1 order-lg-0 pr-5">
              <h1 className="banner-head text-white">
                Wondering <br />
                how we do it all?
              </h1>
              <p className="text-white">
                Relive our learnings, trials, and triumphs through the words of our GoTroops.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src="/img/Blog-Banner.png" className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Tags tags={tags} onClick={changeTag} activeTag={tag} />

        {/* Tech Posts */}
        <BlogNew heading="Tech" posts={props.data.items} link="tech" pageName="all-posts" />
        {/* End Tech Posts */}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.gojekengineering.com%2Ffeed`;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return {
        props: { data },
      };
    } else {
      return await {
        props: {
          data: [],
        },
      };
    }
  } catch (error) {
    // Network error
    return { props: { data: [] } };
  }
}

export default allPosts;
