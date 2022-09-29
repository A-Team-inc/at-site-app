import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import ReCAPTCHA from "react-google-recaptcha";

import useFooterQuery from "../../../graphql/footer"
import { addLineBreaks } from "../../../utilities/index"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import "./Footer.scss"

const Footer = ({ mailchimpMembers, isShowForm }) => {
  const data = useFooterQuery()
  const logoImage = getImage(data?.contentfulFooter.underfooter.footerLogo)
  const [mailChimpResponse, setMailChimpResponse] = useState()
  const [ emailError, setEmailError ] = useState()
  const [ nameInputValue, setNameInputValue ] = useState()
  const [ emailInputValue, setEmailInputValue ] = useState()
  const mailchimpMembersList = mailchimpMembers && JSON.parse(mailchimpMembers)
  const [formData, setFormData] = useState()
  const [showForm, setShowForm] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [showReCaptcha, setShowReCaptcha] = useState(false)
  const recaptchaRef = useRef();
  const submitRef = useRef()

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required").trim().matches(/^[A-Za-z]+$/, "Don't use special characters"),
    email: Yup.string().email("You entered the wrong email").required("Email is required")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const handleChange = async (value) => {
    if (value) {
      const response = await addToMailchimp(formData.email, {
        NAME: formData.name,
        SERVICE: formData.serviceType,
        BUDGET: formData.budgetRange,
        MESSAGE: formData.message
      })
      setMailChimpResponse(response)
      setShowMessage(true)
    }
    setShowReCaptcha(false)
  };

  const onSubmitHandler = (data) => {
    if(mailchimpMembersList.includes(data.email)) {
      setEmailError("This email is already registered")
      return null
    }
    setShowForm(false)
    setShowReCaptcha(true)
    setFormData(data)
    reset();
  };

  const handleGoBack = () => {
    setShowForm(true)
    setShowMessage(false)
  }

  const onInputChange = (e, value) => {
    if(value === "email") {
      setEmailInputValue(e.target.value)
      return null
    }

    if(value === "name") {
      setNameInputValue(e.target.value)
      return null
    }
  }

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.previousElementSibling.checked = true
    }
  }

  return(
    <section id="footer-form">
      <div className={cn("footer", { is_show_form: isShowForm })} id="contacts">
        <div className={cn("footer_content content_max_width", {
          thank_you_text: mailChimpResponse || showReCaptcha
        })}>
          <div className="left_block">
            <div className="footer_subtitle-wrapper">
              <div className="subtitle_line" />
              <p className={"footer_subtitle"}>{ data?.contentfulFooter.subtitle }</p>
            </div>
            <h1 className={"footer_title title"}>{addLineBreaks(data?.contentfulFooter.title.title)}</h1>
            <a href={`mailto:${data?.contentfulFooter.email}`} className="footer_email tabIndexItem" tabIndex="0">{data?.contentfulFooter.email}</a>
            <SocialBlock SocialBlockClassName={"footer_social-links"} data={data?.contentfulFooter.socialLinks} />
          </div>
          <div className="footer_form-wrapper">
            {showReCaptcha && <ReCAPTCHA
              style={{ display: "inline-block" }}
              theme="dark"
              ref={recaptchaRef}
              sitekey={'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}//need replace test sitekey
              onChange={handleChange}
            />}
            {showMessage && (
              <div className="footer_form-message">
                <div>{mailChimpResponse.msg.includes('has too many recent signup requests') ? data?.contentfulFooter.footerForm.subscriptionError : mailChimpResponse.msg}</div>
                {mailChimpResponse.result === 'error' && <button className="form_submit" onClick={handleGoBack}>Go back</button>}
              </div>
            )}
            {showForm && (
              <form className="footer_form form" method="get" onSubmit={handleSubmit(onSubmitHandler)} >
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userName">{data?.contentfulFooter.footerForm.nameLabel}</label>
                  <input
                    {...register("name")}
                    className={cn("form_text-input", {
                      error_input: errors.name?.message
                    })}
                    onChange={(e) => onInputChange(e, "name")}
                    type="text"
                    id="userName"
                    name="name"
                    placeholder={data?.contentfulFooter.footerForm.namePlaceholder}
                  />
                  <span className="error_message">{errors.name?.message}</span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userEmail">{data?.contentfulFooter.footerForm.emailLabel}</label>
                  <input
                    {...register("email")}
                    className={cn("form_text-input", {
                      error_input: errors.email?.message || emailInputValue && emailError
                    })}
                    onChange={(e) => onInputChange(e, "email")}
                    type="text"
                    id="userEmail"
                    name="email"
                    placeholder={data?.contentfulFooter.footerForm.emailPlaceholder}
                  />
                  <span className="error_message">{emailInputValue ? errors.email?.message || emailError : ""}</span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="serviceType0">{data?.contentfulFooter.footerForm.projectTypesTitle}</label>
                  <ul className="form_radio-group" aria-label={data?.contentfulFooter.footerForm.projectTypesTitle}>
                    {data?.contentfulFooter.footerForm.projectTypesLabel.map((item, index) => (
                      <li key={`serviceType${index}`}>
                        <input
                          {...register("serviceType")}
                          className="form_radio"
                          type="radio"
                          id={`serviceType${index}`}
                          name="serviceType"
                          tabIndex={-1}
                          value={item} />
                        <label
                          id={`label${index}`}
                          htmlFor={`serviceType${index}`}
                          key={`serviceTypeLabel${index}`}
                          tabIndex="0"
                          aria-label={
                            `${index === 0 ? `${data?.contentfulFooter.footerForm.projectTypesTitle} List item with ${data?.contentfulFooter.footerForm.projectTypesLabel.length}items` : ''} List item ${item}`
                          }
                          onKeyDown={event => keyDown(event)}
                        >{item}</label>
                      </li>
                    ))}
                  </ul>
                  <span className="error_message"></span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="budgetRange0">{data?.contentfulFooter.footerForm.budgetRangeTitle}</label>
                  <ul className="form_radio-group" aria-label={data?.contentfulFooter.footerForm.budgetRangeTitle}>
                    {data?.contentfulFooter.footerForm.budgetRangeLabel.map((item, index) => (
                      <li key={`budgetRange${index}`}>
                        <input
                          {...register("budgetRange")}
                          className="form_radio"
                          type="radio"
                          id={`budgetRange${index}`}
                          name="budgetRange"
                          tabIndex={-1}
                          value={item} />
                        <label
                          htmlFor={`budgetRange${index}`}
                          key={`budgetRangeLabel${index}`}
                          onKeyDown={event => keyDown(event)}
                          tabIndex="0"
                          aria-label={
                            `${index === 0 ? `${data?.contentfulFooter.footerForm.budgetRangeTitle} List item with ${data?.contentfulFooter.footerForm.budgetRangeLabel.length}items` : ''} List item ${item.replace('$', ' dollars').replace('+', 'and more') }`
                          }
                        >{item}</label>
                      </li>
                    ))}
                  </ul>
                  <span className="error_message"></span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="message">{data?.contentfulFooter.footerForm.descriptionLabal}</label>
                  <textarea
                    {...register("message")}
                    className="form_textarea"
                    placeholder="Message"
                    aria-label={data?.contentfulFooter.footerForm.descriptionLabal}
                    id="message"
                  />
                </div>
                <div className="form_item-wrapper">
                  <input
                    className={cn("form_submit", {disabled: !nameInputValue || !emailInputValue})}
                    type="submit"
                    value={data?.contentfulFooter.footerForm.cta}
                    aria-label={data?.contentfulFooter.footerForm.cta}
                    disabled={!nameInputValue || !emailInputValue}
                    ref={submitRef}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="underfooter">
        <div className="underfooter_content content_max_width">
          <div className="logo_wrapper">
            <Link className="tabIndexItem" to="/">
              { logoImage ? <GatsbyImage
                  image={logoImage}
                  alt={"logo"}
                /> : <img src={data?.contentfulFooter.underfooter.footerLogo.url} width={123} placeholder={data?.contentfulFooter.underfooter.footerLogo.placeholderUrl} alt="logo" /> }
            </Link>
            <p className="copyright">{data?.contentfulFooter.underfooter.copyright}</p>
          </div>
          <menu className="underfooter-menu">
            {data?.contentfulFooter.underfooter.menu.map((item, index) =>
              <li className="underfooter-menu__link" key={index}>
                <Link className="tabIndexItem" to={`/${item.split(' ').join('-').toLowerCase()}`}>{item}</Link>
              </li>
            )}
          </menu>
          <div className="underfooter-menu__link underfooter_email">
            <a href={`mailto:${data?.contentfulFooter.underfooter.email}`} className="tabIndexItem" tabIndex="0">{data?.contentfulFooter.underfooter.email}</a>
          </div>
          <SocialBlock SocialBlockClassName={"footer_social-links underfooter_social-links"} data={data?.contentfulFooter.socialLinks} />
          <p className="copyright mobile_copyright">{data?.contentfulFooter.underfooter.copyright}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer