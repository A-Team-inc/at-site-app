export interface IGatsbyImage {
  height: number
  width: number
  layout: string
  images: {
    fallback: {
      sizes: string
      src: string
      srcSet: string
    },
    sources: [
      {
        sizes: string
        srcSet: string
        type: string
      }
    ]
  }
}