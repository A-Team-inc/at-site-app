import React from "react"
import { Link } from "gatsby"

import useFooterQuery from "../../../graphql/footer"
import { addLineBreaks } from "../../../utilities/index"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import Title from "../../globals/Title/Title"
import "./Footer.scss"

const Footer = () => {
  const data = useFooterQuery()

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.previousElementSibling.checked = true
    }
  }

  return(
    <section>
      <div className="footer" id="contacts">
        <div className="footer_content content_max_width">
          <div className="left_block">
            <div className="footer_subtitle-wrapper">
              <div className="subtitle_line" />
              <h4 className={"footer_subtitle"} tabindex="0">{ data?.contentfulFooter.subtitle }</h4>
            </div>
            <h1 className={"footer_title"} tabindex="0">{addLineBreaks(data?.contentfulFooter.title.title)}</h1>
            <p className="footer_email" tabindex="0">{data?.contentfulFooter.email}</p>
            <SocialBlock SocialBlockClassName={"footer_social-links"} data={data?.contentfulFooter.socialLinks} />
          </div>
          <div className="footer_form-wrapper">
            <form className="footer_form form" action={data?.contentfulFooter.footerForm.formAction} method="get">
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userName">{ data?.contentfulFooter.footerForm.nameLabel }</label>
                  <input className="form_text-input" type="text" id="userName" name="user name" placeholder={ data?.contentfulFooter.footerForm.namePlaceholder } />
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userEmail">{ data?.contentfulFooter.footerForm.emailLabel }</label>
                  <input className="form_text-input" type="text" id="userEmail" name="user email" placeholder={ data?.contentfulFooter.footerForm.emailPlaceholder } />
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" tabindex="0">{ data?.contentfulFooter.footerForm.projectTypesTitle }</label>
                  <div className="form_radio-group">
                    { data?.contentfulFooter.footerForm.projectTypesLabel.map((item, index) => (
                      <>
                        <input
                          className="form_radio"
                          type="radio"
                          id={`serviceType${index}`}
                          name="service type"
                          value={item}
                          key={`serviceType${index}`} />
                        <label
                          htmlFor={`serviceType${index}`}
                          key={`serviceTypeLabel${index}`}
                          tabindex="0"
                          onKeyDown={event => keyDown(event)}
                        >{item}</label>
                      </>
                    )) }
                  </div>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" tabIndex="0">{ data?.contentfulFooter.footerForm.budgetRangeTitle }</label>
                  <div className="form_radio-group">
                    { data?.contentfulFooter.footerForm.budgetRangeLabel.map((item, index) => (
                      <>
                        <input
                          className="form_radio"
                          type="radio"
                          id={`budgetRange${index}`}
                          name="budget range"
                          value={item}
                          key={`budgetRange${index}`}
                          />
                        <label
                          htmlFor={`budgetRange${index}`}
                          key={`budgetRangeLabel${index}`}
                          onKeyDown={event => keyDown(event)}
                          tabindex="0"
                        >{item}</label>
                      </>
                    )) }
                  </div>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">{data?.contentfulFooter.footerForm.descriptionLabal}</label>
                  <textarea className="form_textarea" placeholder="Message" aria-label={data?.contentfulFooter.footerForm.descriptionLabal} />
                </div>
                <div className="form_item-wrapper">
                  <input className="form_submit" type="submit" value={data?.contentfulFooter.footerForm.cta} />
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
        <div className="underfooter_content content_max_width">
          <div className="logo_wrapper">
            <Link to="/">
              <img
                className={"underfooter_logo"}
                src={data?.contentfulFooter.underfooter.footerLogo.url}
                width={123}
                alt={data?.contentfulFooter.underfooter.footerLogo.url}
                aria-label="A-Team home page"
              />
            </Link>
            <p className="copyright">{data?.contentfulFooter.underfooter.copyright}</p>
          </div>
          <menu className="underfooter-menu">
            {data?.contentfulFooter.underfooter.menu.map((item, index) =>
              <li className="underfooter-menu__link" key={index}>
                <Link to={`/#${item.split(' ').join('-').toLowerCase()}`}>{item}</Link>
              </li>
            )}
          </menu>
          <div className="underfooter-menu__link underfooter_email" tabindex="0">
            <p>{data?.contentfulFooter.underfooter.email}</p>
          </div>
          <SocialBlock SocialBlockClassName={"footer_social-links underfooter_social-links"} data={data?.contentfulFooter.socialLinks} />
          <p className="copyright mobile_copyright">{data?.contentfulFooter.underfooter.copyright}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer