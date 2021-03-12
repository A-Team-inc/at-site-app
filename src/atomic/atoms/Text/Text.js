import React from "react"

const Text = ({ textClassName = " ", children }) => {
  return <p className={textClassName}>{children}</p>
}

export default Text
