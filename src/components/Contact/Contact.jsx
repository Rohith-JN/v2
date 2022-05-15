import React, { useRef } from "react";
import "./contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

AOS.init();

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqcnemw",
        "template_2a8ejpr",
        form.current,
        "r0DWhD9Zi9SgWbZq8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
        </form>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li
              className="list-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="900"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  Bangalore, Karnataka, India
                </span>
              </i>
            </li>
            <li
              className="list-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="900"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a
                    href="mailto:rohithnambiar04@gmail.com"
                    title="Send me an email"
                  >
                    rohithnambiar04@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <ul
            className="social-media-list"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
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
      </div>
    </div>
  );
}

export default Contact;
