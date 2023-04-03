export interface IHeaderData {
  contentfulHeader: {
    mobileMenuEmail: string;
    logo: {
      url: string;
      placeholderUrl: string;
      gatsbyImageData: object;
    }
    menuLinks: MenuLinks[];
    socialLinks: SocialLinks[];
  }
}

interface MenuLinks {
  title: string;
  slug: string;
}

interface SocialLinks {
  title: string;
  url: string;
  icon: {
    url: string;
  };
}