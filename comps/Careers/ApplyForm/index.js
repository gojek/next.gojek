import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

function ApplyForm(props) {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [file, setFile] = useState('');
  const [fileError, setFileError] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (file != '') {
      let fd = new FormData();
      fd.append('resume', file.file);
      fd.append('name', data.name);
      fd.append('email', data.email);
      fd.append('phone', data.phone);
      fd.append('org', data.org);
      fd.append('urls[LinkedIn]', data.linkedIn);
      fd.append('urls[GitHub]', data.github);
      fd.append('urls[Portfolio]', data.portfolio);
      fd.append('comments', data.comments);
      fd.append('cards[cc56f5ef-4f9d-4686-bca8-b3b29b032087][field0]', data.authorisation);
      fd.append('cards[cc56f5ef-4f9d-4686-bca8-b3b29b032087][field1]', data.experience);
      fd.append('cards[cc56f5ef-4f9d-4686-bca8-b3b29b032087][field2]', data.source);
      console.log('fd', fd, data);
      axios
        .post(
          `https://api.lever.co/v0/postings/gojek/${router.query.id}`,
          {
            fd,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((res) => {
          console.log('res', res.data);
        })
        .catch((err) => {
          console.log('error in request', err);
        });
    }
  };

  const checkValidation = () => {
    if (file == '') {
      setFileError(true);
    }
  };

  const onFileChange = (event) => {
    let newFile = event.target.files[0];
    setFileError(false);
    setFile({ file: newFile, name: newFile.name });
  };

  return (
    <div>
      <div className="applyForm">
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
                      id="org"
                      name="org"
                      placeholder="Current Workplace*"
                      ref={register({
                        required: 'Current Workplace is required',
                      })}
                    />
                    <div className="invalid-feedback pl-3">
                      {!!errors.org && errors.org.message}
                    </div>
                  </div>
                </div>
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
                      className="custom-select form-control "
                      id="authorisation"
                      name="authorisation"
                      ref={register({
                        validate: (value) =>
                          value != 'Work Authorisation*' || 'Work Authorisation is required',
                      })}
                    >
                      <option defaultValue>Work Authorisation*</option>
                      <option>
                        I am authorised to work for any employer in the country in which this
                        position is based
                      </option>
                      <option>
                        I require/will require Gojek's sponsorship to get work authorization in the
                        country in which the position is based
                      </option>
                      <option>
                        My status to work in the country in which this position is based is unknown
                      </option>
                    </select>
                    <div className="invalid-feedback pl-3 mb-3">
                      {!!errors.authorisation && errors.authorisation.message}
                    </div>
                    <select
                      className="custom-select form-control"
                      id="experience"
                      name="experience"
                      ref={register({
                        validate: (value) =>
                          value != 'Total work experience (in years)*' || 'Experience is required',
                      })}
                    >
                      <option defaultValue>Total work experience (in years)*</option>
                      <option>0 - 2 years</option>
                      <option>3 - 5 years</option>
                      <option>6 - 10 years</option>
                      <option>`&gt;` 10 years</option>
                    </select>
                    <div className="invalid-feedback pl-3 mb-3">
                      {!!errors.experience && errors.experience.message}
                    </div>
                    <select
                      className="custom-select form-control"
                      id="source"
                      name="source"
                      ref={register({
                        validate: (value) =>
                          value != 'Where did you hear about us?*' || 'Source is required',
                      })}
                    >
                      <option defaultValue>Where did you hear about us?* </option>
                      <option>Gojek Employee</option>
                      <option>Advertisements</option>
                      <option>Blog</option>
                      <option>Conference &amp; Meetups</option>
                      <option>Social Media</option>
                      <option>gojek.io</option>
                      <option>SuperApp Ads</option>
                      <option>LinkedIn</option>
                      <option>Glassdoor</option>
                      <option>Job Board</option>
                      <option>Campus Events</option>
                      <option>Word Of Mouth</option>
                      <option>Others</option>
                    </select>
                    <div className="invalid-feedback pl-3 mb-3">
                      {!!errors.source && errors.source.message}
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
                        onClick={(ev) => {
                          ev.target.value = null;
                        }}
                        onChange={(ev) => {
                          onFileChange(ev);
                        }}
                      />
                      {!file.name ? (
                        <p className={`fileTitle mb-2 ${fileError ? 'invalid-feedback' : ''}`}>
                          Please upload your resume *
                        </p>
                      ) : (
                        ''
                      )}
                      <div className="row align-items-center justify-content-between">
                        <label htmlFor="file" className="btn btn-secondary px-5 mb-3">
                          {file.name ? 'Change File' : 'upload files'}
                        </label>
                        {file.name ? <p className="p-1">Selected file : {file.name}</p> : ''}
                      </div>
                      <p></p>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control p-3"
                        id="comments"
                        rows="3"
                        name="comments"
                        placeholder="Add a cover letter or anything else you want to share… "
                      ></textarea>
                      <div className="invalid-feedback pl-3">
                        {!!errors.comments && errors.comments.message}
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="btn btn-success px-5"
                      onClick={() => checkValidation()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5 py-5 mt-md-5">
              {/* linked in banner */}
              {/* <div className="card linkedIn my-4 py-5">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
