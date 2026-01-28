"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import {
  MenuIcon,
  ShoppingCartIcon,
  FilterIcon,
  SettingsIcon,
  UserIcon,
  BellIcon,
  SearchIcon,
  PlusIcon,
  EditIcon,
  InfoIcon,
  XIcon,
  HomeIcon,
  FileTextIcon,
  ImageIcon,
  MusicIcon,
  VideoIcon,
  FolderIcon,
  MailIcon,
  CalendarIcon,
  TruckIcon,
  PackageIcon,
  CreditCardIcon,
} from "lucide-react"

export default function SheetPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 299, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 399, quantity: 1 },
  ])

  const [notifications] = useState([
    { id: 1, title: "New message", description: "You have a new message from John", time: "2m ago", read: false },
    { id: 2, title: "Update available", description: "A new software update is available", time: "1h ago", read: false },
    { id: 3, title: "Payment received", description: "You received a payment of $299", time: "3h ago", read: true },
    { id: 4, title: "New follower", description: "Someone started following you", time: "5h ago", read: true },
  ])

  return (
    <div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
          <Badge variant="secondary">Overlay</Badge>
        </div>
        <p className="text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the screen.
        </p>
      </div>

      {/* Side Positions */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Side Positions</h2>
            <p className="text-sm text-muted-foreground">
              Sheets can slide in from any side of the screen.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Right (Default)</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the right side of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    This is the default position for sheets. It's commonly used for navigation menus,
                    settings panels, and detail views.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the left side of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Left sheets are often used for navigation drawers and sidebars.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the top of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Top sheets are useful for search interfaces and quick actions.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the bottom of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Bottom sheets are commonly used on mobile devices for actions and options.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation Menu */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Navigation Menu</h2>
            <p className="text-sm text-muted-foreground">
              Using sheet as a mobile navigation drawer.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Browse through the app sections
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-4">
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <HomeIcon className="mr-2 size-4" />
                      Home
                    </SheetClose>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <FileTextIcon className="mr-2 size-4" />
                      Documents
                    </SheetClose>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <ImageIcon className="mr-2 size-4" />
                      Gallery
                    </SheetClose>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <MusicIcon className="mr-2 size-4" />
                      Music
                    </SheetClose>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <VideoIcon className="mr-2 size-4" />
                      Videos
                    </SheetClose>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <FolderIcon className="mr-2 size-4" />
                      Files
                    </SheetClose>
                  </Button>
                  <Separator className="my-2" />
                  <Button variant="ghost" className="justify-start" asChild>
                    <SheetClose>
                      <SettingsIcon className="mr-2 size-4" />
                      Settings
                    </SheetClose>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <MenuIcon />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    <div className="flex flex-col gap-2 py-4">
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">Documents</Button>
    </div>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Shopping Cart */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used as a shopping cart with items and checkout.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <ShoppingCartIcon className="mr-2 size-4" />
                  Cart ({cartItems.length})
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    {cartItems.length} items in your cart
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="flex-1 -mx-4 px-4">
                  <div className="space-y-4 py-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="flex size-16 items-center justify-center rounded-md bg-muted">
                          <PackageIcon className="size-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">${item.price}.00</p>
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="size-6"
                              onClick={() => {
                                setCartItems(cartItems.map(i =>
                                  i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
                                ))
                              }}
                            >
                              -
                            </Button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="size-6"
                              onClick={() => {
                                setCartItems(cartItems.map(i =>
                                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                                ))
                              }}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-8"
                          onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
                        >
                          <XIcon className="size-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Separator className="-mx-4 w-[calc(100%+2rem)]" />
                <div className="space-y-2 py-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}.00
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">
                      ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}.00
                    </span>
                  </div>
                </div>
                <SheetFooter>
                  <Button className="w-full">
                    <CreditCardIcon className="mr-2 size-4" />
                    Checkout
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Open Cart</Button>
  </SheetTrigger>
  <SheetContent className="flex flex-col">
    <SheetHeader>
      <SheetTitle>Shopping Cart</SheetTitle>
    </SheetHeader>
    <ScrollArea className="flex-1">
      {/* Cart items */}
    </ScrollArea>
    <SheetFooter>
      <Button>Checkout</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Filter Panel */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Filter Panel</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used for filtering and search options.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <FilterIcon className="mr-2 size-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search results
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Price Range</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Min" type="number" />
                      <Input placeholder="Max" type="number" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Categories</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="electronics" />
                        <label htmlFor="electronics" className="text-sm">
                          Electronics
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="clothing" />
                        <label htmlFor="clothing" className="text-sm">
                          Clothing
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="books" />
                        <label htmlFor="books" className="text-sm">
                          Books
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="home" />
                        <label htmlFor="home" className="text-sm">
                          Home & Garden
                        </label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Condition</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="new" />
                        <label htmlFor="new" className="text-sm">
                          New
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="used" />
                        <label htmlFor="used" className="text-sm">
                          Used
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="refurbished" />
                        <label htmlFor="refurbished" className="text-sm">
                          Refurbished
                        </label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="free-shipping" className="text-sm font-medium">
                        Free Shipping
                      </Label>
                      <Switch id="free-shipping" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="on-sale" className="text-sm font-medium">
                        On Sale
                      </Label>
                      <Switch id="on-sale" />
                    </div>
                  </div>
                </div>
                <SheetFooter className="gap-2 sm:gap-0">
                  <SheetClose asChild>
                    <Button variant="outline">Clear</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Filters</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
    </SheetHeader>
    <div className="space-y-6 py-4">
      {/* Filter options */}
    </div>
    <SheetFooter>
      <Button variant="outline">Clear</Button>
      <Button>Apply</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Settings Panel */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Settings Panel</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used for application settings.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <SettingsIcon className="mr-2 size-4" />
                  Settings
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription>
                    Manage your account preferences
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-12rem)] py-4">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Profile</h3>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notif">Email notifications</Label>
                            <p className="text-xs text-muted-foreground">
                              Receive email about your account activity
                            </p>
                          </div>
                          <Switch id="email-notif" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notif">Push notifications</Label>
                            <p className="text-xs text-muted-foreground">
                              Receive push notifications on your device
                            </p>
                          </div>
                          <Switch id="push-notif" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Appearance</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="dark-mode">Dark mode</Label>
                          <p className="text-xs text-muted-foreground">
                            Use dark theme
                          </p>
                        </div>
                        <Switch id="dark-mode" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Privacy</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="profile-public">Public profile</Label>
                            <p className="text-xs text-muted-foreground">
                              Make your profile visible to everyone
                            </p>
                          </div>
                          <Switch id="profile-public" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="analytics">Analytics</Label>
                            <p className="text-xs text-muted-foreground">
                              Help improve the app with usage data
                            </p>
                          </div>
                          <Switch id="analytics" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Save Changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Settings</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
    </SheetHeader>
    <ScrollArea className="h-[calc(100vh-12rem)]">
      {/* Settings sections */}
    </ScrollArea>
    <SheetFooter>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used to display notification list.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <BellIcon className="size-4" />
                  <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>
                    You have {notifications.filter(n => !n.read).length} unread notifications
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-10rem)] py-4">
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`rounded-lg border p-4 ${!notification.read ? 'bg-muted/50' : ''}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {notification.description}
                            </p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <div className="size-2 rounded-full bg-primary" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full">Mark all as read</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <BellIcon />
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
    </SheetHeader>
    <ScrollArea>
      {notifications.map((notification) => (
        <div key={notification.id}>
          {notification.title}
        </div>
      ))}
    </ScrollArea>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Create/Edit Form */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Create/Edit Form</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used for creating or editing content.
            </p>
          </div>

          <div className="flex gap-4 rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <PlusIcon className="mr-2 size-4" />
                  Create Post
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Create Post</SheetTitle>
                  <SheetDescription>
                    Share your thoughts with the community
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">Title</Label>
                    <Input id="post-title" placeholder="Enter post title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-content">Content</Label>
                    <Textarea
                      id="post-content"
                      placeholder="Write your post content here..."
                      rows={8}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-tags">Tags</Label>
                    <Input id="post-tags" placeholder="javascript, react, web" />
                  </div>
                </div>
                <SheetFooter className="gap-2 sm:gap-0">
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Publish</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <EditIcon className="mr-2 size-4" />
                  Edit Profile
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Update your profile information
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">Full Name</Label>
                    <Input id="profile-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-username">Username</Label>
                    <Input id="profile-username" defaultValue="@johndoe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-bio">Bio</Label>
                    <Textarea
                      id="profile-bio"
                      placeholder="Tell us about yourself"
                      rows={4}
                      defaultValue="Software developer passionate about web technologies."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-website">Website</Label>
                    <Input id="profile-website" placeholder="https://yourwebsite.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-location">Location</Label>
                    <Input id="profile-location" placeholder="San Francisco, CA" />
                  </div>
                </div>
                <SheetFooter className="gap-2 sm:gap-0">
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Save Changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Create Post</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Create Post</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <Input placeholder="Title" />
      <Textarea placeholder="Content" />
    </div>
    <SheetFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Publish</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Detail View */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Detail View</h2>
            <p className="text-sm text-muted-foreground">
              Sheet used to show detailed information about an item.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <InfoIcon className="mr-2 size-4" />
                  View Details
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Order Details</SheetTitle>
                  <SheetDescription>
                    Order #ORD-2025-00123
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-10rem)] py-4">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Order Status</h3>
                      <div className="flex items-center gap-2">
                        <Badge>In Transit</Badge>
                        <span className="text-xs text-muted-foreground">
                          Expected delivery: Jan 30, 2025
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Items</h3>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="flex size-16 items-center justify-center rounded-md bg-muted">
                            <PackageIcon className="size-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Wireless Headphones</p>
                            <p className="text-xs text-muted-foreground">Black, Premium Edition</p>
                            <p className="text-sm font-medium mt-1">$299.00 × 1</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex size-16 items-center justify-center rounded-md bg-muted">
                            <PackageIcon className="size-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Laptop Stand</p>
                            <p className="text-xs text-muted-foreground">Silver, Adjustable</p>
                            <p className="text-sm font-medium mt-1">$79.00 × 1</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Shipping Address</h3>
                      <div className="rounded-lg bg-muted p-3 text-sm">
                        <p className="font-medium">John Doe</p>
                        <p className="text-muted-foreground">123 Main Street</p>
                        <p className="text-muted-foreground">Apt 4B</p>
                        <p className="text-muted-foreground">San Francisco, CA 94102</p>
                        <p className="text-muted-foreground">United States</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Payment Method</h3>
                      <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
                        <CreditCardIcon className="size-4 text-muted-foreground" />
                        <span className="text-sm">Visa ending in 4242</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Order Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>$378.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$30.24</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>$408.24</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Tracking</h3>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex size-8 items-center justify-center rounded-full bg-primary">
                              <div className="size-2 rounded-full bg-primary-foreground" />
                            </div>
                            <div className="w-px flex-1 bg-border" />
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="text-sm font-medium">Order placed</p>
                            <p className="text-xs text-muted-foreground">Jan 25, 2025 at 10:30 AM</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex size-8 items-center justify-center rounded-full bg-primary">
                              <div className="size-2 rounded-full bg-primary-foreground" />
                            </div>
                            <div className="w-px flex-1 bg-border" />
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="text-sm font-medium">Processing</p>
                            <p className="text-xs text-muted-foreground">Jan 25, 2025 at 2:15 PM</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex size-8 items-center justify-center rounded-full bg-primary">
                              <TruckIcon className="size-4 text-primary-foreground" />
                            </div>
                            <div className="w-px flex-1 bg-border" />
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="text-sm font-medium">Shipped</p>
                            <p className="text-xs text-muted-foreground">Jan 26, 2025 at 9:00 AM</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex size-8 items-center justify-center rounded-full border-2 border-muted-foreground/20">
                              <div className="size-2 rounded-full bg-muted-foreground/20" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">Delivered</p>
                            <p className="text-xs text-muted-foreground">Expected Jan 30, 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <SheetFooter>
                  <Button variant="outline" className="w-full">
                    <MailIcon className="mr-2 size-4" />
                    Contact Support
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>View Details</Button>
  </SheetTrigger>
  <SheetContent className="w-full sm:max-w-lg">
    <SheetHeader>
      <SheetTitle>Order Details</SheetTitle>
    </SheetHeader>
    <ScrollArea>
      {/* Detail content */}
    </ScrollArea>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Search Sheet */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Search Sheet</h2>
            <p className="text-sm text-muted-foreground">
              Top sheet for search interface.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <SearchIcon className="mr-2 size-4" />
                  Search
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto">
                <SheetHeader>
                  <SheetTitle>Search</SheetTitle>
                  <SheetDescription>
                    Search across all content
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Type to search..."
                      className="pl-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Recent searches</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React components</Badge>
                      <Badge variant="secondary">Next.js tutorial</Badge>
                      <Badge variant="secondary">TypeScript tips</Badge>
                      <Badge variant="secondary">CSS animations</Badge>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Sheet>
  <SheetTrigger asChild>
    <Button>Search</Button>
  </SheetTrigger>
  <SheetContent side="top" className="h-auto">
    <SheetHeader>
      <SheetTitle>Search</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <Input placeholder="Search..." />
    </div>
  </SheetContent>
</Sheet>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/separator">
          <Button variant="outline">
            ← Separator
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
