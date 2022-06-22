/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef } from 'react';
import './contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

AOS.init();

function Contact() {
  const form = useRef();

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
          NotificationManager.success(
            'Thank you for contacting me',
            'Message sent!'
          );
        },
        (error) => {
          console.log(error.text);
          NotificationManager.error(
            'Please try again later',
            'Message could not be sent!'
          );
        }
      );
    e.target.reset();
  };

  return (
    <div className="Contact" id="Contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-form">
        <form role="form" onSubmit={sendEmail} ref={form}>
          <div
            className="row-1"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <input
              type="text"
              autoComplete="off"
              id="name"
              name="name"
              placeholder="Name"
              spellCheck="false"
              required
            ></input>

            <input
              type="email"
              autoComplete="off"
              id="email"
              name="email"
              placeholder="Email"
              spellCheck="false"
              required
            ></input>
          </div>

          <input
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true"
            type="text"
            autoComplete="off"
            id="subject"
            name="subject"
            placeholder="Subject"
            spellCheck="false"
          ></input>
          <br></br>

          <textarea
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true"
            id="message"
            autoComplete="off"
            name="message"
            placeholder="Message"
            spellCheck="false"
          ></textarea>
          <br></br>
          <div
            className="form-button"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <button type="submit" value="Submit" class="slide">
              Send Message!
            </button>
          </div>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Contact;
