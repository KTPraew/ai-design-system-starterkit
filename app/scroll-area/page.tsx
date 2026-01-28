"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, User, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const artworks = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ryan Ancill",
    art: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=300&q=80",
  },
]

const messages = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar: "AJ",
    message: "Hey! How's everyone doing today?",
    time: "10:23 AM",
  },
  {
    id: 2,
    user: "Bob Smith",
    avatar: "BS",
    message: "Doing great! Just finished the new feature.",
    time: "10:25 AM",
  },
  {
    id: 3,
    user: "Carol White",
    avatar: "CW",
    message: "That's awesome! Can't wait to see it.",
    time: "10:27 AM",
  },
  {
    id: 4,
    user: "David Brown",
    avatar: "DB",
    message: "Should we schedule a demo for tomorrow?",
    time: "10:30 AM",
  },
  {
    id: 5,
    user: "Alice Johnson",
    avatar: "AJ",
    message: "Sounds good to me! What time works for everyone?",
    time: "10:32 AM",
  },
  {
    id: 6,
    user: "Bob Smith",
    avatar: "BS",
    message: "2 PM would be perfect.",
    time: "10:35 AM",
  },
  {
    id: 7,
    user: "Carol White",
    avatar: "CW",
    message: "Works for me too!",
    time: "10:36 AM",
  },
  {
    id: 8,
    user: "David Brown",
    avatar: "DB",
    message: "Great! I'll send out a calendar invite.",
    time: "10:38 AM",
  },
]

