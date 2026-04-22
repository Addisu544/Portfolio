import { portfolio } from '../data/portfolio'

export function ProfessionalContextSection() {
  const { professionalContext } = portfolio

  return (
    <section id="context" className="section" aria-label="Professional context">
      <div className="container">
        <div className="kicker">Professional context</div>
        <h2 className="h1" style={{ marginTop: 10 }}>
          Security-focused system builder
        </h2>

        <div className="grid2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="groupTitle">Summary</div>
            <ul className="list">
              {professionalContext.lines.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="groupTitle">Edge</div>
            <p className="identityLine" style={{ margin: 0 }}>
              {professionalContext.edgeLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

