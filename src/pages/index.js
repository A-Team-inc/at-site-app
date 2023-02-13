import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/sections/SEO/SEO"
import Header from "../components/sections/Header/Header"
import Footer from "../components/sections/Footer/Footer"
import Welcome from "../components/sections/Welcome/Welcome"
import Technology from "../components/sections/Technology/Technology"
import OurWorks from "../components/sections/OurWorks/OurWorks"
import Services from "../components/sections/Services/Services"
import Offers from "../components/sections/Offers/Offers"
import Process from "../components/sections/Process/Process"
import reportWebVitals from "../reportWebVitals"


import "../App.scss"

export default function Home({ data }) {
  return (
    <>
      <SEO imageUrl={data.contentfulHeader.logo.url} />
      <div>
        <Header />
        <div className="content">
          <Welcome />
          <Technology />
          <Services />
          <Offers />
          <Process />
          <OurWorks />
        </div>
      </div>
      <Footer mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content} />
    </>
  )
}

export const query = graphql`
  query {
    allMailchimpMembers {
      nodes {
        internal {
          content
        }
      }
    },
    contentfulHeader {
      logo {
        url
      }
    }
  }
`;

reportWebVitals()
