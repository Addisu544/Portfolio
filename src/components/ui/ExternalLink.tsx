import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = {
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  )
}

