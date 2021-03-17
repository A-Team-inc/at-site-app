import React from "react"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import Anchor from "../../atoms/Anchor/Anchor"
import ImageAtom from "../../atoms/ImgeAtom/ImageAtom"
import "./Contacts.css"
import {
  Telegram,
  Viber,
  Whatsapp,
} from "../../../assets/icons/messengers/index"

const Contacts = () => {
  return (
    <section className="contacts">
      <Title className="contacts_title" size="2">
        Contacts
      </Title>
      <div className="contacts_content">
        <Text textClassName="contacts_info-title">Phone:</Text>
        <Anchor Url="tel:+380661111111" ClassName="contacts_info">
          +38(066)111-11-11
        </Anchor>
        <Text textClassName="contacts_info-title">E-mail:</Text>
        <Anchor Url="mailto:test@tect.com" ClassName="contacts_info">
          test@tect.com
        </Anchor>
        <Text textClassName="contacts_info-title">Messengers:</Text>
        <div>
          <Anchor Url="#">
            <ImageAtom imgClassName="contacts-icon" Url={Viber} />
          </Anchor>
          <Anchor Url="#">
            <ImageAtom imgClassName="contacts-icon" Url={Whatsapp} />
          </Anchor>
        </div>
      </div>
    </section>
  )
}

export default Contacts
