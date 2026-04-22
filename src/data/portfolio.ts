import type { PortfolioContent } from './types'

export const portfolio: PortfolioContent = {
  person: {
    name: 'Addisu Agerie',
    availability: 'Open to opportunities',
    stackLine: 'Core: React · TypeScript · .NET · Node · PostgreSQL · SQL Server',
    identityLine: 'Backend-first full-stack: secure APIs, clean boundaries, measurable latency.',
    links: {
      github: 'https://github.com/Addisu544/',
      email: 'addisuagerie544@gmail.com',
      telegram: 'https://t.me/addisu544',
      resumePath: '/cv.pdf',
    },
  },
  hero: {
    headline: 'Full-stack engineer building secure, high-performance systems.',
    subheadline: 'Full-stack engineer @ INSA — focused on security, performance, and system design.',
    primaryCtaLabel: 'View flagship project',
    secondaryCtaLabel: 'Download CV / Contact',
    proofBullets: [
      'JWT + RBAC enforced at the API boundary for workflow-critical actions.',
      'Transaction-first lifecycle tracking with searchable custody history and audit-ready records.',
      'Layered .NET architecture to keep workflow rules stable as features scale.',
    ],
  },
  flagship: {
    id: 'flagship',
    title: 'Asset Management System',
    impact:
      'Centralized asset issuance and return workflows with audit-ready tracking and role-based access for organizations.',
    context: [
      'Asset issuance and returns were hard to track across departments, causing slow handoffs and inconsistent records.',
      'Built for internal org teams: admins managing inventory, departments issuing assets, and employees responsible for assigned equipment.',
    ],
    action: {
      summary: [
        'Designed and built a full-stack system that models the full asset lifecycle and enforces controlled transaction workflows.',
        'Kept access boundaries explicit so sensitive actions remain role-restricted and reviewable.',
      ],
      architecture: [
        'Clean/layered .NET architecture with separate API boundary, application services, domain rules, and persistence.',
        'Separation of concerns across auth, workflow rules, and file handling to reduce coupling and improve testability.',
      ],
      backend: [
        '.NET 8 Minimal API with predictable request/response contracts.',
        'Entity Framework Core for relational persistence and lifecycle-centric modeling.',
        'SQL Server schema designed around asset state + transaction history.',
        'JWT authentication with role-based access control enforced at the API boundary.',
      ],
      frontend: [
        'React + TypeScript + Vite UI focused on lifecycle state, transaction history, and administrative flows.',
      ],
      features: [
        'Asset lifecycle management (issue/return tracking) with transaction history.',
        'Department and employee management with assignment visibility.',
        'Transaction workflows with authorization checks.',
        'File/image uploads for asset identification and documentation.',
      ],
    },
    result: [
      'Reduced operational friction by replacing manual tracking with a single system of record for custody and lifecycle state.',
      'Improved asset visibility across departments through consistent assignment history and searchable transactions.',
      'Enforced secure access control with JWT + RBAC so only authorized roles can issue, return, or administer inventory.',
      'Kept the system scalable and maintainable by isolating workflow rules behind layered boundaries.',
    ],
    highlights: [
      'Clean architecture separation keeps workflow logic isolated from transport and persistence.',
      'Secure authentication and authorization enforced at the API boundary (JWT + RBAC).',
      'Scalable API design with explicit workflow transitions and predictable contracts.',
      'Structured relational modeling for assets, employees, departments, and transaction history.',
    ],
    links: {
      github: 'https://github.com/Addisu544/',
    },
  },
  selectedProjects: [
    {
      title: 'Job Board System',
      impact:
        'Role-controlled hiring workflow from posting to application review with traceable job and application state.',
      action:
        'Built a multi-role platform (Admin, Recruiter, Employee) with JWT auth, job lifecycle flows, application tracking, and CV uploads using Prisma + PostgreSQL.',
      tags: ['JWT auth', 'RBAC roles', 'Prisma + PostgreSQL', 'File uploads'],
      links: {
        github: 'https://github.com/Addisu544/',
      },
    },
    {
      title: 'Secure Notes Vault',
      impact: 'Protected notes with enforced access boundaries and reviewable change history.',
      action:
        'Designed an authenticated notes service with authorization checks at the API boundary and structured CRUD flows to prevent unauthorized reads/writes.',
      tags: ['Access boundaries', 'Audit-friendly changes', 'API security'],
      links: {
        github: 'https://github.com/Addisu544/',
      },
    },
    {
      title: 'Rate-Limited API Gateway',
      impact: 'Stabilized API performance under burst traffic and reduced abuse risk.',
      action:
        'Implemented a lightweight gateway layer with per-identity throttling, consistent error contracts, and instrumentation hooks for operational visibility.',
      tags: ['Rate limiting', 'Predictable errors', 'Operational signals'],
      links: {
        github: 'https://github.com/Addisu544/',
      },
    },
  ],
  professionalContext: {
    lines: [
      'INSA (Information Network Security Agency) — full-stack engineer on security-critical systems.',
      'Focus: secure API boundaries, performance budgets, and scalable system design.',
      'I optimize for measurable reliability: predictable contracts, controlled workflows, and observability-ready services.',
    ],
    edgeLine: 'I ramp fast on unfamiliar systems and turn ambiguity into production-ready decisions.',
  },
  contact: {
    heading: 'Contact',
    ctaLine: 'Reach out for backend-heavy full-stack roles focused on secure, high-performance systems.',
  },
}

