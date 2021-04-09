import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12 text-center mt-4 mb-4">
              <p className="mb-0"> Copyright &copy;  2021 Ravi Raja Madugula. All Rights Reserved</p>
            </div>
            {/*  <div className="col-md-6">
              <ul className="social-links">
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

            </div> */}
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </div>
      </footer>
    );
  }
}