import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useHeaderQuery from "../../../graphql/header"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import "./Header.scss"
import cn from "classnames"

// import IHeaderData from './Header'

interface HeaderData {
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

const Header = ({ headerBackground = "" }) => {
  const data: HeaderData = useHeaderQuery()
  const logoImage = getImage(data?.contentfulHeader.logo)
  const [ menuIsOpened, setMenuIsOpened ] = useState(false)

  useEffect(() => {
    document.body.classList[menuIsOpened ? 'add' : 'remove']('scroll-disabled')
  }, [menuIsOpened])

  const useScrollDirection = () => {
    const [scrollState, setScrollState] = useState({ direction: 'down', offset: 0 });
  
    const handleScroll = () => {
      if (typeof window === undefined) {
        return;
      }
  
      const topOffset = window.pageYOffset;
  
      setScrollState(last => ({
        direction: last.offset > topOffset ? 'up' : 'down',
        offset: topOffset,
      }));
    };
  
    useEffect(() => {
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return scrollState;
  }

  const scroll = useScrollDirection()

  return (
    <section className={cn("header", {
      active: !scroll.offset || scroll.offset < 30,
      activeScrolled: scroll.direction === 'up' && scroll.offset >= 30,
      headerBackground: scroll.offset >= 300 || headerBackground === 'headerBackground',
      mobileMenuOpened: menuIsOpened,
      mobileMenuClosed: !menuIsOpened
    })}>
      <div className="header_desctop-wrapper">
        <div className="header_item">
          <Link className="tabIndexItem logo" to="/" aria-label="A-Team">
            { logoImage ? <GatsbyImage
              image={logoImage}
              alt={"logo"}
            /> : <img src={data?.contentfulHeader.logo?.url} placeholder={data?.contentfulHeader.logo?.placeholderUrl} alt="logo" style={{ width: '100%', height: '100%'}} /> }
          </Link>
          <menu className="header_menu">
            {data?.contentfulHeader.menuLinks.map((link, index) => {
              return (
                <li key={index} className="header_menu-item">
                  <Link
                    className="tabIndexItem"
                    to={link.slug}
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              )
            })}
          </menu>
        </div>
        <div className="header_item">
          <SocialBlock SocialBlockClassName={"header_social-links"} data={data?.contentfulHeader.socialLinks} />
        </div>

        <div className="header__mobile-menu">
          <div className="hamburger" onClick={() => setMenuIsOpened(!menuIsOpened)}>
            <div className={menuIsOpened ? "hamburger-menu_before animate" : "hamburger-menu_before"} />
            <div className={menuIsOpened ? "hamburger-menu animate" : "hamburger-menu"} />
            <div className={menuIsOpened ? "hamburger-menu_after animate" : "hamburger-menu_after"} />
          </div>
        </div>
        <div className={`mobile-menu ${menuIsOpened ? 'mobile-menu--opened' : 'mobile-menu--closed'}`}>
          <menu>
            {data?.contentfulHeader.menuLinks.map((link, index) =>
              <li className="mobile-menu__link" key={index}>
                <Link
                  to={link.slug}
                  onClick={() => setMenuIsOpened(false)}
                >
                  {link.title}
                </Link>
              </li>
            )}
          </menu>
          <div className="social-links-wrapper">
            <a href={`mailto:${data?.contentfulHeader.mobileMenuEmail}`} className="mobile-menu_email">{data?.contentfulHeader.mobileMenuEmail}</a>
            <SocialBlock SocialBlockClassName={"mobile-menu__social-links"} data={data?.contentfulHeader.socialLinks} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header