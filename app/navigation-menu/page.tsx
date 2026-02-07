"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Home, BookOpen, Lightbulb, Code, Palette, Layout, ShoppingCart, User, Settings, HelpCircle, FileText, Image, Video, Music, Package, Truck, CreditCard, Users, Mail, Calendar, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

const components = [
  {
    title: "Alert Dialog",
    href: "/dialog",
    description: "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Button",
    href: "/button",
    description: "Displays a button or a component that looks like a button.",
  },
  {
    title: "Card",
    href: "/card",
    description: "Displays a card with header, content, and footer.",
  },
  {
    title: "Input",
    href: "/input",
    description: "Displays a form input field or a component that looks like an input.",
  },
  {
    title: "Select",
    href: "/native-select",
    description: "Displays a list of options for the user to pick from.",
  },
  {
    title: "Checkbox",
    href: "/checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
  },
]

export default function NavigationMenuPage() {
  return (
    <DocsLayoutWrapper>
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Navigation Menu</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A collection of links for navigating websites with complex navigation hierarchies and mega menus.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Navigation Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Navigation Menu</CardTitle>
            <CardDescription>Simple navigation menu with dropdown content</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/accordion" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/button" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/card" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/components" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Navigation menu items with icons</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem href="/accordion" title="Documentation">
                        <FileText className="h-4 w-4 mr-2 inline" />
                        Complete documentation for all components
                      </ListItem>
                      <ListItem href="/button" title="Tutorials">
                        <Lightbulb className="h-4 w-4 mr-2 inline" />
                        Step-by-step guides and examples
                      </ListItem>
                      <ListItem href="/card" title="Examples">
                        <Code className="h-4 w-4 mr-2 inline" />
                        Real-world component examples
                      </ListItem>
                      <ListItem href="/chart" title="Templates">
                        <Layout className="h-4 w-4 mr-2 inline" />
                        Pre-built page templates
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Palette className="mr-2 h-4 w-4" />
                    Design
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <ListItem href="/badge" title="Colors">
                        <Palette className="h-4 w-4 mr-2 inline" />
                        Color palette and themes
                      </ListItem>
                      <ListItem href="/button" title="Typography">
                        <FileText className="h-4 w-4 mr-2 inline" />
                        Font styles and text formatting
                      </ListItem>
                      <ListItem href="/card" title="Icons">
                        <Image className="h-4 w-4 mr-2 inline" />
                        Icon library and usage
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* E-commerce Menu */}
        <Card>
          <CardHeader>
            <CardTitle>E-commerce Navigation</CardTitle>
            <CardDescription>Navigation menu for an online store</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-3">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2">Categories</h4>
                        <ListItem href="/accordion" title="Electronics" />
                        <ListItem href="/button" title="Clothing" />
                        <ListItem href="/card" title="Home & Garden" />
                        <ListItem href="/chart" title="Sports" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2">Brands</h4>
                        <ListItem href="/badge" title="Brand A" />
                        <ListItem href="/breadcrumb" title="Brand B" />
                        <ListItem href="/button" title="Brand C" />
                        <ListItem href="/calendar" title="Brand D" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2">Featured</h4>
                        <ListItem href="/carousel" title="New Arrivals" />
                        <ListItem href="/chart" title="Best Sellers" />
                        <ListItem href="/checkbox" title="On Sale" />
                        <ListItem href="/collapsible" title="Clearance" />
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Truck className="mr-2 h-4 w-4" />
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                      <ListItem href="/accordion" title="Shipping Info">
                        <Truck className="h-4 w-4 mr-2 inline" />
                        Delivery options and tracking
                      </ListItem>
                      <ListItem href="/button" title="Returns">
                        <Package className="h-4 w-4 mr-2 inline" />
                        Easy returns within 30 days
                      </ListItem>
                      <ListItem href="/card" title="Gift Cards">
                        <CreditCard className="h-4 w-4 mr-2 inline" />
                        Perfect for any occasion
                      </ListItem>
                      <ListItem href="/chart" title="Support">
                        <HelpCircle className="h-4 w-4 mr-2 inline" />
                        24/7 customer support
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/components" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Mega Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Mega Menu</CardTitle>
            <CardDescription>Large navigation menu with multiple sections</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[800px] grid-cols-4 gap-3 p-4">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2 text-muted-foreground">Electronics</h4>
                        <ListItem href="/accordion" title="Laptops" />
                        <ListItem href="/button" title="Phones" />
                        <ListItem href="/card" title="Tablets" />
                        <ListItem href="/chart" title="Accessories" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2 text-muted-foreground">Clothing</h4>
                        <ListItem href="/badge" title="Men's" />
                        <ListItem href="/breadcrumb" title="Women's" />
                        <ListItem href="/button" title="Kids" />
                        <ListItem href="/calendar" title="Accessories" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2 text-muted-foreground">Home</h4>
                        <ListItem href="/carousel" title="Furniture" />
                        <ListItem href="/chart" title="Decor" />
                        <ListItem href="/checkbox" title="Kitchen" />
                        <ListItem href="/collapsible" title="Bedding" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm px-2 text-muted-foreground">Sports</h4>
                        <ListItem href="/combobox" title="Equipment" />
                        <ListItem href="/command" title="Apparel" />
                        <ListItem href="/context-menu" title="Footwear" />
                        <ListItem href="/data-table" title="Outdoor" />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-3">
                      <ListItem href="/accordion" title="Images">
                        <Image className="h-6 w-6 mb-2" />
                        Photo gallery and albums
                      </ListItem>
                      <ListItem href="/button" title="Videos">
                        <Video className="h-6 w-6 mb-2" />
                        Video library and streams
                      </ListItem>
                      <ListItem href="/card" title="Music">
                        <Music className="h-6 w-6 mb-2" />
                        Audio tracks and playlists
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                      <ListItem href="/calendar" title="Calendar">
                        <Calendar className="h-4 w-4 mr-2 inline" />
                        Schedule and events
                      </ListItem>
                      <ListItem href="/chart" title="Analytics">
                        <Settings className="h-4 w-4 mr-2 inline" />
                        Reports and insights
                      </ListItem>
                      <ListItem href="/command" title="Messages">
                        <Mail className="h-4 w-4 mr-2 inline" />
                        Team communication
                      </ListItem>
                      <ListItem href="/context-menu" title="Notifications">
                        <Bell className="h-4 w-4 mr-2 inline" />
                        Alerts and updates
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/components" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      More
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Simple Links Only */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Links</CardTitle>
            <CardDescription>Navigation menu without dropdowns</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/accordion" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/button" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Services
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/card" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Portfolio
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/chart" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Vertical Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>Vertical Navigation</CardTitle>
            <CardDescription>Navigation menu stacked vertically</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu orientation="vertical" className="max-w-none">
              <NavigationMenuList className="flex-col items-start space-y-1">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                      <Home className="mr-2 h-4 w-4" />
                      Dashboard
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="/accordion" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                      <Users className="mr-2 h-4 w-4" />
                      Team
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="/button" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                      <Package className="mr-2 h-4 w-4" />
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="/card" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendar
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="/chart" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Without Viewport */}
        <Card>
          <CardHeader>
            <CardTitle>Without Viewport</CardTitle>
            <CardDescription>Navigation menu without the animated viewport wrapper</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                      <ListItem href="/accordion" title="Fast Performance">
                        Lightning-fast load times and smooth interactions
                      </ListItem>
                      <ListItem href="/button" title="Responsive Design">
                        Works perfectly on all devices and screen sizes
                      </ListItem>
                      <ListItem href="/card" title="Customizable">
                        Easy to customize and extend to fit your needs
                      </ListItem>
                      <ListItem href="/chart" title="Accessible">
                        Built with accessibility in mind from the ground up
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/components" className={navigationMenuTriggerStyle()}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Navigation Menu component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Dropdown Content</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NavigationMenuItem>
  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4">
      <ListItem href="/button" title="Button">
        Displays a button element
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">ListItem Helper Component</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use navigation menus for primary navigation on websites</li>
                  <li>Keep menu structures shallow - avoid deeply nested menus</li>
                  <li>Group related items together in dropdown sections</li>
                  <li>Include descriptive text for dropdown items when helpful</li>
                  <li>Use icons sparingly to enhance recognition</li>
                  <li>Ensure keyboard navigation works properly</li>
                  <li>Consider using simple links for mobile views</li>
                  <li>Test with screen readers for accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/native-select">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Native Select
          </Button>
        </Link>
        <Link href="/pagination">
          <Button variant="outline">
            Pagination
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </DocsLayoutWrapper>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children?: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
}
