import { IGatsbyImage, IAllMailchimpMembers } from '../../types/index'

export interface IProjectData {
  data: {
    allContentfulProject: {
      nodes: [{
        title: string,
        slug: string,
        cta: string,
        subtitle: string,
        description: {
          description: string
        },
        cover: {
          gatsbyImageData: IGatsbyImage,
          url: string,
          placeholderUrl: string
        },
        images: [{
          gatsbyImageData: IGatsbyImage,
          url: string,
          placeholderUrl: string
        }],
        abilities: [{
          title: string,
          content: {
            content: string
          }
        }]
      }]
    }
    allMailchimpMembers: IAllMailchimpMembers
  }
}