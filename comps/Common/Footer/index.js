import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Links from './Links';
import WhatsAppForm from './whatsAppform';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import swal from 'sweetalert';

function Footer(props) {
  // const { register, handleSubmit, errors } = useForm();
  // const [countryName, setCountryName] = useState('');
  // const [name, setName] = useState('');
  // const [phoneNumber, setphoneNumber] = useState('');

  // const onSubmit = (data, e) => {
  //   e.preventDefault();
  //   console.log('country', countryName);
  //   if (phoneNumber.length < 11) {
  //     swal({
  //       title: '',
  //       text: 'Please enter a valid phone number',
  //       icon: 'error',
  //       timer: 4000,
  //       button: false,
  //     });
  //   } else {
  //     axios
  //       .post(
  //         `https://live-server-367.wati.io/api/v1/addContact/${phoneNumber}`,
  //         {
  //           name: data.name,
  //           contactStatus: 'VALID',
  //           customParams: [
  //             {
  //               name: 'country',
  //               value: countryName,
  //             },
  //           ],
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YWRiNTM0Zi0wYzI2LTQ1ZDUtOGJhMi04N2RlMzJhMTkxMjYiLCJ1bmlxdWVfbmFtZSI6InN1bWFudGgucmFqQGdvamVrLmNvbSIsIm5hbWVpZCI6InN1bWFudGgucmFqQGdvamVrLmNvbSIsImVtYWlsIjoic3VtYW50aC5yYWpAZ29qZWsuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU5JU1RSQVRPUiIsImV4cCI6MjUzNDAyMzAwODAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.WXEky8gpycozqFQ-c9XrjGb2cqUEZc3is4taurCKppU`,
  //           },
  //         },
  //       )
  //       .then((response) => {
  //         if (response.data.result === true) {
  //           swal({
  //             title: "You're on the list!",
  //             text: 'We will keep you up to date on all the news from Gojek',
  //             icon: 'success',
  //             timer: 4000,
  //             button: false,
  //           });
  //         } else {
  //           swal({
  //             title: 'Oops!',
  //             text: 'Something went wrong. Please try again after later',
  //             icon: 'error',
  //             timer: 4000,
  //             button: false,
  //           });
  //         }
  //         setName('');
  //         setphoneNumber('');
  //       })
  //       .catch((err) => {
  //         console.log('error in request', err);
  //       });
  //   }
  // };

  return (
    <section className="py-5 footer">
      <div className="container pt-3 pt-md-0">
        <div className="row mx-0 text-white mt-md-5">
          <div className="col-md-6 order-md-first order-last">
            <Links />
          </div>
          <div
            className="col-md-6 order-md-last order-first px-0 p-md-5 px-3 py-5 boder-pill contact"
            style={{ backgroundColor: '#000' }}
          >
            {/* <p className="form-text pb-4">
              Stories from our #SuperApp, <br />
              straight to your {''}
              <img src="/img/whatsapp-logo.svg" alt="WhatsApp" />{' '}
              <span className="text-white">WhatsApp.</span>
            </p>
            <form
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              className="subscribe-whatsapp"
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent border px-3"
                  placeholder="Enter your Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={register({
                    required: 'Name is required',
                  })}
                />
                <div className="invalid-feedback pt-2 pl-3 d-block">
                  {!!errors.name && errors.name.message ? errors.name.message : ''}
                </div>
              </div>
              <PhoneInput
                country={'in'}
                name="phone"
                inputProps={{
                  name: 'phone',
                  id: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                value={phoneNumber}
                inputRef={register({
                  required: 'Phone number is required',
                })}
                enableSearch
                searchPlaceholder="Search"
                inputClass="w-100 form-control bg-transparent border rounded-pill px-5 py-4"
                buttonClass="rounded-pill text-body bg-transparent border-0 ml-1 phoneDropdown"
                onChange={(changeValue, data, event) => {
                  setCountryName(data.name);
                  setphoneNumber(changeValue);
                }}
              />
              <div className="invalid-feedback pt-2 pl-3 d-block">
                {!!errors.phone && errors.phone.message}
              </div>
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  ref={register({
                    required: 'Privacy policy is required',
                  })}
                />{' '}
                I agree to the{' '}
                <a href="/privacy-policy" target="_blank" className="text-success checkbox">
                  Privacy policy
                </a>
                <div className="invalid-feedback pl-3 d-block">
                  {!!errors.terms && errors.terms.message ? errors.terms.message : ''}
                </div>
              </div>
              <button className="btn rounded-pill bg-green mt-4 px-4 text-white" type="submit">
                Submit
              </button>
            </form> */}
            <WhatsAppForm src={'footer'} />
          </div>
        </div>
      </div>
      <p className="text-white pt-3 pt-md-0 mt-0 mt-md-5 text-center">
        {' '}
        Gojek tech | <span>{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
