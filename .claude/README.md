# Vivoly Marketplace - Agent System Documentation

## Overview

This directory contains the configuration and documentation for the AI agent system managing the Vivoly Marketplace project.

## Agent System Architecture

The project uses a multi-agent system where specialized agents collaborate to deliver the complete solution:

```
┌─────────────────────────────────────────────────────────┐
│                   PROJECT_MANAGER                        │
│            (Coordination & Decision Making)              │
└─────────────────────┬───────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┬──────────────┐
        │             │             │              │
┌───────▼──────┐ ┌───▼────┐ ┌─────▼─────┐ ┌──────▼──────┐
│  ARCHITECT   │ │ DEVOPS │ │ QA_TESTER │ │ DATABASE_   │
│              │ │        │ │           │ │ ADMIN       │
└───────┬──────┘ └────────┘ └─────┬─────┘ └──────┬──────┘
        │                          │              │
   ┌────┴────┐                     │              │
   │         │                     │              │
┌──▼───┐ ┌──▼───┐            ┌────▼──────────────▼──┐
│ FE   │ │ BE   │            │   All Agents          │
│ DEV  │ │ DEV  │            │   (Testing Phase)     │
└──────┘ └──────┘            └───────────────────────┘
```

## Agents Description

### 1. PROJECT_MANAGER
**Priority:** 1 (Highest)
**Role:** Overall project coordination

**Responsibilities:**
- Coordinate all agents
- Track project progress
- Make strategic decisions
- Communicate with stakeholders
- Manage risks and blockers

**When to invoke:**
```
@PROJECT_MANAGER: Need decision on [topic]
Priority: High
Context: [Explanation]
```

### 2. ARCHITECT
**Priority:** 2
**Role:** Technical architecture and design

**Responsibilities:**
- System design and architecture
- Database schema design
- API contract definition
- Technology selection
- Security architecture

**When to invoke:**
```
@ARCHITECT: Design [component/system]
Requirements: [List requirements]
Constraints: [Technical constraints]
```

### 3. FRONTEND_DEV
**Priority:** 3
**Role:** Frontend implementation

**Tech Stack:**
- Next.js 15+ (App Router)
- React Server Components
- TypeScript
- Tailwind CSS + shadcn/ui

**When to invoke:**
```
@FRONTEND_DEV: Implement [feature/component]
Design: [Link or description]
API: [API endpoints needed]
```

### 4. BACKEND_DEV
**Priority:** 3
**Role:** Backend and API development

**Tech Stack:**
- Next.js API Routes
- Server Actions
- Supabase Integration
- TypeScript

**When to invoke:**
```
@BACKEND_DEV: Create API for [feature]
Endpoints: [List endpoints]
Database: [Tables involved]
```

### 5. DATABASE_ADMIN
**Priority:** 4
**Role:** Database management

**Tech Stack:**
- Supabase (PostgreSQL)
- SQL Migrations
- Row Level Security (RLS)

**When to invoke:**
```
@DATABASE_ADMIN: Create schema for [feature]
Tables: [List tables]
Relations: [Describe relationships]
```

### 6. DEVOPS
**Priority:** 4
**Role:** Infrastructure and deployment

**Tech Stack:**
- Render.com (Hosting)
- Cloudflare (DNS)
- GitHub Actions (CI/CD)

**When to invoke:**
```
@DEVOPS: Deploy [environment]
Changes: [What's being deployed]
Checklist: [Pre-deployment tasks]
```

### 7. QA_TESTER
**Priority:** 5
**Role:** Quality assurance

**Tech Stack:**
- Jest/Vitest (Unit tests)
- Playwright (E2E tests)
- Lighthouse (Performance)

**When to invoke:**
```
@QA_TESTER: Test [feature]
Scope: [What to test]
Priority: [High/Medium/Low]
```

## Usage Guide

### Starting a New Task

1. **Assessment Phase**
   ```
   @PROJECT_MANAGER: New requirement: [description]
   ```
   PM will analyze and delegate to appropriate agents.

2. **Design Phase**
   ```
   @ARCHITECT: Design system for [feature]
   ```
   Architect creates technical specification.

3. **Implementation Phase**
   ```
   @FRONTEND_DEV: Implement UI for [feature]
   @BACKEND_DEV: Create API for [feature]
   @DATABASE_ADMIN: Setup schema for [feature]
   ```
   Development agents work in parallel.

4. **Testing Phase**
   ```
   @QA_TESTER: Test [feature]
   ```
   QA validates implementation.

