'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Mail,
  Lock,
  User,
  Search,
  Eye,
  EyeOff,
  Phone,
  Globe,
  DollarSign,
  CreditCard,
  Calendar,
  Clock,
  Send,
  Copy,
  Check,
} from 'lucide-react'
import { useState } from 'react'

export default function InputShowcase() {
  const [showPassword, setShowPassword] = useState(false)
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
            <h1 className="text-4xl font-bold tracking-tight">Input</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a form input field or a component that looks like an input field.
          </p>
        </div>

        {/* Basic Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Input</CardTitle>
            <CardDescription>Default input field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Enter text..." />
              <Input placeholder="With default value" defaultValue="Hello World" />
            </div>
          </CardContent>
        </Card>

        {/* Input with Label */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>Input with associated label</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Types</CardTitle>
            <CardDescription>Different HTML input types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="text">Text</Label>
                <Input id="text" type="text" placeholder="Text input" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-type">Email</Label>
                <Input id="email-type" type="email" placeholder="email@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Number</Label>
                <Input id="number" type="number" placeholder="123" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tel">Telephone</Label>
                <Input id="tel" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">URL</Label>
                <Input id="url" type="url" placeholder="https://example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="search">Search</Label>
                <Input id="search" type="search" placeholder="Search..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Input with prefix or suffix icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Email with Icon</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="you@example.com" className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Password with Toggle</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="johndoe" className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="url" placeholder="https://example.com" className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="number" placeholder="0.00" className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Card Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="1234 5678 9012 3456" className="pl-10" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Button</CardTitle>
            <CardDescription>Input combined with button</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Subscribe to Newsletter</Label>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Search</Label>
                <div className="flex gap-2">
                  <Input placeholder="Search..." />
                  <Button>Search</Button>
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

        {/* Input Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Different input sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Small</Label>
                <Input placeholder="Small input" className="h-8 text-sm" />
              </div>
              <div className="grid gap-2">
                <Label>Default</Label>
                <Input placeholder="Default input" />
              </div>
              <div className="grid gap-2">
                <Label>Large</Label>
                <Input placeholder="Large input" className="h-12" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled</CardTitle>
            <CardDescription>Non-editable disabled input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="disabled-empty">Disabled Empty</Label>
                <Input id="disabled-empty" disabled placeholder="Disabled input" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="disabled-value">Disabled with Value</Label>
                <Input id="disabled-value" disabled defaultValue="Cannot edit this" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Read-only Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Read-only</CardTitle>
            <CardDescription>Display-only input field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="readonly-id">User ID</Label>
                <Input
                  id="readonly-id"
                  readOnly
                  defaultValue="USR-12345"
                  className="bg-muted"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="readonly-email">Email</Label>
                <Input
                  id="readonly-email"
                  readOnly
                  defaultValue="john@example.com"
                  className="bg-muted"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Error State</CardTitle>
            <CardDescription>Input with validation error</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="error-email">Email</Label>
                <Input
                  id="error-email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-destructive focus-visible:ring-destructive"
                  defaultValue="invalid-email"
                />
                <p className="text-sm text-destructive">Please enter a valid email address</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="error-password">Password</Label>
                <Input
                  id="error-password"
                  type="password"
                  className="border-destructive focus-visible:ring-destructive"
                  defaultValue="123"
                />
                <p className="text-sm text-destructive">
                  Password must be at least 8 characters
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Input</CardTitle>
            <CardDescription>Upload file input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="file">File</Label>
                <Input id="file" type="file" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file-multiple">Multiple Files</Label>
                <Input id="file-multiple" type="file" multiple />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file-image">Image Upload</Label>
                <Input id="file-image" type="file" accept="image/*" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Groups</CardTitle>
            <CardDescription>Multiple inputs in a row</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Name</Label>
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
            </div>
          </CardContent>
        </Card>

        {/* Input with Prefix/Suffix Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Prefix/Suffix Text</CardTitle>
            <CardDescription>Input with text labels inside</CardDescription>
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
                <Label>Price</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 rounded-l-md">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="rounded-l-none"
                  />
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 rounded-r-md">
                    USD
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Complete form with various input types</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-form">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email-form"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone-form">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone-form"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-form">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password-form"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                  />
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
            <CardDescription>How to use the Input component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Input } from '@/components/ui/input'

{/* Basic Input */}
<Input placeholder="Enter text..." />

{/* With Type */}
<Input type="email" placeholder="you@example.com" />

{/* With Icon */}
<div className="relative">
  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input type="email" placeholder="you@example.com" className="pl-10" />
</div>

{/* With Button */}
<div className="flex gap-2">
  <Input placeholder="Search..." />
  <Button>Search</Button>
</div>

{/* Disabled */}
<Input disabled placeholder="Disabled" />

{/* Read-only */}
<Input readOnly defaultValue="Read-only value" />

{/* Error State */}
<Input
  type="email"
  className="border-destructive"
  defaultValue="invalid"
/>

{/* File Input */}
<Input type="file" />

{/* With Prefix */}
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm bg-muted border border-r-0 rounded-l-md">
    https://
  </span>
  <Input placeholder="example.com" className="rounded-l-none" />
</div>

{/* Different Sizes */}
<Input className="h-8" /> {/* Small */}
<Input /> {/* Default */}
<Input className="h-12" /> {/* Large */}`}</code>
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
