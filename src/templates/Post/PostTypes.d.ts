import { IGatsbyImage } from '../../types/index'

export interface IPostData {
  content: {
    raw: string
    references: string[]
  }
  media: {
    id: string
    link?: string
    media?: {
      file: {
        url: string
        contentType: string
      }
      gatsbyImageData: IGatsbyImage
    }
  }
  previewImage: {
    url: string
    gatsbyImageData: IGatsbyImage
  }
  slug: string
  title: string
}
