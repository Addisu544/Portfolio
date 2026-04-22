import { portfolio } from '../data/portfolio'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ExternalLink } from '../components/ui/ExternalLink'

export function FlagshipSection() {
  const { flagship } = portfolio

  return (
    <section id="flagship" className="section" aria-label="Flagship project">
      <div className="container">
        <div className="kicker">Flagship project</div>
        <h2 className="h1" style={{ marginTop: 10 }}>
          {flagship.title}
        </h2>
        <p className="subhead">{flagship.impact}</p>

        <div className="grid2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="groupTitle">Context</div>
            <ul className="list">
              {flagship.context.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="groupTitle">Result</div>
            <ul className="list">
              {flagship.result.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="groupTitle">Action</div>
          <div className="grid2">
            <div>
              <ul className="list">
                {flagship.action.summary.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div style={{ height: 12 }} />
              <div className="groupTitle">Architecture</div>
              <ul className="list">
                {flagship.action.architecture.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="groupTitle">Backend</div>
              <ul className="list">
                {flagship.action.backend.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div style={{ height: 12 }} />
              <div className="groupTitle">Frontend</div>
              <ul className="list">
                {flagship.action.frontend.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <div className="card">
            <div className="groupTitle">Key features</div>
            <ul className="list">
              {flagship.action.features.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="groupTitle">Engineering highlights</div>
            <ul className="list">
              {flagship.highlights.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ctaRow">
          <ExternalLink className="btn btnPrimary" href={flagship.links.github}>
            GitHub
          </ExternalLink>
          {flagship.links.demo ? (
            <ExternalLink className="btn btnSecondary" href={flagship.links.demo}>
              Live demo
            </ExternalLink>
          ) : null}
          <ButtonLink intent="secondary" href="#projects">
            View selected projects
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

