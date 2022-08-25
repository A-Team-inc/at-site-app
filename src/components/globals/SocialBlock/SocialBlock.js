import React from "react"

const SocialBlock = ({ SocialBlockClassName, data}) => {
  
  return(
    <div className={SocialBlockClassName}>
      {data && data.map((item, index) => <a key={index} href={item.href} target={"blank"}><img src={item.img} /></a>)}
    </div>
  )
}

export default SocialBlock