import { useForm } from 'react-hook-form';
import Links from './Links';
import PhoneInput from 'react-phone-input-2';

function Footer(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log('apply form data', data);
  };

  return (
    <section className="py-5 footer">
      <div className="container pt-3 pt-md-0">
        <div className="row mx-0 text-white mt-md-5">
          <div className="col-md-6">
            <Links />
          </div>
          <div className="col-md-6 px-0 p-5 boder-pill contact" style={{ backgroundColor: '#000' }}>
            <p className="form-text">
              We'll strive to ensure you don’t mute us. Stories from our #SuperApp, straight to your{' '}
              {''}
              <img src="./img/whatsapp-logo.svg" alt="WhatsApp" />{' '}
              <span className="text-white">WhatsApp.</span>
            </p>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent border px-3"
                  placeholder="Enter your Name"
                  id="name"
                  name="name"
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
                inputProps={{
                  name: 'phone',
                  id: 'phone',
                }}
                inputRef={register({
                  required: 'Phone number is required',
                })}
                enableSearch
                placeholder="Enter your phone number here"
                inputClass="w-100 form-control bg-transparent border rounded-pill px-5 py-4"
                buttonClass="rounded-pill text-body bg-transparent border-0 ml-1 phoneDropdown"
              />
              <div className="invalid-feedback pt-2 pl-3 d-block">
                {!!errors.phone && errors.phone.message}
              </div>
              <div>
                <input type="checkbox" /> I agree to the{' '}
                <a href="#" target="_blank" className="text-success">
                  Terms and Conditions
                </a>
              </div>
              <button className="btn rounded-pill bg-green mt-4 px-4 text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-white pt-3 pt-md-5 mt-0 mt-md-5 text-center">
        {' '}
        Gojek tech | <span>{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
