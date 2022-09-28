import React, { useState } from "react"
import { Scrollbar, Mousewheel, Keyboard } from 'swiper'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
// import { useForm } from "react-hook-form"
// import * as Yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup";
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import cn from "classnames"

import useWelcomeQuery from "../../../graphql/welcome"
import { addLineBreaks } from "../../../utilities/index"
import "./Welcome.scss"
import "swiper/scss"
import "swiper/scss/scrollbar"
import "swiper/scss/keyboard"

const Welcome = () => {
  const data = useWelcomeQuery()
  // const [mailChimpResponse, setMailChimpResponse] = useState()

  // const schema = Yup.object().shape({
  //   email: Yup.string().email("You entered the wrong email").required("Email is required")
  // })

  // const { register, handleSubmit, formState: { errors }, reset } = useForm({
  //   resolver: yupResolver(schema)
  // });

  // const onSubmitHandler = async (data) => {
  //   const response = await addToMailchimp(data.email)
  //   setMailChimpResponse(response)
  //   reset();
  // };

  return(
    <section className="welcome content_max_width" id="about-us">
      <div className="welcome_subscribe-wrapper">
        <h1 className="welcome_title title">
          {data?.contentfulWelcome.title}
        </h1>
        <p className="welcome_subtitle">{addLineBreaks(data?.contentfulWelcome.description.description)}</p>
        {/* {mailChimpResponse ? (
          <div>{mailChimpResponse.msg}</div>
        ) : (
          <form className="welcome_form" onSubmit={handleSubmit(onSubmitHandler)} method="get">
            <div className="email_wrapper">
              <input
                {...register("email")}
                className={cn("welcome_form-email", {
                  error_input: errors.email?.message
                })}
                type="text"
                name="email"
                placeholder="Enter your email"
              />
              <span className="error_message">{errors.email?.message}</span>
            </div>
            <input className="welcome_form-submit" type="submit" value={data?.contentfulWelcome.formButtonValue} />
          </form>
        )} */}
      </div>
      <div className="welcome_slider" tabIndex="0">
        <Swiper
          modules={[Scrollbar, Mousewheel, Keyboard]}
          mousewheel={{ mousewheelControl: true }}
          keyboard={{ enabled: true }}
          scrollbar={{ draggable: true }}
          speed={500}
          slidesPerView={1}
        >
          {data?.contentfulWelcome.slider.slides.map((item, index) => {
            const image = getImage(item.slide)
            return (
              <SwiperSlide key={index}>
                <p className="welcome_slider-subtitle">{item.subtitle}</p>
                <p className={"welcome_slider-title title"}>{item.title}</p>
                {image ? <GatsbyImage image={image} alt="" /> : <img src={item.slide.url} placeholder={item.slide.placeholderUrl} alt="" />}
              </SwiperSlide>
            )
          })}
        </Swiper>
          <span slot="container-end" className="slot-first">01</span>
          <span slot="container-end" className="slot-second">{data?.contentfulWelcome.slider.slides.length + 1 >= 10 ? data?.contentfulWelcome.slider.slides.length : `0${data?.contentfulWelcome.slider.slides.length}`}</span>
      </div>
    </section>
  )
}

export default Welcome
