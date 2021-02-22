import { useState, useEffect } from 'react';
import PageMeta from '~/../../comps/Common/head';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
import { auth } from '~/../../utils/auth';
import ApplyForm from '~/../../comps/Careers/ApplyForm';

function DescriptionPage(props) {
  const [url, setUrl] = useState('./jobs');
  const [expandForm, setExpandForm] = useState(false);
  const title = `Opening for ${props.data.text}`;
  const { data } = props;
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const onFormContinue = () => {
    setExpandForm(true);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    axios
      .post(
        'https://api.lever.co/v0/postings/gojek/9f1c11a2-384f-46db-90f1-2fb6821b84e?9oWUhmqSHImr72Imeq6EN6g7qy+s1GyT4HUz5edIiQfD6hEv',
        {
          data,
        },
      )
      .then((res) => {
        console.log('res', res.data);
      })
      .catch((err) => {
        console.log('error in request', err);
      });
  };

  const description = data.descriptionPlain,
    name = `Gojek Careers: ${data.text}`;

  return (
    <div className="jobDescription">
      <PageMeta title={name} description={description} />

      <Navbar whiteNav />
      <section
        className="banner pt-5 d-flex align-items-center"
        style={{ backgroundImage: "url('/img/careers/job-description/banner.png')" }}
      >
        <div className="container">
          <h1 className="heading text-white pb-3">{data.text}</h1>
          <h5 className="sub-heading text-white">
            {data.categories.team}
            {', '}
            {data.categories.location}
          </h5>
          <a
            href={`${data.applyUrl}?lever-source[]=null`}
            className="btn btn-success rounded-pill px-5 mt-3 d-md-none"
            role="button"
            target="_blank"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* description section */}
      <section className="py-5">
        <div className="mt-5 container description text-left">
          <div className="row">
            <div className="col-lg-7 pr-2 pr-md-5">
              <div>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                <div>
                  <b>{data.lists[0].text}</b>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.lists[0].content }}></div>
                <div className="mt-4">
                  <b>{data.lists[1].text}</b>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.lists[1].content }}></div>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data.additional ? data.additional.split('About Us')[0] : '',
                  }}
                ></div>
                {/* used to autoscroll to show apply form
                <div id="apply" /> */}
              </div>
            </div>
            <div className="col-lg-5 pt-3 pt-md-0">
              <div className="apply">
                <a
                  href={`${data.applyUrl}?lever-source[]=null`}
                  className="btn bg-green-light text-white px-5 rounded-pill w-100"
                  role="button"
                  target="_blank"
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
                  Gojek is a Super App. It’s one app for ordering food, commuting, digital payments,
                  shopping, hyper-local delivery, and a dozen other products. It is Indonesia’s
                  first and only decacorn. It's also the only Southeast Asian startup to be part of
                  Fortune's list of 'Companies That Changed The World.
                </p>

                <div className=" my-5">
                  <a
                    href="https://www.youtube.com/watch?v=VJH5FJ5kaJA"
                    target="_blank"
                    className="card border-0"
                  >
                    <img src="/img/home/social/Yt.png" alt="GOJEK Tech YouTube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-2">
              <hr />
            </div>
          </div>
          {/* <ApplyForm /> */}
        </div>
      </section>
    </div>
  );
}

// to fetch the jobs description
export async function getServerSideProps(ctx) {
  const apiUrl = `https://api.lever.co/v0/postings/gojek/${ctx.query.id}/`;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return { props: { data } };
    } else {
      return await auth(ctx);
    }
  } catch (error) {
    // Network error
    return auth(ctx);
  }
}

export default DescriptionPage;
