'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function KbdShowcase() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Kbd</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Keyboard key component for displaying keyboard shortcuts and commands.
          </p>
        </div>

        {/* Basic Kbd */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Keyboard Keys</CardTitle>
            <CardDescription>Simple keyboard key display</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                A
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Enter
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Esc
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Space
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Tab
              </kbd>
            </div>
          </CardContent>
        </Card>

        {/* Modifier Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Modifier Keys</CardTitle>
            <CardDescription>Special modifier keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">⌃</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">⌥</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">⇧</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Ctrl
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Alt
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Shift
              </kbd>
            </div>
          </CardContent>
        </Card>

        {/* Key Combinations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Combinations</CardTitle>
            <CardDescription>Multiple keys pressed together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
                <span className="text-sm text-muted-foreground">Command + K</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  <span className="text-xs">⇧</span>
                </kbd>
                <span className="text-muted-foreground">+</span>
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>
                </kbd>
                <span className="text-muted-foreground">+</span>
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  P
                </kbd>
                <span className="text-sm text-muted-foreground">Shift + Command + P</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  Ctrl
                </kbd>
                <span className="text-muted-foreground">+</span>
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  C
                </kbd>
                <span className="text-sm text-muted-foreground">Copy</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  Ctrl
                </kbd>
                <span className="text-muted-foreground">+</span>
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  V
                </kbd>
                <span className="text-sm text-muted-foreground">Paste</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shortcuts List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Shortcuts List</CardTitle>
            <CardDescription>List of keyboard shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { keys: ['⌘', 'K'], description: 'Open command palette' },
                { keys: ['⌘', 'S'], description: 'Save file' },
                { keys: ['⌘', 'P'], description: 'Quick open' },
                { keys: ['⌘', 'B'], description: 'Toggle sidebar' },
                { keys: ['⌘', '/'], description: 'Toggle comment' },
                { keys: ['⇧', '⌘', 'P'], description: 'Command palette' },
              ].map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <span className="text-sm">{shortcut.description}</span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, keyIndex) => (
                      <span key={keyIndex} className="flex items-center gap-1">
                        {keyIndex > 0 && (
                          <span className="text-muted-foreground text-xs">+</span>
                        )}
                        <kbd className="pointer-events-none inline-flex h-7 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground">
                          {key}
                        </kbd>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Arrow Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Arrow Keys</CardTitle>
            <CardDescription>Directional arrow keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">↑</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">↓</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">←</span>
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                <span className="text-xs">→</span>
              </kbd>
            </div>
          </CardContent>
        </Card>

        {/* Function Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Function Keys</CardTitle>
            <CardDescription>F1-F12 function keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <kbd
                  key={num}
                  className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground"
                >
                  F{num}
                </kbd>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Number Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Number Keys</CardTitle>
            <CardDescription>Numeric keys 0-9</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 10 }, (_, i) => i).map((num) => (
                <kbd
                  key={num}
                  className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground"
                >
                  {num}
                </kbd>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Special Keys</CardTitle>
            <CardDescription>Other special keyboard keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Delete
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Backspace
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Home
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                End
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Page Up
              </kbd>
              <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                Page Down
              </kbd>
            </div>
          </CardContent>
        </Card>

        {/* Inline Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inline Usage</CardTitle>
            <CardDescription>Keyboard shortcuts in text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <p>
                Press{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>{' '}
                to open the command palette.
              </p>
              <p>
                Use{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  Ctrl
                </kbd>
                {' + '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  C
                </kbd>{' '}
                to copy text.
              </p>
              <p>
                Navigate with{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">↑</span>
                </kbd>{' '}
                and{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">↓</span>
                </kbd>{' '}
                arrow keys.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
            <CardDescription>Keyboard keys in various sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-20">Small:</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-20">Default:</span>
                <kbd className="pointer-events-none inline-flex h-7 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-20">Medium:</span>
                <kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-20">Large:</span>
                <kbd className="pointer-events-none inline-flex h-10 select-none items-center gap-1 rounded border bg-muted px-3 font-mono text-base font-medium text-muted-foreground">
                  <span className="text-sm">⌘</span>K
                </kbd>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Kbd component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`{/* Basic Key */}
<kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
  Enter
</kbd>

{/* With Symbol */}
<kbd className="pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground">
  <span className="text-xs">⌘</span>K
</kbd>

{/* Key Combination */}
<div className="flex items-center gap-1">
  <kbd className="...">
    <span className="text-xs">⌘</span>
  </kbd>
  <span className="text-muted-foreground">+</span>
  <kbd className="...">K</kbd>
</div>

{/* Inline Small */}
<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
  <span className="text-xs">⌘</span>K
</kbd>

{/* In Text */}
<p>
  Press <kbd className="...">⌘K</kbd> to open command palette.
</p>

{/* Arrow Keys */}
<kbd className="...">
  <span className="text-xs">↑</span>
</kbd>

{/* Modifiers */}
⌘ - Command (Mac)
⌃ - Control
⌥ - Option/Alt
⇧ - Shift
↑↓←→ - Arrow keys`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <a href="/">← Back to Home</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/components">View All Components →</a>
          </Button>
        </div>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
