import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = {
  intent: 'primary' | 'secondary'
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>

export function ButtonLink({ intent, children, ...rest }: ButtonLinkProps) {
  const className = intent === 'primary' ? 'btn btnPrimary' : 'btn btnSecondary'
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  )
}

