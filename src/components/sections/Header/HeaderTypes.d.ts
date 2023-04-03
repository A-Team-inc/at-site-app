import { IGatsbyImage } from '../../../types/index'

export interface IHeaderData {
  contentfulHeader: {
    mobileMenuEmail: string
    logo: {
      url: string
      placeholderUrl: string
      gatsbyImageData: IGatsbyImage
    }
    menuLinks: MenuLinks[]
    socialLinks: SocialLinks[]
  }
}

interface MenuLinks {
  title: string
  slug: string
}

interface SocialLinks {
  title: string
  url: string
  icon: {
    url: string
  }
}
