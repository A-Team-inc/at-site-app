import { IGatsbyImage } from '../../../types/index'

interface IServicesData {
  contentfulServicesSection: {
    title: string
    subtitle: string
    subscribeBtn: string
    subscrabeBtnAction: string
    image: {
      url: string
      placeholderUrl: string
      gatsbyImageData: IGatsbyImage
    }
    description: {
      raw: string
    }
  }
}

export { IServicesData }
