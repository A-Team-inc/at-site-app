import React from "react"
import { Scrollbar, Mousewheel, Autoplay, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames"

import useWelcomeQuery from "../../../graphql/welcome"
import { addLineBreaks } from "../../../utilities/index"
import Title from "../../globals/Title/Title"
import "./Welcome.scss"
import "swiper/scss"
import "swiper/scss/scrollbar"
import "swiper/scss/autoplay"
import "swiper/scss/keyboard"

const Welcome = () => {
  const data = useWelcomeQuery()

  const schema = Yup.object().shape({
    email: Yup.string().email("You entered the wrong email").required("Email is required")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return(
    <section className="welcome content_max_width" id="about-us">
      <div className="welcome_subscribe-wrapper">
        <h1 className="welcome_title title">
          {data?.contentfulWelcome.title}
        </h1>
        <p className="welcome_subtitle">{addLineBreaks(data?.contentfulWelcome.description.description)}</p>
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
      </div>
      <div className="welcome_slider" tabIndex="0">
        <Swiper
          modules={[Scrollbar, Mousewheel, Autoplay, Keyboard]}
          mousewheel={{ mousewheelControl: true }}
          keyboard={{ enabled: true }}
          scrollbar={{ draggable: true }}
          speed={500}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          {data?.contentfulWelcome.slider.slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <p className="welcome_slider-subtitle">{item.subtitle}</p>
                <Title className={"welcome_slider-title title"} size={3}>{item.title}</Title>
                <img className="slider-image" src={item.slide.url} alt="" />
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