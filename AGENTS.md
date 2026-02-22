# Flutter Malawi Website - AI Agent Instructions

## Project Overview
This is the Flutter Malawi community website built with React Router 7 and deployed on GitHub Pages.

## Technology Stack
- React Router 7 (SPA mode, no SSR)
- React 18
- TypeScript
- Tailwind CSS
- Vite
- pnpm (package manager)
- PocketBase (backend)

## Key Configuration

### GitHub Pages Setup
- Repository: https://github.com/fluttermalawi/fluttermalawi
- Base path: `/` (root, no subdirectory)
- Deployment: Automated via GitHub Actions on push to main branch
- Build output: `dist/client` directory
- Live URL: https://fluttermalawi.github.io/

### Package Manager
This project uses **pnpm**. Always use pnpm commands:
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Add package: `pnpm add <package>`

### Routing
- Uses React Router 7 with SPA mode (no SSR)
- Hash routing is NOT used - using basename instead
- Base path configured in `vite.config.ts` and `react-router.config.ts`

## Project Structure
```
app/
├── components/     # Reusable React components
├── routes/         # Route components
├── lib/
│   ├── data/      # Static JSON data
│   └── utils/     # Utility functions
├── root.tsx       # Root layout
└── types.ts       # TypeScript types

db/                # PocketBase database
public/            # Static assets
```

## Development Guidelines

### Adding New Routes
1. Create route file in `app/routes/`
2. Follow React Router 7 file-based routing conventions
3. Use TypeScript for all route components

### Styling
- Use Tailwind CSS utility classes
- Custom styles in `app/globals.css`
- Responsive design is required

### Components
- All components in `app/components/`
- Use TypeScript with proper typing
- Follow React best practices

### Data Management
- Static data in `app/lib/data/*.json`
- PocketBase for dynamic data
- Repository pattern in `app/lib/repository.ts`

## Build & Deployment

### Local Development
```bash
pnpm install
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Deployment
- Automatic deployment via GitHub Actions
- Triggered on push to main branch
- Requires GitHub Pages enabled in repository settings

## Important Notes

### GitHub Pages Configuration
1. Repository settings → Pages → Source: GitHub Actions
2. Site will be available at: https://fluttermalawi.github.io/
3. All internal links should be relative

### Environment Variables
- Copy `.env.example` to `.env` for local development
- PocketBase URL configuration in environment variables

### PocketBase
- Local development: `pnpm pocketbase_mac` (macOS) or `pnpm pocketbase` (other)
- Database migrations in `db/pb_migrations/`

## Common Tasks

### Update Dependencies
```bash
pnpm update --latest
```

### Type Checking
```bash
pnpm typecheck
```

### Add New Component
1. Create in `app/components/ComponentName.tsx`
2. Export from component file
3. Import where needed

### Troubleshooting
- Clear build cache: `rm -rf dist .vite`
- Reinstall dependencies: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
- Check GitHub Actions logs for deployment issues

## Code Style
- Use functional components with hooks
- Prefer const over let
- Use TypeScript strict mode
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic

## Testing
- Manual testing in development mode
- Test production build locally: `pnpm build && pnpm preview`
- Verify all routes work with base path

## Resources
- [React Router 7 Docs](https://reactrouter.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [PocketBase Docs](https://pocketbase.io/docs/)
