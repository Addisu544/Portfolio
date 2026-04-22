import { portfolio } from '../data/portfolio'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ExternalLink } from '../components/ui/ExternalLink'

export function HeroSection() {
  const { person, hero } = portfolio

  return (
    <section className="section" aria-label="Hero">
      <div className="container">
        <div className="heroGrid">
          <div>
            <div className="kicker">{person.availability}</div>
            <h1 className="h1">{hero.headline}</h1>
            <p className="subhead">{hero.subheadline}</p>

            <div className="ctaRow">
              <ButtonLink intent="primary" href="#flagship">
                {hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink intent="secondary" href={person.links.resumePath} download>
                Download CV
              </ButtonLink>
              <ButtonLink intent="secondary" href="#contact">
                Contact
              </ButtonLink>
            </div>

            <div className="linksRow" aria-label="Profile links">
              <ExternalLink href={person.links.github}>GitHub</ExternalLink>
              <a href={`mailto:${person.links.email}`}>Email</a>
              <ExternalLink href={person.links.telegram}>Telegram</ExternalLink>
            </div>
          </div>

          <div className="heroMeta">
            <div className="card">
              <div className="groupTitle">Identity</div>
              <p className="identityLine">{person.identityLine}</p>
              <div className="tagRow" aria-label="Core stack">
                <span className="stackLine">{person.stackLine}</span>
              </div>
            </div>

            <div className="card">
              <div className="groupTitle">Proof points</div>
              <ul className="proofList">
                {hero.proofBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

