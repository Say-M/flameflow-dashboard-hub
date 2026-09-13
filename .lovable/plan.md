# Flameflow project dashboard plan

## Goal
Build a complete frontend-only Flameflow console for **NGO Ledger**, with a calm Base44-inspired administration layout, realistic mock content, durable local interactions, and a reusable project configuration/backend boundary.

## 1. Foundation and application shell
- Establish a Flameflow design system in the global theme: warm-neutral canvas, white surfaces, near-black text, muted blue-violet primary, restrained orange brand accent, semantic status colors, subtle borders, and compact radii.
- Load a modern sans-serif font and create shared primitives for page headings, status badges, metrics, tables, settings panels, empty states, dialogs, drawers, confirmation flows, and responsive controls.
- Build a persistent approximately 320px desktop sidebar, searchable navigation in the required order, subtle selected state, project/environment footer, tablet behavior, and mobile slide-over navigation.
- Add a single dashboard shell so all sections retain identical navigation, spacing, project context, and responsive behavior.
- Make `/` open the NGO Ledger dashboard and use `/dashboard?projectId=ngo-ledger&section=overview` as the canonical, shareable state. Validate typed search parameters, preserve `projectId`, fall back to Overview for invalid sections, and support browser history without reloads.

## 2. Reusable project and mock-data architecture
- Define centralized typed models for the project, users, invitations, collections, records, analytics, domains, integrations, agents, workflows, logs, API keys, security configuration, MCP servers, and collaborators.
- Create one canonical NGO Ledger configuration and realistic mock datasets; all labels, URLs, settings, and project-aware content derive from that configuration.
- Add a typed `ProjectBackend` contract with a local mock implementation, keeping future remote backends replaceable without rewriting screens.
- Add a project provider with SSR-safe browser persistence, bounded updates, and a reset-ready storage layer for user-editable mock state.
- Add a shared toast system and reusable copy, loading, success, error, confirmation, and simulated-delay helpers.

## 3. High-priority Overview experience
- Build the original NGO Ledger geometric logo and project header with title, description, creation metadata, favorite control, two edit entry points, and responsive mobile composition.
- Implement validated project editing with name, description, logo placeholder, and slug.
- Add Earn credits, View usage, More actions, and the polished Share experience, including realistic collaborator and invitation state.
- Match the requested first-screen hierarchy: two-column App Visibility and Invite Users cards, followed by the full-width Platform Badge card.
- Add the lower overview summary without crowding the first viewport: status, preview URL, deployment, visits, active users, builds, activity, technology, and quick actions.
- Ensure every visible action works: visibility, badge, favorite, copy links, invites, rename, duplicate/export simulation, archive/delete confirmations, and usage/credits dialogs.

## 4. Management sections
- **Users:** summary metrics, search and filters, pagination, invite form, role editing, deactivate/reactivate, and removal.
- **Simulated Database:** connection summary, collections, schema inspection, responsive records grid, add/view/edit/delete record flows, safe simulated query console, and masked connection configuration.
- **Analytics:** date-range switching, six metrics, responsive charts for traffic trends, devices, sources, pages, and countries using the shared chart palette.
- **SEO & GEO:** validated metadata form, social preview, sitemap simulation, robots controls, simulated 78/100 readiness score, and structured-data checklist.
- **Domain:** default/custom domain states, example DNS records, SSL/verification states, and bounded verification simulation.
- **Integrations:** searchable/category-filtered cards with persisted mock connect, configure, and disconnect flows.
- **Security:** clearly simulated score and scan, authentication/access controls, masked environment variables, audit events, CORS-style and rate-limit-style settings.

## 5. Automation and developer sections
- **Agents:** complete agent cards, enablement, permissions, detail/configuration, deletion, and validated agent creation.
- **Workflows:** searchable workflow list, enable/run/duplicate/delete actions, validated creation, and a clean trigger-to-completion step detail view.
- **Logs:** filters, responsive table, expandable details, clear-view behavior, and a reduced-motion-aware bounded live stream with pause.
- **Prototype API:** overview, documented mock endpoints, examples with copy controls, and masked API-key lifecycle forms.
- **Settings:** validated general/project/appearance settings plus archive, transfer, and dynamic typed-delete confirmations.
- **MCP:** clearly simulated servers, add/configure/connect/disconnect flows, and editable mock tool permissions without real network connections.

## 6. Forms, accessibility, and interaction quality
- Use React Hook Form and Zod for every meaningful form, including client-side trimming, length limits, email/URL validation, inline errors, disabled simulated-submit states, cancel behavior, and success feedback.
- Use accessible dialog, menu, select, tooltip, table, switch, and drawer primitives; include labels, focus visibility, keyboard support, non-color status text, and accessible icon controls.
- Keep all tables contained with local horizontal scrolling, prevent page-level overflow, and verify layouts at 320, 768, 1024, and wide desktop widths.
- Respect reduced-motion preferences and prevent timers, menus, dialogs, or dynamic content from shifting fixed controls.

## 7. Verification and metadata
- Give the dashboard route unique Flameflow title, description, Open Graph text, `og:type`, and Twitter card metadata; remove template metadata and placeholder content.
- Verify route/search persistence, back/forward navigation, every sidebar destination, dialogs, forms, mock mutations, local persistence, copy actions, and bounded log streaming.
- Check desktop and mobile renderings with browser screenshots, confirm the Overview hierarchy is visually polished, and resolve any build, runtime, console, overflow, or accessibility issues.

## Technical details
- TanStack Start remains the routing/runtime foundation; the dashboard is one routed shell whose typed `section` search parameter selects content.
- Tailwind v4 semantic tokens and existing shadcn components provide styling; Lucide supplies icons; Recharts supplies analytics; Sonner supplies feedback.
- Browser storage is read only after hydration to avoid server/client mismatch. No database, authentication, email, DNS, deployment, security scan, API, integration, or MCP request will be real.
- Larger screens are split into focused feature components and data modules rather than one monolithic dashboard file.
