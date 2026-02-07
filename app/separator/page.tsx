"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  BellIcon,
  MailIcon,
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  CalendarIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon
} from "lucide-react"

export default function SeparatorPage() {
  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
          <Badge variant="secondary">Layout</Badge>
        </div>
        <p className="text-muted-foreground">
          Visually or semantically separates content.
        </p>
      </div>

      {/* Basic Horizontal Separator */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Horizontal</h2>
            <p className="text-sm text-muted-foreground">
              Default horizontal separator to divide content sections.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-medium">Section One</h3>
              <p className="text-sm text-muted-foreground">
                This is the first section of content.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-medium">Section Two</h3>
              <p className="text-sm text-muted-foreground">
                This is the second section of content.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-medium">Section Three</h3>
              <p className="text-sm text-muted-foreground">
                This is the third section of content.
              </p>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Separator />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Vertical Separator */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Vertical</h2>
            <p className="text-sm text-muted-foreground">
              Vertical separator for inline content separation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 rounded-lg border p-6">
              <Button variant="ghost" size="icon">
                <HomeIcon className="size-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon">
                <UserIcon className="size-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon">
                <SettingsIcon className="size-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon">
                <BellIcon className="size-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-4">
              <span className="text-sm">Home</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm">Products</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm">About</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm">Contact</span>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Separator orientation="vertical" className="h-6" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Text Label */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Text Label</h2>
            <p className="text-sm text-muted-foreground">
              Separator with centered text for semantic division.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <p className="text-sm">Sign in with your social account</p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Google</Button>
                <Button variant="outline" className="flex-1">GitHub</Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Sign in with email</p>
              <Input placeholder="Email address" type="email" />
              <Button className="w-full">Continue</Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator />
  </div>
  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-background px-2 text-muted-foreground">
      Or continue with
    </span>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Different Styles */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Different Styles</h2>
            <p className="text-sm text-muted-foreground">
              Separators with different visual styles and colors.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Default (Solid)</Label>
              <Separator />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Dashed</Label>
              <Separator className="border-dashed border-t" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Dotted</Label>
              <Separator className="border-dotted border-t" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Thick</Label>
              <Separator className="h-0.5" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Extra Thick</Label>
              <Separator className="h-1" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Colored (Primary)</Label>
              <Separator className="bg-primary" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Colored (Destructive)</Label>
              <Separator className="bg-destructive" />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Gradient</Label>
              <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Separator className="border-dashed border-t" />
<Separator className="h-1" />
<Separator className="bg-primary" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Spacing Variants */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Spacing Variants</h2>
            <p className="text-sm text-muted-foreground">
              Different spacing around separators for various contexts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Compact (space-y-2)</p>
              <div className="space-y-2">
                <p className="text-sm">Item 1</p>
                <Separator />
                <p className="text-sm">Item 2</p>
                <Separator />
                <p className="text-sm">Item 3</p>
              </div>
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Normal (space-y-3)</p>
              <div className="space-y-3">
                <p className="text-sm">Item 1</p>
                <Separator />
                <p className="text-sm">Item 2</p>
                <Separator />
                <p className="text-sm">Item 3</p>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Comfortable (space-y-4)</p>
              <div className="space-y-4">
                <p className="text-sm">Item 1</p>
                <Separator />
                <p className="text-sm">Item 2</p>
                <Separator />
                <p className="text-sm">Item 3</p>
              </div>
            </div>

            <div className="space-y-6 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Spacious (space-y-6)</p>
              <div className="space-y-6">
                <p className="text-sm">Item 1</p>
                <Separator />
                <p className="text-sm">Item 2</p>
                <Separator />
                <p className="text-sm">Item 3</p>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-4">
  <p>Item 1</p>
  <Separator />
  <p>Item 2</p>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Navigation Menu */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Navigation Menu</h2>
            <p className="text-sm text-muted-foreground">
              Using separators to organize navigation items.
            </p>
          </div>

          <div className="rounded-lg border">
            <div className="p-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <HomeIcon className="mr-2 size-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <FileTextIcon className="mr-2 size-4" />
                Documents
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <FolderIcon className="mr-2 size-4" />
                Projects
              </Button>
            </div>

            <Separator />

            <div className="p-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <CalendarIcon className="mr-2 size-4" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <ImageIcon className="mr-2 size-4" />
                Gallery
              </Button>
            </div>

            <Separator />

            <div className="p-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <SettingsIcon className="mr-2 size-4" />
                Settings
              </Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="p-2">
  <Button variant="ghost">Item 1</Button>
  <Button variant="ghost">Item 2</Button>
</div>
<Separator />
<div className="p-2">
  <Button variant="ghost">Item 3</Button>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Lists */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Lists</h2>
            <p className="text-sm text-muted-foreground">
              Separating list items for better readability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MailIcon className="size-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">New message</p>
                      <p className="text-xs text-muted-foreground">You have a new message</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2m ago</span>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UserIcon className="size-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">New follower</p>
                      <p className="text-xs text-muted-foreground">Someone followed you</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">1h ago</span>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HeartIcon className="size-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Liked your post</p>
                      <p className="text-xs text-muted-foreground">Someone liked your post</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">3h ago</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <ShoppingCartIcon className="mt-0.5 size-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium">Wireless Headphones</p>
                        <p className="text-xs text-muted-foreground">Black, Premium</p>
                      </div>
                      <p className="text-sm font-medium">$299.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <ShoppingCartIcon className="mt-0.5 size-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium">Laptop Stand</p>
                        <p className="text-xs text-muted-foreground">Silver, Adjustable</p>
                      </div>
                      <p className="text-sm font-medium">$79.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-sm font-bold">$378.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="p-4">List item 1</div>
<Separator />
<div className="p-4">List item 2</div>
<Separator />
<div className="p-4">List item 3</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Cards */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Cards</h2>
            <p className="text-sm text-muted-foreground">
              Separating card header, body, and footer sections.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Card Title</h3>
                <p className="text-sm text-muted-foreground">Card description goes here</p>
              </div>
              <Separator />
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Created</span>
                    <span className="font-medium">Jan 20, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Updated</span>
                    <span className="font-medium">Jan 28, 2025</span>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-4">
                <Button className="w-full">View Details</Button>
              </div>
            </div>

            <div className="rounded-lg border">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <StarIcon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium Plan</h3>
                    <p className="text-2xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Custom integrations
                  </li>
                </ul>
              </div>
              <Separator />
              <div className="p-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="rounded-lg border">
  <div className="p-6">Header</div>
  <Separator />
  <div className="p-6">Body</div>
  <Separator />
  <div className="p-4">Footer</div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Forms */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Forms</h2>
            <p className="text-sm text-muted-foreground">
              Organizing form sections with separators.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Personal Information</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Doe" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Contact Details
                </span>
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="San Francisco" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Address</Label>
                  <Input placeholder="123 Main Street" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div>
  <h3>Section 1</h3>
  <Input />
</div>
<Separator />
<div>
  <h3>Section 2</h3>
  <Input />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Decorative Elements */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Decorative Elements</h2>
            <p className="text-sm text-muted-foreground">
              Creative separator designs with decorative elements.
            </p>
          </div>

          <div className="space-y-8 rounded-lg border p-6">
            <div>
              <p className="text-center text-sm text-muted-foreground mb-4">Center Icon</p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center">
                  <div className="rounded-full bg-background p-2">
                    <StarIcon className="size-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center text-sm text-muted-foreground mb-4">Multiple Decorations</p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center gap-4">
                  <div className="rounded-full bg-background p-1.5">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>
                  <div className="rounded-full bg-background p-1.5">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>
                  <div className="rounded-full bg-background p-1.5">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center text-sm text-muted-foreground mb-4">With Badge</p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center">
                  <Badge variant="outline" className="bg-background">
                    Section Break
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center text-sm text-muted-foreground mb-4">Gradient with Glow</p>
              <div className="relative">
                <Separator className="bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator />
  </div>
  <div className="relative flex justify-center">
    <StarIcon className="size-4 bg-background" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Semantic Non-decorative */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Semantic Separator</h2>
            <p className="text-sm text-muted-foreground">
              Using decorative=false for semantic HTML separation (for screen readers).
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-medium">Main Content</h3>
              <p className="text-sm text-muted-foreground">
                This is the main content area.
              </p>
            </div>
            <Separator decorative={false} />
            <div>
              <h3 className="text-sm font-medium">Related Content</h3>
              <p className="text-sm text-muted-foreground">
                This is semantically separated related content for accessibility.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> Use decorative=false when the separator has semantic meaning
              for screen readers. The default is decorative=true which hides it from assistive technologies.
            </p>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Separator decorative={false} />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/scroll-area">
          <Button variant="outline">
            ← Scroll Area
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/sheet">
          <Button variant="outline">
            Sheet →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
