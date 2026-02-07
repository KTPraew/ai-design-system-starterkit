"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  UserIcon,
  SettingsIcon,
  BellIcon,
  HomeIcon,
  BarChartIcon,
  CalendarIcon,
  MailIcon,
  FileTextIcon,
  ImageIcon,
  MusicIcon,
  VideoIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  CheckCircle2Icon,
} from "lucide-react"

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
          <Badge variant="secondary">Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          A set of layered sections of content—known as tab panels—that are displayed one at a time.
        </p>
      </div>

      {/* Basic Tabs */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Tabs</h2>
            <p className="text-sm text-muted-foreground">
              Simple tabs with content panels.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-sm text-muted-foreground">
                  This is the overview tab content. Here you can see a summary of your dashboard.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  View detailed analytics and insights about your data.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Generate and view various reports for your business.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your notification preferences and view recent alerts.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content
  </TabsContent>
  <TabsContent value="analytics">
    Analytics content
  </TabsContent>
</Tabs>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Icons */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Icons</h2>
            <p className="text-sm text-muted-foreground">
              Tabs with icons for better visual context.
            </p>
          </div>

          <Tabs defaultValue="home" className="w-full">
            <TabsList>
              <TabsTrigger value="home">
                <HomeIcon className="size-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="profile">
                <UserIcon className="size-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings">
                <SettingsIcon className="size-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <BellIcon className="size-4" />
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home" className="space-y-4">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HomeIcon className="size-6" />
                  <h3 className="text-lg font-semibold">Home</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Welcome to your home dashboard. Quick access to your most important information.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="profile" className="space-y-4">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserIcon className="size-6" />
                  <h3 className="text-lg font-semibold">Profile</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Manage your personal information and preferences.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <SettingsIcon className="size-6" />
                  <h3 className="text-lg font-semibold">Settings</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Configure your account settings and application preferences.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BellIcon className="size-6" />
                  <h3 className="text-lg font-semibold">Notifications</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  View and manage your notifications and alerts.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TabsTrigger value="home">
  <HomeIcon className="size-4" />
  Home
</TabsTrigger>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Badges */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Badges</h2>
            <p className="text-sm text-muted-foreground">
              Tabs with notification badges.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">
                All
                <Badge variant="secondary" className="ml-2">
                  12
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                <Badge variant="default" className="ml-2">
                  3
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="archived">
                Archived
                <Badge variant="outline" className="ml-2">
                  8
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">All Messages (12)</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                      <Avatar className="size-8">
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Message {i}</p>
                        <p className="text-xs text-muted-foreground">This is a sample message</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="unread" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Unread Messages (3)</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-3 bg-muted/50">
                      <Avatar className="size-8">
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Unread Message {i}</p>
                        <p className="text-xs text-muted-foreground">You haven't read this yet</p>
                      </div>
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="archived" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Archived Messages (8)</h3>
                <p className="text-sm text-muted-foreground">
                  These messages have been archived.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TabsTrigger value="unread">
  Unread
  <Badge variant="default" className="ml-2">
    3
  </Badge>
</TabsTrigger>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Card Style */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Card Style Content</h2>
            <p className="text-sm text-muted-foreground">
              Tabs with card-styled content panels.
            </p>
          </div>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Account Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Make changes to your account here. Click save when you're done.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@johndoe" />
                  </div>
                  <Button>Save changes</Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Change your password here. After saving, you'll be logged out.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirm password</Label>
                    <Input id="confirm" type="password" />
                  </div>
                  <Button>Save password</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TabsContent value="account">
  <Card className="p-6">
    <div className="space-y-4">
      <Input id="name" />
      <Button>Save</Button>
    </div>
  </Card>
</TabsContent>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Disabled Tab */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Disabled Tab</h2>
            <p className="text-sm text-muted-foreground">
              Tabs can be disabled to prevent interaction.
            </p>
          </div>

          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Enabled</TabsTrigger>
              <TabsTrigger value="tab2" disabled>
                Disabled
              </TabsTrigger>
              <TabsTrigger value="tab3">Enabled</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 1</h3>
                <p className="text-sm text-muted-foreground">
                  This tab is enabled and can be clicked.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 2</h3>
                <p className="text-sm text-muted-foreground">
                  This tab is disabled.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab3" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 3</h3>
                <p className="text-sm text-muted-foreground">
                  This tab is also enabled.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TabsTrigger value="tab2" disabled>
  Disabled
</TabsTrigger>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Controlled Tabs */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Controlled Tabs</h2>
            <p className="text-sm text-muted-foreground">
              Control tab state programmatically.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 rounded-lg border p-4">
              <span className="text-sm font-medium">Current tab:</span>
              <Badge>{activeTab}</Badge>
              <div className="ml-auto flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setActiveTab("account")}>
                  Go to Account
                </Button>
                <Button size="sm" variant="outline" onClick={() => setActiveTab("security")}>
                  Go to Security
                </Button>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4">
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your account information and settings.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-4">
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure security options and two-factor authentication.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="preferences" className="space-y-4">
                <div className="rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Customize your application preferences and appearance.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [activeTab, setActiveTab] = useState("account")

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Content</TabsContent>
</Tabs>

<Button onClick={() => setActiveTab("account")}>
  Go to Account
</Button>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* File Types */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">File Browser</h2>
            <p className="text-sm text-muted-foreground">
              Tabs for different file type categories.
            </p>
          </div>

          <Tabs defaultValue="documents" className="w-full">
            <TabsList>
              <TabsTrigger value="documents">
                <FileTextIcon className="size-4" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="images">
                <ImageIcon className="size-4" />
                Images
              </TabsTrigger>
              <TabsTrigger value="music">
                <MusicIcon className="size-4" />
                Music
              </TabsTrigger>
              <TabsTrigger value="videos">
                <VideoIcon className="size-4" />
                Videos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="documents" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Document Files</h3>
                <div className="space-y-2">
                  {["Report.pdf", "Presentation.pptx", "Spreadsheet.xlsx"].map((file) => (
                    <div key={file} className="flex items-center gap-3 rounded-md border p-3">
                      <FileTextIcon className="size-5 text-muted-foreground" />
                      <span className="text-sm">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="images" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Image Files</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square rounded-md border bg-muted" />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="music" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Music Files</h3>
                <div className="space-y-2">
                  {["Song 1.mp3", "Song 2.mp3", "Song 3.mp3"].map((file) => (
                    <div key={file} className="flex items-center gap-3 rounded-md border p-3">
                      <MusicIcon className="size-5 text-muted-foreground" />
                      <span className="text-sm">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="videos" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Video Files</h3>
                <div className="space-y-2">
                  {["Video 1.mp4", "Video 2.mp4"].map((file) => (
                    <div key={file} className="flex items-center gap-3 rounded-md border p-3">
                      <VideoIcon className="size-5 text-muted-foreground" />
                      <span className="text-sm">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>

      {/* Order Tracking */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Order Tracking</h2>
            <p className="text-sm text-muted-foreground">
              Track order status with tabs.
            </p>
          </div>

          <Tabs defaultValue="processing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="placed">
                <ShoppingCartIcon className="size-4" />
                Placed
              </TabsTrigger>
              <TabsTrigger value="processing">
                <CheckCircle2Icon className="size-4" />
                Processing
              </TabsTrigger>
              <TabsTrigger value="shipped">
                <TruckIcon className="size-4" />
                Shipped
              </TabsTrigger>
              <TabsTrigger value="delivered" disabled>
                <CheckCircle2Icon className="size-4" />
                Delivered
              </TabsTrigger>
            </TabsList>
            <TabsContent value="placed" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <ShoppingCartIcon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Placed</h3>
                    <p className="text-sm text-muted-foreground">Jan 25, 2025 at 10:30 AM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your order has been successfully placed and is awaiting processing.
                </p>
              </Card>
            </TabsContent>
            <TabsContent value="processing" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">Jan 25, 2025 at 2:15 PM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We're preparing your order for shipment. This usually takes 1-2 business days.
                </p>
              </Card>
            </TabsContent>
            <TabsContent value="shipped" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <TruckIcon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Shipped</h3>
                    <p className="text-sm text-muted-foreground">Expected delivery: Jan 30, 2025</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Your order is on its way! Track your shipment for real-time updates.
                </p>
                <Button variant="outline" className="w-full">
                  Track Shipment
                </Button>
              </Card>
            </TabsContent>
            <TabsContent value="delivered" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Delivered</h3>
                <p className="text-sm text-muted-foreground">
                  Your order has been delivered successfully.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Card>

      {/* Full Width */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Full Width Tabs</h2>
            <p className="text-sm text-muted-foreground">
              Tabs stretched to full width.
            </p>
          </div>

          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">Tab One</TabsTrigger>
              <TabsTrigger value="tab2">Tab Two</TabsTrigger>
              <TabsTrigger value="tab3">Tab Three</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab One</h3>
                <p className="text-sm text-muted-foreground">
                  Content for the first tab with full width layout.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab Two</h3>
                <p className="text-sm text-muted-foreground">
                  Content for the second tab with full width layout.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab3" className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">Tab Three</h3>
                <p className="text-sm text-muted-foreground">
                  Content for the third tab with full width layout.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TabsList className="grid w-full grid-cols-3">
  <TabsTrigger value="tab1">Tab One</TabsTrigger>
  <TabsTrigger value="tab2">Tab Two</TabsTrigger>
  <TabsTrigger value="tab3">Tab Three</TabsTrigger>
</TabsList>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/table">
          <Button variant="outline">
            ← Table
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/textarea">
          <Button variant="outline">
            Textarea →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
