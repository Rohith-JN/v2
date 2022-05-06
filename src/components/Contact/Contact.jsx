import React, { useRef } from 'react';
import './contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
AOS.init();

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kqcnemw',
        'template_2a8ejpr',
        form.current,
        'r0DWhD9Zi9SgWbZq8'
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
      <h1 class="section-header">Contact</h1>
      <div class="contact-wrapper">
        <form
          id="contact-form"
          class="form-horizontal"
          role="form"
          onSubmit={sendEmail}
          ref={form}
        >
          <div
            class="form__group field"
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
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Name
            </label>
          </div>
          <div
            class="form__group field"
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
              class="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label for="email" class="form__label">
              Email
            </label>
          </div>
          <div
            class="form__group field"
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
              class="form__field"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <label for="subject" class="form__label">
              Subject
            </label>
          </div>
          <div
            class="form__group field"
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
              class="form__field"
              placeholder="Message"
              name="message"
              id="message"
              required
            />
            <label for="message" class="form__label">
              Message
            </label>
          </div>
          <div
            class="button"
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
        <div class="direct-contact-container">
          <ul class="contact-list">
            <li
              class="list-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="900"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <i class="fa fa-map-marker fa-2x">
                <span class="contact-text place">
                  Bangalore, Karnataka, India
                </span>
              </i>
            </li>
            <li
              class="list-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="900"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <i class="fa fa-envelope fa-2x">
                <span class="contact-text gmail">
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
            class="social-media-list"
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
              class="contact-icon"
            >
              <li>
                <i class="fa fa-github" aria-hidden="true"></i>
              </li>
            </a>
            <a
              href="https://twitter.com/RohithNambiar4"
              target="_blank"
              class="contact-icon"
            >
              <li>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
            </a>
            <a
              href="https://t.me/RohithJN"
              target="_blank"
              class="contact-icon"
            >
              <li>
                <i class="fa fa-telegram" aria-hidden="true"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
