'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Mail,
  Lock,
  User,
  Search,
  DollarSign,
  AlertCircle,
  Eye,
  EyeOff,
  Phone,
  Globe,
  Calendar,
} from 'lucide-react'

export default function FieldShowcase() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Form Field</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Form field patterns with labels, descriptions, and validation states.
          </p>
        </div>

        {/* Basic Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Field</CardTitle>
            <CardDescription>Simple input field with label</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-basic">Email</Label>
                <Input id="email-basic" type="email" placeholder="you@example.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field with Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Description</CardTitle>
            <CardDescription>Field with helper text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="johndoe" />
                <p className="text-sm text-muted-foreground">
                  This is your public display name. It can be your real name or a pseudonym.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
                <p className="text-sm text-muted-foreground">
                  Brief description for your profile. Maximum 160 characters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required Fields</CardTitle>
            <CardDescription>Fields marked as required</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-required">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input id="email-required" type="email" placeholder="you@example.com" required />
                <p className="text-sm text-muted-foreground">
                  We'll never share your email with anyone else.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-required">
                  Password <span className="text-destructive">*</span>
                </Label>
                <Input id="password-required" type="password" placeholder="••••••••" required />
                <p className="text-sm text-muted-foreground">
                  Must be at least 8 characters long.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fields with Errors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Error States</CardTitle>
            <CardDescription>Fields with validation errors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-error">Email</Label>
                <Input
                  id="email-error"
                  type="email"
                  placeholder="you@example.com"
                  className="border-destructive"
                  defaultValue="invalid-email"
                />
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  Please enter a valid email address
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-error">Password</Label>
                <Input
                  id="password-error"
                  type="password"
                  className="border-destructive"
                  defaultValue="123"
                />
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  Password must be at least 8 characters
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Validated Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-time Validation</CardTitle>
            <CardDescription>Field with live validation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="email-validated">Email</Label>
              <Input
                id="email-validated"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail(e.target.value)
                }}
                onBlur={() => validateEmail(email)}
                className={emailError ? 'border-destructive' : ''}
              />
              {emailError && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {emailError}
                </p>
              )}
              {email && !emailError && (
                <p className="text-sm text-green-600">
                  ✓ Valid email address
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Disabled Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled Fields</CardTitle>
            <CardDescription>Non-editable disabled fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-disabled">Email</Label>
                <Input
                  id="email-disabled"
                  type="email"
                  placeholder="you@example.com"
                  disabled
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username-disabled">Username</Label>
                <Input
                  id="username-disabled"
                  placeholder="johndoe"
                  defaultValue="johndoe"
                  disabled
                />
                <p className="text-sm text-muted-foreground">
                  Username cannot be changed once set.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Read-only Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Read-only Fields</CardTitle>
            <CardDescription>Display-only fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="user-id">User ID</Label>
                <Input
                  id="user-id"
                  defaultValue="USR-12345"
                  readOnly
                  className="bg-muted"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="created-at">Created At</Label>
                <Input
                  id="created-at"
                  defaultValue="January 15, 2024"
                  readOnly
                  className="bg-muted"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fields with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Fields with prefix/suffix icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-icon">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email-icon"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-icon">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password-icon"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Different Input Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Types</CardTitle>
            <CardDescription>Various HTML input types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-type">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email-type"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tel">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="tel"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Age</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="25"
                  min="0"
                  max="120"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textarea Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Textarea Field</CardTitle>
            <CardDescription>Multi-line text input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={4}
                />
                <p className="text-sm text-muted-foreground">
                  Your message will be sent to the support team.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue in detail..."
                  rows={5}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Maximum 500 characters</span>
                  <span>0 / 500</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Field</CardTitle>
            <CardDescription>Dropdown selection field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">
                  Role <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Choose the role that best describes your position.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Checkbox Field</CardTitle>
            <CardDescription>Boolean options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  I agree to the terms and conditions <span className="text-destructive">*</span>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="marketing"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Send me marketing emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about new products and features.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Horizontal Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Horizontal Layout</CardTitle>
            <CardDescription>Label and input side by side</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name-horizontal" className="text-right">
                  Name
                </Label>
                <Input
                  id="name-horizontal"
                  placeholder="John Doe"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email-horizontal" className="text-right">
                  Email
                </Label>
                <Input
                  id="email-horizontal"
                  type="email"
                  placeholder="you@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="bio-horizontal" className="text-right pt-2">
                  Bio
                </Label>
                <Textarea
                  id="bio-horizontal"
                  placeholder="Tell us about yourself"
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Field Groups</CardTitle>
            <CardDescription>Related fields grouped together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-4">Personal Information</h4>
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
              </div>
              <div>
                <h4 className="text-sm font-medium mb-4">Contact Details</h4>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email-contact">Email</Label>
                    <Input id="email-contact" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone-contact">Phone</Label>
                    <Input id="phone-contact" type="tel" placeholder="+1 (555) 000-0000" />
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
            <CardDescription>How to implement form fields</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

{/* Basic Field */}
<div className="grid gap-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>

{/* With Description */}
<div className="grid gap-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
  <p className="text-sm text-muted-foreground">
    This is your public display name.
  </p>
</div>

{/* Required Field */}
<div className="grid gap-2">
  <Label htmlFor="email">
    Email <span className="text-destructive">*</span>
  </Label>
  <Input id="email" type="email" required />
</div>

{/* With Error */}
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    className="border-destructive"
  />
  <p className="text-sm text-destructive flex items-center gap-1">
    <AlertCircle className="h-4 w-4" />
    Please enter a valid email
  </p>
</div>

{/* With Icon */}
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <div className="relative">
    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
    <Input
      id="email"
      type="email"
      className="pl-10"
    />
  </div>
</div>

{/* Textarea */}
<div className="grid gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Type your message..."
    rows={4}
  />
</div>

{/* Disabled */}
<Input id="username" disabled />

{/* Read-only */}
<Input id="user-id" readOnly className="bg-muted" />`}</code>
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
