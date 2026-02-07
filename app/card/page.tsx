'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Settings,
  MoreVertical,
  ExternalLink,
  Download,
  Heart,
  Share2,
  Star,
  MapPin,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Mail,
  Phone,
  Building2,
  CheckCircle2,
  AlertCircle,
  Info,
  Zap,
} from 'lucide-react'

export default function CardShowcase() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Card</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays content in a contained, organized format with flexible layouts.
          </p>
        </div>

        {/* Basic Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Cards</CardTitle>
            <CardDescription>Simple card layouts with different structures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Simple Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is a simple card with a title, description, and content area.
                  </p>
                </CardContent>
              </Card>

              {/* Card with Footer */}
              <Card>
                <CardHeader>
                  <CardTitle>With Footer</CardTitle>
                  <CardDescription>Card with action footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card includes a footer with actions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Action</Button>
                </CardFooter>
              </Card>

              {/* Card with Action */}
              <Card>
                <CardHeader>
                  <CardTitle>With Action</CardTitle>
                  <CardDescription>Card with header action</CardDescription>
                  <CardAction>
                    <Button size="icon" variant="ghost">
                      <MoreVertical />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card has an action button in the header.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feature Cards</CardTitle>
            <CardDescription>Highlight features or benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="size-6 text-primary" />
                  </div>
                  <CardTitle>Fast Performance</CardTitle>
                  <CardDescription>Lightning-fast load times and smooth interactions</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="size-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-6 text-green-500" />
                  </div>
                  <CardTitle>Reliable</CardTitle>
                  <CardDescription>99.9% uptime with robust error handling</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Settings className="size-6 text-blue-500" />
                  </div>
                  <CardTitle>Customizable</CardTitle>
                  <CardDescription>Flexible configuration to match your needs</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Stats Cards</CardTitle>
            <CardDescription>Display metrics and statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardDescription>Total Revenue</CardDescription>
                    <DollarSign className="size-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">$45,231</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="size-3" />
                    <span>+20.1%</span>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardDescription>New Users</CardDescription>
                    <Users className="size-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">+2,350</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="size-3" />
                    <span>+15.3%</span>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardDescription>Sales</CardDescription>
                    <ShoppingCart className="size-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">+12,234</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="size-3" />
                    <span>+8.1%</span>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardDescription>Active Now</CardDescription>
                    <Users className="size-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">573</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-red-600">
                    <TrendingDown className="size-3" />
                    <span>-2.4%</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Product Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Product Cards</CardTitle>
            <CardDescription>E-commerce product displays</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="line-clamp-1">Premium Headphones</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Wireless noise-cancelling headphones with premium sound quality
                      </CardDescription>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Heart className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">$299</p>
                      <p className="text-sm text-muted-foreground line-through">$399</p>
                    </div>
                    <Badge className="bg-red-500">25% OFF</Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="size-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="line-clamp-1">Smart Watch Pro</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Advanced fitness tracking with heart rate monitoring
                      </CardDescription>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Heart className="size-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">$449</p>
                    <Badge variant="secondary">
                      <Star className="size-3 mr-1 fill-yellow-500 text-yellow-500" />
                      4.8
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="size-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="line-clamp-1">Wireless Earbuds</CardTitle>
                      <CardDescription className="line-clamp-2">
                        True wireless earbuds with active noise cancellation
                      </CardDescription>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Heart className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">$179</p>
                    <Badge variant="outline" className="border-green-500 text-green-500">
                      In Stock
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* User Profile Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Profile Cards</CardTitle>
            <CardDescription>User profile and team member cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="flex items-center gap-2">
                        Sarah Johnson
                        <Badge className="bg-blue-500 text-[10px] px-1.5 py-0">PRO</Badge>
                      </CardTitle>
                      <CardDescription>Product Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                    <Badge variant="secondary" className="text-xs">Figma</Badge>
                    <Badge variant="secondary" className="text-xs">React</Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1" variant="outline">Message</Button>
                  <Button className="flex-1">Follow</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle>Michael Roberts</CardTitle>
                      <CardDescription>Senior Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">GraphQL</Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1" variant="outline">Message</Button>
                  <Button className="flex-1">Follow</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="size-14">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        EW
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle>Emily Wilson</CardTitle>
                      <CardDescription>Marketing Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">SEO</Badge>
                    <Badge variant="secondary" className="text-xs">Content</Badge>
                    <Badge variant="secondary" className="text-xs">Analytics</Badge>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1" variant="outline">Message</Button>
                  <Button className="flex-1">Follow</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Event/Booking Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Event Cards</CardTitle>
            <CardDescription>Display events, bookings, and schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <div className="aspect-[2/1] bg-gradient-to-br from-purple-500 to-pink-500" />
                <CardHeader>
                  <CardTitle>Design Conference 2024</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>March 15-17, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      <span>500+ Attendees</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Register Now</Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="size-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <div className="aspect-[2/1] bg-gradient-to-br from-blue-500 to-cyan-500" />
                <CardHeader>
                  <CardTitle>Web Development Workshop</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>April 5, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>2:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Online Event</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Join Now</Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Progress Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progress Cards</CardTitle>
            <CardDescription>Display progress and completion status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Project Alpha</CardTitle>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <CardDescription>Website redesign and optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Due Date</span>
                    <span>March 30, 2024</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Mobile App Launch</CardTitle>
                    <Badge className="bg-green-500">Completed</Badge>
                  </div>
                  <CardDescription>iOS and Android app development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span>March 10, 2024</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">View Report</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Notification/Alert Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notification Cards</CardTitle>
            <CardDescription>Display alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Info className="size-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <CardTitle className="text-blue-900 dark:text-blue-100">New Feature Available</CardTitle>
                    <CardDescription className="text-blue-700 dark:text-blue-300">
                      We&apos;ve just released a new dashboard with improved analytics. Check it out!
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                <Button size="sm" variant="ghost">Dismiss</Button>
              </CardFooter>
            </Card>

            <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div className="flex-1">
                    <CardTitle className="text-green-900 dark:text-green-100">Payment Successful</CardTitle>
                    <CardDescription className="text-green-700 dark:text-green-300">
                      Your payment of $99.00 has been processed successfully.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertCircle className="size-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div className="flex-1">
                    <CardTitle className="text-yellow-900 dark:text-yellow-100">Action Required</CardTitle>
                    <CardDescription className="text-yellow-700 dark:text-yellow-300">
                      Your subscription will expire in 3 days. Please renew to continue service.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="gap-2">
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">Renew Now</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>

        {/* Form Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Form Card</CardTitle>
            <CardDescription>Card with form elements</CardDescription>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="Your message" />
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button className="flex-1">Send Message</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Card component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'

{/* Basic Card */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

{/* Card with Action */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
    <CardAction>
      <Button size="icon" variant="ghost">
        <MoreVertical />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
</Card>

{/* Stat Card */}
<Card>
  <CardHeader>
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-2xl">$45,231</CardTitle>
  </CardHeader>
</Card>`}</code>
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
