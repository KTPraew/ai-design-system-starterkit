"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function SkeletonPage() {
  const [showSkeleton, setShowSkeleton] = useState(true)

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
          <Badge variant="secondary">Loading</Badge>
        </div>
        <p className="text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      {/* Toggle Control */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="show-skeleton">Show Skeleton States</Label>
            <p className="text-sm text-muted-foreground">
              Toggle to see skeleton loading states vs loaded content
            </p>
          </div>
          <Switch
            id="show-skeleton"
            checked={showSkeleton}
            onCheckedChange={setShowSkeleton}
          />
        </div>
      </Card>

      {/* Basic Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Simple skeleton shapes for text and content.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-1/2" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Different Shapes */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Different Shapes</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton shapes for various content types.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Circle (Avatar)</p>
              <Skeleton className="size-12 rounded-full" />
            </div>

            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Rectangle</p>
              <Skeleton className="h-12 w-full" />
            </div>

            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Square</p>
              <Skeleton className="size-24" />
            </div>

            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Rounded</p>
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Pill</p>
              <Skeleton className="h-8 w-24 rounded-full" />
            </div>

            <div className="space-y-2 rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground">Large Block</p>
              <Skeleton className="h-32 w-full" />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Skeleton className="size-12 rounded-full" />
<Skeleton className="h-12 w-full" />
<Skeleton className="h-8 w-24 rounded-full" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Card Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Card Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for card components with image and content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showSkeleton ? (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3 rounded-lg border p-4">
                    <Skeleton className="h-48 w-full rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-20 rounded-full" />
                      <Skeleton className="h-8 w-20 rounded-full" />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3 rounded-lg border p-4">
                    <div className="h-48 w-full rounded-md bg-muted" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Card Title {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        This is a description of the card content that appears after loading.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge>Tag 1</Badge>
                      <Badge>Tag 2</Badge>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-3 rounded-lg border p-4">
  <Skeleton className="h-48 w-full rounded-md" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-full" />
  </div>
  <div className="flex gap-2">
    <Skeleton className="h-8 w-20 rounded-full" />
    <Skeleton className="h-8 w-20 rounded-full" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Profile Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Profile Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for user profile cards and components.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              {showSkeleton ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="size-16 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Separator />
                  <Skeleton className="h-9 w-full" />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      JD
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Role</span>
                      <span className="font-medium">Administrator</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Joined</span>
                      <span className="font-medium">January 2025</span>
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full">View Profile</Button>
                </div>
              )}
            </div>

            <div className="rounded-lg border p-6">
              {showSkeleton ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Skeleton className="size-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex gap-2 pt-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      SA
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                      <p className="text-sm font-medium">Sarah Anderson</p>
                      <p className="text-sm text-muted-foreground">
                        Just completed the new design mockups for the dashboard redesign project.
                        Looking forward to your feedback!
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Badge variant="secondary">Design</Badge>
                        <Badge variant="secondary">UI/UX</Badge>
                        <Badge variant="secondary">Dashboard</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center gap-4">
  <Skeleton className="size-16 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-48" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* List Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">List Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for list items and table rows.
            </p>
          </div>

          <div className="rounded-lg border">
            {showSkeleton ? (
              <div className="divide-y">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4">
                    <Skeleton className="size-10 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                    <Skeleton className="h-8 w-20" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y">
                {[
                  { title: "Item 1", description: "Description for item 1", status: "Active" },
                  { title: "Item 2", description: "Description for item 2", status: "Pending" },
                  { title: "Item 3", description: "Description for item 3", status: "Active" },
                  { title: "Item 4", description: "Description for item 4", status: "Inactive" },
                  { title: "Item 5", description: "Description for item 5", status: "Active" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant={item.status === "Active" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="divide-y">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-4 p-4">
      <Skeleton className="size-10 rounded-md" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-3 w-64" />
      </div>
      <Skeleton className="h-8 w-20" />
    </div>
  ))}
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Article Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Article Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for blog posts and article content.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            {showSkeleton ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex items-center gap-4">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <Skeleton className="h-64 w-full rounded-md" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">The Future of Web Development</h2>
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">January 29, 2025</p>
                  </div>
                </div>
                <div className="h-64 w-full rounded-md bg-muted" />
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Web development has evolved significantly over the past decade, with new frameworks,
                    tools, and best practices emerging constantly. In this article, we'll explore the
                    latest trends and technologies shaping the future of web development.
                  </p>
                  <p>
                    From server-side rendering to edge computing, developers now have more options than
                    ever before. Understanding these technologies and when to use them is crucial for
                    building modern, performant web applications.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge>Web Development</Badge>
                  <Badge>Frontend</Badge>
                  <Badge>Technology</Badge>
                </div>
              </div>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-4">
  <Skeleton className="h-8 w-3/4" />
  <div className="flex items-center gap-4">
    <Skeleton className="size-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-32" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
  <Skeleton className="h-64 w-full" />
  <div className="space-y-3">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Table Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Table Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for data tables and grids.
            </p>
          </div>

          <div className="rounded-lg border">
            {showSkeleton ? (
              <div>
                <div className="grid grid-cols-4 gap-4 border-b bg-muted/50 p-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="divide-y">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 p-4">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-4 gap-4 border-b bg-muted/50 p-4 font-medium">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Role</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {[
                    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                    { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
                    { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
                    { name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
                    { name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Active" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 p-4">
                      <div className="font-medium">{row.name}</div>
                      <div className="text-muted-foreground">{row.email}</div>
                      <div className="text-sm">{row.role}</div>
                      <Badge variant={row.status === "Active" ? "default" : "secondary"}>
                        {row.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="divide-y">
  {[1, 2, 3].map((i) => (
    <div key={i} className="grid grid-cols-4 gap-4 p-4">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-16 rounded-full" />
    </div>
  ))}
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Dashboard Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Dashboard Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Complex skeleton for dashboard layouts.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            {showSkeleton ? (
              <>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-9 w-32" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-3 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="size-4" />
                      </div>
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="space-y-4 rounded-lg border p-6">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-64 w-full" />
                  </div>
                  <div className="space-y-4 rounded-lg border p-6">
                    <Skeleton className="h-6 w-32" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Skeleton className="size-10 rounded-full" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-32" />
                            <Skeleton className="h-3 w-48" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Dashboard Overview</h2>
                  <Button>Export Data</Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Total Users", value: "1,234", change: "+12.5%" },
                    { label: "Revenue", value: "$12,345", change: "+8.2%" },
                    { label: "Orders", value: "567", change: "+23.1%" },
                    { label: "Conversion", value: "3.2%", change: "+0.5%" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <Badge variant="secondary">{stat.change}</Badge>
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="space-y-4 rounded-lg border p-6">
                    <h3 className="font-semibold">Revenue Chart</h3>
                    <div className="flex h-64 items-center justify-center rounded-md bg-muted">
                      <p className="text-sm text-muted-foreground">Chart Area</p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg border p-6">
                    <h3 className="font-semibold">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { user: "John Doe", action: "Created new project" },
                        { user: "Jane Smith", action: "Updated profile" },
                        { user: "Bob Johnson", action: "Added new item" },
                        { user: "Alice Brown", action: "Commented on post" },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.user}</p>
                            <p className="text-xs text-muted-foreground">{activity.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-6">
  <div className="flex items-center justify-between">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-9 w-32" />
  </div>
  <div className="grid gap-4 grid-cols-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="space-y-3 border p-4">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-8 w-24" />
      </div>
    ))}
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Form Skeleton */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Form Skeleton</h2>
            <p className="text-sm text-muted-foreground">
              Skeleton for form inputs and fields.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            {showSkeleton ? (
              <>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-32 w-full" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-4" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <div className="h-10 rounded-md border px-3 py-2">
                    <p className="text-sm">John Doe</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <div className="h-10 rounded-md border px-3 py-2">
                    <p className="text-sm">john.doe@example.com</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Message</Label>
                  <div className="h-32 rounded-md border p-3">
                    <p className="text-sm text-muted-foreground">
                      Your message content will appear here...
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded border bg-primary" />
                  <Label>I agree to the terms and conditions</Label>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </>
            )}
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-6">
  <div className="space-y-2">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-32 w-full" />
  </div>
  <div className="flex gap-2">
    <Skeleton className="h-10 w-24" />
    <Skeleton className="h-10 w-24" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/sidebar">
          <Button variant="outline">
            ← Sidebar
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/slider">
          <Button variant="outline">
            Slider →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
