import React from "react"

import useHeaderQuery from "../../../graphql/header"

const SocialBlock = ({ SocialBlockClassName}) => {
  const data = useHeaderQuery()

  return(
    <div className={SocialBlockClassName}>
      {data?.contentfulHeader.socialLinks.map((item, index) => <a key={index} href={item.url} target={"blank"}><img src={item.icon.url} /></a>)}
    </div>
  )
}

export default SocialBlock