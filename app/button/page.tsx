'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Mail,
  Download,
  Trash2,
  Plus,
  Settings,
  Search,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Heart,
  Share2,
  Edit,
  Copy,
  Check,
  Loader2,
  Upload,
  Save,
  X,
  MoreHorizontal,
  User,
  LogOut,
} from 'lucide-react'

export default function ButtonShowcase() {
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Button</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        {/* Button Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different button styles and appearances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Different button sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Icon Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Buttons</CardTitle>
            <CardDescription>Buttons with only icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="icon-sm" variant="outline">
                <Settings className="size-4" />
              </Button>
              <Button size="icon">
                <Settings />
              </Button>
              <Button size="icon-lg">
                <Settings className="size-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Buttons with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buttons with Icons</CardTitle>
            <CardDescription>Buttons with leading or trailing icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Leading Icons */}
            <div>
              <p className="text-sm font-medium mb-3">Leading Icons</p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Mail />
                  Send Email
                </Button>
                <Button variant="secondary">
                  <Download />
                  Download
                </Button>
                <Button variant="destructive">
                  <Trash2 />
                  Delete
                </Button>
                <Button variant="outline">
                  <Plus />
                  Add Item
                </Button>
              </div>
            </div>

            {/* Trailing Icons */}
            <div>
              <p className="text-sm font-medium mb-3">Trailing Icons</p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  Continue
                  <ChevronRight />
                </Button>
                <Button variant="secondary">
                  External Link
                  <ExternalLink />
                </Button>
                <Button variant="outline">
                  Search
                  <Search />
                </Button>
              </div>
            </div>

            {/* Both Icons */}
            <div>
              <p className="text-sm font-medium mb-3">Both Icons</p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <ChevronLeft />
                  Previous
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading State</CardTitle>
            <CardDescription>Buttons with loading spinner</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleClick} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Click Me'
                )}
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="animate-spin" />
                Processing...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>Buttons in disabled state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="destructive" disabled>Destructive</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
            </div>
          </CardContent>
        </Card>

        {/* Icon Button Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Button Variants</CardTitle>
            <CardDescription>Icon-only buttons with different styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button size="icon" variant="default">
                <Heart />
              </Button>
              <Button size="icon" variant="secondary">
                <Share2 />
              </Button>
              <Button size="icon" variant="destructive">
                <Trash2 />
              </Button>
              <Button size="icon" variant="outline">
                <Edit />
              </Button>
              <Button size="icon" variant="ghost">
                <MoreHorizontal />
              </Button>
              <Button size="icon" variant="outline" onClick={handleCopy}>
                {copied ? <Check className="text-green-500" /> : <Copy />}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Groups</CardTitle>
            <CardDescription>Groups of related buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Horizontal Group */}
            <div>
              <p className="text-sm font-medium mb-3">Horizontal Group</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  <ChevronLeft />
                  Previous
                </Button>
                <Button variant="outline" className="rounded-none">
                  Current
                </Button>
                <Button variant="outline" className="rounded-l-none border-l-0">
                  Next
                  <ChevronRight />
                </Button>
              </div>
            </div>

            {/* Icon Group */}
            <div>
              <p className="text-sm font-medium mb-3">Icon Button Group</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
                  <Edit />
                </Button>
                <Button size="icon" variant="outline" className="rounded-none">
                  <Copy />
                </Button>
                <Button size="icon" variant="outline" className="rounded-l-none border-l-0">
                  <Trash2 />
                </Button>
              </div>
            </div>

            {/* Separate Buttons */}
            <div>
              <p className="text-sm font-medium mb-3">Action Group</p>
              <div className="flex gap-2">
                <Button variant="outline">Cancel</Button>
                <Button variant="default">Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Button as Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button as Link</CardTitle>
            <CardDescription>Using buttons with links using asChild prop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                  Visit shadcn/ui
                  <ExternalLink />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#usage">
                  Jump to Usage
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Full Width Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Full Width Buttons</CardTitle>
            <CardDescription>Buttons that span the full width</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full">
              <Mail />
              Sign in with Email
            </Button>
            <Button variant="outline" className="w-full">
              <User />
              Create Account
            </Button>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-world Examples</CardTitle>
            <CardDescription>Practical button usage scenarios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Form Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Form Actions</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline">
                    Cancel
                  </Button>
                  <Button>
                    <Save />
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Card Actions</p>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Premium Plan</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get access to all premium features and priority support.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    Upgrade Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 />
                  </Button>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div>
              <p className="text-sm font-medium mb-3">Toolbar</p>
              <div className="flex items-center justify-between border rounded-lg p-3">
                <div className="flex gap-1">
                  <Button size="icon-sm" variant="ghost">
                    <Edit />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Copy />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Upload />
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <Download />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                  <Button size="sm">
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Alert Dialog Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Alert Dialog</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Delete Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete your account? This action cannot be undone.
                  </p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline">
                    Cancel
                  </Button>
                  <Button variant="destructive">
                    <Trash2 />
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-sm font-medium mb-3">Pagination</p>
              <div className="flex items-center justify-between border rounded-lg p-3">
                <Button variant="outline" size="sm">
                  <ChevronLeft />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">Page 1 of 10</span>
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8" id="usage">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Button component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Button } from '@/components/ui/button'

{/* Basic Variants */}
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

{/* Sizes */}
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

{/* Icon Buttons */}
<Button size="icon">
  <Settings />
</Button>

{/* With Icons */}
<Button>
  <Mail />
  Send Email
</Button>

{/* Loading State */}
<Button disabled>
  <Loader2 className="animate-spin" />
  Loading...
</Button>

{/* As Link */}
<Button asChild>
  <a href="/about">About</a>
</Button>

{/* Full Width */}
<Button className="w-full">
  Full Width Button
</Button>`}</code>
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
