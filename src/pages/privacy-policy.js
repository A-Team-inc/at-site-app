import React from "react"
import { useLocation } from "@reach/router"

import Layout from "../components/layout/Layout"
import Title from "../components/globals/Title/Title"
import RichText from "../components/globals/RichText/RichText"
import usePrivacyPolicyAndTermsOfUseQuery from "../graphql/privacy-policy-and-terms-of-use"

const PrivacyPolicy = () => {
  const { pathname } = useLocation()
  const data = usePrivacyPolicyAndTermsOfUseQuery()
  const filteredData = data.allContentfulPrivacyPolicyAndTermsOfUse.nodes.filter((item) => item.slug === pathname)[0]

  return(
    <Layout>
      <section className="privacy_policy-terms_of_use">
        <Title className="privacy_policy-terms_of_use__title" size={2}>{ filteredData.title }</Title>
        <RichText paragraphClassName="privacy_policy-terms_of_use__text" richText={filteredData.description} />
      </section>
    </Layout>
  )
}

export default PrivacyPolicy