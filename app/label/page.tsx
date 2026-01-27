"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LabelPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
    notifications: "all",
    darkMode: false,
    country: "",
  })

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Label</h1>
          <Badge>Forms</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A component for displaying form field labels with support for required indicators and helper text.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Label */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Label</CardTitle>
            <CardDescription>Simple label for form fields</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </CardContent>
        </Card>

        {/* Required Label */}
        <Card>
          <CardHeader>
            <CardTitle>Required Label</CardTitle>
            <CardDescription>Labels with required indicator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required-name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="required-name" placeholder="Enter your name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="required-email">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input id="required-email" type="email" placeholder="Enter your email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="optional-phone">
                Phone Number <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <Input id="optional-phone" type="tel" placeholder="Enter your phone number" />
            </div>
          </CardContent>
        </Card>

        {/* Label with Description */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Description</CardTitle>
            <CardDescription>Labels with helper text and descriptions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" />
              <p className="text-sm text-muted-foreground">
                This will be your public username. Choose wisely!
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself" />
              <p className="text-sm text-muted-foreground">
                Write a short bio about yourself. Max 160 characters.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Website URL</Label>
              <Input id="url" type="url" placeholder="https://example.com" />
              <p className="text-sm text-muted-foreground">
                Enter your website or portfolio URL.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Label States */}
        <Card>
          <CardHeader>
            <CardTitle>Label States</CardTitle>
            <CardDescription>Different label states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-input">Default</Label>
              <Input id="default-input" placeholder="Default state" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-input" className="text-muted-foreground">
                Disabled
              </Label>
              <Input id="disabled-input" placeholder="Disabled state" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="error-input" className="text-destructive">
                Error
              </Label>
              <Input id="error-input" placeholder="Error state" className="border-destructive" />
              <p className="text-sm text-destructive">This field is required</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="success-input" className="text-green-600">
                Success
              </Label>
              <Input id="success-input" placeholder="Success state" className="border-green-600" />
              <p className="text-sm text-green-600">Looks good!</p>
            </div>
          </CardContent>
        </Card>

        {/* Label with Checkbox */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Checkbox</CardTitle>
            <CardDescription>Labels used with checkbox components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing" className="cursor-pointer">
                Send me marketing emails
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="cursor-pointer">
                Subscribe to newsletter <span className="text-destructive">*</span>
              </Label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="cursor-pointer">
                  I agree to the privacy policy <span className="text-destructive">*</span>
                </Label>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                We'll never share your information without your consent.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Label with Radio Group */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Radio Group</CardTitle>
            <CardDescription>Labels used with radio button components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Notification Preferences <span className="text-destructive">*</span></Label>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="cursor-pointer font-normal">
                    All notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="important" id="important" />
                  <Label htmlFor="important" className="cursor-pointer font-normal">
                    Important only
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="cursor-pointer font-normal">
                    None
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Account Type</Label>
              <RadioGroup defaultValue="personal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="cursor-pointer font-normal">
                    Personal
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="cursor-pointer font-normal">
                    Business
                  </Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">
                Choose the account type that best fits your needs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Label with Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Switch</CardTitle>
            <CardDescription>Labels used with switch components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="airplane-mode" className="cursor-pointer">
                Airplane Mode
              </Label>
              <Switch id="airplane-mode" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="wifi" className="cursor-pointer">
                Wi-Fi
              </Label>
              <Switch id="wifi" defaultChecked />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="cursor-pointer">
                  Dark Mode
                </Label>
                <Switch id="dark-mode" />
              </div>
              <p className="text-sm text-muted-foreground">
                Enable dark mode for a better viewing experience at night.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="cursor-pointer">
                  Push Notifications
                </Label>
                <Switch id="notifications" defaultChecked />
              </div>
              <p className="text-sm text-muted-foreground">
                Receive notifications about important updates and messages.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Label with Select */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Select</CardTitle>
            <CardDescription>Labels used with select components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country <span className="text-destructive">*</span></Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="th">Thailand</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="th">ไทย</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose your preferred language for the interface.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="pst">PST (UTC-8)</SelectItem>
                  <SelectItem value="est">EST (UTC-5)</SelectItem>
                  <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                  <SelectItem value="bkk">Bangkok (UTC+7)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Label Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Label Sizes</CardTitle>
            <CardDescription>Different label sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small-input" className="text-xs">
                Small Label
              </Label>
              <Input id="small-input" placeholder="Small label" className="h-8 text-xs" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-size-input">Default Label</Label>
              <Input id="default-size-input" placeholder="Default label" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="large-input" className="text-base">
                Large Label
              </Label>
              <Input id="large-input" placeholder="Large label" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="extra-large-input" className="text-lg font-medium">
                Extra Large Label
              </Label>
              <Input id="extra-large-input" placeholder="Extra large label" className="h-14 text-lg" />
            </div>
          </CardContent>
        </Card>

        {/* Label Alignment */}
        <Card>
          <CardHeader>
            <CardTitle>Label Alignment</CardTitle>
            <CardDescription>Different label alignment options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="stacked-input">Stacked (Default)</Label>
              <Input id="stacked-input" placeholder="Label above input" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="inline-input" className="text-right">
                Inline Right
              </Label>
              <Input id="inline-input" placeholder="Label on the left" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="inline-left-input" className="text-left">
                Inline Left
              </Label>
              <Input id="inline-left-input" placeholder="Label on the left" className="col-span-3" />
            </div>

            <div className="flex items-center gap-4">
              <Label htmlFor="flex-input" className="min-w-[100px]">
                Flex Layout
              </Label>
              <Input id="flex-input" placeholder="Label on the left with flex" className="flex-1" />
            </div>
          </CardContent>
        </Card>

        {/* Label with Hints */}
        <Card>
          <CardHeader>
            <CardTitle>Label with Hints</CardTitle>
            <CardDescription>Labels with various hint styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="hint-top">Name</Label>
                <span className="text-sm text-muted-foreground">0/50</span>
              </div>
              <Input id="hint-top" placeholder="Enter your name" maxLength={50} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hint-description">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input id="hint-description" type="email" placeholder="you@example.com" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">We'll never share your email</span>
                <span className="text-muted-foreground">Required</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="hint-tooltip">Password</Label>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded">
                  Min 8 characters
                </span>
              </div>
              <Input id="hint-tooltip" type="password" placeholder="Enter your password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hint-multi">Bio</Label>
              <Textarea id="hint-multi" placeholder="Tell us about yourself" className="min-h-[100px]" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Brief description for your profile</span>
                <span>0/160</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Label Groups</CardTitle>
            <CardDescription>Grouped labels for related fields</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Personal Information</h3>
                <p className="text-sm text-muted-foreground">Update your personal details here.</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name <span className="text-destructive">*</span></Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name <span className="text-destructive">*</span></Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-group">Email <span className="text-destructive">*</span></Label>
                  <Input id="email-group" type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-sm text-muted-foreground">Enter your billing address.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input id="street" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>A complete form using labels with various components</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="form-name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-email">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="form-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    We'll use this email to send you updates.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-country">Country <span className="text-destructive">*</span></Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger id="form-country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="th">Thailand</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-message">Message</Label>
                  <Textarea
                    id="form-message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Optional: Tell us more about your inquiry.
                  </p>
                </div>

                <div className="space-y-4">
                  <Label>Notification Preferences</Label>
                  <RadioGroup
                    value={formData.notifications}
                    onValueChange={(value) => setFormData({ ...formData, notifications: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="form-all" />
                      <Label htmlFor="form-all" className="cursor-pointer font-normal">
                        All notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="important" id="form-important" />
                      <Label htmlFor="form-important" className="cursor-pointer font-normal">
                        Important only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="form-none" />
                      <Label htmlFor="form-none" className="cursor-pointer font-normal">
                        None
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="form-dark-mode" className="cursor-pointer">
                      Enable Dark Mode
                    </Label>
                    <Switch
                      id="form-dark-mode"
                      checked={formData.darkMode}
                      onCheckedChange={(checked) => setFormData({ ...formData, darkMode: checked })}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="form-newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, newsletter: checked as boolean })
                      }
                    />
                    <Label htmlFor="form-newsletter" className="cursor-pointer">
                      Subscribe to our newsletter
                    </Label>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="form-terms" required />
                  <Label htmlFor="form-terms" className="cursor-pointer">
                    I agree to the terms and conditions <span className="text-destructive">*</span>
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Form
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Label component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Label } from "@/components/ui/label"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Required Indicator</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Label htmlFor="email">
  Email <span className="text-destructive">*</span>
</Label>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Description</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
  <p className="text-sm text-muted-foreground">
    This will be your public username.
  </p>
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Checkbox</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="cursor-pointer">
    Accept terms and conditions
  </Label>
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always use the <code>htmlFor</code> attribute to associate labels with form controls</li>
                  <li>The <code>htmlFor</code> value should match the <code>id</code> of the form control</li>
                  <li>Use clear and descriptive label text</li>
                  <li>Mark required fields with a visual indicator and aria-required</li>
                  <li>Provide helpful descriptions for complex inputs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/kbd">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kbd
          </Button>
        </Link>
        <Link href="/link">
          <Button variant="outline">
            Link
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
