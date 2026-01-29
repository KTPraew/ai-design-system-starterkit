"use client"

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Info, HelpCircle, Settings, User, Bell, Search, Heart, Star, Share2, Download, Copy, Trash2, Edit, MoreHorizontal, Plus, Check, X, AlertCircle, CheckCircle2, XCircle } from "lucide-react"

export default function TooltipPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-4xl font-bold">Tooltip</h1>
          <Badge variant="outline">radix-ui</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      {/* Section 1: Basic Tooltip */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Tooltip</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center min-h-[200px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 2: Positions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positions</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center min-h-[250px]">
              <div>
                <p className="text-sm text-muted-foreground mb-3 text-center">Top</p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Tooltip on top</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3 text-center">Right</p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Tooltip on right</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3 text-center">Bottom</p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3 text-center">Left</p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Tooltip on left</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipContent side="top">Top tooltip</TooltipContent>
<TooltipContent side="right">Right tooltip</TooltipContent>
<TooltipContent side="bottom">Bottom tooltip</TooltipContent>
<TooltipContent side="left">Left tooltip</TooltipContent>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 3: With Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-4 flex-wrap min-h-[150px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Information</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Help & Support</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>User Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Info className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Information</p>
  </TooltipContent>
</Tooltip>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 4: Action Tooltips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Action Tooltips</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-2 flex-wrap min-h-[150px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Heart className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to favorites</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Star className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mark as important</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share2 className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Download className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download file</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Copy className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit item</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash2 className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete item</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Heart className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to favorites</p>
  </TooltipContent>
</Tooltip>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 5: With Keyboard Shortcuts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Keyboard Shortcuts</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-2 flex-wrap min-h-[150px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Copy className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Copy</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>C
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Search className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>Search</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>New</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>N
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipContent>
  <div className="flex items-center gap-2">
    <span>Copy</span>
    <kbd className="...">⌘C</kbd>
  </div>
</TooltipContent>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 6: With Rich Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Rich Content</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-4 flex-wrap min-h-[200px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">User Info</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-xs opacity-90">Senior Developer</p>
                  <p className="text-xs opacity-75">john.doe@example.com</p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Project Status</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-2">
                  <p className="font-semibold">Project Alpha</p>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="size-3 text-green-500" />
                    <span>On track</span>
                  </div>
                  <p className="text-xs opacity-75">Due: Dec 31, 2024</p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Stats</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Views:</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Likes:</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs">
                    <span>Shares:</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipContent className="max-w-xs">
  <div className="space-y-1">
    <p className="font-semibold">John Doe</p>
    <p className="text-xs">Senior Developer</p>
  </div>
</TooltipContent>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 7: Side Offset */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Side Offset</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-6 flex-wrap min-h-[200px]">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">No offset (0)</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={0}>
                  <p>No spacing</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Small offset (5)</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                  <p>Small spacing</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Large offset (15)</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={15}>
                  <p>Large spacing</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipContent sideOffset={0}>No spacing</TooltipContent>
<TooltipContent sideOffset={5}>Small spacing</TooltipContent>
<TooltipContent sideOffset={15}>Large spacing</TooltipContent>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 8: On Text Elements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">On Text Elements</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg min-h-[150px]">
            <p className="text-sm leading-relaxed">
              You can add tooltips to{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="underline decoration-dashed cursor-help">inline text</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is an inline tooltip</p>
                </TooltipContent>
              </Tooltip>
              {" "}or use them with{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 cursor-help">
                    abbreviations
                    <Info className="size-3" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hover over text for more info</p>
                </TooltipContent>
              </Tooltip>
              {" "}to provide additional context without cluttering the interface.
            </p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Tooltip>
  <TooltipTrigger asChild>
    <span className="underline decoration-dashed">
      inline text
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is an inline tooltip</p>
  </TooltipContent>
</Tooltip>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 9: Status Indicators */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Status Indicators</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-4 flex-wrap min-h-[150px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-help">
                  <CheckCircle2 className="size-5 text-green-500" />
                  <span className="text-sm">Active</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>System is operational</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-help">
                  <AlertCircle className="size-5 text-yellow-500" />
                  <span className="text-sm">Warning</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Minor issues detected</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-help">
                  <XCircle className="size-5 text-red-500" />
                  <span className="text-sm">Error</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Service unavailable</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Tooltip>
  <TooltipTrigger asChild>
    <div className="flex items-center gap-2">
      <CheckCircle2 className="text-green-500" />
      <span>Active</span>
    </div>
  </TooltipTrigger>
  <TooltipContent>
    <p>System is operational</p>
  </TooltipContent>
</Tooltip>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 10: Delay Duration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Delay Duration</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center gap-6 flex-wrap min-h-[200px]">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Instant (0ms)</p>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Appears instantly</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Medium (300ms)</p>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Appears after 300ms</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Long (700ms)</p>
              <TooltipProvider delayDuration={700}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Appears after 700ms</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Instant</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Appears instantly</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 11: Toolbar Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toolbar Example</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center min-h-[150px]">
            <div className="flex items-center gap-1 p-1 border rounded-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Copy className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Download className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2 className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share</p>
                </TooltipContent>
              </Tooltip>

              <div className="w-px h-6 bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Edit className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More options</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<div className="flex items-center gap-1">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Copy />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Copy</TooltipContent>
  </Tooltip>
  {/* ... more buttons */}
</div>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 12: Long Text Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Long Text Content</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg flex items-center justify-center min-h-[200px]">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Documentation</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p>
                  This component provides contextual information when users hover over or focus on an element.
                  It's useful for displaying additional details without cluttering the interface.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<TooltipContent className="max-w-sm">
  <p>Long descriptive text that wraps...</p>
</TooltipContent>`}
            </code>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t">
        <a
          href="/toggle-group"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Toggle Group
        </a>
        <a
          href="/components"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          All Components →
        </a>
      </div>
    </div>
  )
}
