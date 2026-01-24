'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            An image element with a fallback for representing the user.
          </p>
        </div>

        {/* Default Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Avatar</CardTitle>
            <CardDescription>Basic avatar with image and fallback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-sm text-muted-foreground">@shadcn</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Sizes</CardTitle>
            <CardDescription>Different avatar sizes using Tailwind classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-4">
              <div className="text-center">
                <Avatar className="size-6">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">XS (24px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">SM (32px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-sm">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">MD (40px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">LG (48px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-lg">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">XL (64px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-24">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-2xl">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">2XL (96px)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Fallback */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Fallback</CardTitle>
            <CardDescription>Fallback is shown when image fails to load</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Colored Fallbacks */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Colored Fallbacks</CardTitle>
            <CardDescription>Custom colored backgrounds for fallback avatars</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-green-500 text-white">MK</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-purple-500 text-white">TS</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-orange-500 text-white">PL</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-pink-500 text-white">RK</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Shapes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Shapes</CardTitle>
            <CardDescription>Different avatar shapes using border-radius</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <Avatar className="size-14 rounded-full">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Circle</p>
              </div>
              <div className="text-center">
                <Avatar className="size-14 rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Rounded</p>
              </div>
              <div className="text-center">
                <Avatar className="size-14 rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Soft</p>
              </div>
              <div className="text-center">
                <Avatar className="size-14 rounded-none">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-none">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Square</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>Stacked avatars for showing multiple users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overlapping */}
            <div>
              <p className="text-sm font-medium mb-3">Overlapping</p>
              <div className="flex -space-x-3">
                <Avatar className="size-10 border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background">
                  <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background">
                  <AvatarImage src="https://github.com/github.png" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background">
                  <AvatarFallback className="bg-muted">+5</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* With Ring */}
            <div>
              <p className="text-sm font-medium mb-3">With Ring</p>
              <div className="flex -space-x-3">
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/github.png" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/facebook.png" alt="User 4" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar with Status</CardTitle>
            <CardDescription>Show online/offline status with indicator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              {/* Online */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Online</p>
              </div>

              {/* Away */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 size-3 bg-yellow-500 border-2 border-background rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Away</p>
              </div>

              {/* Busy */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/github.png" alt="@github" />
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 size-3 bg-red-500 border-2 border-background rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Busy</p>
              </div>

              {/* Offline */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 size-3 bg-gray-400 border-2 border-background rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Offline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Badge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar with Badge</CardTitle>
            <CardDescription>Show notification count or verification badge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              {/* Notification Badge */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute -top-1 -right-1 flex items-center justify-center size-5 bg-red-500 text-white text-xs font-medium rounded-full">
                    3
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Notifications</p>
              </div>

              {/* Verified Badge */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center size-5 bg-blue-500 text-white rounded-full">
                    <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Verified</p>
              </div>

              {/* Pro Badge */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/github.png" alt="@github" />
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold rounded-full">
                    PRO
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Pro</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Card Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Card Example</CardTitle>
            <CardDescription>Practical usage in a user profile card</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                <Avatar className="size-14">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">shadcn</p>
                  <p className="text-sm text-muted-foreground truncate">UI Designer & Developer</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">Design</Badge>
                    <Badge variant="secondary" className="text-xs">React</Badge>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                <Avatar className="size-14">
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">Vercel</p>
                  <p className="text-sm text-muted-foreground truncate">Frontend Cloud Platform</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">Next.js</Badge>
                    <Badge variant="secondary" className="text-xs">Cloud</Badge>
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
            <CardDescription>How to use the Avatar component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

{/* Basic Avatar */}
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* Custom Size */}
<Avatar className="size-12">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* With Status Indicator */}
<div className="relative inline-block">
  <Avatar className="size-12">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background rounded-full" />
</div>

{/* Avatar Group */}
<div className="flex -space-x-3">
  <Avatar className="size-10 border-2 border-background">
    <AvatarImage src="..." alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="size-10 border-2 border-background">
    <AvatarImage src="..." alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
</div>`}</code>
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
