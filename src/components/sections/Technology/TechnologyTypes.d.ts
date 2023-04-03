import { IGatsbyImage } from '../../../types/index'

interface ITechnologyData {
  contentfulTechnologiesSection: {
    title: string
    technologies: ITechnology[]
  }
}

interface ITechnology {
  icon: {
    url: string
    placeholderUrl: string
    gatsbyImageData: IGatsbyImage
    width: number
    height: number
  }
  subtitle: string
}

export { ITechnologyData }
