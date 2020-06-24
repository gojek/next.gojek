import Head from 'next/head';
import Moment from 'react-moment';

import homePage1 from '~/../../static/Homepage-05.png';
import Navbar from '~/../../comps/Navbar';
import Tags from '~/../../comps/Blog/Tag';
import Articles from '~/../../comps/Blog/Articles';
import { getLatestPosts, getTags, getFeaturedPosts } from '~/../../api/posts';
import { Router } from 'next/router';

const tags = [
  { slug: '#', name: 'Tech' },
  { slug: '#', name: 'Data' },
  { slug: '#', name: 'Culture' },
  { slug: '#', name: 'Design' },
  { slug: '#', name: 'News' },
  { slug: '#', name: 'All' },
];

const openBlog = (link) => {
  window.open(link, '_blank');
};

function Blog(props) {
  console.log('blog props', props);
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
        <Tags data={tags} />
      </div>

      {/* Latest artices */}
      {/* <Articles posts={props.latestPosts} title="Latest" viewAll={false} type="articles" /> */}
      {/* End latest articles */}

      {/* Latest articles */}
      <section id="latest-articles" className="pt-5">
        <div className="container py-5">
          <h1 className="header mb-5">Latest</h1>
          <div className="row pt-5 main-article">
            <div className="col-12 col-lg-8 pr-4 pb-4">
              <div className="card pointer" onClick={() => openBlog(props.data.items[0].link)}>
                <img
                  src={props.data.items[0].thumbnail}
                  className="card-img-top bg-red"
                  alt={`${props.data.items[0].author}'s blog`}
                />
                <span className="text-white text-uppercase tag">
                  {props.data.items[0].categories[0]}
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4 main pt-3">
              <h1 className="title pointer" onClick={() => openBlog(props.data.items[0].link)}>
                {props.data.items[0].title}
              </h1>
              <p className="description">
                A product perspective on the recently-introduced Pickup feature for our food
                delivery service — GoFood
              </p>

              <div className="mt-5 meta">
                <p className="mb-0">{props.data.items[0].author}</p>
                <p className="date-time">
                  <Moment format="MMM DD">{props.data.items[0].pubDate}</Moment> | 5 min read
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {props.data.items.map((blog, i) => {
              if (i > 0) {
                return (
                  <div className="col-md-6 col-lg-4">
                    <div className="card bg-transparent article">
                      <img
                        src={blog.thumbnail}
                        className="card-img-top bg-orange pointer"
                        alt={`${blog.author}'s blog`}
                        onClick={() => openBlog(blog.link)}
                      />
                      <span className="text-white text-uppercase tag">{blog.categories[0]}</span>
                      <div className="card-body px-0 pt-4 post">
                        <h5 className="title pt-2 pointer" onClick={() => openBlog(blog.link)}>
                          {blog.title}
                        </h5>
                        <p className="description pt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor{' '}
                        </p>
                        <div className="mt-3 meta">
                          <p className="mb-0">{blog.author}</p>
                          <p className="date-time">
                            <Moment format="MMM DD">{blog.pubDate}</Moment> | 5 min read
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      {/* End latest articles */}

      {/* Featured artices */}
      <section id="featured-articles" className="py-5 d-flex align-items-center bg-light articles">
        <div className="container">
          <h1 className="header my-5 text-center">Featured Articles</h1>

          <div className="row pb-5">
            <div className="col-md-4">
              <div className="card border-0 bg-transparent">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0">
                  <h5 className="title">
                    Code Coverage: From Failing the Build To Publishing The Report…
                  </h5>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card border-0 bg-transparent">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Tech</span>
                <div className="card-body px-0">
                  <h5 className="title">
                    Gojek appoints ex-NASA engineer George Do as Chief Information…{' '}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-transparent">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Design</span>
                <div className="card-body px-0">
                  <h5 className="title">How We Pushed a Million Keys to Redis in Seconds </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End featured articles */}

      {/* Tech articles */}
      <section id="latest-articles" className="pt-5">
        <div className="container py-5">
          <h1 className="header mb-5">Tech</h1>
          <div className="row pt-5 main-article">
            <div className="col-md-8 pr-4 pb-4">
              <div className="card">
                <img src={homePage1} className="card-img-top bg-red" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
              </div>
            </div>
            <div className="col-md-4 main pt-3">
              <h1 className="title">How One Feature Helps Gojek Reduce Booking Cancellations</h1>
              <p className="description">
                A product perspective on the recently-introduced Pickup feature for our food
                delivery service — GoFood
              </p>

              <div className="mt-5 meta">
                <p className="mb-0">Lorem Ipsum</p>
                <p className="date-time">Apr 01 | 5 min read</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">How We Pushed a Million Keys to Redis in Seconds</h5>
                  <p className="description pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">
                    Code Coverage: From Failing the Build To Publishing The Report…
                  </h5>
                  <p className="description pt-3">
                    Introducing Trip Advisor, our new feature to help driver partners communicate
                    with customers and cut down cancellations.
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">
                    How One Feature Helps Gojek Reduce Booking Cancellations
                  </h5>
                  <p className="description pt-3">
                    A product perspective on the recently-introduced Pickup feature for our food
                    delivery service — GoFood
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="text-green-light font-weight-bold mx-auto view-jobs clearIcon">
            View all
            <i className="fas fa-long-arrow-alt-right align-middle ml-3"></i>
          </span>
        </div>
      </section>
      {/* End tech articles */}

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

      {/* Data articles */}
      <section id="latest-articles" className="pt-5">
        <div className="container py-5">
          <h1 className="header mb-5">Data</h1>
          <div className="row pt-5 main-article">
            <div className="col-md-8 pr-4 pb-4">
              <div className="card">
                <img src={homePage1} className="card-img-top bg-red" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
              </div>
            </div>
            <div className="col-md-4 main pt-3">
              <h1 className="title">How One Feature Helps Gojek Reduce Booking Cancellations</h1>
              <p className="description">
                A product perspective on the recently-introduced Pickup feature for our food
                delivery service — GoFood
              </p>

              <div className="mt-5 meta">
                <p className="mb-0">Lorem Ipsum</p>
                <p className="date-time">Apr 01 | 5 min read</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">How We Pushed a Million Keys to Redis in Seconds</h5>
                  <p className="description pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">
                    Code Coverage: From Failing the Build To Publishing The Report…
                  </h5>
                  <p className="description pt-3">
                    Introducing Trip Advisor, our new feature to help driver partners communicate
                    with customers and cut down cancellations.
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent article">
                <img src={homePage1} className="card-img-top bg-orange" alt="..." />
                <span className="text-white text-uppercase tag">Culture</span>
                <div className="card-body px-0 pt-4 post">
                  <h5 className="title pt-2">
                    How One Feature Helps Gojek Reduce Booking Cancellations
                  </h5>
                  <p className="description pt-3">
                    A product perspective on the recently-introduced Pickup feature for our food
                    delivery service — GoFood
                  </p>
                  <div className="mt-3 meta">
                    <p className="mb-0">Lorem Ipsum</p>
                    <p className="date-time">Apr 01 | 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="text-green-light font-weight-bold mx-auto view-jobs clearIcon">
            View all
            <i className="fas fa-long-arrow-alt-right align-middle ml-3"></i>
          </span>
        </div>
      </section>
      {/* End data articles */}
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
  // const latestPosts = await getLatestPosts();
  // const tags = await getTags();
  // const featuredPosts = await getFeaturedPosts();

  // // TODO: JUNK
  // // Update featured of all posts as false except for the first post
  // latestPosts.forEach((post) => {
  //   post.featured = false;
  // });
  // latestPosts[0].featured = true;

  // featuredPosts.forEach((post) => {
  //   post.featured = false;
  // });

  // Featured artticles

  // return { latestPosts, tags, featuredPosts };
}

export default Blog;
