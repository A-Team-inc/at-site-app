import React from "react"

export function resizeWidthOnly(a, b) {
  var c = [window.innerWidth]
  return (
    (window.onresize = function () {
      var d = window.innerWidth,
        e = c.length
      c.push(d)
      if (c[e] !== c[e - 1]) {
        clearTimeout(b)
        b = setTimeout(a, 50)
      }
    }),
    a
  )
}

export const addLineBreaks = (text) => text.split('\n').reduce((children, textSegment, index) => {
  return [...children, index > 0 && <br key={index} />, textSegment];
}, []);