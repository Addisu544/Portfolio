export type ExternalLink = {
  label: string
  href: string
}

export type CtaLink = ExternalLink & {
  intent: 'primary' | 'secondary'
  download?: boolean
}

export type FlagshipProject = {
  id: string
  title: string
  impact: string
  context: string[]
  action: {
    summary: string[]
    architecture: string[]
    backend: string[]
    frontend: string[]
    features: string[]
  }
  result: string[]
  highlights: string[]
  links: {
    github: string
    demo?: string
  }
}

export type SelectedProject = {
  title: string
  impact: string
  action: string
  tags: string[]
  links: {
    github?: string
    demo?: string
  }
}

export type PortfolioContent = {
  person: {
    name: string
    availability: string
    stackLine: string
    identityLine: string
    links: {
      github: string
      linkedin?: string
      email: string
      telegram: string
      resumePath: string
    }
  }
  hero: {
    headline: string
    subheadline: string
    primaryCtaLabel: string
    secondaryCtaLabel: string
    proofBullets: string[]
  }
  flagship: FlagshipProject
  selectedProjects: SelectedProject[]
  professionalContext: {
    lines: string[]
    edgeLine: string
  }
  contact: {
    heading: string
    ctaLine: string
  }
}

