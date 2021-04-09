import React, { Component } from 'react';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Highlights</a></li>
              <li><a className="smoothscroll" href="#skills">Skills</a></li> {/* added */}
              <li><a className="smoothscroll" href="#work">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline" style={{ color: "#f1a555" }}>I'm {resumeData.name}.</h1>
              <div style={{ fontSize: "35px", lineHeight: "30px", color: "#dbdbdb" }}> <TypistLoop interval={1500} >
                {[
                  'Software Engineer',
                  'Front-End Web Developer',
                  'Cyber Security Enthusiast',
                  'Grad Student at Ontario Tech'
                ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
              </TypistLoop> </div>
              {/* <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>I am a {resumeData.role}.{resumeData.roleDescription}
              </h3> */}
              <hr />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}