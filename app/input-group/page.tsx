'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Search,
  Send,
  Copy,
  Check,
  DollarSign,
  Globe,
  Mail,
  Phone,
  Calendar,
  Clock,
  User,
  AtSign,
  Link as LinkIcon,
  Percent,
} from 'lucide-react'
import { useState } from 'react'

export default function InputGroupShowcase() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Input Group</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Extend input functionality by adding text, buttons, or dropdowns on either side.
          </p>
        </div>

        {/* Input with Prefix Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Prefix Text</CardTitle>
            <CardDescription>Input with text addon on the left</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Website URL</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    https://
                  </span>
                  <Input
                    placeholder="example.com"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Username</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    @
                  </span>
                  <Input
                    placeholder="username"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    <Mail className="h-4 w-4" />
                  </span>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Suffix Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Suffix Text</CardTitle>
            <CardDescription>Input with text addon on the right</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Domain</Label>
                <div className="flex">
                  <Input
                    placeholder="mysite"
                    className="rounded-r-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    .example.com
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Weight</Label>
                <div className="flex">
                  <Input
                    type="number"
                    placeholder="0"
                    className="rounded-r-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    kg
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Percentage</Label>
                <div className="flex">
                  <Input
                    type="number"
                    placeholder="0"
                    className="rounded-r-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    %
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Both Prefix and Suffix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Prefix and Suffix</CardTitle>
            <CardDescription>Input with text addons on both sides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Price</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="rounded-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    USD
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Amount</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    €
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="rounded-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    EUR
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Button</CardTitle>
            <CardDescription>Input combined with action button</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Search</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  <Button>Search</Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Subscribe</Label>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Copy Link</Label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    defaultValue="https://ui.shadcn.com/docs/installation"
                  />
                  <Button variant="outline" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Dropdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Dropdown</CardTitle>
            <CardDescription>Input combined with select dropdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Phone Number</Label>
                <div className="flex gap-2">
                  <Select defaultValue="+1">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                      <SelectItem value="+81">🇯🇵 +81</SelectItem>
                      <SelectItem value="+86">🇨🇳 +86</SelectItem>
                      <SelectItem value="+66">🇹🇭 +66</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="tel" placeholder="555-0000" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Currency Amount</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="0.00" />
                  <Select defaultValue="usd">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Duration</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="0" />
                  <Select defaultValue="hours">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minutes">Minutes</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Inputs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Inputs</CardTitle>
            <CardDescription>Multiple inputs grouped together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Full Name</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Date Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Date and Time</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="time" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Credit Card</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <Input placeholder="MM/YY" />
                </div>
                <Input placeholder="CVV" className="w-32" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Icon Button Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icon Buttons</CardTitle>
            <CardDescription>Input with icon action buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Search with Actions</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>URL with Actions</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    <Globe className="h-4 w-4" />
                  </span>
                  <Input
                    placeholder="example.com"
                    className="rounded-none flex-1"
                  />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inline Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inline Groups</CardTitle>
            <CardDescription>Compact inline input combinations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label className="whitespace-nowrap">Username:</Label>
                <div className="flex flex-1">
                  <span className="inline-flex items-center px-2 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    @
                  </span>
                  <Input placeholder="username" className="rounded-l-none" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Label className="whitespace-nowrap">Price:</Label>
                <div className="flex flex-1 max-w-xs">
                  <span className="inline-flex items-center px-2 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="rounded-r-none"
                  />
                  <span className="inline-flex items-center px-2 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    USD
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complex Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complex Groups</CardTitle>
            <CardDescription>Advanced input group combinations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Product Price</Label>
                <div className="flex gap-2">
                  <Select defaultValue="usd">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex flex-1">
                    <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                      <DollarSign className="h-4 w-4" />
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="rounded-none"
                    />
                    <Button className="rounded-l-none">
                      Update Price
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Discount Code</Label>
                <div className="flex gap-2">
                  <div className="flex flex-1">
                    <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                      <Percent className="h-4 w-4" />
                    </span>
                    <Input
                      placeholder="Enter code"
                      className="rounded-none"
                    />
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      Apply
                    </Button>
                  </div>
                  <Button variant="ghost">Clear</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Complete form using input groups</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label>Username</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    @
                  </span>
                  <Input placeholder="username" className="rounded-l-none" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    <Mail className="h-4 w-4" />
                  </span>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <div className="flex gap-2">
                  <Select defaultValue="+1">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                      <SelectItem value="+66">🇹🇭 +66</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="tel" placeholder="555-0000" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Website</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    https://
                  </span>
                  <Input placeholder="example.com" className="rounded-l-none" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to implement input groups</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

{/* With Prefix Text */}
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
    https://
  </span>
  <Input placeholder="example.com" className="rounded-l-none" />
</div>

{/* With Suffix Text */}
<div className="flex">
  <Input placeholder="mysite" className="rounded-r-none" />
  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
    .example.com
  </span>
</div>

{/* With Prefix and Suffix */}
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm bg-muted border border-r-0 rounded-l-md">
    $
  </span>
  <Input type="number" placeholder="0.00" className="rounded-none" />
  <span className="inline-flex items-center px-3 text-sm bg-muted border border-l-0 rounded-r-md">
    USD
  </span>
</div>

{/* With Button */}
<div className="flex gap-2">
  <Input placeholder="Search..." />
  <Button>Search</Button>
</div>

{/* With Dropdown */}
<div className="flex gap-2">
  <Select defaultValue="+1">
    <SelectTrigger className="w-[120px]">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="+1">+1</SelectItem>
      <SelectItem value="+44">+44</SelectItem>
    </SelectContent>
  </Select>
  <Input type="tel" placeholder="555-0000" />
</div>

{/* Multiple Inputs */}
<div className="grid grid-cols-2 gap-2">
  <Input placeholder="First name" />
  <Input placeholder="Last name" />
</div>

{/* Icon in Prefix */}
<div className="flex">
  <span className="inline-flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
    <Mail className="h-4 w-4" />
  </span>
  <Input type="email" className="rounded-l-none" />
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
    </DocsLayoutWrapper>
  )
}
