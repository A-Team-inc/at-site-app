import React, {useState, useEffect, useRef} from "react"

import useProcessQuery from "../../../graphql/process"
import "./Process.scss"

const Process = () => {
  const data = useProcessQuery()

  const [currentStep, setCurrentStep] = useState(data?.contentfulProcess.steps[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollContainer = useRef()
  const stepRef = useRef()

  const handleClick = (step, index) => {
    // scroll on click
    const cardWidth = stepRef.current.clientWidth
    const gapBetweenCards = 24
    scrollContainer.current.scrollLeft = index * (cardWidth + gapBetweenCards)
    setCurrentStep(step)
    setCurrentIndex(index)
  }

  const keyDown = (event, step, index) => {
    if (event.key === 'Enter') {
      setCurrentStep(step)
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    // scroll with mouse wheel
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
              handleClick={handleClick}
              isActive={index === currentIndex}
              index={index}
              stepRef={stepRef}
              keyDown={keyDown}
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


const Step = ({ step, handleClick, isActive, index, stepRef, keyDown }) => (
  <div
    className={`process-step tabIndexItem ${isActive ? 'process-step--active' : ''}`}
    onClick={() => handleClick(step, index)}
    onKeyDown={(event) => keyDown(event, step, index)}
    ref={stepRef}
    tabIndex="0"
  >
    <div className="process-step__number">{`0${index + 1}`}</div>
    <h6 className="process-step__title title">{step.title}</h6>
    <p className="process-step__content">{step.content.content}</p>
  </div>
)

export default Process
