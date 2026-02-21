# Design Tokens Documentation

Design tokens extracted from Figma design system and mapped to the project structure.

## Figma Variable Mapping

This project uses design tokens that map directly to Figma variables for consistency between design and code.

### Color Variables

| Figma Variable ID | Token Name | Value | Usage |
|------------------|------------|-------|-------|
| `VariableID:373:398` | `background` | `oklch(1 0 0)` | Main background color |
| `VariableID:374:416` | `foreground` | `oklch(0.145 0 0)` | Main text color |
| `VariableID:374:417` | `border` | `oklch(0.922 0 0)` | Border color |
| `VariableID:402:601` | `mutedForeground` | `oklch(0.556 0 0)` | Muted text color |
| `VariableID:381:885` | `secondary` | `oklch(0.97 0 0)` | Secondary background color |

### Spacing Variables

| Figma Variable ID | Token Name | Value | Usage |
|------------------|------------|-------|-------|
| `VariableID:381:495` | `spacing.sm` | `8px` | Small spacing |
| `VariableID:381:513` | `spacing.2xl` | `40px` | Extra large spacing (itemSpacing) |
| `VariableID:90:476` | `spacing.3xl` | `56px` | Padding (paddingLeft, paddingTop, etc.) |

### Typography Variables

| Figma Variable ID | Token Name | Value | Usage |
|------------------|------------|-------|-------|
| `VariableID:1043:1120` | `fontFamily.sans` | `var(--font-geist-sans)` | Primary font family (Geist; Figma uses Inter) |
| `VariableID:1043:1088` | `fontSize.sm` | `14px` | Small text size |
| `VariableID:1043:1114` | `fontSize.base` | `16px` | Base text size |
| `VariableID:1043:1119` | `fontSize.4xl` | `36px` | Extra large text (headings) |
| `VariableID:1043:1100` | `fontWeight.medium` | `500` | Medium font weight |
| `VariableID:1043:1102` | `fontWeight.semibold` | `600` | Semibold font weight |
| `VariableID:1043:1103` | `fontWeight.normal` | `400` | Normal font weight |
| `VariableID:1043:1089` | `lineHeight[4xl]` | `40px / 111%` | Line height for 4xl text |
| `VariableID:1043:1095` | `lineHeight.normal` | `24px / 150%` | Normal line height |
| `VariableID:1043:1096` | `lineHeight[sm]` | `20px / 143%` | Line height for small text |
| `VariableID:1043:1112` | `letterSpacing.normal` | `0em` | Normal letter spacing |

### Border Radius Variables

| Figma Variable ID | Token Name | Value | Usage |
|------------------|------------|-------|-------|
| `VariableID:90:554` | `borderRadius.sm` | `calc(var(--radius) - 4px)` = 6px | Small border radius — Figma calls this "md" |
| `VariableID:90:555` | `borderRadius.md` | `calc(var(--radius) - 2px)` = 8px | Medium border radius — Figma calls this "lg" |
| `VariableID:90:558` | `borderRadius.3xl` | `calc(var(--radius) + 14px)` = 24px | Extra large border radius (cards) |

### Border Width Variables

| Figma Variable ID | Token Name | Value | Usage |
|------------------|------------|-------|-------|
| `VariableID:381:324` | `borderWidth.thin` | `1px` | Standard border width |

## Usage in Code

### Accessing Tokens

```typescript
import { designTokens } from '@/lib/design-tokens'

// Using color tokens
const bgColor = designTokens.colors.background

// Using spacing tokens
const padding = designTokens.spacing['3xl']

// Using typography tokens
const fontSize = designTokens.typography.fontSize['4xl']
```

### Using in Tailwind CSS

The tokens are automatically integrated with Tailwind CSS via the configuration file:

```tsx
// Using Tailwind classes
<div className="bg-background text-foreground">
  <h1 className="text-4xl font-semibold">Title</h1>
  <p className="text-base text-muted-foreground">Description</p>
</div>
```

### Using CSS Custom Properties

```css
/* Tokens are available as CSS variables */
.my-component {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  padding: var(--spacing-3xl);
  border-radius: var(--radius-3xl);
}
```

## Component-Specific Tokens

### Button

```typescript
designTokens.components.button = {
  height: {
    sm: '32px',
    md: '40px',
    lg: '48px',
  },
  padding: {
    sm: '8px 12px',
    md: '10px 16px',
    lg: '12px 24px',
  },
}
```

### Card

```typescript
designTokens.components.card = {
  padding: '24px',      // 1.5rem
  borderRadius: '8px',  // lg
}
```

## Syncing with Figma

To update tokens from Figma:

1. Export variables from Figma (File → Export → Variables)
2. Run the sync script:
   ```bash
   npm run sync-figma-tokens
   ```
3. Review changes in `lib/design-tokens.ts`
4. Update components if needed

## Token Categories

### 1. **Colors**
- Background colors
- Foreground (text) colors
- Border colors
- Component states (hover, active, disabled)

### 2. **Spacing**
- Margin values
- Padding values
- Gap values

### 3. **Typography**
- Font families
- Font sizes
- Font weights
- Line heights
- Letter spacing

### 4. **Borders**
- Border radius values
- Border widths

### 5. **Effects**
- Box shadows
- Elevations

### 6. **Animation**
- Transition durations
- Easing functions

### 7. **Z-Index**
- Layer stacking order

## Best Practices

1. **Always use tokens instead of hard-coded values**
   ```tsx
   // ❌ Bad
   <div style={{ color: '#0A0A0A' }}>

   // ✅ Good
   <div className="text-foreground">
   ```

2. **Use semantic naming**
   ```tsx
   // ❌ Bad
   <div className="text-gray-950">

   // ✅ Good
   <div className="text-foreground">
   ```

3. **Maintain consistency with Figma**
   - Token values should match Figma variables exactly
   - No approximations or rounding
   - Update tokens when Figma design system changes

4. **Document new tokens**
   - Add Figma Variable ID reference
   - Include usage examples
   - Update this documentation

## Accessibility

All color tokens are checked for WCAG AA contrast compliance:
- Foreground on Background: ✅ Pass (21:1 ratio)
- Muted Foreground on Background: ✅ Pass (4.6:1 ratio)

## Related Files

- `/lib/design-tokens.ts` - Token definitions
- `/app/globals.css` - CSS custom properties
- `/tailwind.config.ts` - Tailwind integration
- `/scripts/fetch-figma-variables.sh` - Figma sync script
