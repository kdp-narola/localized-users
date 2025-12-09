# Next.js Localization Demo with User Management
 
A beautiful Next.js application demonstrating internationalization (i18n) with English and French language support, featuring a complete user management interface with search and pagination.
 
## Features
 
### Core Features
- **Multi-language Support**: Seamless switching between English (EN) and French (FR)
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and responsive design
- **Next.js 16**: Built with the latest Next.js App Router
- **SEO-Friendly**: Locale-based routing with proper metadata
- **Tailwind CSS**: Styled with Tailwind CSS for a premium look
 
### User Management Features
- **Users Listing**: Complete user listing from JSONPlaceholder API
- **Client-Side Search**: Real-time search by name or email
- **Client-Side Pagination**: Smooth pagination with 5 users per page
- **Responsive Design**: Beautiful table view on desktop, card view on mobile
- **State Management**: Powered by Zustand for efficient state handling
- **Fast & Efficient**: Optimized rendering with React useMemo
 
## Tech Stack
 
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Internationalization**: next-intl
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
 
## Project Structure
 
```
localized-users/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Layout with i18n provider
│   │   ├── page.tsx        # Home page
│   │   └── users/
│   │       └── page.tsx    # Users listing page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Error.tsx          # Handle Error State
│   ├── Loading.tsx          # Show loader
│   ├── Pagination.tsx          # Manage pagination
│   ├── SearchBox.tsx          # Manage searching
│   ├── UsersCard.tsx          # Represent user card design
│   ├── UsersTable.tsx          # Represent user listing design
│   ├── Header.tsx          # Header with navigation
│   └── LanguageSwitcher.tsx # Language switcher buttons
├── i18n/
│   ├── request.ts          # i18n request configuration
│   └── routing.ts          # Routing configuration
├── store/
│   └── useUsersStore.ts    # Zustand store for users
├── types/
│   ├── intl.d.ts          # TypeScript definitions for i18n
│   └── user.ts            # User type definitions
├── middleware.ts           # Middleware for locale detection
├── messages/
│   ├── en.json                 # English translations
│   └── fr.json                 # French translations
├── next.config.ts              # Next.js configuration with i18n plugin
└── package.json
```
 
## Getting Started
 
### Prerequisites
 
- Node.js 18+ installed
- npm or yarn package manager
 
### Installation
 
The dependencies are already installed. If you need to reinstall:
 
```bash
npm install
```
 
### Running the Development Server
 
The server is already running on port 3000. You can access it at:
 
- **Local**: http://localhost:3000
 
If you need to start it manually:
 
```bash
npm run dev
```
 
### Building for Production
 
```bash
npm run build
npm start
```
 
## How to Use
 
### Language Switching
1. **Open the application** in your browser at http://localhost:3000
2. **Default Language**: The app will redirect to `/en` (English) by default
3. **Switch Languages**: Use the language buttons in the header:
   - Click **EN** for English
   - Click **FR** for French
4. **URL Structure**:
   - English: http://localhost:3000/en
   - French: http://localhost:3000/fr
 
### Users Directory
1. **Navigate to Users**: Click "Users" in the header or the "View Users List" button on the home page
2. **Search Users**: Type in the search box to filter users by name or email
3. **Pagination**: Use the Previous/Next buttons or page numbers to navigate through users
4. **View Details**: See user information including name, username, email, phone, company, and city
 
## Features Showcase
 
### Users Page
- **Search Bar**: Real-time filtering by name or email
- **Responsive Table**:
  - Desktop: Full table with all columns
  - Mobile: Card-based layout for better readability
- **Pagination Controls**:
  - Shows current range (e.g., "Showing 1 to 5 of 10 users")
  - Page number buttons
  - Previous/Next navigation
- **Loading State**: Animated spinner while fetching data
- **Error Handling**: User-friendly error messages with retry option
- **Empty State**: Helpful message when no results found
 
### Header Component
- **Language Switcher**: Visual feedback for active language
 
## Localization Implementation
 
### Supported Languages
- **English (en)**: Default language
- **French (fr)**: Full translation support