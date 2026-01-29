# AI Automate Solutions - Website

Marketing website for AI Automate Solutions — an automation consultancy that helps businesses scale output without scaling payroll.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for dev server and builds
- **Tailwind CSS** (CDN) for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v18+)

### Setup

1. Install dependencies:
   ```
   npm install
   ```

2. (Optional) Create a `.env.local` file and set your Gemini API key:
   ```
   GEMINI_API_KEY=your_key_here
   ```

3. Start the dev server:
   ```
   npm run dev
   ```

The site will be available at `http://localhost:3000`.

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview the production build       |

## Project Structure

```
├── components/       # React components (Navbar, Hero, CTA, Footer, etc.)
│   └── ui/           # Reusable UI primitives (Button, SpotlightCard)
├── App.tsx           # Root application component
├── index.tsx         # Entry point
├── index.html        # HTML shell
├── types.ts          # Shared TypeScript interfaces
├── vite.config.ts    # Vite configuration
└── package.json
```
