import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="container">


          <div className="row section-head">
            <div className="twelve columns">
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from
                you.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}