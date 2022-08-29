import React from "react"

import Title from "../../globals/Title/Title"
import Phones from "../../../assets/phones.png"
import PhonesTop from "../../../assets/phones_top.png"
import PhonesBottom from "../../../assets/phones_bottom.png"
import "./Project.scss"

const Project = () => {
  return(
    <section className="project">
      <div className="project_subtitle-wrapper">
        <div className="subtitle_line" />
        <Title className="project_subtitle" size="4">DEVELOPMENT, UI/UX</Title>
      </div>
      <div className="project_title-wrapper">
        <Title className="project_title" size="1">Name of this Project</Title>
        <button className="project_btn">Start your project</button>
      </div>
      <p className="project_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <div className="project_main">
        <div className="project_cards">
          <div>
            <Title className="project_cards-title" size="5">Team</Title>
            <p className="project_cards-description">Project Manager, 2 Senior Developers, UI/UX Designer, QA Engineer.</p>
          </div>
          <div>
            <Title className="project_cards-title" size="5">Technologies</Title>
            <p className="project_cards-description">HTML5, Node.js, Gatsby</p>
          </div>
          <div>
            <Title className="project_cards-title" size="5">Timeline</Title>
            <p className="project_cards-description">3 weeks.</p>
          </div>
        </div>
        <div className="project_images">
          <img className="left" src={Phones} />
          <img className="right_top" src={PhonesTop} />
          <img className="right_bottom" src={PhonesBottom} />
        </div>
      </div>
    </section>
  )
}

export default Project