import React from "react"

const ImageAtom = ({ imgClassName = " ", Url, imgWidth = " " }) => {
  return (
    <img
      className={imgClassName}
      src={Url}
      style={{ width: `${imgWidth}px` }}
      alt=""
    />
  )
}

export default ImageAtom