5. **Deployment Phase**
   ```
   @DEVOPS: Deploy to [environment]
   ```
   DevOps handles deployment.

### Status Updates

Agents should provide status updates in this format:

```
Agent: FRONTEND_DEV
Status: In Progress
Progress: 60%
Current Task: Implementing marketplace listing component
Blockers: None
ETA: Completion in current session
```

### Reporting Blockers

```
🚫 BLOCKER REPORT

Agent: BACKEND_DEV
Blocked By: Missing Supabase credentials
Impact: Cannot test authentication flow
Needs: @DEVOPS to provide environment variables
Priority: High
```

## Workflow Examples

### Example 1: New Feature Implementation

**Task:** Add service request form

```
1. @PROJECT_MANAGER: New feature - Service request form
   ↓
2. @ARCHITECT: Design form structure, API, and database schema
   ↓
3. @DATABASE_ADMIN: Create service_requests table with RLS
   ↓
4. @BACKEND_DEV: Implement API endpoint for form submission
   ↓
5. @FRONTEND_DEV: Create form component with validation
   ↓
6. @QA_TESTER: Test form validation and submission
   ↓
7. @DEVOPS: Deploy to staging for review
```

### Example 2: Bug Fix

**Task:** Fix authentication redirect issue

```
1. @QA_TESTER: Reports bug with authentication
   ↓
2. @PROJECT_MANAGER: Assess priority and assign
   ↓
3. @BACKEND_DEV: Investigate and fix auth logic
   ↓
4. @QA_TESTER: Verify fix
   ↓
5. @DEVOPS: Deploy hotfix
```

## Communication Protocol

### Task Assignment Format
```
@AGENT_NAME: [Clear task description]
Priority: [High/Medium/Low]
Dependencies: [Other tasks or agents]
Context: [Background information]
Expected Outcome: [What success looks like]
Deadline: [If applicable]
```

### Response Format
```
Agent: [AGENT_NAME]
Task: [Task reference]
Status: [Accepted/In Progress/Completed/Blocked]
Actions Taken: [What was done]
Results: [Outcomes]
Next Steps: [What's next]
```

## Agent Collaboration Matrix

| Agent | Collaborates With | Communication Type |
|-------|------------------|-------------------|
| PROJECT_MANAGER | All | Coordination, Decisions |
| ARCHITECT | FE_DEV, BE_DEV, DB_ADMIN | Technical Specs |
| FRONTEND_DEV | ARCHITECT, BE_DEV | API Integration |
| BACKEND_DEV | ARCHITECT, FE_DEV, DB_ADMIN | Data Flow |
| DATABASE_ADMIN | ARCHITECT, BE_DEV | Schema, Queries |
| DEVOPS | PROJECT_MANAGER, All | Infrastructure |
| QA_TESTER | FE_DEV, BE_DEV | Testing, Bugs |

## Best Practices

1. **Always tag the appropriate agent** using @AGENT_NAME
2. **Provide context** for every request
3. **Update status regularly** during long tasks
4. **Report blockers immediately** to PROJECT_MANAGER
5. **Document decisions** in CLAUDE.md
6. **Test before deployment** - no exceptions
7. **Follow the tech stack** defined in agents.json

## Quick Reference Commands

```bash
# View all agents
cat .claude/agents.json | jq '.agents | keys'

# View specific agent details
cat .claude/agents.json | jq '.agents.FRONTEND_DEV'

# View workflow phases
cat .claude/agents.json | jq '.workflow.phases'

# Check collaboration rules
cat .claude/agents.json | jq '.collaboration_rules'
```

## File Structure

```
.claude/
├── agents.json          # Agent configuration
├── README.md           # This file
├── tasks/              # Task tracking (future)
└── logs/               # Agent activity logs (future)
```

## Integration with CLAUDE.md

The main project file ([CLAUDE.md](../CLAUDE.md)) is the single source of truth. Agents should:
- Reference CLAUDE.md for project context
- Update CLAUDE.md with major decisions
- Follow the structure defined in CLAUDE.md
- Keep task assignments in sync

## Agent Activation

Agents are activated by direct invocation in the conversation:

```
@PROJECT_MANAGER: Review current sprint progress
```

The Claude Code system will route the request to the appropriate agent context.

## Future Enhancements

- [ ] Agent performance metrics
- [ ] Automated task assignment
- [ ] Agent learning from past tasks
- [ ] Inter-agent communication logs
- [ ] Agent workload balancing

---

**Last Updated:** 2026-01-03
**Version:** 1.0.0
**Maintained By:** PROJECT_MANAGER
