import React from "react"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
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
      <Title className="contacts-title" size="2">
        Contacts
      </Title>
      <div className="contacts-content">
        <Text textClassName="contacts-text">Phone: </Text>
        <Text textClassName="contacts-text">Email: </Text>
        <Text textClassName="contacts-text">
          Messengers:{" "}
          <span>
            <a href="#">
              <ImageAtom imgClassName="contacts-icon" Url={Telegram} />
            </a>
            <a href="#">
              <ImageAtom imgClassName="contacts-icon" Url={Viber} />
            </a>
            <a href="#">
              <ImageAtom imgClassName="contacts-icon" Url={Whatsapp} />
            </a>
          </span>{" "}
        </Text>
      </div>
    </section>
  )
}

export default Contacts
