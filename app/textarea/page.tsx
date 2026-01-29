"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { CopyIcon, SendIcon, SaveIcon } from "lucide-react"

export default function TextareaPage() {
  const [charCount, setCharCount] = useState(0)
  const [feedback, setFeedback] = useState("")
  const maxChars = 500

  return (
    <div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
          <Badge variant="secondary">Input</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      {/* Basic Textarea */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Textarea</h2>
            <p className="text-sm text-muted-foreground">
              A simple textarea for multi-line text input.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="basic">Message</Label>
            <Textarea
              id="basic"
              placeholder="Type your message here..."
            />
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here..." />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Label */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Label</h2>
            <p className="text-sm text-muted-foreground">
              Textarea with descriptive label.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a description..."
              />
              <p className="text-xs text-muted-foreground">
                Provide a brief description of your project.
              </p>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Different Rows */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Different Sizes</h2>
            <p className="text-sm text-muted-foreground">
              Textarea with different row counts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="small">Small (3 rows)</Label>
              <Textarea
                id="small"
                rows={3}
                placeholder="Short text area..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medium">Medium (5 rows)</Label>
              <Textarea
                id="medium"
                rows={5}
                placeholder="Medium text area..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="large">Large (10 rows)</Label>
              <Textarea
                id="large"
                rows={10}
                placeholder="Large text area..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auto">Auto-sizing</Label>
              <Textarea
                id="auto"
                placeholder="This textarea auto-expands with content..."
                className="min-h-[80px]"
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Textarea rows={3} placeholder="Short text..." />
<Textarea rows={5} placeholder="Medium text..." />
<Textarea rows={10} placeholder="Large text..." />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* States */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">States</h2>
            <p className="text-sm text-muted-foreground">
              Different textarea states.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="normal">Normal</Label>
              <Textarea
                id="normal"
                placeholder="Normal state..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
              <Textarea
                id="disabled"
                disabled
                placeholder="Disabled state..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readonly">Read-only</Label>
              <Textarea
                id="readonly"
                readOnly
                defaultValue="This content is read-only and cannot be edited."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error" className="text-destructive">Error</Label>
              <Textarea
                id="error"
                aria-invalid
                placeholder="Error state..."
              />
              <p className="text-xs text-destructive">
                This field is required.
              </p>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Textarea disabled />
<Textarea readOnly defaultValue="Read-only text" />
<Textarea aria-invalid placeholder="Error state" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Character Count */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Character Count</h2>
            <p className="text-sm text-muted-foreground">
              Textarea with character counter and limit.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="char-count">Message (max {maxChars} characters)</Label>
            <Textarea
              id="char-count"
              placeholder="Type your message..."
              value={charCount > 0 ? undefined : ""}
              onChange={(e) => setCharCount(e.target.value.length)}
              maxLength={maxChars}
            />
            <div className="flex justify-between text-xs">
              <p className="text-muted-foreground">
                Characters remaining: {maxChars - charCount}
              </p>
              <p className={charCount > maxChars * 0.9 ? "text-destructive" : "text-muted-foreground"}>
                {charCount} / {maxChars}
              </p>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [charCount, setCharCount] = useState(0)
const maxChars = 500

<Textarea
  onChange={(e) => setCharCount(e.target.value.length)}
  maxLength={maxChars}
/>
<p>{charCount} / {maxChars}</p>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Comment Form */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Comment Form</h2>
            <p className="text-sm text-muted-foreground">
              Textarea in a comment submission form.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <Label htmlFor="comment">Add a comment</Label>
              <Textarea
                id="comment"
                placeholder="What are your thoughts?"
                rows={4}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Your comment will be publicly visible.
              </p>
              <Button>
                <SendIcon className="mr-2 size-4" />
                Post Comment
              </Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="comment">Add a comment</Label>
    <Textarea id="comment" rows={4} />
  </div>
  <Button>Post Comment</Button>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Feedback Form */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Feedback Form</h2>
            <p className="text-sm text-muted-foreground">
              Textarea for collecting user feedback.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Send us your feedback</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback">Your feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Tell us what you think..."
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                {feedback.length} characters
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setFeedback("")}>
                Clear
              </Button>
              <Button>
                Submit Feedback
              </Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [feedback, setFeedback] = useState("")

<Textarea
  value={feedback}
  onChange={(e) => setFeedback(e.target.value)}
/>
<Button onClick={() => setFeedback("")}>Clear</Button>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Code Editor Style */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Code Editor Style</h2>
            <p className="text-sm text-muted-foreground">
              Textarea styled for code input.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Code snippet</Label>
            <Textarea
              id="code"
              placeholder="Enter your code here..."
              rows={10}
              className="font-mono text-sm"
              defaultValue={`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}
            />
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Textarea
  className="font-mono text-sm"
  placeholder="Enter your code here..."
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Actions */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Action Buttons</h2>
            <p className="text-sm text-muted-foreground">
              Textarea with integrated action buttons.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Take some notes..."
                rows={6}
                defaultValue="This is a sample note that you can edit, copy, or save."
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <CopyIcon className="mr-2 size-4" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                <SaveIcon className="mr-2 size-4" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                Clear
              </Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-4">
  <Textarea rows={6} />
  <div className="flex gap-2">
    <Button variant="outline">Copy</Button>
    <Button variant="outline">Save</Button>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Rich Text Editor Placeholder */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Rich Text Editor (Concept)</h2>
            <p className="text-sm text-muted-foreground">
              Textarea as a placeholder for rich text content.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="rich">Article content</Label>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <span className="font-bold">B</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <span className="italic">I</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <span className="underline">U</span>
                  </Button>
                </div>
              </div>
              <Textarea
                id="rich"
                placeholder="Start writing your article..."
                rows={12}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Auto-saved 2 minutes ago
              </p>
              <div className="flex gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button>Publish</Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>Article content</Label>
    <div className="flex gap-1">
      <Button variant="ghost" size="sm">B</Button>
      <Button variant="ghost" size="sm">I</Button>
    </div>
  </div>
  <Textarea rows={12} />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Support Ticket */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Support Ticket</h2>
            <p className="text-sm text-muted-foreground">
              Multi-field form with textarea for issue description.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Submit a Support Ticket</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="ticket-name">Your name</Label>
                <input
                  id="ticket-name"
                  type="text"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-email">Email</Label>
                <input
                  id="ticket-email"
                  type="email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ticket-subject">Subject</Label>
              <input
                id="ticket-subject"
                type="text"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Brief description of the issue"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ticket-description">Description</Label>
              <Textarea
                id="ticket-description"
                placeholder="Please provide detailed information about your issue..."
                rows={8}
              />
              <p className="text-xs text-muted-foreground">
                Include as much detail as possible to help us resolve your issue quickly.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ticket-priority">Priority</Label>
              <select
                id="ticket-priority"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            <Button className="w-full">Submit Ticket</Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<form className="space-y-4">
  <Input placeholder="Name" />
  <Input placeholder="Email" />
  <Textarea
    placeholder="Describe your issue..."
    rows={8}
  />
  <Button type="submit">Submit Ticket</Button>
</form>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Responsive */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Responsive</h2>
            <p className="text-sm text-muted-foreground">
              Textarea automatically adapts to container width.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="responsive-1">Full width</Label>
              <Textarea
                id="responsive-1"
                placeholder="This textarea spans full width..."
                rows={5}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsive-2">Constrained width</Label>
              <Textarea
                id="responsive-2"
                placeholder="This textarea is in a grid column..."
                rows={5}
              />
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Try resizing your browser window to see how the textareas adapt to different screen sizes.
          </p>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/tabs">
          <Button variant="outline">
            ← Tabs
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/toast">
          <Button variant="outline">
            Toast →
          </Button>
        </Link>
      </div>
    </div>
  )
}
