import React, { useState } from "react"
import { Link } from "gatsby"

import SocialBlock from "../../globals/SocialBlock/SocialBlock"
import {
  Facebook,
  Instagram,
  LinkedIn
} from "../../../assets/icons/social/index"
import A_TEAM from "../../../assets/A-TEAM.png"
import "./Header.scss"

const Header = () => {
  const [ menuIsOpened, setMenuIsOpened ] = useState(false)
  const [ headerMenuItem, setHeaderMenuItem ] = useState(["About us", "Services", "Our works", "Contacts"])
  const [ socialData, setSocialData ] = useState([
    {
      img: Facebook,
      href: "https://www.facebook.com/"
    },
    {
      img: Instagram,
      href: "https://www.instagram.com/"
    },
    {
      img: LinkedIn,
      href: "https://www.linkedin.com/"
    }
  ])

  return(
    <section className="header">
      <div className="header_item">
      <Link to="/"><img className={"header_logo"} src={A_TEAM} width={123} /></Link>
        <menu className="header_menu">
          {headerMenuItem.map((item, index) => <li key={index} className="header_menu-item"><Link to={`/#${item.split(' ').join('-').toLowerCase()}`}>{item}</Link></li>)}
        </menu>
      </div>
      <div className="header_item">
        <SocialBlock SocialBlockClassName={"header_social-links"} data={socialData} />
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
          {headerMenuItem.map((item, index) =>
            <li className="mobile-menu__link" key={index}>
              <Link to={`/#${item.split(' ').join('-').toLowerCase()}`} onClick={() => setMenuIsOpened(false)}>{item}</Link>
            </li>
          )}
        </menu>
        <div className="social-links-wrapper">
          <p>consulting@ateam-inc.com</p>
          <SocialBlock SocialBlockClassName={"mobile-menu__social-links"} data={socialData} />
        </div>
      </div>
    </section>
  )
}

export default Header