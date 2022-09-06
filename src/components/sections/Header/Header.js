import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import useHeaderQuery from "../../../graphql/header"
import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import "./Header.scss"
import cn from "classnames"

const Header = ({ positionStyle = "" }) => {
  const data = useHeaderQuery()
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
      positionStyle: positionStyle === "positionStyle"
    })}>
      <div className="header_desctop-wrapper">
        <div className="header_item">
        <Link to="/"><img className={"header_logo"} src={data?.contentfulHeader.logo.url} width={123} /></Link>
          <menu className="header_menu">
            {data?.contentfulHeader.menu.map((item, index) => <li key={index} className="header_menu-item"><Link to={`/#${item.split(' ').join('-').toLowerCase()}`}>{item}</Link></li>)}
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
            <p>consulting@ateam-inc.com</p>
            <SocialBlock SocialBlockClassName={"mobile-menu__social-links"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header