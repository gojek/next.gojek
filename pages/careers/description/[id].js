import { useState, useEffect } from 'react';
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
      <Navbar light bg="#924e8c" careers />

      {/* banner section */}
      <section
        id="banner"
        className="py-5 d-flex align-items-end banner"
        style={{ backgroundColor: '#924e8c' }}
      >
        <div className="container">
          <h1 className="banner-head text-white">{props.data.text}</h1>
          <p className="text-white py-4" style={{ fontSize: '22px' }}>
            {props.data.categories.team}
            {', '}
            {props.data.categories.location}
          </p>
        </div>
      </section>

      {/* description section */}
      <section>
        <div className="container description">
          <div className="row justify-content-between">
            <div className="col-md-7 pr-2 pl-2 pr-md-5">
              <p className="pb-3 title">Overview</p>
              <p>{props.data.descriptionPlain}</p>
              {props.data.lists.map((list, i) => {
                return (
                  <div key={i}>
                    <p className="pb-3 title">{list.text}</p>
                    <div id={i}></div>
                    <ul dangerouslySetInnerHTML={{ __html: list.content }}></ul>
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 apply pt-5 pt-md-0">
              <div>
                <a
                  href={props.data.applyUrl}
                  target="_"
                  className="btn btn-success px-5 rounded-pill"
                  role="button"
                >
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
