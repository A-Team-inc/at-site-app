import { createElement } from "react"

const Title = ({ children, className = "", size }) => {
  return createElement(`h${size}`, { className: className, children: children })
}

export default Title
