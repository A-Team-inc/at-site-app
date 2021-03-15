import React from "react"

import ImageAtom from "../../atoms/ImgeAtom/ImageAtom"
import Text from "../../atoms/Text/Text"

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
      <ImageAtom imgClassName={imgClassName} Url={Url} imgWidth={imgWidth} />
      <Text textClassName={textClassName}>{content}</Text>
    </div>
  )
}

export default ImgBlock
