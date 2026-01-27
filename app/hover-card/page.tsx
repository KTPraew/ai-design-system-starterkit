'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { CalendarDays, MapPin, Link as LinkIcon, Twitter, Github, Mail, Users } from 'lucide-react'

export default function HoverCardShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Hover Card</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            For sighted users to preview content available behind a link.
          </p>
        </div>

        {/* Basic Hover Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Hover Card</CardTitle>
            <CardDescription>Simple hover card with user information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-sm">Hover over</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0">@shadcn</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <span className="text-sm">to see more info</span>
            </div>
          </CardContent>
        </Card>

        {/* User Profile Hover Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Detailed user profile in hover card</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Mentioned by{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-medium text-foreground underline decoration-dotted cursor-pointer">
                      @johndoe
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold">John Doe</h4>
                            <Badge variant="secondary" className="text-xs">Pro</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">@johndoe</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Full-stack developer passionate about building great user experiences.
                        Open source contributor.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="mr-2 h-3 w-3" />
                          San Francisco, CA
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <LinkIcon className="mr-2 h-3 w-3" />
                          <a href="#" className="hover:underline">johndoe.com</a>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CalendarDays className="mr-2 h-3 w-3" />
                          Joined March 2020
                        </div>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <div>
                          <span className="font-semibold text-foreground">1,234</span>
                          <span className="text-muted-foreground"> Following</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">5,678</span>
                          <span className="text-muted-foreground"> Followers</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                {' '}in the discussion.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Hover Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Hover Cards</CardTitle>
            <CardDescription>Several hover cards in content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                The team includes{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-medium text-primary underline decoration-dotted cursor-pointer">
                      @alice
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Alice Johnson</h4>
                        <p className="text-xs text-muted-foreground">@alice</p>
                        <p className="text-xs">Product Designer</p>
                        <div className="flex items-center pt-2">
                          <Users className="mr-2 h-3 w-3 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            2.5K followers
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                ,{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-medium text-primary underline decoration-dotted cursor-pointer">
                      @bob
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>BB</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Bob Smith</h4>
                        <p className="text-xs text-muted-foreground">@bob</p>
                        <p className="text-xs">Frontend Engineer</p>
                        <div className="flex items-center pt-2">
                          <Users className="mr-2 h-3 w-3 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            1.8K followers
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                , and{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-medium text-primary underline decoration-dotted cursor-pointer">
                      @charlie
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/nextjs.png" />
                        <AvatarFallback>CH</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Charlie Brown</h4>
                        <p className="text-xs text-muted-foreground">@charlie</p>
                        <p className="text-xs">Backend Engineer</p>
                        <div className="flex items-center pt-2">
                          <Users className="mr-2 h-3 w-3 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            3.2K followers
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        {/* With Social Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Social Links</CardTitle>
            <CardDescription>Hover card with social media links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-sm">Check out</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0">@developer</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>DV</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">Developer Name</h4>
                        <p className="text-xs text-muted-foreground">@developer</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Software engineer and open source enthusiast. Building tools for developers.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Twitter className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex gap-4 text-xs pt-2 border-t">
                      <div>
                        <span className="font-semibold text-foreground">156</span>
                        <span className="text-muted-foreground"> Projects</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">12.5K</span>
                        <span className="text-muted-foreground"> Stars</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <span className="text-sm">profile</span>
            </div>
          </CardContent>
        </Card>

        {/* Organization Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Organization Card</CardTitle>
            <CardDescription>Hover card for organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-sm">Developed by</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0">@acme-inc</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        AC
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">Acme Inc.</h4>
                        <p className="text-xs text-muted-foreground">@acme-inc</p>
                        <Badge variant="secondary" className="text-xs mt-1">Verified</Badge>
                      </div>
                    </div>
                    <p className="text-sm">
                      Building the future of web development. Creators of innovative tools and frameworks.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="mr-2 h-3 w-3" />
                        San Francisco, CA
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <LinkIcon className="mr-2 h-3 w-3" />
                        <a href="#" className="hover:underline">acme.com</a>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="mr-2 h-3 w-3" />
                        50-200 employees
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Hover on Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hover on Avatar</CardTitle>
            <CardDescription>Trigger hover card from avatar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">Jane Doe</h4>
                        <p className="text-xs text-muted-foreground">Senior Developer</p>
                      </div>
                    </div>
                    <p className="text-xs">
                      Passionate about creating beautiful and functional web applications.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground pt-1">
                      <Mail className="mr-2 h-3 w-3" />
                      jane@example.com
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">Mike Kumar</h4>
                        <p className="text-xs text-muted-foreground">Product Designer</p>
                      </div>
                    </div>
                    <p className="text-xs">
                      Designing intuitive interfaces and delightful user experiences.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground pt-1">
                      <Mail className="mr-2 h-3 w-3" />
                      mike@example.com
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/nextjs.png" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/nextjs.png" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">Sarah Anderson</h4>
                        <p className="text-xs text-muted-foreground">Engineering Manager</p>
                      </div>
                    </div>
                    <p className="text-xs">
                      Leading teams to build scalable and performant applications.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground pt-1">
                      <Mail className="mr-2 h-3 w-3" />
                      sarah@example.com
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Compact Hover Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compact Hover Card</CardTitle>
            <CardDescription>Smaller hover card for quick info</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                Created by{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-medium text-foreground underline decoration-dotted cursor-pointer">
                      @user123
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-56">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">User Name</p>
                        <p className="text-xs text-muted-foreground">@user123</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Different Alignments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Alignments</CardTitle>
            <CardDescription>Hover cards with different align positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Start</Button>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Align Start</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card is aligned to the start of the trigger.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Center</Button>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Align Center</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card is centered with the trigger.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">End</Button>
                </HoverCardTrigger>
                <HoverCardContent align="end" className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Align End</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card is aligned to the end of the trigger.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Hover Card component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarDays } from 'lucide-react'

{/* Basic Hover Card */}
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@username</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

{/* On Text */}
<HoverCard>
  <HoverCardTrigger asChild>
    <span className="underline cursor-pointer">@username</span>
  </HoverCardTrigger>
  <HoverCardContent>
    Content here
  </HoverCardContent>
</HoverCard>

{/* On Avatar */}
<HoverCard>
  <HoverCardTrigger asChild>
    <Avatar className="cursor-pointer">
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  </HoverCardTrigger>
  <HoverCardContent>
    Content here
  </HoverCardContent>
</HoverCard>

{/* Custom Width */}
<HoverCardContent className="w-96">
  Wide content
</HoverCardContent>

{/* Different Alignment */}
<HoverCardContent align="start">
  Aligned to start
</HoverCardContent>

<HoverCardContent align="center">
  Centered
</HoverCardContent>

<HoverCardContent align="end">
  Aligned to end
</HoverCardContent>`}</code>
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
