import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
  'mdbreact'; 
import picture1 from "../images/portfolio1.jpg"
import picture2 from "../images/portfolio2.jpg"
import picture3 from "../images/portfolio3.jpg"
import picture4 from "../images/portfolio4.jpg"
const onClick = () => {
  window.open(
    "https://ravirajam.github.io/GitHubRepoListener/", "_blank")
}

const onClick1 = () => {
  window.open(
    "https://github.com/RaviRajaM/portfolio-react", "_blank")
}
const Portfolio = () => {
  return (
    <section id="work">
      <div className="container mt-4 mb-4">
        <div className="row" style={{ display: "contents" }}>
          <div className="header-col text-center">
            <h1 className="title-a"><span style={{ color: "crimson" }}> Projects </span></h1>
          </div>
        </div>
        <MDBRow style={{ margin: "25px" }}>

          <MDBCol md="4">
            <MDBCard cascade>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src={picture1}
              />

              <MDBCardBody cascade>
                <MDBCardTitle>Automatic Content Management - Pepsiso Spire</MDBCardTitle>
                <hr />
                <MDBCardText>
                  Overhere I worked as Programmer Analyst Trainee - collaborated from the Pilot Phase to the Transition. I have gained real time
                  hands on expereince on Angular frame work, and developed Restful WebServices on Server Side.
            </MDBCardText>
              </MDBCardBody>
              <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> 2017 - 2018
              </li>

                </ul>
              </div>
            </MDBCard>
          </MDBCol>




          <MDBCol md="4">
            <MDBCard cascade>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src="https://jellyhaus.com/wp-content/uploads/2015/07/Pepsico-SQA-Portal-for-Jellyhaus1.jpg"
              />

              <MDBCardBody cascade>
                <MDBCardTitle style={{ paddingTop: "40px" }}>Pepsico - Parts & Supply</MDBCardTitle>
                <hr />
                <MDBCardText>
                  Worked as Front-End Web Developer, developed a internal web application for Pepsico using Javascript, JQuery Widgets.
                  Here, I have worked on JIRA and HP Quality Center for tracking and find the defects, I have gained knowledge on Custom Jquery
                  Widgets, integrated the Restful Webservices using AJAX o the ciendt side.
            </MDBCardText>
              </MDBCardBody>
              <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> 2018 - 2019
              </li>

                </ul>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard cascade>
              <MDBCardImage style={{ height: "" }}
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src={picture2}
              />
              <MDBBtn
                floating
                tag='a'
                className='ml-auto mr-4 lighten-3 mdb-coalor'
                action
                onClick={onClick}
              >
                <MDBIcon icon='chevron-right' className="mdb-color lighten-3" />
              </MDBBtn>

              <MDBCardBody cascade>
                <MDBCardTitle style={{ paddingTop: "72px" }}>GitHub Repository Search Engine</MDBCardTitle>
                <hr />
                <MDBCardText style={{ paddingBottom: "28px" }}>
                  Develoeped a new GitHub Repo Listener Application using ReactJs Library. User can simply search for any Repositories using this
                  Web Application, and the souce code is available onmy github.
            </MDBCardText>
              </MDBCardBody>
              <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> January - 2020
              </li>

                </ul>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{ margin: "25px", justifyContent:"center" }}>
          <MDBCol md="4">
            <MDBCard cascade>
              <MDBCardImage style={{ height: "250px" }}
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src={picture3}
              />
              <MDBBtn
                floating
                tag='a'
                className='ml-auto mr-4 lighten-3 mdb-coalor'
                action
                onClick={onClick1}
              >
                <MDBIcon icon='chevron-right' className="mdb-color lighten-3" />
              </MDBBtn>

              <MDBCardBody cascade>
                <MDBCardTitle style={{ paddingTop: "" }}>Simple React Portfolio Template</MDBCardTitle>
                <hr />
                <MDBCardText style={{ paddingBottom: "23px" }}>
                  A new React Portfolio Template is designed, developed and deployed on GitHub Pages. The Source code is availble on my GitHub.
                  
            </MDBCardText>
              </MDBCardBody>
              <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> January - 2020
              </li>

                </ul>
              </div>
            </MDBCard>
          </MDBCol>



          <MDBCol md="4">
            <MDBCard cascade>
              <MDBCardImage style={{ height: "250px" }}
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src={picture4}
              />
             

              <MDBCardBody cascade>
                <MDBCardTitle style={{ paddingTop: "" }}>React Web Application - Tiik Tech Inc.</MDBCardTitle>
                <hr />
                <MDBCardText style={{ paddingBottom: "" }}>
                 Worked as an intern at Tiik Tech Inc, developed Higher Order Reusable React Components.
 Writing application interface codes using JavaScript following React.js workflows.
 and acquired knowledge on React Hooks, Redux and Component Life Cycle.

                  
            </MDBCardText>
              </MDBCardBody>
              <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> January 2021 - April 2021
              </li>

                </ul>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>


      </div>
    </section>
  )
}

export default Portfolio;
