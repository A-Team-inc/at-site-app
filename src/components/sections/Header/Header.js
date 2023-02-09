import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useHeaderQuery from "../../../graphql/header"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import "./Header.scss"
import cn from "classnames"

const Header = ({ headerBackground = "" }) => {
  const data = useHeaderQuery()
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
            /> : <img src={data?.contentfulHeader.logo?.url} width={123} placeholder={data?.contentfulHeader.logo?.placeholderUrl} alt="logo" /> }
          </Link>
          <menu className="header_menu">
            {data?.contentfulHeader.menu.map((item, index) =>
              <li key={index} className="header_menu-item">
                <Link
                  className="tabIndexItem"
                  to={`/#${item.split(' ').join('-').toLowerCase()}`}
                  aria-label={item}
                >
                  {item}
                </Link>
              </li>)}
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
            {data?.contentfulHeader.menu.map((item, index) =>
              <li className="mobile-menu__link" key={index}>
                <Link to={`/#${item.split(' ').join('-').toLowerCase()}`} onClick={() => setMenuIsOpened(false)}>{item}</Link>
              </li>
            )}
          </menu>
          <div className="social-links-wrapper">
            <a href={`mailto:${data?.contentfulHeader.mobileMenuEmail}`} className="mobile-menu_email">{data?.contentfulHeader.mobileMenuEmail}</a>
            <SocialBlock SocialBlockClassName={"mobile-menu__social-links"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header