import React from "react"
import { useLocation } from "@reach/router"

import Layout from "../components/layout/Layout"
import Title from "../components/globals/Title/Title"
import RichText from "../components/globals/RichText/RichText"
import usePrivacyPolicyAndTermsOfUseQuery from "../graphql/privacy-policy-and-terms-of-use"

const PrivacyPolicy = () => {
  const { pathname } = useLocation()
  const data = usePrivacyPolicyAndTermsOfUseQuery()
  const filteredData = data?.allContentfulPrivacyPolicyAndTermsOfUse.nodes.filter((item) => item.slug === pathname)[0]

  return(
    <Layout>
      <section className="privacy_policy-terms_of_use">
      <div className="subtitle-wrapper">
        <div className="subtitle_line" />
        <Title className="privacy_policy-terms_of_use__subtitle" size={3}>{ filteredData.subtitle }</Title>
      </div>
        <Title className="privacy_policy-terms_of_use__title title" size={2}>{ filteredData.title }</Title>
        <RichText paragraphClassName="privacy_policy-terms_of_use__text" globalClass="richtext_wrapper" richText={filteredData.description} />
      </section>
    </Layout>
  )
}

export default PrivacyPolicy