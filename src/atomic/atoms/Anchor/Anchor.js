import React from "react"

const Anchor = ({ ClassName = " ", Url, children }) => {
  return (
    <a className={ClassName} href={Url}>
      {children}
    </a>
  )
}

export default Anchor
