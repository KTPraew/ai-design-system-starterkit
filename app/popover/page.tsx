"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Settings, User, Mail, Phone, MapPin, Info, HelpCircle, Check, X, Star, Heart, Share2, MessageSquare, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function PopoverPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <DocsLayoutWrapper><div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Popover</h1>
          <Badge>Overlay</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays rich content in a portal, triggered by a button. A popover can contain interactive elements.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Popover */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Popover</CardTitle>
            <CardDescription>Simple popover with text content</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Popover Title</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a simple popover with some text content.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* With Form */}
        <Card>
          <CardHeader>
            <CardTitle>With Form</CardTitle>
            <CardDescription>Popover containing form inputs</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Profile Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Update your profile information.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <Button className="w-full">Save Changes</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Placements */}
        <Card>
          <CardHeader>
            <CardTitle>Placements</CardTitle>
            <CardDescription>Different popover positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-8 py-12">
              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </PopoverTrigger>
                  <PopoverContent side="top">
                    <p className="text-sm">This popover appears on top</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Top Start</Button>
                  </PopoverTrigger>
                  <PopoverContent side="top" align="start">
                    <p className="text-sm">Top start alignment</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Top End</Button>
                  </PopoverTrigger>
                  <PopoverContent side="top" align="end">
                    <p className="text-sm">Top end alignment</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </PopoverTrigger>
                  <PopoverContent side="left">
                    <p className="text-sm">This popover appears on the left</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Center</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-sm">Default center position</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </PopoverTrigger>
                  <PopoverContent side="right">
                    <p className="text-sm">This popover appears on the right</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom">
                    <p className="text-sm">This popover appears on bottom</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Bottom Start</Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="start">
                    <p className="text-sm">Bottom start alignment</p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Bottom End</Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="end">
                    <p className="text-sm">Bottom end alignment</p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Popovers with icon content</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4 justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Information</p>
                    <p className="text-sm text-muted-foreground">
                      This is additional information about this feature.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Help</p>
                    <p className="text-sm text-muted-foreground">
                      Need help? Click here to contact support.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <h4 className="font-medium">Quick Settings</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Dark Mode</span>
                      <Checkbox />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Notifications</span>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto Save</span>
                      <Checkbox defaultChecked />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Card</CardTitle>
            <CardDescription>Popover displaying contact information</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  View Contact
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                      JD
                    </div>
                    <div>
                      <h4 className="font-medium">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Product Designer</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Share Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Share Menu</CardTitle>
            <CardDescription>Popover with share options</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Share this page</h4>
                    <p className="text-sm text-muted-foreground">
                      Anyone with the link can view this page
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Input value="https://example.com/page" readOnly />
                    <Button size="icon" variant="outline">
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Share via</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Popover showing notification list</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    3
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Notifications</h4>
                    <Button variant="ghost" size="sm">
                      Mark all as read
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">New message received</p>
                        <p className="text-xs text-muted-foreground">John sent you a message</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Task completed</p>
                        <p className="text-xs text-muted-foreground">Your report has been generated</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Reminder</p>
                        <p className="text-xs text-muted-foreground">Team meeting in 30 minutes</p>
                        <p className="text-xs text-muted-foreground">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <Button variant="ghost" className="w-full">
                    View all notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Controlled Popover */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Popover</CardTitle>
            <CardDescription>Popover with controlled open state</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center py-8">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    {isOpen ? "Close" : "Open"} Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Controlled Popover</h4>
                      <p className="text-sm text-muted-foreground">
                        This popover's state is controlled by React state.
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm">
                <strong>Popover State:</strong> {isOpen ? "Open" : "Closed"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Custom Width */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Width</CardTitle>
            <CardDescription>Popovers with different widths</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4 justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Small (200px)</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px]">
                <p className="text-sm">Compact popover</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Medium (300px)</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px]">
                <p className="text-sm">Medium width popover with more content space</p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Large (400px)</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px]">
                <p className="text-sm">
                  Large popover with even more space for detailed content and longer descriptions.
                </p>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* With Actions */}
        <Card>
          <CardHeader>
            <CardTitle>With Actions</CardTitle>
            <CardDescription>Popover with action buttons</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Delete Item</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Are you sure?</h4>
                    <p className="text-sm text-muted-foreground">
                      This action cannot be undone. This will permanently delete the item.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <PopoverTrigger asChild>
                      <Button size="sm" variant="outline" className="flex-1">
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    </PopoverTrigger>
                    <Button size="sm" variant="destructive" className="flex-1">
                      <Check className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>Popover containing a feedback form</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Give Feedback
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Send Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      We'd love to hear your thoughts!
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label>Rating</Label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Button
                            key={star}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Star className="h-4 w-4" />
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea
                        id="feedback"
                        placeholder="Tell us what you think..."
                        className="min-h-[80px]"
                      />
                    </div>
                    <Button className="w-full">Submit Feedback</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Popover component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm text-muted-foreground">
        Content goes here
      </p>
    </div>
  </PopoverContent>
</Popover>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Positioning</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<PopoverContent side="top" align="start">
  Content
</PopoverContent>

// side: "top" | "right" | "bottom" | "left"
// align: "start" | "center" | "end"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Controlled State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`const [open, setOpen] = useState(false)

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>Toggle</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </PopoverContent>
</Popover>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Custom Width</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<PopoverContent className="w-80">
  Content
</PopoverContent>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use popovers for contextual information and actions</li>
                  <li>Keep popover content focused and concise</li>
                  <li>Position popovers to avoid covering important content</li>
                  <li>Use appropriate trigger elements (buttons, icons)</li>
                  <li>Consider using controlled state for complex interactions</li>
                  <li>Provide clear visual hierarchy in popover content</li>
                  <li>Include close buttons for non-dismissible content</li>
                  <li>Test popover behavior on different screen sizes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Popover vs Tooltip</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Use Popover when:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Content contains interactive elements (buttons, forms)</li>
                    <li>Content is complex or lengthy</li>
                    <li>User needs to interact with the content</li>
                    <li>Content should persist until explicitly closed</li>
                  </ul>
                  <p className="mt-2"><strong>Use Tooltip when:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Content is simple text only</li>
                    <li>No user interaction needed</li>
                    <li>Brief explanatory information</li>
                    <li>Should disappear on mouse leave</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/pagination">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Pagination
          </Button>
        </Link>
        <Link href="/progress">
          <Button variant="outline">
            Progress
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
