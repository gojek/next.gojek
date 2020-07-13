import { useState } from 'react';
import { scroller } from 'react-scroll';

import Head from 'next/head';
import homePage1 from '~/../../static/Homepage-05.png';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogNew from '~/../../comps/BlogNew';
import FeaturedPosts from '~/../../comps/BlogNew/featured';
import { CTA } from '../comps/BlogNew/cta';

function Blog(props) {
  const [tag, setTag] = useState('tech');

  const changeTag = (tagName) => {
    setTag(tagName);
    console.log('Tag name', tagName);
    scroller.scrollTo(tagName, {
      offset: -125,
      smooth: true,
    });
  };

  const tags = [
    { name: 'tech', slug: 'tech' },
    { name: 'data', slug: 'data-science' },
    { name: 'culture', slug: 'culture' },
    { name: 'news', slug: 'news' },
    { name: 'design', slug: 'design' },
    { name: 'stories', slug: 'gojek-stories' },
  ];

  return (
    <div className="text-center text-md-left">
      <Head>
        <title>Gojek | Blogs</title>
      </Head>
      <Navbar light bg="#720062" />
      {/* banner section */}
      <section
        className="py-5 d-flex align-items-center blog-banner"
        style={{ backgroundColor: '#720062' }}
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
              <img src={homePage1} className="img-fluid banner-img" alt="Gojek Banner" />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Tags tags={tags} onClick={changeTag} activeTag={tag} />

        {/* Tech Posts */}
        <BlogNew heading="Tech" id="tech" posts={props.techPosts.items} link="tech" />
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
        <BlogNew heading="Data" posts={props.dataPosts.items} link="data-science" />
        {/* </Element> */}
        {/* End Data posts */}

        {/* CTA 1 */}
        <CTA />
        {/* End CTA */}

        {/* Culture posts */}
        <BlogNew heading="Culture" posts={props.culturePosts.items} link="culture" />
        {/* End Culture posts */}

        {/* Blog tags - TBC*/}
        <section>
          <div className="row">
            <div className="col-md-5">
              <a target="_blank" href={`https://blog.gojekengineering.com/tech/home`}>
                <div className="card bg-blue border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">Tech</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a target="_blank" href={`https://blog.gojekengineering.com/data-science/home`}>
                <div className="card bg-orange border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">Data</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a target="_blank" href={`https://blog.gojekengineering.com/culture/home`}>
                <div className="card bg-pink-light border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">Culture</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col mt-2">
              <a target="_blank" href={`https://blog.gojekengineering.com/news/home`}>
                <div className="card bg-purple border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">News</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col mt-2">
              <a target="_blank" href={`https://blog.gojekengineering.com/design/home`}>
                <div className="card bg-red border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">Design</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-5 mt-2">
              <a target="_blank" href={`https://blog.gojekengineering.com/gojek-sories/home`}>
                <div className="card bg-green-light border-0 text-white category-box p-4">
                  <div className="card-body">
                    <h3 className="title">Stories</h3>
                    <p>13 articles</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* End */}

        {/* News posts */}
        <BlogNew heading="News" posts={props.newsPosts.items} link="news" />
        {/* End news posts */}

        {/* design posts */}
        <BlogNew heading="Design" posts={props.designPosts.items} link="design" />
        {/* End design posts */}

        {/* Stories posts */}
        <BlogNew heading="Stories" posts={props.culturePosts.items} link="gojek-stories" />
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
