'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Sparkles,
  TrendingUp,
  Flame,
  Crown,
  Heart,
} from 'lucide-react'

export default function BadgePage() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a badge or a component that looks like a badge for labels and categories.
          </p>
        </div>

        {/* Default Badge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>Different badge styles and variants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Badge with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge with Icons</CardTitle>
            <CardDescription>Badges with leading or trailing icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>
                <CheckCircle2 className="mr-1" />
                Success
              </Badge>
              <Badge variant="secondary">
                <Star className="mr-1" />
                Featured
              </Badge>
              <Badge variant="destructive">
                <XCircle className="mr-1" />
                Error
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1" />
                Pending
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Status Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Status Badges</CardTitle>
            <CardDescription>Badges for showing different states and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Order Status</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500">
                  <CheckCircle2 className="mr-1" />
                  Completed
                </Badge>
                <Badge className="bg-blue-500">
                  <Clock className="mr-1" />
                  Processing
                </Badge>
                <Badge className="bg-yellow-500">
                  <AlertCircle className="mr-1" />
                  Pending
                </Badge>
                <Badge className="bg-red-500">
                  <XCircle className="mr-1" />
                  Cancelled
                </Badge>
                <Badge className="bg-purple-500">
                  <Sparkles className="mr-1" />
                  Delivered
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Availability</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500">Available</Badge>
                <Badge className="bg-yellow-500">Limited Stock</Badge>
                <Badge className="bg-red-500">Out of Stock</Badge>
                <Badge className="bg-blue-500">Pre-order</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Colored Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Colors</CardTitle>
            <CardDescription>Badges with custom background colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-red-500">Red</Badge>
              <Badge className="bg-orange-500">Orange</Badge>
              <Badge className="bg-amber-500">Amber</Badge>
              <Badge className="bg-yellow-500 text-yellow-950">Yellow</Badge>
              <Badge className="bg-lime-500 text-lime-950">Lime</Badge>
              <Badge className="bg-green-500">Green</Badge>
              <Badge className="bg-emerald-500">Emerald</Badge>
              <Badge className="bg-teal-500">Teal</Badge>
              <Badge className="bg-cyan-500 text-cyan-950">Cyan</Badge>
              <Badge className="bg-sky-500">Sky</Badge>
              <Badge className="bg-blue-500">Blue</Badge>
              <Badge className="bg-indigo-500">Indigo</Badge>
              <Badge className="bg-violet-500">Violet</Badge>
              <Badge className="bg-purple-500">Purple</Badge>
              <Badge className="bg-fuchsia-500">Fuchsia</Badge>
              <Badge className="bg-pink-500">Pink</Badge>
              <Badge className="bg-rose-500">Rose</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Outline Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Outline Badges</CardTitle>
            <CardDescription>Badges with border and transparent background</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-red-500 text-red-500">Red</Badge>
              <Badge variant="outline" className="border-orange-500 text-orange-500">Orange</Badge>
              <Badge variant="outline" className="border-yellow-500 text-yellow-500">Yellow</Badge>
              <Badge variant="outline" className="border-green-500 text-green-500">Green</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-500">Blue</Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-500">Purple</Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-500">Pink</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Badge Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge Sizes</CardTitle>
            <CardDescription>Different badge sizes using text size classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="text-[10px] px-1.5 py-0">XS</Badge>
              <Badge className="text-xs">Small</Badge>
              <Badge className="text-sm px-3 py-1">Medium</Badge>
              <Badge className="text-base px-4 py-1.5">Large</Badge>
              <Badge className="text-lg px-5 py-2">XL</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Badge with Dot */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge with Dot Indicator</CardTitle>
            <CardDescription>Badges with status dot indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">
                <span className="size-2 rounded-full bg-green-500 mr-1.5" />
                Online
              </Badge>
              <Badge variant="outline">
                <span className="size-2 rounded-full bg-yellow-500 mr-1.5" />
                Away
              </Badge>
              <Badge variant="outline">
                <span className="size-2 rounded-full bg-red-500 mr-1.5" />
                Busy
              </Badge>
              <Badge variant="outline">
                <span className="size-2 rounded-full bg-gray-400 mr-1.5" />
                Offline
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Badges</CardTitle>
            <CardDescription>Badges that can be clicked or interacted with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge asChild>
                <a href="#" className="cursor-pointer">
                  Clickable Badge
                </a>
              </Badge>
              <Badge variant="secondary" asChild>
                <button className="cursor-pointer">
                  Button Badge
                </button>
              </Badge>
              <Badge variant="outline" asChild>
                <a href="#" className="cursor-pointer">
                  <Star className="mr-1" />
                  Link Badge
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Badge with Dismiss */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dismissible Badges</CardTitle>
            <CardDescription>Badges with close button</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                React
                <button className="ml-1.5 hover:text-destructive">
                  <XCircle className="size-3" />
                </button>
              </Badge>
              <Badge variant="secondary">
                TypeScript
                <button className="ml-1.5 hover:text-destructive">
                  <XCircle className="size-3" />
                </button>
              </Badge>
              <Badge variant="secondary">
                Next.js
                <button className="ml-1.5 hover:text-destructive">
                  <XCircle className="size-3" />
                </button>
              </Badge>
              <Badge variant="secondary">
                Tailwind CSS
                <button className="ml-1.5 hover:text-destructive">
                  <XCircle className="size-3" />
                </button>
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Category Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Category & Tag Badges</CardTitle>
            <CardDescription>Using badges for categories and tags</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Blog Categories</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Technology</Badge>
                <Badge variant="secondary">Design</Badge>
                <Badge variant="secondary">Development</Badge>
                <Badge variant="secondary">Business</Badge>
                <Badge variant="secondary">Marketing</Badge>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Product Tags</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">New Arrival</Badge>
                <Badge variant="outline">Best Seller</Badge>
                <Badge variant="outline">Limited Edition</Badge>
                <Badge variant="outline">Sale</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Special Badges</CardTitle>
            <CardDescription>Premium, trending, and special status badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Crown className="mr-1" />
                Premium
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500">
                <Flame className="mr-1" />
                Hot
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500">
                <TrendingUp className="mr-1" />
                Trending
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Zap className="mr-1" />
                Featured
              </Badge>
              <Badge className="bg-gradient-to-r from-pink-500 to-rose-500">
                <Heart className="mr-1" />
                Favorite
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                <Shield className="mr-1" />
                Verified
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-world Examples</CardTitle>
            <CardDescription>Practical usage of badges in UI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Product Card */}
            <div>
              <p className="text-sm font-medium mb-3">Product Card</p>
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">Premium Headphones</h3>
                  <Badge className="bg-green-500">In Stock</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  High-quality wireless headphones with noise cancellation
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    <Star className="mr-1 fill-yellow-500 text-yellow-500" />
                    4.8
                  </Badge>
                  <Badge variant="secondary">Wireless</Badge>
                  <Badge variant="secondary">Noise Cancelling</Badge>
                  <Badge className="bg-red-500">20% OFF</Badge>
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div>
              <p className="text-sm font-medium mb-3">User Profile</p>
              <div className="border rounded-lg p-4 flex items-start gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <Badge className="bg-blue-500 text-[10px] px-1.5 py-0">
                      <Shield className="size-2 mr-0.5" />
                      Verified
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] px-1.5 py-0">
                      <Crown className="size-2 mr-0.5" />
                      PRO
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Senior Product Designer @ Tech Co.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                    <Badge variant="secondary" className="text-xs">Figma</Badge>
                    <Badge variant="secondary" className="text-xs">React</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Badge component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Badge } from '@/components/ui/badge'

{/* Basic Variants */}
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

{/* With Icons */}
<Badge>
  <CheckCircle2 className="mr-1" />
  Success
</Badge>

{/* Custom Colors */}
<Badge className="bg-green-500">Custom Color</Badge>

{/* With Dot Indicator */}
<Badge variant="outline">
  <span className="size-2 rounded-full bg-green-500 mr-1.5" />
  Online
</Badge>

{/* Interactive Badge */}
<Badge asChild>
  <a href="#" className="cursor-pointer">
    Clickable
  </a>
</Badge>

{/* Dismissible Badge */}
<Badge variant="secondary">
  React
  <button className="ml-1.5 hover:text-destructive">
    <XCircle className="size-3" />
  </button>
</Badge>`}</code>
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
