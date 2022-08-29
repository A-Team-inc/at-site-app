import React, {useState, useEffect, useRef} from "react"
import "./Process.scss"

const Process = () => {
  const data = {
    title: 'Explore our approach',
    subtitle: 'Our process',
    cta: 'Start your project',
    steps: [
      {
        title: 'Project Planning',
        content: 'The first step is to create different sprint plans to the project overall and structure the timeline accordingly.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      },
      {
        title: 'Development',
        content: 'The next step is to begin coding out the project and completing each sprint accordingly.',
        description: '2'
      },
      {
        title: 'QA and User Testing',
        content: 'We have test users try out all the functionality of the product to ensure everything is working properly.',
        description: '3'
      },
      {
        title: 'Deploy live',
        content: 'Hosting and domain configurations will be set at this stage. Once your launch has been set your website is now live into the real world.',
        description: '4'
      }
    ],
    abilities: [
      {
        title: 'Team',
        content: 'Project Manager, 2 Senior Developers, UI/UX Designer, QA Engineer.'
      },
      {
        title: 'Deliverables',
        content: 'Live Website on Webflow, Wordpress, or Custom Choice.'
      },
      {
        title: 'Timeline',
        content: '12-14 weeks.'
      }
    ]
  }

  const [currentStep, setCurrentStep] = useState(data.steps[0])
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
            <div className="process__line" />
            <h6 className="process__subtitle">{data.subtitle}</h6>
          </div>
          <div className="process__title-block">
            <h2 className="process__title">{data.title}</h2>
            <button className="process__cta">{data.cta}</button>
          </div>
        </div>
        <div className="process__steps" ref={scrollContainer}>
          {data.steps.map((step, index) => (
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
          {currentStep.description}
        </div>
        <div className="abilities">
          {data.abilities.map((item, index) => (
            <div
              className="abilities__item"
              key={index}
            >
              <h6 className="abilities__title">{item.title}</h6>
              <p className="abilities__content">{item.content}</p>
            </div>
          ))}
        </div>
        <button className="process__cta--mobile">{data.cta}</button>
      </div>
    </section>
  )
}


const Step = ({step, handleClick, isActive, index}) => (
  <div
    className={`process-step ${isActive ? 'process-step--active' : ''}`}
    onClick={handleClick}
  >
    <div className="process-step__number">{index}</div>
    <h6 className="process-step__title">{step.title}</h6>
    <p className="process-step__content">{step.content}</p>
  </div>
)

export default Process
