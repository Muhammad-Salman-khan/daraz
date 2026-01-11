# Daraz E-Commerce Platform

A modern, performant e-commerce application built with React 19, TanStack Router, and TanStack Query. This project demonstrates advanced patterns for building scalable React applications with emphasis on type safety, data fetching optimization, and developer experience.

## 🏗️ Architecture Overview

### Core Technology Stack

- **React 19** - Latest React version with concurrent features and optimizations
- **TypeScript** - Full type safety across the application
- **Vite** - Next-generation frontend tooling for lightning-fast development
- **TailwindCSS 4** - Utility-first CSS framework for rapid UI development

### Routing & Navigation

**TanStack Router** powers the application's routing system with:

- **File-based routing** - Automatic route generation from file structure
- **Type-safe navigation** - Full TypeScript support for routes and parameters
- **Route-level code splitting** - Automatic code splitting via `autoCodeSplitting: true`
- **Preloading strategies** - Intent-based preloading (`defaultPreload: 'intent'`) for improved perceived performance
- **Scroll restoration** - Native scroll position restoration on navigation
- **Structural sharing** - Optimized re-renders with `defaultStructuralSharing`

### State Management & Data Fetching

**TanStack Query (React Query)** manages all server state with:

- **Query integration with routing** - Queries are initiated at the route loader level
- **Type-safe query context** - Router context provides typed QueryClient access
- **Automatic cache management** - Smart caching and background refetching
- **Devtools integration** - Comprehensive debugging via React Query Devtools

#### Why `useSuspenseQuery`?

The application extensively uses `useSuspenseQuery` instead of the standard `useQuery` for several architectural benefits:

1. **Simplified Loading States**: Suspense boundaries handle loading states declaratively, eliminating the need for manual loading checks in components
2. **Better User Experience**: Route loaders ensure data is fetched before navigation completes, preventing layout shifts and loading spinners
3. **Type Safety**: When used with `ensureQueryData` in loaders, TypeScript guarantees data is available in components
4. **Concurrent Rendering**: Leverages React 19's concurrent features for smoother transitions
5. **Error Boundaries**: Errors are automatically caught by error boundaries rather than requiring error state management in each component

### Local State Management

**React Context API** handles client-side state:

- **CartContext** - Shopping cart state with localStorage persistence
- **Theme Management** - Dark/light mode support via `next-themes`

### Schema Validation

**Zod** provides runtime type validation:

- Type-safe API response parsing
- Automatic TypeScript type inference
- Runtime validation for external data sources

## 🎨 UI Component Architecture

### Design System

- **shadcn/ui** - High-quality, accessible component primitives
- **Radix UI** - Unstyled, accessible component foundation
- **Lucide React** - Consistent iconography
- **Framer Motion** - Smooth animations and transitions
- **Embla Carousel** - Touch-enabled carousel component

### Component Organization

```
components/
├── ui/                    # Reusable UI primitives
│   ├── Navbar/           # Navigation components
│   ├── Card/             # Product card variants
│   ├── ShoppingCart/     # Cart functionality
│   ├── Auth/             # Authentication UI
│   └── ...               # Other UI components
└── footer.tsx            # Global footer
```

## 🚀 Features

### Product Catalog

- **Dynamic product listings** with responsive grid layouts
- **Category filtering** with dedicated category pages
- **Search functionality** with debounced input and keyboard navigation
- **Product detail pages** with comprehensive information display

### Shopping Cart

- **Add/remove items** with toast notifications (Sonner)
- **Persistent cart state** via localStorage
- **Cart preview popover** for quick access

### User Interface

- **Responsive design** - Mobile-first approach with breakpoint optimization
- **Dark mode support** - System preference aware theming
- **Animated transitions** - Smooth page transitions and micro-interactions
- **Accessible components** - WCAG compliant UI elements

### Developer Experience

- **React Compiler** - Automatic memoization via Babel plugin
- **Hot Module Replacement** - Instant feedback during development
- **TypeScript strict mode** - Maximum type safety
- **ESLint + Prettier** - Consistent code formatting
- **Vitest** - Fast unit testing with React Testing Library

## 📁 Project Structure

```
src/
├── routes/                    # File-based routing
│   ├── __root.tsx            # Layout wrapper
│   ├── index.tsx             # Home page
│   ├── products/
│   │   └── $id.tsx           # Dynamic product detail
│   └── categories/
│       └── $id.tsx           # Category filtering
├── components/               # React components
├── Context/                  # React Context providers
├── hooks/                    # Custom React hooks
│   ├── useProductFetch.ts   # API integration
│   └── use-debounce.ts      # Input debouncing
├── integrations/             # Third-party integrations
│   └── tanstack-query/       # Query client setup
├── lib/
│   └── Schemas/              # Zod validation schemas
└── main.tsx                  # Application entry point
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application runs on `http://localhost:3000` by default.

### Available Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm preview     # Preview production build
pnpm test        # Run tests
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
pnpm check       # Run lint and format
```

## 🎯 Performance Optimizations

### Code Splitting

- Automatic route-based code splitting via TanStack Router
- Dynamic imports for heavy components
- Lazy loading for images with native `loading="lazy"`

### Caching Strategy

- Stale-while-revalidate pattern via React Query
- Route-level data prefetching with loader patterns
- LocalStorage persistence for cart state

### Build Optimizations

- React Compiler for automatic optimization
- Tree shaking via ES modules
- CSS purging with TailwindCSS
- Minification and bundling with Vite

## 🧪 Testing Strategy

- **Unit tests** - Component testing with Vitest and React Testing Library
- **Type safety** - Compile-time guarantees via TypeScript
- **Accessibility** - Testing Library DOM queries ensure accessible markup

## 📦 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) for demonstration purposes:

- **Product listings** - `/products` endpoint
- **Category filtering** - `/products/category/{category}` endpoint
- **Product details** - `/products/{id}` endpoint

### Custom Hooks

- `fetchProduct()` - Retrieve all products
- `fetchedCategoryProduct(category)` - Filter by category
- `DeatailedProduct(id)` - Fetch single product details

## 🎨 Styling Approach

### TailwindCSS Configuration

- **Custom color palette** - Brand-specific colors including primary orange (`daraz-orange`)
- **Responsive utilities** - Mobile-first breakpoints
- **Animation utilities** - Custom animations via `tw-animate-css`
- **Component variants** - Class Variance Authority for component APIs

### Theme System

- System preference detection
- Manual theme toggle support
- CSS variables for dynamic theming
- Dark mode optimized components

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with plugin setup
- `tsconfig.json` - TypeScript compiler options
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - TailwindCSS customization
- `eslint.config.js` - Linting rules
- `prettier.config.js` - Code formatting rules

## 🚢 Deployment

The application is configured for deployment on Vercel:

- `vercel.json` contains platform-specific configuration
- Production builds are optimized for performance
- Environment variables can be configured in Vercel dashboard

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## 📚 Learn More

### Documentation

- [TanStack Router](https://tanstack.com/router) - Modern React routing
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Vite](https://vitejs.dev) - Build tooling

## 🤝 Contributing

Contributions are welcome! Please ensure:

- Code passes TypeScript type checking
- ESLint and Prettier checks pass
- Tests are written for new features
- Components follow the established patterns

## 📄 License

This project is intended for educational purposes and demonstrates modern React application architecture.

---

**Built with** ❤️ **using React, TanStack, and TypeScript**
