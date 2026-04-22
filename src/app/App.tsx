import { Layout } from './Layout'
import { CommandPalette } from '../components/CommandPalette'
import { HeroSection } from '../sections/HeroSection'
import { FlagshipSection } from '../sections/FlagshipSection'
import { SelectedProjectsSection } from '../sections/SelectedProjectsSection'
import { ProfessionalContextSection } from '../sections/ProfessionalContextSection'
import { ContactSection } from '../sections/ContactSection'

export function App() {
  return (
    <>
      <a className="skipLink" href="#content">
        Skip to content
      </a>
      <Layout>
        <main id="content" className="main" tabIndex={-1}>
          <h1 className="srOnly">Portfolio</h1>
          <HeroSection />
          <FlagshipSection />
          <SelectedProjectsSection />
          <ProfessionalContextSection />
          <ContactSection />
        </main>
      </Layout>
      <CommandPalette />
    </>
  )
}

