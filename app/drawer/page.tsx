'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import {
  Menu,
  Settings,
  Filter,
  ShoppingCart,
  User,
  Bell,
  Search,
  Home,
  FileText,
  Mail,
  Calendar,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function DrawerShowcase() {
  const [goal, setGoal] = useState(350)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A drawer component that slides in from the edge of the screen.
          </p>
        </div>

        {/* Basic Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Drawer</CardTitle>
            <CardDescription>Simple drawer from bottom</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Confirm</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Drawer with Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Drawer with Form</CardTitle>
            <CardDescription>Drawer containing form inputs</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Edit Profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" placeholder="Enter your name" />
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
                      rows={3}
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save Changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Goal Setting Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Drawer</CardTitle>
            <CardDescription>Drawer with slider and interactive elements</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Set Goal</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Set Your Goal</DrawerTitle>
                    <DrawerDescription>
                      Set your daily activity goal.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => setGoal(Math.max(200, goal - 10))}
                      >
                        -
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => setGoal(Math.min(500, goal + 10))}
                      >
                        +
                      </Button>
                    </div>
                    <div className="mt-6 h-[120px]">
                      <Slider
                        value={[goal]}
                        onValueChange={(value) => setGoal(value[0])}
                        max={500}
                        min={200}
                        step={10}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Navigation Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Navigation Drawer</CardTitle>
            <CardDescription>Drawer for mobile navigation menu</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Menu className="mr-2 h-4 w-4" />
                  Menu
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerDescription>
                    Browse through the application
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-2">
                  <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Documents
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Messages
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendar
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Filter Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Drawer</CardTitle>
            <CardDescription>Drawer with filters for e-commerce</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filter Products</DrawerTitle>
                  <DrawerDescription>
                    Refine your search with filters
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Category</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="electronics" defaultChecked />
                          <Label htmlFor="electronics" className="font-normal cursor-pointer">
                            Electronics
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="clothing" />
                          <Label htmlFor="clothing" className="font-normal cursor-pointer">
                            Clothing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="books" />
                          <Label htmlFor="books" className="font-normal cursor-pointer">
                            Books
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="under50" />
                          <Label htmlFor="under50" className="font-normal cursor-pointer">
                            Under $50
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="50to100" />
                          <Label htmlFor="50to100" className="font-normal cursor-pointer">
                            $50 - $100
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="over100" />
                          <Label htmlFor="over100" className="font-normal cursor-pointer">
                            Over $100
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3">Brand</h4>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="samsung">Samsung</SelectItem>
                          <SelectItem value="sony">Sony</SelectItem>
                          <SelectItem value="lg">LG</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Apply Filters</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Shopping Cart Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Shopping Cart Drawer</CardTitle>
            <CardDescription>Drawer for shopping cart</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart (3)
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Shopping Cart</DrawerTitle>
                  <DrawerDescription>
                    You have 3 items in your cart
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 space-y-4">
                  {[
                    { name: 'Wireless Headphones', price: '$89.99', qty: 1 },
                    { name: 'USB-C Cable', price: '$12.99', qty: 2 },
                    { name: 'Phone Case', price: '$24.99', qty: 1 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                      </div>
                      <p className="font-semibold">{item.price}</p>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$140.96</span>
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">Checkout</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Continue Shopping</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Notifications Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notifications Drawer</CardTitle>
            <CardDescription>Drawer for notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                  <Badge variant="destructive" className="ml-2">3</Badge>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Notifications</DrawerTitle>
                  <DrawerDescription>
                    You have 3 unread notifications
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 space-y-2 max-h-[400px] overflow-y-auto">
                  {[
                    {
                      title: 'New message from John',
                      description: 'Hey, are we still meeting tomorrow?',
                      time: '5 min ago',
                      unread: true,
                    },
                    {
                      title: 'Payment received',
                      description: 'Your payment of $150 has been processed',
                      time: '1 hour ago',
                      unread: true,
                    },
                    {
                      title: 'Project update',
                      description: 'The design files have been updated',
                      time: '3 hours ago',
                      unread: true,
                    },
                    {
                      title: 'System maintenance',
                      description: 'Scheduled maintenance on Sunday',
                      time: '1 day ago',
                      unread: false,
                    },
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        notification.unread ? 'bg-muted/50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="size-2 rounded-full bg-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <DrawerFooter>
                  <Button variant="outline">Mark all as read</Button>
                  <DrawerClose asChild>
                    <Button variant="ghost">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Search Drawer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Drawer</CardTitle>
            <CardDescription>Drawer with search functionality</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Search</DrawerTitle>
                  <DrawerDescription>
                    Search for products, articles, or help
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Type to search..."
                      className="pl-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Recent Searches</p>
                    {['Wireless headphones', 'Laptop stand', 'USB-C cable'].map((term, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <Search className="mr-2 h-4 w-4" />
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Drawer component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

{/* Basic Drawer */}
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>
        This action cannot be undone.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Confirm</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

{/* Drawer with Form */}
<Drawer>
  <DrawerTrigger asChild>
    <Button>Edit Profile</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>
        Make changes to your profile here.
      </DrawerDescription>
    </DrawerHeader>
    <div className="px-4 space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
    </div>
    <DrawerFooter>
      <Button>Save</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

{/* Scrollable Content */}
<DrawerContent>
  <DrawerHeader>
    <DrawerTitle>Title</DrawerTitle>
  </DrawerHeader>
  <div className="px-4 max-h-[400px] overflow-y-auto">
    {/* Long content */}
  </div>
  <DrawerFooter>
    <Button>Action</Button>
  </DrawerFooter>
</DrawerContent>

{/* Custom Width */}
<Drawer>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      {/* Content */}
    </div>
  </DrawerContent>
</Drawer>`}</code>
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
