import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

function DescriptionPage(props) {
  const [url, setUrl] = useState(null);
  const title = `Opening for ${props.data.text}`;
  console.log('decs proips', props);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="text-center text-md-left jobDescription">
      {/* <Head>
        <title>Gojek | Opening | {props.data.text}</title>
      </Head>
      <Navbar light bg="#924e8c" careers /> */}

      {/* banner section */}
      {/* <section
        id="banner"
        className="py-5 d-flex align-items-end banner"
        style={{ backgroundColor: '#924e8c' }}
      >
        <div className="container">
          <h1 className="banner-head text-white">{props.data.text}</h1>
          <p className="text-white py-4" style={{ fontSize: '22px' }}>
            Products
            {', '}
            Bangalore
          </p>
        </div>
      </section> */}

      <section className="banner pb-5 full-height" style={{ backgroundColor: '#924e8c' }}>
        <div className="container">
          <Navbar />
          <div className="row mx-0 align-items-center full-height-one">
            <div>
              <h1 className="heading text-white">Customer Platforms - Android Engineer</h1>
            </div>
            {/* <div>
              <p className="text-white">System Engineering, Singapore</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* description section */}
      <section>
        <div className="container description">
          <div className="row">
            <div className="col-md-7 pr-2 pl-2 pr-md-5">
              <p className="pb-3 title">Overview</p>
              <p>
                This role will be a part of our core focus to build and operate a platform that can
                empower our product engineers to the next level. Our platform should be able to
                assist them in delivering products that can handle massive scale in a consistent and
                reliable manner.
              </p>
              {/* {props.data.lists.map((list, i) => { */}
              {/* return ( */}
              <div>
                <p className="pb-3 title">Responsibilities</p>
                {/* <div id={i}></div> */}
                {/* <ul dangerouslySetInnerHTML={{ __html: list.content }}></ul> */}
                <ul className="pl-3">
                  <li className="pb-3">
                    Operate, build processes and automations on top of our cloud and platforms to
                    empower the engineering team of one of the world’s fastest-growing unicorns
                  </li>
                  <li className="pb-3">Manage a fully automated build/test/deploy environments </li>
                  <li className="pb-3">
                    Maintain services and overall system health by implementing proper monitoring
                    and symptoms based alerting policies
                  </li>
                  <li className="pb-3">
                    {' '}
                    Collaborate with engineers across different teams to ensure services and
                    components are operating reliably and securely{' '}
                  </li>
                  <li className="pb-3">
                    Collaborate to solve production issues across services and levels of the stack
                  </li>
                </ul>
              </div>

              <div>
                <p className="pb-3 title">Experience</p>
                <ul className="pl-3">
                  <li className="pb-3">
                    Operate, build processes and automations on top of our cloud and platforms to
                    empower the engineering team of one of the world’s fastest-growing unicorns
                  </li>
                  <li className="pb-3">Manage a fully automated build/test/deploy environments </li>
                  <li className="pb-3">
                    Maintain services and overall system health by implementing proper monitoring
                    and symptoms based alerting policies
                  </li>
                  <li className="pb-3">
                    {' '}
                    Collaborate with engineers across different teams to ensure services and
                    components are operating reliably and securely{' '}
                  </li>
                  <li className="pb-3">
                    Collaborate to solve production issues across services and levels of the stack
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 apply pt-5 pt-md-0">
              <div>
                <a href="#" target="_" className="btn btn-success px-5 rounded-pill" role="button">
                  Apply Now
                </a>
                <div className="mt-3 share d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <span>Share role: </span>
                  <TwitterShareButton
                    url={url}
                    title={title}
                    className="Demo__some-network__share-button mx-2"
                  >
                    <TwitterIcon size={30} round />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={url}
                    title={title}
                    quote={title}
                    className="Demo__some-network__share-button mx-2"
                  >
                    <LinkedinIcon size={30} round />
                  </LinkedinShareButton>
                  <FacebookShareButton
                    url={url}
                    title={title}
                    quote={title}
                    // hashtag={this.state.hashtags}
                    className="Demo__some-network__share-button mx-2"
                  >
                    <FacebookIcon size={30} round />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={url}
                    className="Demo__some-network__share-button mx-2"
                    title={title}
                  >
                    <WhatsappIcon size={30} round />
                  </WhatsappShareButton>
                </div>
                <p className="applyText">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
                <div className="card my-4"></div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </section>
    </div>
  );
}

// to fetch the jobs description
export async function getServerSideProps(ctx) {
  console.log('server id', ctx.query.id);
  const apiUrl = `https://api.lever.co/v0/postings/gojek/${ctx.query.id}/`;

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

export default DescriptionPage;
