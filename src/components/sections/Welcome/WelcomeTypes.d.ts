import { IGatsbyImage } from '../../../types/index'

interface IWelcomeData {
  contentfulWelcome: {
    title: string
    description: {
      description: string
    }
    formAction: string
    formButtonValue: string
    subscrabeBtnAction: string
    subscribeBtn: string
    slider: {
      slides: ISlide[]
    }
  }
}

interface ISlide {
  title: string
  subtitle: string
  slide: {
    url: string
    placeholderUrl: string
    gatsbyImageData: IGatsbyImage
  }
}

export { IWelcomeData }
