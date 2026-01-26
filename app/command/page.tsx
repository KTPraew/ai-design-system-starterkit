'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  Mail,
  MessageSquare,
  Search,
} from 'lucide-react'

export default function CommandShowcase() {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  if (typeof window !== 'undefined') {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Command</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Fast, composable, unstyled command menu for React.
          </p>
        </div>

        {/* Basic Command */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Command</CardTitle>
            <CardDescription>Simple command menu with search</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        {/* Command Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Command Dialog</CardTitle>
            <CardDescription>Command menu in a dialog (⌘K)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Press{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>{' '}
                to open the command menu
              </p>
              <Button onClick={() => setOpen(true)} variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Open Command Menu
              </Button>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </CardContent>
        </Card>

        {/* Command with Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Command Groups</CardTitle>
            <CardDescription>Organized commands with multiple groups</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search files, actions, and more..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Files">
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>README.md</span>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>package.json</span>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>tsconfig.json</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Send Email</span>
                    <CommandShortcut>⌘E</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>New Message</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Schedule Meeting</span>
                    <CommandShortcut>⌘M</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Preferences">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>System Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        {/* Command with Shortcuts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Keyboard Shortcuts</CardTitle>
            <CardDescription>Commands with visual keyboard shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search commands..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Quick Actions">
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>New File</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search Files</span>
                    <CommandShortcut>⌘F</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Open Settings</span>
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Navigation">
                  <CommandItem>
                    <span>Go to Dashboard</span>
                    <CommandShortcut>⌘D</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Go to Projects</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Go to Team</span>
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Empty State</CardTitle>
            <CardDescription>Command with no results</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search for commands..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <p className="text-sm text-muted-foreground">No results found.</p>
                    <p className="text-xs text-muted-foreground mt-1">Try searching for something else</p>
                  </div>
                </CommandEmpty>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        {/* Application Commands */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Application Commands</CardTitle>
            <CardDescription>Real-world command menu example</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="What would you like to do?" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Create New">
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>New Document</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>New User</span>
                    <CommandShortcut>⌘U</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>New Event</span>
                    <CommandShortcut>⌘E</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Recent">
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Project Proposal.pdf</span>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Meeting Notes.docx</span>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Budget 2024.xlsx</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Account">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Command component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

{/* Basic Command */}
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

{/* Command Dialog */}
const [open, setOpen] = useState(false)

// Toggle with ⌘K
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>

{/* With Keyboard Shortcuts */}
<CommandItem>
  <span>Open Settings</span>
  <CommandShortcut>⌘S</CommandShortcut>
</CommandItem>

{/* With Icons */}
<CommandItem>
  <Calendar className="mr-2 h-4 w-4" />
  <span>Calendar</span>
</CommandItem>

{/* Multiple Groups */}
<CommandList>
  <CommandGroup heading="Files">
    <CommandItem>File 1</CommandItem>
  </CommandGroup>
  <CommandSeparator />
  <CommandGroup heading="Actions">
    <CommandItem>Action 1</CommandItem>
  </CommandGroup>
</CommandList>`}</code>
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
  )
}
