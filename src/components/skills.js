import React, { Component } from "react";

class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData;
        if (resumeData && resumeData.skills1) {
            var skills = resumeData.skills1.icons.map(function (skills, i) {
                return (
                    <li className="list-inline-item mx-3" key={i}>
                        <span>
                            <div className="text-center skills-tile">
                                <i className={skills.class} style={{ fontSize: "8 rem", margin: "20px" }}>
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "30%", marginTop: "4px", fontFamily: "monospace" }}
                                    >
                                        {skills.name}
                                    </p>
                                </i>
                            </div>
                        </span>
                    </li>
                );
            });
        }

        return (
            <section id="skills">
                <div className="col-md-10 mt-4 text-center">
                    <div className="col-md-12">
                        <div className="header-col">
                            <h1 className="title-a"><span>Skill Set</span></h1>
                        </div>
                    </div>
                    <div className="col-md-12 text-center mt-4" style={{ paddingTop: "20px" }}>
                        <ul className="list-inline mx-auto skill-icon mt-4">{skills}</ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;