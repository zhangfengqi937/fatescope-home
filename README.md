# Francis Zhang — Personal Homepage

Personal homepage and project showcase. Built with Next.js + Tailwind, deployed on Vercel.

## Sections

- **Hero** — intro with Spotify embed and opening quote
- **Fatescope App** — showcase of the Zi Wei Dou Shu entertainment app (Character Profile, Compatibility, Fortune Prediction, Star Council)
- **Gallery** — personal photography with Lightbox
- **Healing Notes** — Substack writing channel links
- **About & Collaborations** — background, tech stack, contact
- **Timeline** — milestones from 2014 to present
- **Changelog** — live log of Homepage / Fatescope App / KAIROS updates, sourced from `public/changes.json`

## Projects tracked

| Project | Description |
|---|---|
| **Fatescope App** | Hybrid East × West astrology engine — Character Profile, Compatibility, Fortune Prediction, Star Council |
| **KAIROS** | 5-agent AI trading intelligence system — pre-market Discord briefings, Alpaca paper trading, sector rotation |

## Stack

Next.js · TypeScript · React · Tailwind CSS · Vercel

## Structure

```
app/
├── page.tsx          # EN homepage
├── zh/page.tsx       # ZH homepage
├── changelog/        # Full changelog page (3-column: Web / App / KAIROS)
├── about/
└── links/
components/
├── TerminalChangelogDigest.tsx  # Homepage changelog digest widget
├── HeroAuroraCool.tsx
├── GlassCard.tsx
├── ClientGallery.tsx
└── ...
public/
└── changes.json      # Shared changelog data source (web / app / kairos)
```

## Bilingual

ZH (`/zh`) and EN (`/`) pages are maintained in parallel. The `/changelog`, `/en/changelog`, and `/zh/changelog` routes all share the same page component.

## Changelog data

All updates are tracked in `public/changes.json` with three keys: `web`, `app`, `kairos`. The homepage digest widget (`TerminalChangelogDigest`) shows the latest 4 entries across all three, sorted by date and color-coded by scope (WEB / APP / KAIROS).

## Dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## License

- Code: MIT (see `LICENSE`)
- Photos & Writing: All Rights Reserved (see `CONTENT-LICENSE.md`)
- Trademark: Fatescope™ — not permitted for third-party use without permission
