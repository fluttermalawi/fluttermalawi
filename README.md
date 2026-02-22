# Flutter Malawi Community Website

Our goal with this community is to create a friendly and engaging space for developers in Malawi who are interested in learning and developing using Flutter.

🌐 **Live Site**: [https://fluttermalawi.github.io/fluttermalawi](https://fluttermalawi.github.io/fluttermalawi)

## Technology Stack

- React Router 7 (SPA mode)
- React 18
- TypeScript
- Tailwind CSS
- Vite
- pnpm
- PocketBase (backend)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.15.0+

Install pnpm if you haven't:
```bash
npm install -g pnpm
```

### Installation

```bash
pnpm install
```

### Development

Run the dev server:
```bash
pnpm dev
```

Run PocketBase (backend):
```bash
# On macOS
pnpm pocketbase_mac

# On Windows/Linux
pnpm pocketbase
```

PocketBase will be available at:
- Admin UI: `http://127.0.0.1:8090/_/`
- API: `http://127.0.0.1:8090/api/`

## Deployment

### GitHub Pages (Automated)

This site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - deployment happens automatically

### Manual Build

```bash
pnpm build
```

Build output will be in `dist/client/` directory.

### Preview Production Build

```bash
pnpm build
pnpm preview
```

## Project Structure

```
app/
├── components/     # Reusable React components
├── routes/         # Route components (file-based routing)
├── lib/
│   ├── data/      # Static JSON data
│   └── utils/     # Utility functions
├── root.tsx       # Root layout
└── types.ts       # TypeScript types

db/                # PocketBase database
public/            # Static assets
```

## PocketBase Setup

### First-Time Setup

1. Start PocketBase server
2. Navigate to `http://127.0.0.1:8090/_/`
3. Create your initial admin account

### Directory Structure

- `pb_data`: Application data and uploaded files (in `.gitignore`)
- `pb_migrations`: Collection migration files (committed to repo)

For more info: [PocketBase JS migrations docs](https://pocketbase.io/docs/migrations/)

## Resources

### Illustrations & Assets
- [Illustrations](https://pixels.market/)
- [Fonts](https://fonts.google.com/)
- [Icons](https://iconoir.com/)

### Documentation
- [React Router 7](https://reactrouter.com/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Tailwind CSS](https://tailwindcss.com/)
- [PocketBase](https://pocketbase.io/docs/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
