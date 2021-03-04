import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import swal from 'sweetalert';

function WhatsAppForm(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const [countryName, setCountryName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (phoneNumber.length != 12) {
      swal({
        title: '',
        text: 'Please enter a valid phone number',
        icon: 'error',
        timer: 4000,
        button: false,
      });
    } else {
      setLoading(true);
      callSubscribe(data.name);
    }
  };

  const callSubscribe = (name) => {
    axios
      .post(
        `${process.env.whatsAppAddApi}${phoneNumber}`,
        {
          name: name,
          contactStatus: 'VALID',
          customParams: [
            {
              name: 'country',
              value: countryName,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.whatsAppToken}`,
          },
        },
      )
      .then((response) => {
        if (response.data.result === true) {
          swal({
            title: "You're on the list!",
            text: 'We will keep you up to date on all the news from Gojek',
            icon: 'success',
            timer: 4000,
            button: false,
          });
          if (props.src === 'popup') {
            props.setactive(false);
            sendTemplate(name);
          } else {
            setLoading(false);
            reset();
            setphoneNumber('');
          }
        } else {
          setLoading(false);
          swal({
            title: 'Oops!',
            text: 'Something went wrong. Please try again after later',
            icon: 'error',
            timer: 4000,
            button: false,
          });
        }
        setName('');
        setphoneNumber('');
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const sendTemplate = (name) => {
    // Send welcome message
    var dd = [
      {
        name: 'name',
        value: name,
      },
    ];
    axios
      .post(
        `${process.env.whatsAppTemplateApi}${phoneNumber}`,
        {
          template_name: 'welcome_message',
          broadcast_name: 'new_chat_v1_1614241965353',
          parameters: JSON.stringify(dd),
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.whatsAppToken}`,
          },
        },
      )
      .then((response) => {
        console.log('Response', response);
        setLoading(false);
        reset();
        setphoneNumber('');
      })
      .catch((err) => {
        setLoading(false);
        reset();
        setphoneNumber('');
      });
  };

  return (
    <div>
      <p className={`form-text pb-4 formHeading`}>
        Stories from our #SuperApp, <br />
        straight to your {''}
        <img src="/img/whatsapp-logo.svg" alt="WhatsApp" />{' '}
        <span className="text-white">WhatsApp.</span>
      </p>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="subscribe-whatsapp">
        <div className="mb-1">
          <input
            type="text"
            className="form-control bg-transparent border px-3"
            placeholder="Enter your Name"
            id="name"
            name="name"
            ref={register({
              required: 'Name is required',
            })}
            style={{ borderRadius: '1.5rem' }}
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
            autoFocus: false,
          }}
          value={phoneNumber}
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
          You agree to our{' '}
          <a href="/privacy-policy" target="_blank" className="text-success checkbox">
            Privacy policy
          </a>
          <div className="invalid-feedback pl-3 d-block">
            {!!errors.terms && errors.terms.message ? errors.terms.message : ''}
          </div>
        </div>
        <button
          className="btn rounded-pill bg-green mt-4 px-4 text-white"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>

        {props.src === 'popup' && (
          <i
            onClick={() => props.setactive(false)}
            className={`fas fa-times text-white float-right pointer whatsApp-close`}
          ></i>
        )}
      </form>
    </div>
  );
}

export default WhatsAppForm;
