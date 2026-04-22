import type { SelectedProject } from '../data/types'
import { ExternalLink } from './ui/ExternalLink'
import { Tag } from './ui/Tag'

type ProjectCardProps = {
  project: SelectedProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card" aria-label={project.title}>
      <h3 className="cardTitle">{project.title}</h3>
      <p className="cardImpact">{project.impact}</p>
      <p style={{ margin: 0, color: 'var(--muted)' }}>{project.action}</p>

      {project.tags.length ? (
        <div className="tagRow" aria-label="Highlights">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}

      {project.links.github || project.links.demo ? (
        <div className="linksRow" aria-label="Project links">
          {project.links.github ? <ExternalLink href={project.links.github}>GitHub</ExternalLink> : null}
          {project.links.demo ? <ExternalLink href={project.links.demo}>Demo</ExternalLink> : null}
        </div>
      ) : null}
    </article>
  )
}

