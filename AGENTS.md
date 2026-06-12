# AGENTS.md

## Project Development Standards

This document defines the coding standards, architecture decisions, and best practices that all AI agents and developers must follow when working on this Next.js project.

---

# Core Tech Stack

* Next.js (Latest App Router)
* TypeScript
* Tailwind CSS v4
* PostCSS
* GSAP / Framer Motion for animations
* Server Components by default
* SEO-first development approach

---

# Project Structure

## App Directory Architecture

Use the Next.js App Router structure.

```bash
app/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── about/
├── services/
├── contact/
├── blog/
├── layout.tsx
├── page.tsx
└── globals.css
```

### Rules

* All reusable components must be created inside `app/components`.
* Keep pages focused on composition only.
* Move reusable UI into components.
* Keep business logic separate from presentation.
* Use utility functions for repeated logic.
* Avoid duplicate code.
* Follow a scalable folder structure.

---

# Component Development

## Reusability First

Before creating a new component, check whether an existing component can be reused.

Examples:

* Button
* Card
* Section Heading
* CTA Banner
* Modal
* Form Input
* Testimonial Card
* Service Card

If the same UI appears more than once, convert it into a reusable component.

---

# Styling Standards

## Tailwind CSS v4

Use Tailwind CSS for all styling.

Preferred:

```tsx
<div className="mt-8 rounded-xl p-6">
```

Avoid:

```tsx
<div style={{ marginTop: "32px" }}>
```

### Rules

* Use Tailwind utility classes.
* Avoid inline styles unless absolutely necessary.
* Keep styling consistent.
* Use responsive utilities.
* Keep class names readable.

---

# Global Typography System

Define typography globally inside `app/globals.css`.

Example:

```css
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
}

p {
  line-height: 1.7;
}
```

### Rules

* Define global heading styles once.
* Avoid redefining typography repeatedly.
* Maintain a consistent design system.
* Ensure proper heading hierarchy.

---

# Design Tokens & Colors

## Use CSS Variables

Store all project-wide design tokens inside `globals.css`.

Example:

```css
:root {
  --color-primary: #0f172a;
  --color-secondary: #14b8a6;
  --color-accent: #f97316;

  --background: #ffffff;
  --foreground: #171717;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
}
```

### Rules

* Use CSS variables for colors.
* Use CSS variables for spacing and radii when needed.
* Avoid hardcoded colors throughout the codebase.
* Support dark mode using variables.
* Follow Tailwind CSS v4 conventions.

Example:

```css
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

---

# TypeScript Standards

## Strict Typing

Never use:

```ts
any
```

Always create proper interfaces and types.

Example:

```ts
interface Service {
  id: number;
  title: string;
  description: string;
}
```

### Rules

* Prefer interfaces for object structures.
* Avoid unnecessary type assertions.
* Ensure type safety throughout the application.

---

# Server Components First

Use Server Components by default.

Only use Client Components when necessary.

Required for:

* useState
* useEffect
* Browser APIs
* Event handlers
* Animations

Example:

```tsx
"use client";
```

Do not add `"use client"` unless it is actually needed.

---

# Data Fetching

Prefer server-side data fetching.

Example:

```tsx
export default async function Page() {
  const data = await getData();

  return <Component data={data} />;
}
```

### Rules

* Fetch data on the server whenever possible.
* Minimize client-side requests.
* Cache appropriately.
* Optimize API calls.

---

# SEO Standards

SEO is mandatory.

Every page must include metadata.

Example:

```tsx
export const metadata = {
  title: "Page Title",
  description: "Page Description",
};
```

## Requirements

* Unique title
* Unique meta description
* Canonical URLs
* Open Graph tags
* Twitter Card tags
* Structured data where applicable
* Sitemap support
* Robots configuration

---

# Performance Optimization

## Images

Always use:

```tsx
import Image from "next/image";
```

Rules:

* Set width and height.
* Optimize image sizes.
* Use modern formats.
* Lazy load when appropriate.
* Avoid oversized assets.

---

## Fonts

Use:

```tsx
import { Inter } from "next/font/google";
```

Rules:

* Use `next/font`.
* Avoid external font CDNs.
* Optimize loading strategy.

---

# Animation Standards

Preferred Libraries:

1. GSAP
2. Framer Motion

### Rules

* Use animations to enhance UX.
* Avoid excessive motion.
* Avoid layout shifts.
* Keep animations smooth and performant.
* Respect reduced-motion preferences.

---

# Accessibility Standards

Every component must:

* Use semantic HTML.
* Include image alt text.
* Support keyboard navigation.
* Have visible focus states.
* Follow WCAG standards.
* Maintain proper heading hierarchy.
* Ensure sufficient color contrast.

---

# Code Quality

## Clean Code Rules

* Keep components small.
* Single responsibility principle.
* Remove dead code.
* Remove unused imports.
* Avoid deeply nested logic.
* Keep files maintainable.
* Use meaningful naming conventions.

---

# Naming Conventions

## Components

```tsx
HeroSection.tsx
ServiceCard.tsx
ContactForm.tsx
```

## Hooks

```tsx
useScrollAnimation.ts
useFormValidation.ts
```

## Utilities

```tsx
formatDate.ts
generateSlug.ts
```

---

# Responsive Development

Mobile-first development is mandatory.

Test all pages on:

* Mobile
* Tablet
* Laptop
* Desktop
* Large Desktop

### Rules

* Never assume desktop-first layouts.
* Verify responsiveness before completion.

---

# Forms & Validation

Preferred:

* React Hook Form
* Zod

Rules:

* Validate all inputs.
* Display user-friendly error messages.
* Sanitize user data.
* Prevent invalid submissions.

---

# Environment Variables

Store secrets only inside:

```bash
.env.local
```

Never expose:

* API Keys
* Tokens
* Credentials
* Database URLs

Never commit secrets to Git.

---

# Error Handling

Handle:

* Loading states
* Error states
* Empty states
* API failures
* Missing data

Users should never encounter a blank screen.

---

# Security Standards

* Validate all inputs.
* Sanitize form submissions.
* Never expose secrets to the client.
* Use secure authentication patterns.
* Follow OWASP best practices.
* Protect APIs where necessary.

---

# Git Standards

## Commit Messages

Use meaningful commits.

Examples:

```bash
feat: add hero section
fix: resolve mobile navigation issue
refactor: optimize service card component
```

Avoid:

```bash
update
changes
fixed stuff
```

---

# Production Checklist

Before deployment:

* No TypeScript errors
* No ESLint errors
* No console.log statements
* Metadata completed
* Images optimized
* Responsive testing completed
* Accessibility checked
* SEO verified
* Build passes successfully
* Lighthouse score reviewed

---

# Agent Instructions

When generating code:

1. Follow Next.js App Router best practices.
2. Use TypeScript.
3. Use Tailwind CSS v4.
4. Store reusable components inside `app/components`.
5. Define typography and design tokens globally in `globals.css`.
6. Prefer Server Components.
7. Prioritize SEO.
8. Prioritize accessibility.
9. Prioritize performance.
10. Write scalable and maintainable code.
11. Reuse components whenever possible.
12. Avoid unnecessary dependencies.
13. Generate production-ready code only.
14. Keep code clean, organized, and well-commented when necessary.

The final output should always be performant, responsive, SEO-friendly, accessible, scalable, and production-ready.
