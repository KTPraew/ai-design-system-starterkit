/**
 * Figma Variable Mapping
 *
 * This file documents the mapping between Figma Variable IDs and our design tokens.
 * Use this as a reference when syncing with Figma design system.
 *
 * Figma File: https://www.figma.com/design/eWPGtcV2Tr2NSYRm480O3u/
 */

export const figmaVariableMapping = {
  // ============================================================================
  // COLORS
  // ============================================================================
  colors: {
    // Background & Foreground
    'VariableID:373:398': {
      token: 'background',
      value: 'hsl(0 0% 100%)',
      cssVar: '--background',
      description: 'Main background color (white)',
    },
    'VariableID:374:416': {
      token: 'foreground',
      value: 'hsl(0 0% 3.9%)', // rgb(0.039, 0.039, 0.039) = #0A0A0A
      cssVar: '--foreground',
      description: 'Main text color (near black)',
    },
    'VariableID:374:417': {
      token: 'border',
      value: 'hsl(0 0% 89.8%)', // rgb(0.898, 0.898, 0.898) = #E5E5E5
      cssVar: '--border',
      description: 'Border color (light gray)',
    },
    'VariableID:402:601': {
      token: 'mutedForeground',
      value: 'hsl(0 0% 45.1%)', // rgb(0.451, 0.451, 0.451) = #737373
      cssVar: '--muted-foreground',
      description: 'Muted text color (medium gray)',
    },
    'VariableID:381:885': {
      token: 'secondary',
      value: 'hsl(0 0% 96.1%)', // rgb(0.961, 0.961, 0.961) = #F5F5F5
      cssVar: '--secondary',
      description: 'Secondary background color',
    },
  },

  // ============================================================================
  // SPACING
  // ============================================================================
  spacing: {
    'VariableID:381:495': {
      token: 'spacing.sm',
      value: '8px',
      cssVar: '--spacing-sm',
      description: 'Small spacing (itemSpacing in small contexts)',
    },
    'VariableID:381:513': {
      token: 'spacing.2xl',
      value: '40px',
      cssVar: '--spacing-2xl',
      description: 'Extra large spacing (itemSpacing in large contexts)',
    },
    'VariableID:381:520': {
      token: 'spacing.md',
      value: '16px',
      cssVar: '--spacing-md',
      description: 'Medium spacing',
    },
    'VariableID:381:575': {
      token: 'spacing.xs',
      value: '4px',
      cssVar: '--spacing-xs',
      description: 'Extra small spacing',
    },
    'VariableID:90:476': {
      token: 'spacing.3xl',
      value: '56px',
      cssVar: '--spacing-3xl',
      description: 'Padding for large containers (paddingLeft, paddingTop, etc.)',
    },
    'VariableID:90:408': {
      token: 'spacing.lg',
      value: '24px',
      cssVar: '--spacing-lg',
      description: 'Large spacing',
    },
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  typography: {
    // Font Family
    'VariableID:1043:1120': {
      token: 'fontFamily.sans',
      value: '"Inter", system-ui, sans-serif',
      cssVar: '--font-sans',
      description: 'Primary font family',
    },

    // Font Sizes
    'VariableID:1043:1088': {
      token: 'fontSize.sm',
      value: '14px',
      cssVar: '--font-size-sm',
      description: 'Small text size',
    },
    'VariableID:1043:1114': {
      token: 'fontSize.base',
      value: '16px',
      cssVar: '--font-size-base',
      description: 'Base text size',
    },
    'VariableID:1043:1119': {
      token: 'fontSize.4xl',
      value: '36px',
      cssVar: '--font-size-4xl',
      description: 'Extra large text (page titles)',
    },

    // Font Weights
    'VariableID:1043:1100': {
      token: 'fontWeight.medium',
      value: '500',
      cssVar: '--font-weight-medium',
      description: 'Medium font weight',
    },
    'VariableID:1043:1102': {
      token: 'fontWeight.semibold',
      value: '600',
      cssVar: '--font-weight-semibold',
      description: 'Semibold font weight',
    },
    'VariableID:1043:1103': {
      token: 'fontWeight.normal',
      value: '400',
      cssVar: '--font-weight-normal',
      description: 'Normal/regular font weight',
    },

    // Line Heights
    'VariableID:1043:1089': {
      token: 'lineHeight.4xl',
      value: '40px', // 111.11% of 36px
      cssVar: '--line-height-4xl',
      description: 'Line height for 4xl text',
    },
    'VariableID:1043:1095': {
      token: 'lineHeight.base',
      value: '24px', // 150% of 16px
      cssVar: '--line-height-base',
      description: 'Base line height',
    },
    'VariableID:1043:1096': {
      token: 'lineHeight.sm',
      value: '20px', // 142.86% of 14px
      cssVar: '--line-height-sm',
      description: 'Line height for small text',
    },

    // Letter Spacing
    'VariableID:1043:1112': {
      token: 'letterSpacing.normal',
      value: '0em',
      cssVar: '--letter-spacing-normal',
      description: 'Normal letter spacing (no adjustment)',
    },
  },

  // ============================================================================
  // BORDERS
  // ============================================================================
  borders: {
    // Border Radius
    'VariableID:90:554': {
      token: 'borderRadius.md',
      value: '6px',
      cssVar: '--radius-md',
      description: 'Medium border radius (buttons, inputs)',
    },
    'VariableID:90:555': {
      token: 'borderRadius.lg',
      value: '8px',
      cssVar: '--radius-lg',
      description: 'Large border radius (cards, images)',
    },
    'VariableID:90:558': {
      token: 'borderRadius.3xl',
      value: '24px',
      cssVar: '--radius-3xl',
      description: 'Extra large border radius (main cards, containers)',
    },

    // Border Width
    'VariableID:381:324': {
      token: 'borderWidth.thin',
      value: '1px',
      cssVar: '--border-width-thin',
      description: 'Standard border width',
    },
    'VariableID:595:475': {
      token: 'borderWidth.icon',
      value: '1px',
      cssVar: '--border-width-icon',
      description: 'Border width for icons and strokes',
    },
  },

  // ============================================================================
  // EFFECTS
  // ============================================================================
  effects: {
    'VariableID:402:712': {
      token: 'shadows.xs',
      value: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
      cssVar: '--shadow-xs',
      description: 'Extra small shadow (Box Shadow/shadow-xs)',
    },
  },
} as const

/**
 * Helper function to get token value by Figma Variable ID
 */
export function getTokenByFigmaId(variableId: string): string | undefined {
  for (const category of Object.values(figmaVariableMapping)) {
    if (variableId in category) {
      return (category as any)[variableId].value
    }
  }
  return undefined
}

/**
 * Helper function to get CSS variable name by Figma Variable ID
 */
export function getCssVarByFigmaId(variableId: string): string | undefined {
  for (const category of Object.values(figmaVariableMapping)) {
    if (variableId in category) {
      return (category as any)[variableId].cssVar
    }
  }
  return undefined
}

export type FigmaVariableMapping = typeof figmaVariableMapping
