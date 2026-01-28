"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarNavGroup,
  SidebarToggle,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  HomeIcon,
  FolderIcon,
  FileTextIcon,
  SettingsIcon,
  UserIcon,
  BellIcon,
  SearchIcon,
  LayoutDashboardIcon,
  BarChartIcon,
  UsersIcon,
  PackageIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  TagIcon,
  MessageSquareIcon,
  HelpCircleIcon,
  LogOutIcon,
  ChevronRightIcon,
  PlusIcon,
  StarIcon,
  CalendarIcon,
  MailIcon,
  InboxIcon,
  SendIcon,
  ArchiveIcon,
  TrashIcon,
  BookmarkIcon,
  ImageIcon,
  MusicIcon,
  VideoIcon,
  DownloadIcon,
} from "lucide-react"

// Demo component to show sidebar usage
function SidebarDemo({ variant }: { variant: string }) {
  const [activePage, setActivePage] = useState("dashboard")

  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border">
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <LayoutDashboardIcon className="size-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Acme Inc</p>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
          <SidebarToggle />
        </SidebarHeader>

        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem
              icon={<HomeIcon className="size-4" />}
              active={activePage === "dashboard"}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </SidebarNavItem>
            <SidebarNavItem
              icon={<BarChartIcon className="size-4" />}
              active={activePage === "analytics"}
              onClick={() => setActivePage("analytics")}
            >
              Analytics
            </SidebarNavItem>
            <SidebarNavItem
              icon={<UsersIcon className="size-4" />}
              active={activePage === "customers"}
              onClick={() => setActivePage("customers")}
            >
              Customers
            </SidebarNavItem>
            <SidebarNavItem
              icon={<PackageIcon className="size-4" />}
              active={activePage === "products"}
              onClick={() => setActivePage("products")}
            >
              Products
            </SidebarNavItem>
            <SidebarNavItem
              icon={<ShoppingCartIcon className="size-4" />}
              active={activePage === "orders"}
              onClick={() => setActivePage("orders")}
            >
              Orders
            </SidebarNavItem>
            <SidebarNavItem
              icon={<SettingsIcon className="size-4" />}
              active={activePage === "settings"}
              onClick={() => setActivePage("settings")}
            >
              Settings
            </SidebarNavItem>
          </SidebarNav>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h2>
          <p className="text-muted-foreground">
            This is the {activePage} page content.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="h-32 rounded-md bg-muted" />
                <p className="mt-2 text-sm font-medium">Content {i}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function SidebarPage() {
  return (
    <div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
          <Badge variant="secondary">Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          A collapsible sidebar navigation component for application layouts.
        </p>
      </div>

      {/* Basic Sidebar */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Sidebar</h2>
            <p className="text-sm text-muted-foreground">
              A simple sidebar with navigation items and collapsible toggle.
            </p>
          </div>

          <SidebarProvider>
            <SidebarDemo variant="basic" />
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div>Logo</div>
      <SidebarToggle />
    </SidebarHeader>
    <SidebarContent>
      <SidebarNav>
        <SidebarNavItem icon={<HomeIcon />}>
          Dashboard
        </SidebarNavItem>
      </SidebarNav>
    </SidebarContent>
    <SidebarFooter>
      <div>User Info</div>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Nested Navigation */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Nested Navigation</h2>
            <p className="text-sm text-muted-foreground">
              Sidebar with collapsible navigation groups.
            </p>
          </div>

          <SidebarProvider>
            <div className="flex h-[600px] overflow-hidden rounded-lg border">
              <Sidebar>
                <SidebarHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <LayoutDashboardIcon className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Acme Inc</p>
                    </div>
                  </div>
                  <SidebarToggle />
                </SidebarHeader>

                <SidebarContent>
                  <SidebarNav>
                    <SidebarNavItem icon={<HomeIcon className="size-4" />}>
                      Dashboard
                    </SidebarNavItem>

                    <SidebarNavGroup
                      label="E-Commerce"
                      icon={<ShoppingCartIcon className="size-4" />}
                      defaultOpen
                    >
                      <SidebarNavItem icon={<PackageIcon className="size-4" />}>
                        Products
                      </SidebarNavItem>
                      <SidebarNavItem icon={<ShoppingCartIcon className="size-4" />}>
                        Orders
                      </SidebarNavItem>
                      <SidebarNavItem icon={<UsersIcon className="size-4" />}>
                        Customers
                      </SidebarNavItem>
                      <SidebarNavItem icon={<TagIcon className="size-4" />}>
                        Discounts
                      </SidebarNavItem>
                    </SidebarNavGroup>

                    <SidebarNavGroup
                      label="Content"
                      icon={<FileTextIcon className="size-4" />}
                    >
                      <SidebarNavItem icon={<FileTextIcon className="size-4" />}>
                        Posts
                      </SidebarNavItem>
                      <SidebarNavItem icon={<ImageIcon className="size-4" />}>
                        Media
                      </SidebarNavItem>
                      <SidebarNavItem icon={<BookmarkIcon className="size-4" />}>
                        Categories
                      </SidebarNavItem>
                    </SidebarNavGroup>

                    <SidebarNavGroup
                      label="Settings"
                      icon={<SettingsIcon className="size-4" />}
                    >
                      <SidebarNavItem icon={<UserIcon className="size-4" />}>
                        Profile
                      </SidebarNavItem>
                      <SidebarNavItem icon={<BellIcon className="size-4" />}>
                        Notifications
                      </SidebarNavItem>
                      <SidebarNavItem icon={<CreditCardIcon className="size-4" />}>
                        Billing
                      </SidebarNavItem>
                    </SidebarNavGroup>
                  </SidebarNav>
                </SidebarContent>

                <SidebarFooter>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">John Doe</p>
                    </div>
                    <Button size="icon" variant="ghost" className="size-8">
                      <LogOutIcon className="size-4" />
                    </Button>
                  </div>
                </SidebarFooter>
              </Sidebar>

              <main className="flex-1 overflow-auto p-6">
                <h2 className="text-2xl font-bold">Content Area</h2>
                <p className="text-muted-foreground">Main content goes here</p>
              </main>
            </div>
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<SidebarNav>
  <SidebarNavItem>Dashboard</SidebarNavItem>
  <SidebarNavGroup label="E-Commerce" icon={<Icon />}>
    <SidebarNavItem>Products</SidebarNavItem>
    <SidebarNavItem>Orders</SidebarNavItem>
  </SidebarNavGroup>
</SidebarNav>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Email App Layout */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Email App Layout</h2>
            <p className="text-sm text-muted-foreground">
              Sidebar configured for an email application.
            </p>
          </div>

          <SidebarProvider>
            <div className="flex h-[600px] overflow-hidden rounded-lg border">
              <Sidebar>
                <SidebarHeader>
                  <Button className="w-full" size="sm">
                    <PlusIcon className="mr-2 size-4" />
                    Compose
                  </Button>
                </SidebarHeader>

                <SidebarContent>
                  <SidebarNav>
                    <SidebarNavItem icon={<InboxIcon className="size-4" />} active>
                      Inbox
                      <Badge variant="secondary" className="ml-auto">
                        12
                      </Badge>
                    </SidebarNavItem>
                    <SidebarNavItem icon={<StarIcon className="size-4" />}>
                      Starred
                    </SidebarNavItem>
                    <SidebarNavItem icon={<SendIcon className="size-4" />}>
                      Sent
                    </SidebarNavItem>
                    <SidebarNavItem icon={<FileTextIcon className="size-4" />}>
                      Drafts
                      <Badge variant="secondary" className="ml-auto">
                        3
                      </Badge>
                    </SidebarNavItem>
                    <SidebarNavItem icon={<ArchiveIcon className="size-4" />}>
                      Archive
                    </SidebarNavItem>
                    <SidebarNavItem icon={<TrashIcon className="size-4" />}>
                      Trash
                    </SidebarNavItem>

                    <div className="px-3 py-2">
                      <Separator />
                    </div>

                    <div className="px-3 py-2">
                      <p className="text-xs font-medium text-muted-foreground">Labels</p>
                    </div>

                    <SidebarNavItem
                      icon={<div className="size-3 rounded-full bg-blue-500" />}
                    >
                      Personal
                    </SidebarNavItem>
                    <SidebarNavItem
                      icon={<div className="size-3 rounded-full bg-green-500" />}
                    >
                      Work
                    </SidebarNavItem>
                    <SidebarNavItem
                      icon={<div className="size-3 rounded-full bg-yellow-500" />}
                    >
                      Important
                    </SidebarNavItem>
                  </SidebarNav>
                </SidebarContent>

                <SidebarFooter>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">7.2 GB of 15 GB</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[48%] bg-primary" />
                    </div>
                  </div>
                </SidebarFooter>
              </Sidebar>

              <main className="flex-1 overflow-auto p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Input placeholder="Search emails..." className="flex-1" />
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Email Subject {i}</p>
                            <p className="text-sm text-muted-foreground">
                              Preview text of the email...
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground">10:30 AM</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <Button>Compose</Button>
    </SidebarHeader>
    <SidebarContent>
      <SidebarNav>
        <SidebarNavItem>Inbox</SidebarNavItem>
        <SidebarNavItem>Sent</SidebarNavItem>
      </SidebarNav>
    </SidebarContent>
    <SidebarFooter>
      Storage info
    </SidebarFooter>
  </Sidebar>
  <main>Email content</main>
</SidebarProvider>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* File Manager Layout */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">File Manager Layout</h2>
            <p className="text-sm text-muted-foreground">
              Sidebar for file management application.
            </p>
          </div>

          <SidebarProvider defaultCollapsed>
            <div className="flex h-[600px] overflow-hidden rounded-lg border">
              <Sidebar>
                <SidebarHeader>
                  <div className="flex items-center gap-2">
                    <FolderIcon className="size-6 text-primary" />
                    <p className="text-sm font-semibold">File Manager</p>
                  </div>
                  <SidebarToggle />
                </SidebarHeader>

                <SidebarContent>
                  <SidebarNav>
                    <SidebarNavItem icon={<HomeIcon className="size-4" />}>
                      Home
                    </SidebarNavItem>
                    <SidebarNavItem icon={<StarIcon className="size-4" />}>
                      Favorites
                    </SidebarNavItem>
                    <SidebarNavItem icon={<DownloadIcon className="size-4" />}>
                      Downloads
                    </SidebarNavItem>

                    <div className="px-3 py-2">
                      <Separator />
                    </div>

                    <div className="px-3 py-2">
                      <p className="text-xs font-medium text-muted-foreground">File Types</p>
                    </div>

                    <SidebarNavItem icon={<FileTextIcon className="size-4" />}>
                      Documents
                    </SidebarNavItem>
                    <SidebarNavItem icon={<ImageIcon className="size-4" />}>
                      Images
                    </SidebarNavItem>
                    <SidebarNavItem icon={<MusicIcon className="size-4" />}>
                      Music
                    </SidebarNavItem>
                    <SidebarNavItem icon={<VideoIcon className="size-4" />}>
                      Videos
                    </SidebarNavItem>

                    <div className="px-3 py-2">
                      <Separator />
                    </div>

                    <div className="px-3 py-2">
                      <p className="text-xs font-medium text-muted-foreground">My Folders</p>
                    </div>

                    <SidebarNavItem icon={<FolderIcon className="size-4" />}>
                      Projects
                    </SidebarNavItem>
                    <SidebarNavItem icon={<FolderIcon className="size-4" />}>
                      Work
                    </SidebarNavItem>
                    <SidebarNavItem icon={<FolderIcon className="size-4" />}>
                      Personal
                    </SidebarNavItem>
                  </SidebarNav>
                </SidebarContent>

                <SidebarFooter>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Used</span>
                      <span className="font-medium">42.3 GB / 100 GB</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[42%] bg-primary" />
                    </div>
                  </div>
                </SidebarFooter>
              </Sidebar>

              <main className="flex-1 overflow-auto p-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">My Files</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <FolderIcon className="size-8 text-primary" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Folder {i}</p>
                            <p className="text-xs text-muted-foreground">24 files</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<SidebarProvider defaultCollapsed>
  <Sidebar>
    <SidebarHeader>
      <div>Logo</div>
      <SidebarToggle />
    </SidebarHeader>
    <SidebarContent>
      <SidebarNav>
        <SidebarNavItem>Home</SidebarNavItem>
        <Separator />
        <p>Section Title</p>
        <SidebarNavItem>Documents</SidebarNavItem>
      </SidebarNav>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Search */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Search</h2>
            <p className="text-sm text-muted-foreground">
              Sidebar with integrated search functionality.
            </p>
          </div>

          <SidebarProvider>
            <div className="flex h-[600px] overflow-hidden rounded-lg border">
              <Sidebar>
                <SidebarHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <LayoutDashboardIcon className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Admin Panel</p>
                    </div>
                  </div>
                  <SidebarToggle />
                </SidebarHeader>

                <div className="px-3 py-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8 h-9" />
                  </div>
                </div>

                <SidebarContent>
                  <SidebarNav>
                    <SidebarNavItem icon={<LayoutDashboardIcon className="size-4" />}>
                      Dashboard
                    </SidebarNavItem>
                    <SidebarNavItem icon={<BarChartIcon className="size-4" />}>
                      Analytics
                    </SidebarNavItem>
                    <SidebarNavItem icon={<UsersIcon className="size-4" />}>
                      Users
                    </SidebarNavItem>
                    <SidebarNavItem icon={<PackageIcon className="size-4" />}>
                      Products
                    </SidebarNavItem>
                    <SidebarNavItem icon={<ShoppingCartIcon className="size-4" />}>
                      Orders
                    </SidebarNavItem>
                    <SidebarNavItem icon={<MessageSquareIcon className="size-4" />}>
                      Messages
                      <Badge variant="destructive" className="ml-auto">
                        5
                      </Badge>
                    </SidebarNavItem>
                    <SidebarNavItem icon={<CalendarIcon className="size-4" />}>
                      Calendar
                    </SidebarNavItem>

                    <div className="px-3 py-2">
                      <Separator />
                    </div>

                    <SidebarNavItem icon={<SettingsIcon className="size-4" />}>
                      Settings
                    </SidebarNavItem>
                    <SidebarNavItem icon={<HelpCircleIcon className="size-4" />}>
                      Help & Support
                    </SidebarNavItem>
                  </SidebarNav>
                </SidebarContent>

                <SidebarFooter>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">admin@company.com</p>
                    </div>
                  </div>
                </SidebarFooter>
              </Sidebar>

              <main className="flex-1 overflow-auto p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <Button>
                      <PlusIcon className="mr-2 size-4" />
                      New Item
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: "Total Users", value: "1,234", icon: UsersIcon },
                      { label: "Revenue", value: "$12,345", icon: CreditCardIcon },
                      { label: "Orders", value: "567", icon: ShoppingCartIcon },
                      { label: "Products", value: "890", icon: PackageIcon },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <stat.icon className="size-4 text-muted-foreground" />
                        </div>
                        <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sidebar>
  <SidebarHeader>
    <div>Logo</div>
    <SidebarToggle />
  </SidebarHeader>
  <div className="px-3 py-2">
    <Input placeholder="Search..." />
  </div>
  <SidebarContent>
    <SidebarNav>
      <SidebarNavItem>Dashboard</SidebarNavItem>
    </SidebarNav>
  </SidebarContent>
</Sidebar>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Collapsed State */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Collapsed State</h2>
            <p className="text-sm text-muted-foreground">
              Sidebar in collapsed state showing only icons.
            </p>
          </div>

          <SidebarProvider defaultCollapsed>
            <div className="flex h-[500px] overflow-hidden rounded-lg border">
              <Sidebar>
                <SidebarHeader>
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <LayoutDashboardIcon className="size-4" />
                  </div>
                  <SidebarToggle />
                </SidebarHeader>

                <SidebarContent>
                  <SidebarNav>
                    <SidebarNavItem icon={<HomeIcon className="size-4" />} active>
                      Home
                    </SidebarNavItem>
                    <SidebarNavItem icon={<BarChartIcon className="size-4" />}>
                      Analytics
                    </SidebarNavItem>
                    <SidebarNavItem icon={<UsersIcon className="size-4" />}>
                      Users
                    </SidebarNavItem>
                    <SidebarNavItem icon={<PackageIcon className="size-4" />}>
                      Products
                    </SidebarNavItem>
                    <SidebarNavItem icon={<SettingsIcon className="size-4" />}>
                      Settings
                    </SidebarNavItem>
                  </SidebarNav>
                </SidebarContent>

                <SidebarFooter>
                  <Avatar className="size-8">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </SidebarFooter>
              </Sidebar>

              <main className="flex-1 overflow-auto p-6">
                <h2 className="text-2xl font-bold">Content Area</h2>
                <p className="text-muted-foreground">
                  Click the toggle button in the sidebar to expand it.
                </p>
              </main>
            </div>
          </SidebarProvider>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<SidebarProvider defaultCollapsed>
  <Sidebar>
    {/* Sidebar content */}
  </Sidebar>
</SidebarProvider>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/sheet">
          <Button variant="outline">
            ← Sheet
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/skeleton">
          <Button variant="outline">
            Skeleton →
          </Button>
        </Link>
      </div>
    </div>
  )
}
