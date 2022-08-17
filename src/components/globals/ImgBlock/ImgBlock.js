import React from "react"

const ImgBlock = ({
  imgClassName,
  Url,
  textClassName,
  content,
  className = " ",
  imgWidth,
}) => {
  return (
    <div className={className}>
      <img className={imgClassName} src={Url} width={imgWidth} />
      <p className={textClassName}>{content}</p>
    </div>
  )
}

export default ImgBlock
