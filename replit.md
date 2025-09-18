# Overview

This is a professional portfolio website for a Roblox developer named Snipahh, built with a modern full-stack architecture. The site showcases the developer's skills, projects, and services in Roblox game development, featuring a sleek dark theme with gradient accents and glassmorphic design elements. The application is structured as a monorepo with separate client and server directories, utilizing modern web technologies for both frontend and backend development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in a single-page application (SPA) architecture
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: Radix UI primitives with shadcn/ui component system for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark theme with purple/blue gradient accents
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development Setup**: Hot module replacement (HMR) with Vite integration for seamless development experience

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Schema**: Centralized schema definition in `/shared/schema.ts` with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Content Management
- **Configuration**: JSON-based content management system stored in `/public/config.json`
- **Dynamic Content**: Developer information, projects, services, and skills are configurable without code changes
- **Asset Management**: Static assets served from public directory with Vite asset handling

## Authentication & Security
- **Session Storage**: PostgreSQL-backed session management
- **CSRF Protection**: Built-in Express security middleware
- **Environment Variables**: Secure configuration management for database credentials and API keys

## Development Workflow
- **Type Safety**: Full-stack TypeScript with shared types between client and server
- **Code Quality**: ESLint and TypeScript compiler checks
- **Hot Reloading**: Vite HMR for instant feedback during development
- **Path Aliases**: Configured import aliases for clean, maintainable code structure

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Connection Management**: @neondatabase/serverless driver for optimized serverless connections

## UI and Component Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Lucide React**: Modern icon library for consistent iconography
- **React Icons**: Additional icon sets including brand icons (Discord, Roblox, GitHub)
- **Embla Carousel**: Touch-friendly carousel component for project showcases

## Development Tools
- **Replit Integration**: Development environment plugins for seamless Replit deployment
- **Vite Plugins**: Runtime error overlay, cartographer, and dev banner for enhanced development experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Form and Data Management  
- **React Hook Form**: Performant forms with validation
- **Hookform Resolvers**: Zod integration for form validation
- **Date-fns**: Modern date utility library for timestamp handling

## Styling and Animation
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Class Variance Authority**: Component variant management for consistent styling
- **CLSX & Tailwind Merge**: Conditional class name utilities for dynamic styling