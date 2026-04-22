import type { ReactNode } from 'react'
import { useEffect, useId, useState } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

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

          <button
            type="button"
            className="menuButton"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menuIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="mobileMenuOverlay"
          role="presentation"
          onClick={() => setMenuOpen(false)}
        >
          <div
            id={menuId}
            className="mobileMenu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mobileNav" aria-label="Mobile">
              <a className="mobileNavLink" href="#flagship" onClick={() => setMenuOpen(false)}>
                Flagship
              </a>
              <a className="mobileNavLink" href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a className="mobileNavLink" href="#context" onClick={() => setMenuOpen(false)}>
                Context
              </a>
              <a className="mobileNavLink" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      ) : null}

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

