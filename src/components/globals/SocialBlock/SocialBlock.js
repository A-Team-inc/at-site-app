import React from "react"

const SocialBlock = ({ SocialBlockClassName, data }) => {
  return(
    <div className={SocialBlockClassName}>
      {data?.map((item, index) => <a key={index} href={item.url} target={"blank"}><img src={item.icon.url} /></a>)}
    </div>
  )
}

export default SocialBlock