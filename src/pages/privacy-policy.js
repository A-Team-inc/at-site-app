import React from "react"
import { useLocation } from "@reach/router"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import Title from "../components/globals/Title/Title"
import RichText from "../components/globals/RichText/RichText"
import usePrivacyPolicyAndTermsOfUseQuery from "../graphql/privacy-policy-and-terms-of-use"

const PrivacyPolicy = ({ data }) => {
  const { pathname } = useLocation()
  const dataPrivacy = usePrivacyPolicyAndTermsOfUseQuery()
  const filteredData = dataPrivacy?.allContentfulPrivacyPolicyAndTermsOfUse.nodes.filter((item) => item.slug === pathname)[0]

  return(
    <Layout isShowForm={false} mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content}>
      <section className="privacy_policy-terms_of_use">
        <div className="subtitle-wrapper">
          <div className="subtitle_line" />
          <Title className="privacy_policy-terms_of_use__subtitle" size={3}>{ filteredData?.subtitle }</Title>
        </div>
        <Title className="privacy_policy-terms_of_use__title title" size={2}>{ filteredData?.title }</Title>
        <RichText paragraphClassName="privacy_policy-terms_of_use__text" globalClass="richtext_wrapper" richText={filteredData?.description} />
      </section>
    </Layout>
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

export default PrivacyPolicy