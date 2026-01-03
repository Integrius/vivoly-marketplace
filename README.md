# Vivoly Marketplace

AI Services Marketplace Platform - Showcase and deliver AI-based solutions

[![Project Status](https://img.shields.io/badge/status-in_development-yellow)]()
[![Next.js](https://img.shields.io/badge/Next.js-15+-black)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)]()
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)]()

## 🎯 Project Overview

Vivoly is a marketplace platform designed to showcase and deliver AI-based services, with focus on:

- **SaaS Creation & Development** - Building scalable AI-powered software solutions
- **Custom AI Solutions** - Evaluating and implementing tailored AI services
- **Service Showcase** - Professional presentation of AI capabilities and offerings

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **State:** React Server Components + Client State Management

### Backend
- **API:** Next.js API Routes + Server Actions
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Real-time:** Supabase Realtime

### Infrastructure
- **Hosting:** Render.com
- **DNS:** Cloudflare
- **Domain:** vivoly.com.br
- **Version Control:** GitHub

## 📁 Project Structure

```
vivoly-marketplace/
├── .claude/              # Agent system configuration
├── src/                  # Source code (to be created)
│   ├── app/             # Next.js App Router
│   ├── components/      # React components
│   ├── lib/             # Utilities and helpers
│   └── types/           # TypeScript definitions
├── supabase/            # Database migrations
├── docs/                # Documentation
├── CLAUDE.md            # Project management file
└── README.md            # This file
```

## 🤖 Agent System

This project is managed by a multi-agent AI system. See [.claude/README.md](.claude/README.md) for details.

**Active Agents:**
- PROJECT_MANAGER - Overall coordination
- ARCHITECT - Technical design
- FRONTEND_DEV - Frontend implementation
- BACKEND_DEV - Backend & API
- DATABASE_ADMIN - Database management
- DEVOPS - Infrastructure & deployment
- QA_TESTER - Quality assurance

## 📋 Development Status

**Current Phase:** Foundation Setup
**Progress:** 15%

### Completed
- [x] Project structure planning
- [x] Agent system configuration
- [x] Initial documentation

### In Progress
- [ ] Next.js project setup
- [ ] Supabase configuration
- [ ] GitHub repository setup

### Upcoming
- [ ] Database schema implementation
- [ ] Authentication setup
- [ ] Core marketplace features

See [CLAUDE.md](CLAUDE.md) for detailed project tracking.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm
- Supabase account
- Render.com account (for deployment)

### Installation

```bash
# Clone the repository (to be created)
git clone https://github.com/your-org/vivoly-marketplace.git

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🌐 Deployment

The application is configured for deployment on Render.com with Cloudflare DNS.

### Environment Variables Required

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_URL=https://vivoly.com.br
```

## 📚 Documentation

- [Agent System Documentation](.claude/README.md)
- [Project Management](CLAUDE.md)
- [Architecture](docs/architecture/) - Coming soon
- [API Documentation](docs/api/) - Coming soon
- [Deployment Guide](docs/deployment/) - Coming soon

## 🤝 Contributing

This project is managed by an AI agent system. For collaboration:

1. Review [CLAUDE.md](CLAUDE.md) for current tasks
2. Check agent assignments in [.claude/agents.json](.claude/agents.json)
3. Follow the communication protocol in [.claude/README.md](.claude/README.md)

## 📄 License

[To be defined]

## 🔗 Links

- **Website:** https://vivoly.com.br (coming soon)
- **Repository:** [To be created]
- **Documentation:** [docs/](docs/)

## 📞 Contact

For inquiries about AI services and solutions, visit vivoly.com.br

---

**Powered by AI Agent System** | **Built with Next.js** | **Managed by Claude**

Last Updated: 2026-01-03
