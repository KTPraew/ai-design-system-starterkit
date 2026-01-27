'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Search,
  Inbox,
  FileText,
  Bell,
  ShoppingCart,
  Users,
  FolderOpen,
  Image,
  Star,
  Plus,
  Upload,
  RefreshCw,
  AlertCircle,
} from 'lucide-react'

export default function EmptyShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Empty State</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Empty state components for when there's no data to display.
          </p>
        </div>

        {/* Basic Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Empty State</CardTitle>
            <CardDescription>Simple empty state with icon and text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <FileText className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No documents yet</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                You haven't created any documents yet. Start by creating your first document.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Empty State with Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Action Button</CardTitle>
            <CardDescription>Empty state with call-to-action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Plus className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create your first project</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Get started by creating a new project. You can add tasks, collaborate with your team, and track progress.
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Empty State</CardTitle>
            <CardDescription>No search results found</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10"
                  defaultValue="nonexistent query"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-4 mb-4">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-sm text-muted-foreground max-w-sm mb-4">
                  We couldn't find any results for "nonexistent query". Try searching for something else.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Clear Search
                  </Button>
                  <Button size="sm">Browse All</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inbox Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inbox Empty State</CardTitle>
            <CardDescription>No messages in inbox</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-green-500/10 p-4 mb-4">
                <Inbox className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                You have no new messages. Enjoy your day!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Cart Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Shopping Cart Empty</CardTitle>
            <CardDescription>No items in cart</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
              </p>
              <Button>Continue Shopping</Button>
            </div>
          </CardContent>
        </Card>

        {/* No Notifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notifications Empty</CardTitle>
            <CardDescription>No new notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-blue-500/10 p-4 mb-4">
                <Bell className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No notifications</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                You're all caught up! We'll notify you when something new happens.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* No Team Members */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Team Empty State</CardTitle>
            <CardDescription>No team members yet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-purple-500/10 p-4 mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build your team</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Start collaborating by inviting team members to join your workspace.
              </p>
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Invite Team
                </Button>
                <Button variant="outline">Import Contacts</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Upload Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Upload Empty</CardTitle>
            <CardDescription>No files uploaded</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-lg">
              <div className="rounded-full bg-muted p-4 mb-4">
                <Upload className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload your files</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Drag and drop files here, or click to browse from your computer.
              </p>
              <div className="flex gap-2">
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Choose Files
                </Button>
                <Button variant="outline">Import from URL</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty Folder */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Empty Folder</CardTitle>
            <CardDescription>No items in folder</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-yellow-500/10 p-4 mb-4">
                <FolderOpen className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">This folder is empty</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Add files or create new folders to organize your content.
              </p>
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Files
                </Button>
                <Button variant="outline">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  New Folder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* No Favorites */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Favorites Empty</CardTitle>
            <CardDescription>No favorite items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-amber-500/10 p-4 mb-4">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Start adding items to your favorites to quickly access them later.
              </p>
              <Button variant="outline">
                Browse Items
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Error State</CardTitle>
            <CardDescription>Something went wrong</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-destructive/10 p-4 mb-4">
                <AlertCircle className="h-10 w-10 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                We're having trouble loading your data. Please try again or contact support if the problem persists.
              </p>
              <div className="flex gap-2">
                <Button>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compact Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compact Empty State</CardTitle>
            <CardDescription>Smaller empty state for sidebars or panels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Image className="h-8 w-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium mb-1">No images</p>
              <p className="text-xs text-muted-foreground mb-4">
                Upload images to get started
              </p>
              <Button size="sm">
                <Upload className="mr-2 h-3 w-3" />
                Upload
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Inline Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inline Empty State</CardTitle>
            <CardDescription>Horizontal layout for tables or lists</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="rounded-full bg-muted p-3">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">No items found</h4>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your filters or create a new item.
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Item
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to implement empty states</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Button } from '@/components/ui/button'
import { FileText, Plus } from 'lucide-react'

{/* Basic Empty State */}
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="rounded-full bg-muted p-4 mb-4">
    <FileText className="h-10 w-10 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold mb-2">
    No documents yet
  </h3>
  <p className="text-sm text-muted-foreground max-w-sm">
    You haven't created any documents yet.
  </p>
</div>

{/* With Action Button */}
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="rounded-full bg-primary/10 p-4 mb-4">
    <Plus className="h-10 w-10 text-primary" />
  </div>
  <h3 className="text-lg font-semibold mb-2">
    Create your first project
  </h3>
  <p className="text-sm text-muted-foreground max-w-sm mb-6">
    Get started by creating a new project.
  </p>
  <Button>
    <Plus className="mr-2 h-4 w-4" />
    New Project
  </Button>
</div>

{/* With Multiple Actions */}
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="rounded-full bg-muted p-4 mb-4">
    <FileText className="h-10 w-10 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold mb-2">Title</h3>
  <p className="text-sm text-muted-foreground max-w-sm mb-6">
    Description text
  </p>
  <div className="flex gap-2">
    <Button>Primary Action</Button>
    <Button variant="outline">Secondary Action</Button>
  </div>
</div>

{/* Compact Version */}
<div className="flex flex-col items-center justify-center py-8 text-center">
  <FileText className="h-8 w-8 text-muted-foreground mb-3" />
  <p className="text-sm font-medium mb-1">Title</p>
  <p className="text-xs text-muted-foreground mb-4">
    Description
  </p>
  <Button size="sm">Action</Button>
</div>

{/* Inline Version */}
<div className="flex items-center gap-4 p-6 border rounded-lg">
  <div className="rounded-full bg-muted p-3">
    <FileText className="h-6 w-6 text-muted-foreground" />
  </div>
  <div className="flex-1">
    <h4 className="font-medium mb-1">No items found</h4>
    <p className="text-sm text-muted-foreground">
      Description text
    </p>
  </div>
  <Button>Action</Button>
</div>`}</code>
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
