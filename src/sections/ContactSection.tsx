import { portfolio } from '../data/portfolio'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ExternalLink } from '../components/ui/ExternalLink'

export function ContactSection() {
  const { contact, person } = portfolio

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="kicker">{contact.heading}</div>
        <h2 className="h1" style={{ marginTop: 10 }}>
          {contact.heading}
        </h2>
        <p className="subhead">{contact.ctaLine}</p>

        <div className="ctaRow">
          <ButtonLink intent="primary" href={`mailto:${person.links.email}`}>
            Email
          </ButtonLink>
          <ExternalLink className="btn btnSecondary" href={person.links.github}>
            GitHub
          </ExternalLink>
          <ExternalLink className="btn btnSecondary" href={person.links.telegram}>
            Telegram
          </ExternalLink>
          <ButtonLink intent="secondary" href={person.links.resumePath} download>
            Download CV
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

