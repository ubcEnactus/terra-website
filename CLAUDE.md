@AGENTS.md

# Project Guidelines

## Project

This is a Next.js website built with:

* React
* TypeScript
* Tailwind CSS

The existing desktop/laptop design is considered the source of truth. Changes should preserve the current visual design and functionality unless a change is necessary for responsive behavior.

## Development Principles

### Inspect Before Editing

* Understand the existing project structure and component architecture before making changes.
* Reuse existing components, styles, design tokens, and patterns whenever possible.
* Do not rewrite components or files unnecessarily.
* Do not introduce new dependencies unless there is a clear technical need.
* Do not make speculative changes.

### Responsive Design

* Mobile responsiveness is a priority for this task.
* Use Tailwind's responsive utilities and the existing design system.
* Prefer responsive CSS/layout changes over JavaScript-based viewport detection.
* Avoid fixed widths that can cause horizontal scrolling on small screens.
* Ensure text, images, buttons, navigation, forms, and spacing adapt appropriately to smaller screens.
* Preserve the existing desktop appearance while improving mobile behavior.

### Code Quality

* Follow the existing coding style and naming conventions.
* Keep components modular and maintainable.
* Use TypeScript appropriately and avoid unnecessary `any` types.
* Do not duplicate existing components or functionality.
* Keep changes minimal and focused on the requested task.

### Validation

After making changes:

* Check for TypeScript errors.
* Check for obvious Tailwind/className issues.
* Verify that layouts do not introduce horizontal overflow.
* Consider common mobile widths, especially approximately 320px, 375px, 390px, and 430px.
* Ensure desktop behavior remains intact.

### Scope

For a focused audit, only inspect and modify files that are relevant to the requested task. Do not make unrelated changes elsewhere in the repository.