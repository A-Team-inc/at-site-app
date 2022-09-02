import React from "react"
import { Link } from "gatsby"

import Title from "../../globals/Title/Title"
import OurWorksLeftImg from "../../../assets/our_works_leftImg.png"
import OurWorksRightImg1 from "../../../assets/our_works_rightItem_1.png"
import OurWorksRightImg2 from "../../../assets/our_works_rightItem_2.png"
import OurWorksRightImg3 from "../../../assets/our_works_rightItem_3.png"
import ArrowRight from "../../../assets/icons/arrow_right.svg"
import "./OurWorks.scss"

const OurWorks = () => {
  return(
    <section className="our_works content_max_width" id="our-works">
      <div className="our_works_subtitle-wrapper">
        <div className="subtitle_line" />
        <Title className="our_works_subtitle" size="4">our works</Title>
      </div>
      <div className="our_works_title-wrapper">
        <Title className="our_works_title" size="1">The Projects recent <br />We do</Title>
        <button onClick={() => window.location.pathname = "/our-works"} className="our_works_btn">Show all projects</button>
      </div>
      <div className="our_works_main">
        <div className="left_item">
          <img className="left_item-img" src={OurWorksLeftImg} />
        </div>
        <div className="right_item top">
          <img className="right_item-img" src={OurWorksRightImg1} />
          <div>
            <Title className="right_item-subtitle" size="5">Development <span>| Javascript gatsby</span></Title>
            <Title className="right_item-title" size="4">Website for Agency “Logofo”</Title>
            <Link className="right_item-link" to="/">View the project <img src={ArrowRight} /></Link>
          </div>
        </div>
        <div className="right_item midle">
          <img className="right_item-img" src={OurWorksRightImg2} />
          <div>
            <Title className="right_item-subtitle" size="5">Development <span>| Javascript gatsby</span></Title>
            <Title className="right_item-title" size="4">Website for Agency “Logofo”</Title>
            <Link className="right_item-link" to="/">View the project <img src={ArrowRight} /></Link>
          </div>
        </div>
        <div className="right_item bottom">
          <img className="right_item-img" src={OurWorksRightImg3} />
          <div>
            <Title className="right_item-subtitle" size="5">Development <span>| Javascript gatsby</span></Title>
            <Title className="right_item-title" size="4">Website for Agency “Logofo”</Title>
            <Link className="right_item-link" to="/">View the project <img src={ArrowRight} /></Link>
          </div>
        </div>
      </div>
      <Title className="bottom-subtitle" size="5">Development <span>| Javascript gatsby</span></Title>
      <Title className="bottom-title" size="4">Website for Agency “Logofo”</Title>
      <Link className="bottom-link" to="/">View the project <img src={ArrowRight} /></Link>
      <button onClick={() => window.location.pathname = "/our-works"} className="our_works_btn mobile">Show all projects</button>
    </section>
  )
}

export default OurWorks