import React, { useRef, useState } from 'react';
import './contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

AOS.init();

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Sent message successfully');
        },
        (error) => {
          console.log(error.text);
          setMessage('Could not send message');
        }
      );
    e.target.reset();
  };

  return (
    <div className="Contact" id="Contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={sendEmail}
          ref={form}
        >
          <div
            className="form__group field"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <input
              type="input"
              autoComplete="off"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Name
            </label>
          </div>
          <div
            className="form__group field"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <input
              autoComplete="off"
              type="input"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div
            className="form__group field"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <input
              type="input"
              autoComplete="off"
              className="form__field"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
          </div>
          <div
            className="form__group field"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <input
              autoComplete="off"
              type="input"
              className="form__field"
              placeholder="Message"
              name="message"
              id="message"
              required
            />
            <label htmlFor="message" className="form__label">
              Message
            </label>
          </div>
          <div
            className="button"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <button type="submit">Send</button>
          </div>
          <p className="message">{message}</p>
          <div
            className="direct-contact-container"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <ul className="social-media-list">
              <a
                href="https://github.com/Rohith-JN"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <li>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="https://twitter.com/RohithNambiar4"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <li>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="https://t.me/RohithJN"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <li>
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                </li>
              </a>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
