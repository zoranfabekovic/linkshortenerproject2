# shadcn/ui Components — Standards

All UI components in this project **must** use shadcn/ui. Do not create custom components.

## Non-Negotiable Rules

1. **Always use shadcn/ui.** Every UI element must be sourced from shadcn/ui. No exceptions.
2. **Never create custom components.** If a component is not in shadcn/ui, use the closest available component and customize via props and Tailwind CSS.
3. **Import from `@/components/ui`.** All shadcn/ui components are installed in this directory.

## Workflow

1. Check the [shadcn/ui component library](https://ui.shadcn.com) for the component you need.
2. If it's not installed, install it: `npx shadcn-ui@latest add <component-name>`
3. Import and use: `import { Button } from "@/components/ui/button"`
4. Customize via **props** and **Tailwind CSS classes** only — never modify component source files.

## No Custom Styling Components

Do not create files like:
- `components/Button.tsx`
- `components/Card.tsx`
- `components/Modal.tsx`

If shadcn/ui doesn't have an exact match, use composition with existing shadcn/ui components and Tailwind utilities.