export default function ScrollAreaPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Scroll Area</h1>
          <Badge>Layout</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling with consistent behavior.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Vertical Scroll */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Vertical Scroll</CardTitle>
            <CardDescription>Simple vertical scrolling area</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Horizontal Scroll */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Scroll</CardTitle>
            <CardDescription>Scrollable area with horizontal orientation</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      Photo by{" "}
                      <span className="font-semibold text-foreground">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Both Directions */}
        <Card>
          <CardHeader>
            <CardTitle>Both Directions</CardTitle>
            <CardDescription>Scrollable in both horizontal and vertical directions</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border">
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium">ID</th>
                      <th className="px-4 py-2 text-left font-medium">Name</th>
                      <th className="px-4 py-2 text-left font-medium">Email</th>
                      <th className="px-4 py-2 text-left font-medium">Department</th>
                      <th className="px-4 py-2 text-left font-medium">Role</th>
                      <th className="px-4 py-2 text-left font-medium">Status</th>
                      <th className="px-4 py-2 text-left font-medium">Join Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 50 }).map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-2">{i + 1}</td>
                        <td className="px-4 py-2 whitespace-nowrap">User {i + 1}</td>
                        <td className="px-4 py-2 whitespace-nowrap">user{i + 1}@example.com</td>
                        <td className="px-4 py-2 whitespace-nowrap">Engineering</td>
                        <td className="px-4 py-2 whitespace-nowrap">Developer</td>
                        <td className="px-4 py-2">
                          <Badge variant="secondary">Active</Badge>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">2024-01-{(i % 28) + 1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
            <CardDescription>Scroll areas with various heights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Small (h-48)</h4>
              <ScrollArea className="h-48 w-full rounded-md border">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Medium (h-64)</h4>
              <ScrollArea className="h-64 w-full rounded-md border">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Large (h-96)</h4>
              <ScrollArea className="h-96 w-full rounded-md border">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Chat Messages</CardTitle>
            <CardDescription>Scrollable chat message list</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border">
              <div className="p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{msg.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{msg.user}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Code Viewer */}
        <Card>
          <CardHeader>
            <CardTitle>Code Viewer</CardTitle>
            <CardDescription>Scrollable code block with syntax highlighting</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border bg-slate-950">
              <pre className="p-4">
                <code className="text-sm text-slate-50">
{`import { ScrollArea } from "@/components/ui/scroll-area"

export default function Example() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Tags
        </h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

// Additional utility functions
const processData = (data) => {
  return data.map(item => ({
    ...item,
    processed: true,
    timestamp: Date.now()
  }))
}

const validateInput = (input) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input')
  }
  return input.trim().toLowerCase()
}

// API integration
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return processData(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

// Main component logic
const handleSubmit = async (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  try {
    await submitForm(data)
    showSuccessMessage()
  } catch (error) {
    showErrorMessage(error.message)
  }
}`}
                </code>
              </pre>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Event List */}
        <Card>
          <CardHeader>
            <CardTitle>Event List</CardTitle>
            <CardDescription>Scrollable list of events with metadata</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border">
              <div className="p-4 space-y-4">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="space-y-2 pb-4 border-b last:border-0">
                    <h4 className="text-sm font-semibold">Team Meeting #{i + 1}</h4>
                    <p className="text-sm text-muted-foreground">
                      Discuss project progress and upcoming milestones for Q{(i % 4) + 1}.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Jan {(i % 28) + 1}, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Conference Room {String.fromCharCode(65 + (i % 5))}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {Math.floor(Math.random() * 10) + 5} attendees
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Tags Cloud */}
        <Card>
          <CardHeader>
            <CardTitle>Tags Cloud</CardTitle>
            <CardDescription>Horizontal scrollable tag collection</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-2 p-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "GraphQL",
                  "REST API",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "Azure",
                  "Git",
                  "GitHub",
                  "CI/CD",
                ].map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Compact List */}
        <Card>
          <CardHeader>
            <CardTitle>Compact List</CardTitle>
            <CardDescription>Small scroll area with compact items</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Recent Files</h4>
              <ScrollArea className="h-64 w-full rounded-md border">
                <div className="p-2 space-y-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-muted cursor-pointer"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>document-{i + 1}.pdf</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Notifications</h4>
              <ScrollArea className="h-64 w-full rounded-md border">
                <div className="p-2 space-y-1">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm px-2 py-2 text-sm hover:bg-muted cursor-pointer"
                    >
                      <div className="font-medium">Notification {i + 1}</div>
                      <div className="text-xs text-muted-foreground">
                        {Math.floor(Math.random() * 60)} minutes ago
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Custom Styling */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Styling</CardTitle>
            <CardDescription>Scroll areas with custom styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Custom Background</h4>
              <ScrollArea className="h-48 w-full rounded-md border bg-gradient-to-b from-muted/50 to-muted">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">With Shadow</h4>
              <ScrollArea className="h-48 w-full rounded-md border shadow-inner">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Scroll Area component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Vertical Scroll</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    {/* Your content here */}
  </div>
</ScrollArea>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Horizontal Scroll</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {/* Your content here */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Both Directions</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-[400px] w-full rounded-md border">
  <div className="p-4">
    {/* Your wide and tall content here */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Set explicit height for vertical scrolling</li>
                  <li>Use whitespace-nowrap for horizontal scrolling</li>
                  <li>Add ScrollBar component for horizontal scroll</li>
                  <li>Consider using rounded corners for better aesthetics</li>
                  <li>Ensure content is keyboard accessible</li>
                  <li>Test scrolling behavior on different devices</li>
                  <li>Avoid nesting scroll areas when possible</li>
                  <li>Use appropriate height constraints</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Common Use Cases</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Long lists of items (messages, notifications, files)</li>
                  <li>Code blocks and pre-formatted text</li>
                  <li>Image galleries and carousels</li>
                  <li>Data tables with many columns</li>
                  <li>Chat interfaces</li>
                  <li>Tag collections</li>
                  <li>Navigation menus with many items</li>
                  <li>Content that exceeds viewport height</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keyboard navigation supported (arrow keys, Page Up/Down)</li>
                  <li>Screen reader compatible</li>
                  <li>Focus indicators provided automatically</li>
                  <li>ARIA attributes handled by Radix UI</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/radio-group">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Radio Group
          </Button>
        </Link>
        <Link href="/select">
          <Button variant="outline">
            Select
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
