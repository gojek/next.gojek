import { useState } from 'react';
import { scroller } from 'react-scroll';

import Head from 'next/head';
import homePage1 from '~/../../static/Homepage-05.png';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '../../comps/BlogNew';
import FeaturedPosts from '~/../../comps/BlogNew/featured';
import { CTA } from '../../comps/BlogNew/cta';

function Blog(props) {
  console.log('Props', props);
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
    { name: 'Data', slug: 'data-science' },
    { name: 'Culture', slug: 'culture' },
    { name: 'News', slug: 'news' },
    { name: 'Design', slug: 'design' },
    { name: 'Stories', slug: 'gojek-stories' },
  ];

  return (
    <div className="text-center text-md-left">
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
                #SuperApp.
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

        {/* Tech Posts */}
        {props.techPosts.status !== 'error' && (
          <BlogNew heading="Tech" id="tech" posts={props.techPosts.items} link="tech" />
        )}
        {/* End Tech Posts */}
      </div>

      <div className="container-fluid bg-light">
        {/* Data posts */}
        <FeaturedPosts />
        {/* End Featured posts */}
      </div>

      <div className="container">
        {/* Data posts */}
        {/* <Element name="data-science"> */}
        {props.dataPosts.status !== 'error' && (
          <BlogNew heading="Data" posts={props.dataPosts.items} link="data-science" />
        )}

        {/* </Element> */}
        {/* End Data posts */}

        {/* CTA 1 */}
        <CTA />
        {/* End CTA */}

        {/* Culture posts */}
        {props.culturePosts.status !== 'error' && (
          <BlogNew heading="Culture" posts={props.culturePosts.items} link="culture" />
        )}
        {/* End Culture posts */}

        {/* News posts */}
        {props.newsPosts.status !== 'error' && (
          <BlogNew heading="News" posts={props.newsPosts.items} link="news" />
        )}
        {/* End news posts */}

        {/* design posts */}
        {props.designPosts.status !== 'error' && (
          <BlogNew heading="Design" posts={props.designPosts.items} link="design" />
        )}
        {/* End design posts */}

        {/* Stories posts */}
        {props.culturePosts.status !== 'error' && (
          <BlogNew heading="Stories" posts={props.culturePosts.items} link="gojek-stories" />
        )}
        {/* End Stories posts */}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.gojekengineering.com%2Ffeed`;

  const techPostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/tech';

  const dataPostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/data-science';

  const culturePostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/culture';

  const storiesPostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/gojek-stories';

  const designPostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/design';

  const newsPostUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://blog.gojekengineering.com/feed/tagged/news';

  try {
    const response = await fetch(apiUrl);
    const techResponse = await fetch(techPostUrl);
    const dataResponse = await fetch(dataPostUrl);
    const cultureResponse = await fetch(culturePostUrl);
    const storiesResponse = await fetch(storiesPostUrl);
    const designResponse = await fetch(designPostUrl);
    const newsResponse = await fetch(newsPostUrl);

    if (response.ok) {
      const data = await response.json();
      const techPosts = await techResponse.json();
      const dataPosts = await dataResponse.json();
      const culturePosts = await cultureResponse.json();
      const storiesPosts = await storiesResponse.json();
      const designPosts = await designResponse.json();
      const newsPosts = await newsResponse.json();
      return {
        props: { data, techPosts, dataPosts, culturePosts, storiesPosts, designPosts, newsPosts },
      };
    } else {
      return await {
        props: {
          data: [],
          techPosts: [],
          dataPosts: [],
          culturePosts: [],
          storiesPosts: [],
          designPosts: [],
          newsPosts: [],
        },
      };
    }
  } catch (error) {
    // Network error
    return { props: { data: [] } };
  }
}

export default Blog;
