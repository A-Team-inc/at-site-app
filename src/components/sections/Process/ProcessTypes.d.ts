interface IProcessData {
  contentfulProcess: {
    title: string
    subtitle: string
    cta: string
    abilities: IAbilities[]
    steps: IStep[]
  }
}

interface IStep {
  title: string
  description: {
    raw: string
  }
}

interface IAbilities {
  title: string
  content: {
    content: string
  }
}

export { IProcessData }
