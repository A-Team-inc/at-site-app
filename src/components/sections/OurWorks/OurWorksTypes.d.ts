import { IGatsbyImage } from '../../../types/index'

interface IOurWorksData {
  contentfulOurWorks: {
    title: string
    subtitle: string
    cta: string
    projects: IProject[]
  }
}

interface IProject {
  title: string
  subtitle: string
  slug: string
  cover: {
    url: string
    placeholderUrl: string
    gatsbyImageData: IGatsbyImage
  }
}

export { IOurWorksData }
