import React from "react"

import "./loader.css"
import "../../public/vivify.min.css"

const Loader = () => {
  // popOut delay-100  duration-4000
  return (
    <div className="pre-loader">
      <div className="first-part delay-1000 duration-1000 vivify fadeInLeft">
        A-
      </div>
      <div className="second-part delay-1000 duration-1000 vivify fadeInRight">
        Team
      </div>
    </div>
  )
}

export default Loader
