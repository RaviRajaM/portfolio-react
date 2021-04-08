import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCode } from "react-icons/fa";
export default class About extends Component {
   moveToSkillsSection = () => {

   }

   render() {
      let resumeData = this.props.resumeData;
      return (
         <Fragment>
            <section id="about">
               <div className="container">
                  <div className="row">

                     <div className="col-sm-3 md-3 mt-4 text-center">

                        <img className="profile-pic" src="images/profilepic.jpg" alt="raja's_profile_picture" />

                     </div>

                     <div className="col-sm-9 md-3 mt-4 text-center">
                        <div className="header-col text-center">
                           <h1 className="title-a"><span style={{ color: "crimson" }}> About Me</span></h1>
                        </div>
                        <p>
                           {
                              resumeData.aboutme
                           } {<br />}
                           {
                              resumeData.aboutme1
                           }{<br />}
                           {
                              resumeData.aboutme2
                           }{<br />}
                           {
                              resumeData.aboutme3
                           }{<br />}
                           {
                              resumeData.aboutme4
                           }{<br />}
                           {
                              resumeData.aboutme5
                           }
                           {<br />}
                           {
                              resumeData.aboutme6
                           }
                           <a href={resumeData.portfolioSourceCode[0].url} target="_blank"><i className={resumeData.portfolioSourceCode[0].className}></i></a>
                        </p>
                     </div>
                  </div>
                  <Row className="text-center" style={{ display: "contents" }}>

                     <div className=" mt-4 text-center">
                        <button type="button" className="btn btn-primary btn-circle btn-xl">My Resume</button>
                        <button type="button" className="btn btn-secondary btn-circle btn-xl">My Work</button>
                        <button type="button" onClick={() => this.moveToSkillsSection} className="btn btn-success btn-circle btn-xl">My Skills</button>
                     </div>
                  </Row>
                  <Row className="" style={{ display: "contents" }}>

                     <div className=" mt-4">
                        <p>I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love
                        the logic and structure of coding and always strive to write elegant and efficient code, whetehr it be HTML,
                           CSS or JQuery. </p>

                     </div>
                  </Row>
                  {/* <div className="row">
                  <div className="three columns">

                  </div>
                  <div className="nine columns main-col title-box">
                     <h3 className="title-a">Things that I do</h3>
                  </div>
                  <div className="row banner">
                     <div className="banner-text">


                        <ul className="thingsIDo">
                           {
                              resumeData.thingsIDo && resumeData.thingsIDo.map(item => {
                                 return (
                                    <li key={item.name}>
                                       <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                    </li>
                                 )
                              }
                              )
                           }
                        </ul>
                     </div>
                  </div>
               </div> */}

               </div>
            </section>
         </Fragment>
      );
   }
}