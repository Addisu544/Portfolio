import { portfolio } from '../data/portfolio'
import { ProjectCard } from '../components/ProjectCard'

export function SelectedProjectsSection() {
  return (
    <section id="projects" className="section" aria-label="Selected projects">
      <div className="container">
        <div className="kicker">Selected projects</div>
        <h2 className="h1" style={{ marginTop: 10 }}>
          Projects that reinforce system design
        </h2>
        <p className="subhead">Compact case notes. No tech dumping.</p>

        <div className="grid2" style={{ marginTop: 18 }}>
          {portfolio.selectedProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

