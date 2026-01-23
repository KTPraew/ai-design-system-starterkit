# shadcn/ui Starter Kit

A production-ready Next.js starter with [shadcn/ui](https://ui.shadcn.com) components, complete design tokens, and Tailwind CSS configuration.

## Features

- ✨ **Next.js 15** - Latest version with App Router and Server Components
- 🎨 **shadcn/ui** - 44+ beautifully designed, customizable components
- 🎭 **Design System** - Complete design tokens and Tailwind configuration
- 🌓 **Dark Mode** - Built-in dark mode support with CSS variables
- 📱 **Responsive** - Mobile-first design approach
- 🪝 **Custom Hooks** - Utility hooks for common patterns
- 📦 **TypeScript** - Full TypeScript support
- ✅ **ESLint** - Code quality and linting configured

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + design tokens (CSS variables)
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── design-tokens.ts    # Design system tokens
│   └── constants.ts        # Application constants
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   ├── use-debounce.ts     # Debounce hook
│   ├── use-local-storage.ts # localStorage hook
│   └── use-clipboard.ts    # Clipboard hook
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
└── components.json         # shadcn/ui configuration
```

## Design System

### Colors

Available color tokens in `lib/design-tokens.ts`:

- **Primary**: Used for main actions and highlights
- **Secondary**: Alternative color for supporting actions
- **Destructive**: For dangerous actions (delete, etc.)
- **Muted**: For disabled or less important states
- **Accent**: For call-to-attention elements

### Typography

Preconfigured font families and sizes:

- **Sans**: Geist (default)
- **Mono**: Geist Mono

### Spacing

Consistent spacing scale from 0 to 96 (0-24rem):

```typescript
spacing: {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  // ... up to 96: '24rem'
}
```

### Border Radius

Tokens for consistent rounded corners:

- `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `full`

### Shadows

Elevation-based shadow system from `xs` to `2xl`.

## Available Components

All shadcn/ui components are pre-installed:

- **Feedback**: Alert, Dialog, Popover, Tooltip, Toast
- **Forms**: Button, Checkbox, Input, Label, Radio Group, Select, Switch, Textarea, Form
- **Navigation**: Breadcrumb, Menu, Navigation Menu, Pagination, Tabs
- **Data Display**: Accordion, Avatar, Badge, Card, Table, Carousel, Skeleton
- **Layout**: Collapsible, Context Menu, Drawer, Dropdown Menu, Sheet
- **Inputs**: Calendar, Date Picker, Input OTP, Slider, Toggle, Toggle Group

## Custom Hooks

### `useMobile()`

Detect if the screen is mobile-sized (default: < 768px):

```typescript
import { useMobile } from '@/hooks'

export function MyComponent() {
  const isMobile = useMobile()
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### `useDebounce()`

Debounce a value with configurable delay:

```typescript
import { useDebounce } from '@/hooks'

export function SearchComponent() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  // Use debouncedValue for API calls
}
```

### `useLocalStorage()`

Sync state with localStorage:

```typescript
import { useLocalStorage } from '@/hooks'

export function MyComponent() {
  const { value, setValue, removeValue, isLoading } = useLocalStorage('key', 'default')
  return <div>{value}</div>
}
```

### `useClipboard()`

Copy text to clipboard:

```typescript
import { useClipboard } from '@/hooks'

export function CopyButton() {
  const { isCopied, copy } = useClipboard()
  return (
    <button onClick={() => copy('Text to copy')}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  )
}
```

## Customization

### Changing the Theme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... */
}
```

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

### Extending Tailwind

Modify `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    // Add custom colors
  },
  spacing: {
    // Add custom spacing
  },
}
```

## Configuration Files

- `tailwind.config.ts` - Tailwind CSS theme configuration
- `components.json` - shadcn/ui CLI configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration

## Development

### Code Quality

```bash
npm run lint  # Run ESLint
```

### Type Checking

```bash
npx tsc --noEmit
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Geist Font](https://vercel.com/font)

## License

MIT

## Support

For issues and questions:
- [shadcn/ui GitHub Issues](https://github.com/shadcn-ui/ui/issues)
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
