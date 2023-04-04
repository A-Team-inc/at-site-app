import { IGatsbyImage } from '../../../types/index'

interface IOffersData {
  contentfulOffer: {
    title: string
    subtitle: string
    images: IImage[]
  }
}

interface IImage {
  backgroundColor: string
  backgroundLogoPosition: string
  logoColor: string
  rotateAngle: number
  text: string
  topOffset: number
  img: {
    url: string
    placeholderUrl: string
    gatsbyImageData: IGatsbyImage
  }
}

export { IOffersData }
