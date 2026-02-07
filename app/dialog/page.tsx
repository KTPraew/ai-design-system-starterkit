'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Copy, Share2, Settings, UserPlus, AlertTriangle, Trash2 } from 'lucide-react'

export default function DialogShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
          </p>
        </div>

        {/* Basic Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Dialog</CardTitle>
            <CardDescription>Simple dialog with title and description</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="button">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Form Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Dialog</CardTitle>
            <CardDescription>Dialog with form inputs</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      defaultValue="@johndoe"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john@example.com"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="I'm a software developer"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Controlled Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Controlled Dialog</CardTitle>
            <CardDescription>Dialog with controlled state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Controlled Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Controlled Dialog</DialogTitle>
                    <DialogDescription>
                      This dialog's open state is controlled by React state.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      You can control this dialog programmatically using state management.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Close
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <p className="text-sm text-muted-foreground">
                Dialog is: <span className="font-medium text-foreground">{open ? 'Open' : 'Closed'}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Share Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Share Dialog</CardTitle>
            <CardDescription>Dialog for sharing content</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://ui.shadcn.com/docs/installation"
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Settings Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Settings Dialog</CardTitle>
            <CardDescription>Complex dialog with multiple form fields</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Configure your application settings and preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                        <SelectItem value="pst">PST</SelectItem>
                        <SelectItem value="cst">CST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notifications">Notification Preferences</Label>
                    <Textarea
                      id="notifications"
                      placeholder="Describe your notification preferences"
                      rows={3}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">Save Settings</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Confirmation Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Confirmation Dialog</CardTitle>
            <CardDescription>Dialog for confirming destructive actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <DialogTitle>Delete Account</DialogTitle>
                    </div>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                      <p className="text-sm font-medium text-destructive">
                        Warning: This is a destructive action
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        All your data, including projects, files, and settings will be permanently deleted.
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="button" variant="destructive">
                      Delete Account
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Logout</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to logout? You will need to sign in again to access your account.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="button">Logout</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Custom Styled Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Styled Dialog</CardTitle>
            <CardDescription>Dialog with custom styling and content</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Subscribe to Newsletter</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Stay Updated</DialogTitle>
                  <DialogDescription className="text-base">
                    Subscribe to our newsletter and get the latest updates directly in your inbox.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email-sub">Email address</Label>
                    <Input
                      id="email-sub"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-primary mt-2" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Weekly updates</p>
                        <p className="text-sm text-muted-foreground">
                          Get product updates and news once a week
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mt-3">
                      <div className="size-2 rounded-full bg-primary mt-2" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">No spam</p>
                        <p className="text-sm text-muted-foreground">
                          We respect your privacy. Unsubscribe anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Scrollable Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scrollable Dialog</CardTitle>
            <CardDescription>Dialog with scrollable content</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Terms</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Terms of Service</DialogTitle>
                  <DialogDescription>
                    Please read our terms of service carefully.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">1. Acceptance of Terms</h4>
                    <p className="text-muted-foreground">
                      By accessing and using this service, you accept and agree to be bound by the terms
                      and provision of this agreement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Use License</h4>
                    <p className="text-muted-foreground">
                      Permission is granted to temporarily download one copy of the materials on our website
                      for personal, non-commercial transitory viewing only. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">3. Disclaimer</h4>
                    <p className="text-muted-foreground">
                      The materials on our website are provided on an 'as is' basis. We make no warranties,
                      expressed or implied, and hereby disclaim and negate all other warranties including,
                      without limitation, implied warranties or conditions of merchantability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">4. Limitations</h4>
                    <p className="text-muted-foreground">
                      In no event shall our company or its suppliers be liable for any damages arising out
                      of the use or inability to use the materials on our website. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">5. Revisions</h4>
                    <p className="text-muted-foreground">
                      The materials appearing on our website could include technical, typographical, or
                      photographic errors. We do not warrant that any of the materials on our website are
                      accurate, complete or current.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline">
                    Decline
                  </Button>
                  <Button type="button">Accept</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Dialog component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

{/* Basic Dialog */}
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* Controlled Dialog */}
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>

{/* Form Dialog */}
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* Scrollable Dialog */}
<DialogContent className="max-h-[80vh] overflow-y-auto">
  {/* Long content */}
</DialogContent>`}</code>
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
