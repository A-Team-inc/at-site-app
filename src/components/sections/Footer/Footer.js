import React from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames"

import useFooterQuery from "../../../graphql/footer"
import { addLineBreaks } from "../../../utilities/index"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import "./Footer.scss"

const Footer = ({ isShowForm }) => {
  const data = useFooterQuery()

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required").matches(/^[A-Za-z]+$/, "Don't use special characters"),
    email: Yup.string().email("You entered the wrong email").required("Email is required")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.previousElementSibling.checked = true
    }
  }

  return(
    <section>
      <div className={cn("footer", { is_show_form: isShowForm })} id="contacts">
        <div className="footer_content content_max_width">
          <div className="left_block">
            <div className="footer_subtitle-wrapper">
              <div className="subtitle_line" />
              <h4 className={"footer_subtitle"}>{ data?.contentfulFooter.subtitle }</h4>
            </div>
            <h1 className={"footer_title title"}>{addLineBreaks(data?.contentfulFooter.title.title)}</h1>
            <p className="footer_email tabIndexItem" tabIndex="0">{data?.contentfulFooter.email}</p>
            <SocialBlock SocialBlockClassName={"footer_social-links"} data={data?.contentfulFooter.socialLinks} />
          </div>
          <div className="footer_form-wrapper">
            <form className="footer_form form" method="get" onSubmit={handleSubmit(onSubmitHandler)} >
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userName">{ data?.contentfulFooter.footerForm.nameLabel }</label>
                  <input
                    {...register("name")}
                    className={cn("form_text-input", {
                      error_input: errors.name?.message
                    })}
                    type="text"
                    id="userName"
                    name="name"
                    placeholder={ data?.contentfulFooter.footerForm.namePlaceholder }
                  />
                  <span className="error_message">{errors.name?.message}</span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label" htmlFor="userEmail">{ data?.contentfulFooter.footerForm.emailLabel }</label>
                  <input
                    {...register("email")}
                    className={cn("form_text-input", {
                      error_input: errors.email?.message
                    })}
                    type="text"
                    id="userEmail"
                    name="email"
                    placeholder={ data?.contentfulFooter.footerForm.emailPlaceholder }
                  />
                  <span className="error_message">{errors.email?.message}</span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">{ data?.contentfulFooter.footerForm.projectTypesTitle }</label>
                  <div className="form_radio-group">
                    { data?.contentfulFooter.footerForm.projectTypesLabel.map((item, index) => (
                      <React.Fragment key={`serviceType${index}`}>
                        <input
                          {...register("serviceType")}
                          className="form_radio"
                          type="radio"
                          id={`serviceType${index}`}
                          name="serviceType"
                          value={item} />
                        <label
                          htmlFor={`serviceType${index}`}
                          key={`serviceTypeLabel${index}`}
                          tabIndex="0"
                          onKeyDown={event => keyDown(event)}
                        >{item}</label>
                      </React.Fragment>
                    )) }
                  </div>
                  <span className="error_message"></span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">{ data?.contentfulFooter.footerForm.budgetRangeTitle }</label>
                  <div className="form_radio-group">
                    { data?.contentfulFooter.footerForm.budgetRangeLabel.map((item, index) => (
                      <React.Fragment key={`budgetRange${index}`}>
                        <input
                          {...register("budgetRange")}
                          className="form_radio"
                          type="radio"
                          id={`budgetRange${index}`}
                          name="budgetRange"
                          value={item} />
                        <label
                          htmlFor={`budgetRange${index}`}
                          key={`budgetRangeLabel${index}`}
                          onKeyDown={event => keyDown(event)}
                          tabIndex="0"
                        >{item}</label>
                      </React.Fragment>
                    )) }
                  </div>
                  <span className="error_message"></span>
                </div>
                <div className="form_item-wrapper">
                  <label className="form_label">{data?.contentfulFooter.footerForm.descriptionLabal}</label>
                  <textarea
                    {...register("message")}
                    className="form_textarea"
                    placeholder="Message"
                    aria-label={data?.contentfulFooter.footerForm.descriptionLabal}
                  />
                </div>
                <div className="form_item-wrapper">
                  <input
                    className="form_submit"
                    type="submit"
                    value={data?.contentfulFooter.footerForm.cta}
                  />
                  <div>
                  <input
                    {...register("isAuthorize")}
                    className="form_is-authorize"
                    id="isAuthorize"
                    name="isAuthorize"
                    type="checkbox"
                  />
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
            <Link className="tabIndexItem" to="/">
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
                <Link className="tabIndexItem" to={`/${item.split(' ').join('-').toLowerCase()}`}>{item}</Link>
              </li>
            )}
          </menu>
          <div className="underfooter-menu__link underfooter_email">
            <p className="tabIndexItem" tabIndex="0">{data?.contentfulFooter.underfooter.email}</p>
          </div>
          <SocialBlock SocialBlockClassName={"footer_social-links underfooter_social-links"} data={data?.contentfulFooter.socialLinks} />
          <p className="copyright mobile_copyright">{data?.contentfulFooter.underfooter.copyright}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer