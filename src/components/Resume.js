import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import StarIcon from '@material-ui/icons/Star'
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ backgroundColor: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2013 - 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title"> Student at SRM University</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
            <p>
              Graduated with Honor's Bachelor's Degree in Information & Telecommunication Engineering
    </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2017 - 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Programmer Analyst Traninee - Cognizant Technology Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
            <p>
              Worked as Front End Web Developer For Pepsico Client - collaborated from the Pilot Phase to the Transition.
              Debugged on key enhancements on security improvements in the application.
    </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Programmer Analyst - Cognizant Technology Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              Worked as Full Stack Developer For Pepsico Client - Designed and developed robust, scalable software solutions in collaboration with team members.
              Integrated data from back-end services and databases.
              Staying plugged into emerging technology trends, and applying them into operations and activities.
    </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ backgroundColor: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - 2021 April"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title"> Student - Ontario Tech University</h3>
            <h4 className="vertical-timeline-element-subtitle">Oshawa, ON, Canada</h4>
            <p>
              Graduating with Honor's Master's Degree in Information Technology Security
    </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2020 September"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Develoeped a GitHub Repository Listener Search Engine.</h3>
            <h4 className="vertical-timeline-element-subtitle">GitHub</h4>
            <p>
              Developed a custom GitHub Repo Search Application using ReactJs,
              integrated the Application with octokit/core Restful Webservice to display the Results.
              Framework & Technology: VisualStudio, Javascript, ReactJs, Axios for Integrating API.
    </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            date="2021 January - 2021 April"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Software Engineer at Tiik Tech Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              Worked as Intern for Custom Kitchen Manufacturing Client - Developed Higher Order Reusable React Components.
              Integrated application interface code using JavaScript following React.js workflows.
              Acquired knowledge on React Hooks, Redux and Component Life Cycle.
    </p>
          </VerticalTimelineElement>

        </VerticalTimeline>




      </section>
    );
  }
}