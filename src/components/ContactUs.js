import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="container">

          <div className="header-col text-center mb-4">
            <h1 className="title-a"><span style={{ color: "#170707", fontSize: "3rem" }}>Reach Me At</span></h1>
          </div>
          <div className="row section-head">
            <div className="twelve columns">
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from
                you.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <ul className="social ">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  })
                }
              </ul>

            </div>
          </div>
        </div>
      </section>
    );
  }
}