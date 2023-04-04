import { IGatsbyImage } from '../../../types/index'

interface FooterData {
  contentfulFooter: {
    email: string
    title: {
      title: string
    }
    subtitle: string
    cta: string
    underfooter: {
      email: string
      copyright: string
      footerLogo: {
        url: string
        placeholderUrl: string
        gatsbyImageData: IGatsbyImage
      }
      menu: string[]
    }
    footerForm: {
      budgetRangeLabel: string[]
      budgetRangeTitle: string
      cta: string
      descriptionLabal: string
      emailLabel: string
      emailPlaceholder: string
      formAction: string
      nameLabel: string
      namePlaceholder: string
      projectTypesLabel: string[]
      projectTypesTitle: string
      subscriptionError: string
    },
    socialLinks: {
      title: string
      url: string
    }[]
  }
}

interface FormData {
  name: string
  email: string
  message: string
  budgetRange: string | null
  serviceType: string | null
}

interface MailChimpResponse {
  msg: string
  result: string
}

interface FooterProps {
  mailchimpMembers: string
  isShowForm?: boolean 
}

export { FooterData, FormData, MailChimpResponse, FooterProps }
