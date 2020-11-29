import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
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
  const [url, setUrl] = useState('./jobs');
  const [expandForm, setExpandForm] = useState(false);
  const title = `Opening for ${props.data.text}`;
  const { data } = props;
  const { register, handleSubmit, errors } = useForm();

  console.log('decs props', props);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const onFormContinue = () => {
    setExpandForm(true);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log('apply form data', data);
  };

  const description = data.description,
    name = `Gojek | Opening | ${data.text}`;

  return (
    <div className="text-center text-md-left jobDescription">
      <Head>
        <title>Gojek | Opening | {data.text}</title>
        {/* Social media tags */}
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={name} />
        <meta property="og:image" content="/img/gojek-logo.png"></meta>
        <meta property="og:url" content={url} />
      </Head>
      {/* <Navbar light bg="#924e8c" careers /> */}

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

      <Navbar whiteNav />
      <section className="banner pb-5" style={{ backgroundColor: '#924e8c' }}>
        <div className="container">
          <div className="row mx-0 align-items-center full-height-one">
            <div>
              <h1 className="heading text-white pb-3">{data.text}</h1>
              <h5 className="sub-heading text-white">
                {data.categories.team}
                {', '}
                {data.categories.location}
              </h5>
              <a href="#apply" className="btn btn-success rounded-pill px-5 mt-3" role="button">
                Apply Now
              </a>
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
              <div>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                <div>
                  <div>
                    <br />
                  </div>
                  <b>{data.lists[0].text}</b>
                  <div>
                    <br />
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.lists[0].content }}></div>
                <div>
                  <div>
                    <br />
                  </div>
                  <b>{data.lists[1].text}</b>
                  <div>
                    <br />
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.lists[1].content }}></div>
                <div>
                  <br />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.additional ? data.additional.split('About Us')[0] : '',
                  }}
                ></div>{' '}
              </div>
            </div>
            <div className="col-md-5 apply pt-3 pt-md-0">
              <a href="#apply" className="btn btn-success px-5 rounded-pill w-100" role="button">
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
                print, graphic or web designs. The passage is attributed to an unknown typesetter in
                the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                Bonorum et Malorum for use in a type specimen book.
              </p>
              <div className="card my-4"></div>
            </div>
            <div className="pt-5 pb-2">
              <hr />
            </div>
          </div>
        </div>
        <hr />

        {/* apply section */}
        <div className="apply" id="apply">
          <div className="container">
            <div className="row">
              <div className="col-md-7 pr-2 pl-2 pr-md-5">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <p className="py-3 mt-2 mt-md-5 title font-weight-bold">
                      Personal Information <span className="helpText">(‘*’ - Required Fields)</span>
                    </p>
                    <div className="mb-3">
                      <input
                        className="form-control p-3"
                        id="name"
                        name="name"
                        placeholder="Full Name*"
                        ref={register({
                          required: 'Full Name is required',
                        })}
                      />
                      <div className="invalid-feedback pl-3">
                        {!!errors.name && errors.name.message}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control p-3"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email id*"
                        ref={register({
                          required: 'Email id is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Please enter valid Email id',
                          },
                        })}
                      />
                      <div className="invalid-feedback pl-3">
                        {!!errors.email && errors.email.message}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control p-3"
                        id="phone"
                        type="number"
                        name="phone"
                        placeholder="Phone Number*"
                        ref={register({
                          required: 'Phone Number is required',
                        })}
                      />
                      <div className="invalid-feedback pl-3">
                        {!!errors.phone && errors.phone.message}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control p-3"
                        id="current"
                        name="current"
                        placeholder="Current Workplace*"
                        ref={register({
                          required: 'Current Workplace is required',
                        })}
                      />
                      <div className="invalid-feedback pl-3">
                        {!!errors.current && errors.current.message}
                      </div>
                    </div>
                  </div>
                  {expandForm ? (
                    <div>
                      <div className="form-group">
                        <p className="py-3 mt-md-5 title font-weight-bold">Links</p>
                        <div className="mb-3">
                          <input
                            className="form-control p-3"
                            id="linkedIn"
                            name="linkedIn"
                            placeholder="LinkedIn profile"
                            ref={register()}
                          />
                          <div className="invalid-feedback pl-3">
                            {!!errors.linkedIn && errors.linkedIn.message}
                          </div>
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control p-3"
                            id="github"
                            name="github"
                            placeholder="GitHub profile"
                            ref={register()}
                          />
                          <div className="invalid-feedback pl-3">
                            {!!errors.github && errors.github.message}
                          </div>
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control p-3"
                            id="portfolio"
                            name="portfolio"
                            placeholder="Portfolio"
                            ref={register()}
                          />
                          <div className="invalid-feedback pl-3">
                            {!!errors.portfolio && errors.portfolio.message}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="py-3 mt-md-5 title font-weight-bold">
                          Additional Information{' '}
                          <span className="helpText">(‘*’ - Required Fields)</span>
                        </p>
                        <select
                          className="custom-select form-control mb-3"
                          id="authorisation"
                          name="authorisation"
                          ref={register({
                            required: 'Current Workplace is required',
                            min: {
                              value: 1,
                              message: 'Current Workplace is required',
                            },
                          })}
                        >
                          <option defaultValue>Work Authorisation*</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="invalid-feedback pl-3">
                          {!!errors.authorisation && errors.authorisation.message}
                        </div>
                        <select
                          className="custom-select form-control mb-3"
                          id="hear"
                          name="hear"
                          ref={register({
                            required: 'Required',
                            min: {
                              value: 1,
                              message: 'Required',
                            },
                          })}
                        >
                          <option defaultValue>Where did you hear about us?* </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="invalid-feedback pl-3">
                          {!!errors.hear && errors.hear.message}
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control p-3"
                            id="reference"
                            name="reference"
                            placeholder="Full name / Official email ID of Gojek employee (if referral)"
                            ref={register()}
                          />
                          <div className="invalid-feedback pl-3">
                            {!!errors.reference && errors.reference.message}
                          </div>
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control p-3"
                            id="desc"
                            rows="3"
                            name="desc"
                            placeholder="What makes you a good fit for this role? Go on, wow us* :)"
                            ref={register({
                              required: 'Required',
                            })}
                          ></textarea>
                          <div className="invalid-feedback pl-3">
                            {!!errors.desc && errors.desc.message}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="py-3 mt-md-5 title font-weight-bold">
                          We would like to learn more about your work!
                        </p>
                        <div className="file">
                          <input
                            type="file"
                            className="form-control-file"
                            id="file"
                            style={{ display: 'none' }}
                          />
                          <p className="fileTitle mb-2">
                            Please upload your portfolio or any other files (PDF format) you would
                            like to share:
                          </p>
                          <label htmlFor="file" className="btn btn-secondary px-5 mb-3">
                            upload files
                          </label>
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control p-3"
                            id="website"
                            name="website"
                            placeholder="If it's in website format, please mention the URLs"
                            ref={register()}
                          />
                          <div className="invalid-feedback pl-3">
                            {!!errors.website && errors.website.message}
                          </div>
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control p-3"
                            id="cover"
                            rows="3"
                            name="cover"
                            placeholder="Add a cover letter or anything else you want to share… "
                            ref={register({
                              required: 'Required',
                            })}
                          ></textarea>
                          <div className="invalid-feedback pl-3">
                            {!!errors.cover && errors.cover.message}
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <button
                          type="submit"
                          className="btn btn-success px-5"
                          onClick={() => onFormContinue()}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-3">
                      <a href="#apply">
                        <button
                          type="submit"
                          className="btn btn-success px-5"
                          onClick={() => onFormContinue()}
                        >
                          Continue
                        </button>
                      </a>
                    </div>
                  )}
                </form>
              </div>
              <div className="col-md-5 apply py-5 mt-md-5">
                {/* linked in banner */}
                <div className="card linkedIn my-4 py-5">
                  <div className="row justify-content-center">
                    <div className="col-4 text-center">
                      <img
                        src="/img/Marketplace.svg"
                        alt="Gojek Super app"
                        style={{ height: '5rem' }}
                      />
                    </div>
                    <div className="col-6">
                      <button type="button" class="btn btn-warning px-3 font-weight-bold">
                        Apply with LinkedIn
                      </button>
                      <p className="text-white pt-3">
                        Your full LinkedIn profile will be shared. Learn more
                      </p>
                    </div>
                  </div>
                </div>
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
