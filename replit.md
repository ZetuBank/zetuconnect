# Overview

This is a modern React-based internet service provider website for "Zetu", built with a full-stack TypeScript architecture. The application serves as a marketing and customer portal for an ISP offering affordable high-speed internet in Kenya (5MBps for KES 1,000/month). The frontend features a responsive design with theme customization capabilities, while the backend provides a foundation for user management and API services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite for build tooling
- **UI Components**: Comprehensive component library based on Radix UI primitives and shadcn/ui
- **Styling**: Tailwind CSS with CSS variables for theming, supporting light/dark modes and multiple color themes
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management, React Context for theme preferences
- **Theme System**: Custom theme provider supporting multiple fonts (Inter, Roboto, Poppins, etc.), color schemes (ocean, sunset, forest, purple), and font sizes

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be swapped for database implementations
- **API Structure**: RESTful API foundation with `/api` prefix routing

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Type-safe database schema definitions with Zod validation
- **Current Implementation**: In-memory storage for development, with PostgreSQL configuration ready for production
- **Migration Support**: Drizzle-kit for database migrations and schema management

## Component Architecture
- **Design System**: Comprehensive UI component library with consistent styling
- **Layout Components**: Header with contact actions, hero section, service features, contact info, payment portal
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Accessibility**: ARIA labels and semantic HTML throughout

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library for consistent iconography

### Data and State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation for form inputs and API responses

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connections

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

### Third-Party Integrations
- **Chatra**: Live chat widget for customer support
- **External Payment Portal**: Embedded iframe for subscription management (tinyurl.com/Zetu-internet)
- **Google Fonts**: Web font loading for typography options
- **Communication**: Direct integration with phone (tel:) and WhatsApp links

### Production Considerations
- **Session Management**: PostgreSQL session store configured (connect-pg-simple)
- **Security**: CORS and security headers configuration ready
- **Build Process**: Separate client and server build pipelines with static asset serving