/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef } from 'react';
import '../styles/contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import {
    NotificationContainer,
    NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

AOS.init();

const Contact = () => {
    const form: any = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : '',
                process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : '',
                form.current,
                process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ''
            )
            .then(
                (result) => {
                    NotificationManager.success(
                        'Thank you for contacting me',
                        'Message sent!'
                    );
                },
                (error) => {
                    NotificationManager.error(
                        'Please try again later',
                        'Message could not be sent!'
                    );
                }
            );
        e.target.reset();
    };

    return (
        <div className="Contact-container" id="Contact">
            <div className="Contact">
                <h1 className="section-header" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="900"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">Contact</h1>
                <div className="main">
                    <div className="contact-form">
                        <form
                            role="form"
                            onSubmit={sendEmail}
                            ref={form}
                        >
                            <div className="row-1">
                                <input
                                    type="text"
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    spellCheck="false"
                                    required
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="100"
                                    data-aos-duration="900"
                                    data-aos-easing="ease"
                                    data-aos-mirror="false"
                                    data-aos-once="true"
                                ></input>

                                <input
                                    type="email"
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    spellCheck="false"
                                    required
                                    data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="100"
                                    data-aos-duration="900"
                                    data-aos-easing="ease"
                                    data-aos-mirror="false"
                                    data-aos-once="true"
                                ></input>
                            </div>

                            <input
                                type="text"
                                autoComplete="off"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                spellCheck="false"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="200"
                                data-aos-duration="900"
                                data-aos-easing="ease"
                                data-aos-mirror="false"
                                data-aos-once="true"
                            ></input>
                            <br></br>

                            <textarea
                                id="message"
                                autoComplete="off"
                                name="message"
                                placeholder="Message"
                                spellCheck="false"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="300"
                                data-aos-duration="900"
                                data-aos-easing="ease"
                                data-aos-mirror="false"
                                data-aos-once="true"
                            ></textarea>
                            <br></br>
                            <div className="form-button" data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="400"
                                data-aos-duration="900"
                                data-aos-easing="ease"
                                data-aos-mirror="false"
                                data-aos-once="true">
                                <button type="submit" value="Submit" className="slide">
                                    Send Message!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <NotificationContainer />
            </div>
            <div className="bottom">
                <h3>Designed & built by <a href="https://github.com/Rohith-JN">Rohith JN</a></h3>
            </div>
        </div>
    );
}

export default Contact;
