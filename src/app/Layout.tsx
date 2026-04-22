import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="brandName">Addisu Agerie</div>
            <div className="brandMeta">Secure systems · performance · architecture</div>
          </div>
          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#flagship">
              Flagship
            </a>
            <a className="navLink" href="#projects">
              Projects
            </a>
            <a className="navLink" href="#context">
              Context
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footerInner">
          <span className="footerMuted">© {new Date().getFullYear()} Addisu Agerie</span>
          <span className="footerMuted">Ctrl + K</span>
        </div>
      </footer>
    </div>
  )
}

