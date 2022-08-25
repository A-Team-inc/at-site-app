import React, { useState } from "react"
import { Link } from "gatsby"

import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import Title from "../../globals/Title/Title"
import {
  Facebook,
  Instagram,
  LinkedIn
} from "../../../assets/icons/social/index"
import A_TEAM_white from "../../../assets/A-TEAM_white.png"
import "./Footer.scss"

const Footer = () => {
  const [ underfooterData, setUnderfooterData ] = useState(["privacy policy", "terms of use"])
  const [ socialData, setSocialData ] = useState([
    {
      img: Facebook,
      href: "https://www.facebook.com/"
    },
    {
      img: Instagram,
      href: "https://www.instagram.com/"
    },
    {
      img: LinkedIn,
      href: "https://www.linkedin.com/"
    }
  ])
  return(
    <section>
      <div className="footer">
        <div className="content_max_width">
          <div className="left_block">
            <div className="footer_subtitle-wrapper">
              <div className="subtitle_line" />
              <Title className={"footer_subtitle"} size="4">get in touch</Title>
            </div>
            <Title className={"footer_title"} size="1">Let’s <br/> collaborate</Title>
            <p className="footer_email">consulting@ateam-inc.com</p>
            <SocialBlock SocialBlockClassName={"footer_social-links"} data={socialData} />
          </div>
          <div className="footer_form-wrapper">
            <form className="footer_form form" action="" method="get">
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userName">Your name</label>
                  <input className="form_text-input" type="text" id="userName" name="user name" placeholder="Enter your name" />
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userEmail">Your email</label>
                  <input className="form_text-input" type="text" id="userEmail" name="user email" placeholder="Enter your email" />
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">What Service Do You Need?</label>
                  <div className="form_radio-group">
                    <input className="form_radio" type="radio" id="serviceType1" name="service type" value="Mobile App" />
                    <label htmlFor="serviceType1">Mobile App</label>
                    <input className="form_radio" type="radio" id="serviceType2" name="service type" value="Web App" />
                    <label htmlFor="serviceType2">Web App</label>
                    <input className="form_radio" type="radio" id="serviceType3" name="service type" value="Website" />
                    <label htmlFor="serviceType3">Website</label>
                  </div>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">What's Your Budget Range?</label>
                  <div className="form_radio-group">
                    <input className="form_radio" type="radio" id="budgetRange1" name="budget range" value="500-1000$" />
                    <label htmlFor="budgetRange1">500-1000$</label>
                    <input className="form_radio" type="radio" id="budgetRange2" name="budget range" value="1000-3000$" />
                    <label htmlFor="budgetRange2">1000-3000$</label>
                    <input className="form_radio" type="radio" id="budgetRange3" name="budget range" value="3000$ +" />
                    <label htmlFor="budgetRange3">3000$ +</label>
                  </div>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">What are you looking to get done? </label>
                  <textarea className="form_textarea" placeholder="Message" />
                </div>
                <div className="form_item-wrapper">
                  <input className="form_submit" type="submit" value="Schedule Consultation" />
                  <div>
                  <input className="form_is-authorize" id="isAuthorize" name="is authorize" type="checkbox" />
                  <label className="form_checkbox-label" htmlFor="isAuthorize">I authorize the processing of personal data</label>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      <div className="underfooter">
        <div className="content_max_width">
          <div className="logo_wrapper">
            <Link to="/"><img className={"underfooter_logo"} src={A_TEAM_white} width={123} /></Link>
            <p className="copyright">Copyright © 2021 A-Team inc.</p>
          </div>
          <menu className="underfooter-menu">
            {underfooterData.map((item, index) =>
              <li className="underfooter-menu__link" key={index}>
                <Link to={`/#${item.split(' ').join('-').toLowerCase()}`}>{item}</Link>
              </li>
            )}
          </menu>
          <div className="underfooter-menu__link underfooter_email">
            <p>consulting@ateam-inc.com</p>
          </div>
          <SocialBlock SocialBlockClassName={"footer_social-links underfooter_social-links"} data={socialData} />
          <p className="copyright mobile_copyright">Copyright © 2021 A-Team inc.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer