# Customer Spending Insights Dashboard

A responsive financial analytics dashboard built for Capitec Bank, displaying customer spending data with interactive filtering, charts, and transaction management.

---

## Overview

This project was built as part of a frontend engineering assessment. It simulates a real-world banking dashboard where customers can view their spending patterns, track budget goals, and analyse transactions across different time periods and categories.

All data is mocked to simulate API responses from a real backend.

---

## Tech Stack

| Technology                   | Why                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **React + Vite**             | Fast development setup, HMR, optimised production builds                                                                      |
| **TypeScript**               | Type safety across components, hooks, and data layers                                                                         |
| **Tailwind CSS**             | Utility-first styling with Capitec brand tokens configured as custom theme values                                             |
| **Recharts**                 | Built specifically for React - declarative API composes naturally with the component tree without imperative DOM manipulation |
| **React Router**             | Client-side navigation between Dashboard, Transactions, and Goals pages                                                       |
| **Lucide React**             | Consistent icon system with dynamic lookup by string name                                                                     |
| **Vitest + Testing Library** | Fast unit tests that integrate naturally with Vite                                                                            |
| **nginx**                    | Lightweight static file server for production container                                                                       |
| **Docker / Podman**          | Two-stage build - Node to compile, nginx to serve. ~25MB final image                                                          |

---

## Features

- **Spending Summary** - Total spent, transaction count, top category, average transaction - all updating dynamically with active filters
- **Spending by Category** - Bar chart showing breakdown across 6 categories, responds to period and category filters
- **Monthly Trends** - Line chart showing spending over 6 months
- **Transaction List** - Paginated table with sorting by date and amount, filtering by period and category
- **Budget Goals** - Progress bars showing on-track, at-risk, and exceeded budget targets
- **Filter Bar** - Period presets (7d, 30d, 90d, 1y) and category filters shared across Dashboard and Transactions pages
- **Responsive Layout** - Collapsible sidebar, mobile-friendly navigation
- **Loading States** - Simulated async data fetching with loading indicators

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- [Docker](https://www.docker.com/) or [Podman](https://podman.io/) (for container setup)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd customer-spending-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## Running with Docker / Podman

The project uses a two-stage Docker build:

- **Stage 1 (builder):** Installs Node.js, builds the React app
- **Stage 2 (nginx):** Serves only the compiled static files (~25MB final image)

```bash
# Build the image
docker build -t capitec-dashboard .

# Run the container
docker run -p 8080:80 capitec-dashboard
```

Or with Podman:

```bash
podman build -t capitec-dashboard .
podman run -p 8080:80 capitec-dashboard
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Running Tests

```bash
# Run all tests
npm test
```

Current test coverage:

- `generateTransactions` - verifies correct count, required fields, unique IDs, and valid amounts
- `FilterBar` - verifies all filter options render, period and category callbacks fire correctly on user interaction

---

## Project Structure

```plaintext
📁 src
├── 📄 App.tsx
├── 📄 main.tsx
├── 📄 index.css
├── 📁 assets
├── 📁 components
│   ├── 📁 Dashboard
│   │   ├── 📄 Dashboard.tsx        # Main dashboard page
│   │   ├── 📄 FilterBar.tsx        # Period + category filter buttons
│   │   ├── 📄 SpendingChart.tsx    # Bar chart - spending by category
│   │   ├── 📄 SummaryCards.tsx     # Total spent, transactions, top category
│   │   ├── 📄 TransactionList.tsx  # Recent transactions on dashboard
│   │   └── 📄 TrendsChart.tsx      # Line chart - monthly trends
│   ├── 📁 Goals
│   │   └── 📄 Goals.tsx            # Budget goals with progress bars
│   ├── 📁 Layout
│   │   ├── 📄 Layout.tsx           # Main layout wrapper
│   │   ├── 📄 Sidebar.tsx          # Collapsible navigation sidebar
│   │   └── 📄 index.ts             # Exports
│   └── 📁 Transactions
│       └── 📄 Transactions.tsx     # Full transactions table with sort + pagination
├── 📁 data                         # Mock data (simulates API responses)
│   ├── 📄 categories.ts
│   ├── 📄 customer.ts
│   ├── 📄 goals.ts
│   ├── 📄 spendingSummary.ts
│   ├── 📄 transactions.ts
│   ├── 📄 trends.ts
│   └── 📄 index.ts                 # Central export point
├── 📁 hooks
│   ├── 📄 useDashboard.ts          # Data, filtering, and state for dashboard
│   └── 📄 useGoals.ts              # Goals data
├── 📁 test
│   ├── 📄 FilterBar.test.tsx
│   ├── 📄 transactionsGenerator.test.ts
│   └── 📄 setup.ts
├── 📁 types                        # TypeScript interfaces and union types
│   ├── 📄 category.ts
│   ├── 📄 customer.ts
│   ├── 📄 goal.ts
│   ├── 📄 pagination.ts
│   ├── 📄 period.ts
│   ├── 📄 spendingSummary.ts
│   ├── 📄 transaction.ts
│   ├── 📄 trend.ts
│   └── 📄 index.ts                 # Central export point
└── 📁 utils
    ├── 📄 getIcons.tsx              # Dynamic Lucide icon lookup by string name
    └── 📄 transactionsGenerator.ts # Generates realistic mock transaction data
```

**Mental model - data flows top to bottom:**

```
types/      → defines the shape of data
data/       → mock data matching those shapes
utils/      → pure functions (generate data, resolve icons)
hooks/      → React logic that manages state and filtering
components/ → UI components that receive props and render
```

---

## Design Decisions

**Custom hooks for data separation**
All data logic lives in `useDashboard` and `useGoals`. Components only receive props and render - they don't know where data comes from. If the data source changes (mock → real API), only the hook changes.

**Lifted state over global state**
Filters (period, category) are owned by each page and passed down as props. Since all components that need filter state share a common parent, global state (Redux/Zustand) would be overkill. Lifted state is simpler, has fewer dependencies, and is easier to explain.

**Dynamic summary and chart data**
`spendingSummary` and category data are calculated dynamically from `filteredTransactions` inside `useDashboard`. This means summary cards and charts always reflect the active filters rather than showing stale static data.

**Recharts over Chart.js**
Recharts was chosen because it's built for React. Components like `<BarChart>` and `<LineChart>` are declarative and compose naturally with the existing component tree. Chart.js requires imperative DOM manipulation via `useEffect` which feels unnatural in a React codebase.

**Two-stage Docker build**
After `npm run build`, the app is just static HTML, CSS, and JavaScript. There's no reason to ship Node.js in the production container. nginx serves static files efficiently at ~25MB vs ~1GB for a Node-based image.

**Tailwind with custom brand tokens**
Capitec brand colours, typography, border radius, and shadows are configured as Tailwind theme extensions. This means `bg-capitec-blue` works the same as `bg-blue-500` - consistent, type-safe, and easy to update globally.

---

## Known Limitations

- **Static trends data** - Monthly trends chart uses static mock data and does not respond to period or category filters
- **Static categories import** - `data/categories.ts` exists for reference but the chart now uses dynamically calculated category data from filtered transactions
- **No real API integration** - All data is mocked. A real implementation would replace the `useDashboard` hook internals with API calls (React Query recommended)
- **No authentication** - Customer profile is hardcoded. A real app would have a login flow
- **Bundle size warning** - Recharts adds ~500KB to the bundle. Code splitting with dynamic imports would reduce initial load time
- **Recharts Cell deprecation** - `Cell` component from Recharts shows a deprecation warning. Will need to migrate to the new API when upgrading Recharts
- **Logo SVG** - The Capitec logo SVG has hardcoded large dimensions that prevent CSS scaling in some contexts

---

## If I Had More Time

- - Replace mock data with real API calls using **TanStack Query**
- Add error boundaries for graceful failure handling
- Add `useMemo` to expensive filter/sort calculations to prevent unnecessary recalculations
- Improve test coverage (hook tests, integration tests)
- Add accessibility audit (ARIA labels, keyboard navigation)
- Code split Recharts to reduce bundle size
