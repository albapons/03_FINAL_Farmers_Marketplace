import React, { Component } from "react";
import "../App.css";

// https://mdbootstrap.com/docs/jquery/forms/contact/

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          CONTACT US
        </h2>
        <p className="text-center w-responsive mx-auto mb-5" />
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within
        <div className="container d-flex justify-content-center my-3" />
        <div className="row">
          <div className="col">
            <div
              id="contact-form"
              name="contact-form"
              //   action="mail.php"
              //   method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="button"
                // onClick="document.getElementById('contact-form').submit();"
              >
                Send
              </button>
            </div>
            {/* <div className="status"></div> */}
          </div>
        </div>
        <div className="container d-flex justify-content-center my-3 text-danger">
          MAYBE WE CAN ADD A GOOGLE MAP HERE
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <i className="fas fa-map-marker-alt mt-4 fa-2x beige"></i>
            <p>San Francisco, CA 94126, USA</p>
          </div>
          <div className="col text-center">
            <i className="fas fa-phone mt-4 fa-2x beige"></i>
            <p>+ 01 234 567 89</p>
          </div>

          <div className="col text-center">
            <i className="fas fa-envelope mt-4 fa-2x beige"></i>
            <p>contact@mdbootstrap.com</p>
          </div>
        </div>
      </div>
    );
  }
}
