import Head from 'next/head';

import homePage1 from '~/../../static/Homepage-05.png';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import BlogCard from '~/../../comps/Blog/BlogCard';
import TagCounts from '~/../../comps/Blog/Tag/TagCounts';
import OpenMedium from '~/../../comps/Common/openMedium';

function Blog(props) {
  const tags = [
    { name: 'tech', URL: 'tech' },
    { name: 'data', URL: 'data-science' },
    { name: 'culture', URL: 'culture' },
    { name: 'stories', URL: 'gojek-stories' },
    { name: 'design', URL: 'design' },
    { name: 'news', URL: 'news' },
  ];

  return (
    <div className="text-center text-md-left" id="blogs">
      <Head>
        <title>Gojek | Blogs</title>
      </Head>
      <Navbar light bg="#720062" />

      {/* banner section */}
      <section
        id="banner"
        className="py-5 d-flex align-items-center"
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
      <div className="container pt-5">
        {/* Tags */}
        <Tags tags={tags} blogs={props.data.items} />
      </div>

      {/* Featured artices */}
      <section id="featured-articles" className="py-5 d-flex align-items-center bg-light articles">
        <div className="container">
          <h1 className="header my-5 text-center">Featured Articles</h1>

          <div className="row pb-5">
            <div className="col-md-4">
              <div className="card border-0 bg-transparent">
                <img
                  src={homePage1}
                  className="card-img-top bg-orange"
                  alt="..."
                  style={{ minHeight: '25rem' }}
                />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0">
                  <h5 className="title py-3">
                    Code Coverage: From Failing the Build To Publishing The Report…
                  </h5>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card border-0 bg-transparent">
                <img
                  src={homePage1}
                  className="card-img-top bg-orange"
                  alt="..."
                  style={{ minHeight: '25rem' }}
                />
                <span className="text-white text-uppercase tag">Tech</span>
                <div className="card-body px-0">
                  <h5 className="title py-3">
                    Gojek appoints ex-NASA engineer George Do as Chief Information…{' '}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-transparent">
                <img
                  src={homePage1}
                  className="card-img-top bg-orange"
                  alt="..."
                  style={{ minHeight: '25rem' }}
                />
                <span className="text-white text-uppercase tag">Design</span>
                <div className="card-body px-0">
                  <h5 className="title py-3">
                    Ho py-3w We Pushed a Million Keys to Redis in Seconds{' '}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End featured articles */}

      {/* All-1 articles */}
      <section id="all-blogs" className="pt-5">
        <div className="container py-5">
          <div className="row mt-5">
            {props.data.items.map((blog, i) => {
              if (i < 6) {
                return <BlogCard data={blog} showTag />;
              }
            })}
          </div>
        </div>
      </section>
      {/* End All-1 articles */}

      {/* First article */}
      <section id="first-article" className="pt-5">
        <div className="container">
          <div className="row firstArticleBg justify-content-around p-5">
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-7">
              <h2 className="article-title text-white pr-5">
                Code Coverage: From Failing the Build To Publishing
              </h2>
              <span className="font-weight-bold mx-auto view-jobs clearIcon mt-4">
                Read the article
                <i className="fas fa-long-arrow-alt-right align-middle ml-3"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* End first article */}

      {/* All-2 articles */}
      <section className="pt-5">
        <div className="container py-5">
          <div className="row mt-5">
            {props.data.items.map((blog, i) => {
              if (i > 5 && i < 12) {
                return <BlogCard data={blog} showTag />;
              }
            })}
          </div>
        </div>
      </section>
      {/* End All-2 articles */}

      {/* Tags count section */}
      <section>
        <div className="container py-5">
          <TagCounts tags={tags} data={props.data.items} />
        </div>
      </section>
      {/* End tags count section */}

      {/* All-3 articles */}
      <section className="pt-5">
        <div className="container py-5">
          <div className="row mt-5">
            {props.data.items.map((blog, i) => {
              if (i > 11 && i < 15) {
                return <BlogCard data={blog} showTag />;
              }
            })}
            {props.data.items.length > 15 && (
              <div className="col-12">
                <p
                  className="link text-center text-green-light pt-5 mb-0"
                  onClick={() => OpenMedium(`https://blog.gojekengineering.com`)}
                >
                  See More
                  <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* End All-3 articles */}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.gojekengineering.com%2Ffeed`;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return { props: { data } };
    } else {
      return await { props: { data: [] } };
    }
  } catch (error) {
    // Network error
    return { props: { data: [] } };
  }
}

export default Blog;
