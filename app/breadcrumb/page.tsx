'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Slash,
  ChevronRight,
  Home,
  Folder,
  File,
} from 'lucide-react'

export default function BreadcrumbShowcase() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Breadcrumb</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays the path to the current resource using a hierarchy of links.
          </p>
        </div>

        {/* Basic Breadcrumb */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Breadcrumb</CardTitle>
            <CardDescription>Simple breadcrumb navigation with default separator</CardDescription>
          </CardHeader>
          <CardContent>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Breadcrumb with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Breadcrumb with Icons</CardTitle>
            <CardDescription>Breadcrumb with icons in links</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-2">
                    <Home className="size-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components" className="flex items-center gap-2">
                    <Folder className="size-4" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="flex items-center gap-2">
                    <File className="size-4" />
                    Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Custom Separator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Separator</CardTitle>
            <CardDescription>Using different separator styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Slash Separator */}
            <div>
              <p className="text-sm font-medium mb-3">Slash Separator</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Dot Separator */}
            <div>
              <p className="text-sm font-medium mb-3">Dot Separator</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <span className="text-muted-foreground">•</span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <span className="text-muted-foreground">•</span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Arrow Separator */}
            <div>
              <p className="text-sm font-medium mb-3">Arrow Separator</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <span className="text-muted-foreground">→</span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <span className="text-muted-foreground">→</span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </CardContent>
        </Card>

        {/* Collapsed Breadcrumb */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Collapsed Breadcrumb</CardTitle>
            <CardDescription>Long breadcrumbs with ellipsis and dropdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <a href="#">Documentation</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#">Guides</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#">Resources</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Long Breadcrumb Path */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Long Breadcrumb Path</CardTitle>
            <CardDescription>Multiple levels of navigation hierarchy</CardDescription>
          </CardHeader>
          <CardContent>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Home className="size-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products/electronics/computers">Computers</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products/electronics/computers/laptops">Laptops</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Gaming Laptops</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Breadcrumb Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Breadcrumb Sizes</CardTitle>
            <CardDescription>Different sizes using text classes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Small */}
            <div>
              <p className="text-sm font-medium mb-3">Small</p>
              <Breadcrumb>
                <BreadcrumbList className="text-xs">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Medium (Default) */}
            <div>
              <p className="text-sm font-medium mb-3">Medium (Default)</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Large */}
            <div>
              <p className="text-sm font-medium mb-3">Large</p>
              <Breadcrumb>
                <BreadcrumbList className="text-base">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Breadcrumb */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Responsive Breadcrumb</CardTitle>
            <CardDescription>Breadcrumb that adapts to screen size</CardDescription>
          </CardHeader>
          <CardContent>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 md:hidden">
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <a href="/">Home</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/docs">Documentation</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-xs text-muted-foreground mt-3">
              Try resizing your browser to see the responsive behavior
            </p>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-world Examples</CardTitle>
            <CardDescription>Practical usage in different contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* E-commerce */}
            <div>
              <p className="text-sm font-medium mb-3">E-commerce Product Navigation</p>
              <div className="border rounded-lg p-4 space-y-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">
                        <Home className="size-4" />
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/shop/clothing">Clothing</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/shop/clothing/mens">Men&apos;s</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>T-Shirts</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className="pt-2 border-t">
                  <h3 className="font-semibold text-lg mb-2">Men&apos;s T-Shirts</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse our collection of high-quality men&apos;s t-shirts
                  </p>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <p className="text-sm font-medium mb-3">Documentation Navigation</p>
              <div className="border rounded-lg p-4 space-y-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs">
                        <Home className="size-4" />
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs/getting-started">Getting Started</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Installation</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className="pt-2 border-t">
                  <h3 className="font-semibold text-lg mb-2">Installation Guide</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to install and set up the project in your environment
                  </p>
                </div>
              </div>
            </div>

            {/* File System */}
            <div>
              <p className="text-sm font-medium mb-3">File System Navigation</p>
              <div className="border rounded-lg p-4 bg-muted/30">
                <Breadcrumb>
                  <BreadcrumbList className="font-mono text-xs">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="flex items-center gap-1.5">
                        <Home className="size-3.5" />
                        root
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="size-3" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/app" className="flex items-center gap-1.5">
                        <Folder className="size-3.5" />
                        app
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="size-3" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/app/components" className="flex items-center gap-1.5">
                        <Folder className="size-3.5" />
                        components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="size-3" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="flex items-center gap-1.5">
                        <File className="size-3.5" />
                        breadcrumb.tsx
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Breadcrumb component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

{/* Basic Breadcrumb */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

{/* Custom Separator */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

{/* With Ellipsis */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
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
