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
import CookieBanner from "../components/globals/CookieBanner/CookieBanner"
import reportWebVitals from "../reportWebVitals"

import "../App.scss"

interface HomeData {
  data: {
    allMailchimpMembers: {
      nodes: {
        internal: {
          content: string
        }
      }
    }
  }
}

export default function Home({ data }: HomeData) {
  console.log('index data', data)
  return (
    <>
      <SEO />
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
      <CookieBanner />
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
    }
  }
`;

reportWebVitals()
