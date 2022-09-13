import React, {useState, useEffect, useRef} from "react"

import useProcessQuery from "../../../graphql/process"
import "./Process.scss"

const Process = () => {
  const data = useProcessQuery()

  const [currentStep, setCurrentStep] = useState(data?.contentfulProcess.steps[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (step, index) => {
    setCurrentStep(step)
    setCurrentIndex(index)
  }

  const scrollContainer = useRef()
  useEffect(() => {
    scrollContainer.current.addEventListener("wheel", event => {
      if (window.innerWidth < 1024) {
        event.preventDefault();
        scrollContainer.current.scrollLeft += event.deltaY;
      }
    })
  }, [])

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__headline">
          <div className="process__subtitle-block">
            <div className="subtitle_line" />
            <h6 className="process__subtitle">{ data?.contentfulProcess.subtitle }</h6>
          </div>
          <div className="process__title-block">
            <h2 className="process__title title">{ data?.contentfulProcess.title }</h2>
            <button className="process__cta">{ data?.contentfulProcess.cta }</button>
          </div>
        </div>
        <div className="process__steps" ref={scrollContainer}>
          {data?.contentfulProcess.steps.map((step, index) => (
            <Step
              step={step}
              handleClick={() => handleClick(step, index)}
              isActive={index === currentIndex}
              index={`0${index + 1}`}
              key={index}
            />
          ))}
          <progress
            className="process__progress"
            max="100"
            value={(currentIndex + 1) * 25}
          />
        </div>
        <div className="process__description">
          {currentStep.description.description}
        </div>
        <div className="abilities">
          {data?.contentfulProcess.abilities.map((item, index) => (
            <div
              className="abilities__item"
              key={index}
              tabIndex="0"
            >
              <h6 className="abilities__title title">{item.title}</h6>
              <p className="abilities__content">{item.content.content}</p>
            </div>
          ))}
        </div>
        <button className="process__cta--mobile">{ data?.contentfulProcess.cta }</button>
      </div>
    </section>
  )
}


const Step = ({step, handleClick, isActive, index}) => (
  <div
    className={`process-step ${isActive ? 'process-step--active' : ''}`}
    onClick={handleClick}
    tabIndex="0"
  >
    <div className="process-step__number">{index}</div>
    <h6 className="process-step__title title">{step.title}</h6>
    <p className="process-step__content">{step.content.content}</p>
  </div>
)

export default Process
