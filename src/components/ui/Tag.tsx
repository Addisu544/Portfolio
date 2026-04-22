import type { HTMLAttributes, ReactNode } from 'react'

type TagProps = {
  children: ReactNode
} & Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'children'>

export function Tag({ children, ...rest }: TagProps) {
  return (
    <span className="tag" {...rest}>
      {children}
    </span>
  )
}

