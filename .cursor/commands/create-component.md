_Trigger: "create component [Name]" + design reference (image, Figma link, or description)_

### Step 0: Check for existing components first

Before creating anything, search `src/components/custom/` for a component that covers similar functionality.

If a similar component exists:

Stop and tell the user:

"A similar component [ComponentName] already exists at src/components/custom/[ComponentName]/index.tsx.

Instead of creating a new component, I suggest adding a [propName] prop to extend it.

Want me to do that instead, or create a new component?"

Wait for confirmation before proceeding.

### Step 1: Analyze the design

- Identify all UI elements (buttons, inputs, text, icons, images)
- Map each element to a Shadcn component where possible
- Note what requires custom styling vs. what Shadcn covers out of the box
- Check `design.md` for relevant tokens before writing any styles

### Step 2: Create the component file

Location: `src/components/custom/[ComponentName]/index.tsx`

### Step 3: Component structure

```tsx
/**
 * [ComponentName]
 * Purpose: [What this component does]
 * Design reference: [Figma / screenshot / description]
 */

// Shadcn components first
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Phosphor icons
import { IconName } from "@phosphor-icons/react"

// Types
interface [ComponentName]Props {
  // Define all props with inline comments
}

export function [ComponentName]({ ...props }: [ComponentName]Props) {
  return (
    // Use Shadcn as building blocks
    // Apply Tailwind for layout
    // Use CSS variables from index.css for all tokens — no hardcoded values
  )
}
```

### Step 4: Asset handling

If the design includes images, ask the user to place them in `public/assets/images/` and provide the correct import path.

### Step 5: Token check

Before finishing, verify:

- No hardcoded hex colors anywhere
- No hardcoded border-radius values — use CSS variables
- No hardcoded font sizes outside of Tailwind utility classes
- If a new token is needed, add it to `src/styles/index.css` first

### Step 6: Explain

After creating the component, briefly summarise:

- Which Shadcn components were used and why
- Any custom styling decisions and what token they reference
- How to import and use the component
- Any props the user should know about
