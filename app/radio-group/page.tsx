"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CreditCard, Smartphone, Wallet } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function RadioGroupPage() {
  const [selectedOption, setSelectedOption] = useState("option1")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [plan, setPlan] = useState("pro")
  const [theme, setTheme] = useState("system")

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Radio Group</h1>
          <Badge>Forms</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Radio Group */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Radio Group</CardTitle>
            <CardDescription>Simple radio group with labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1" className="cursor-pointer font-normal">
                  Option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2" className="cursor-pointer font-normal">
                  Option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label htmlFor="option3" className="cursor-pointer font-normal">
                  Option 3
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* With Descriptions */}
        <Card>
          <CardHeader>
            <CardTitle>With Descriptions</CardTitle>
            <CardDescription>Radio options with additional descriptions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="email">
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="email" id="email" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="email" className="cursor-pointer font-medium">
                    Email notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="sms" id="sms" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="sms" className="cursor-pointer font-medium">
                    SMS notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via text message
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="push" id="push" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="push" className="cursor-pointer font-medium">
                    Push notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications in the app
                  </p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Controlled Radio Group */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Radio Group</CardTitle>
            <CardDescription>Radio group with controlled state</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="controlled1" />
                <Label htmlFor="controlled1" className="cursor-pointer font-normal">
                  Option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="controlled2" />
                <Label htmlFor="controlled2" className="cursor-pointer font-normal">
                  Option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="controlled3" />
                <Label htmlFor="controlled3" className="cursor-pointer font-normal">
                  Option 3
                </Label>
              </div>
            </RadioGroup>

            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm">
                <strong>Selected:</strong> {selectedOption}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOption("option1")}
              >
                Select Option 1
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOption("option2")}
              >
                Select Option 2
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOption("option3")}
              >
                Select Option 3
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Radio group with icon elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <Label htmlFor="card" className="cursor-pointer font-medium">
                    Credit Card
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Pay with credit or debit card
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="paypal" id="paypal" />
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <Label htmlFor="paypal" className="cursor-pointer font-medium">
                    PayPal
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Pay with your PayPal account
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="mobile" id="mobile" />
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <Label htmlFor="mobile" className="cursor-pointer font-medium">
                    Mobile Payment
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Pay with Apple Pay or Google Pay
                  </p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>Radio group with disabled options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="available1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="available1" id="available1" />
                <Label htmlFor="available1" className="cursor-pointer font-normal">
                  Available option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="available2" id="available2" />
                <Label htmlFor="available2" className="cursor-pointer font-normal">
                  Available option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <RadioGroupItem value="disabled1" id="disabled1" disabled />
                <Label htmlFor="disabled1" className="font-normal">
                  Disabled option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <RadioGroupItem value="disabled2" id="disabled2" disabled />
                <Label htmlFor="disabled2" className="font-normal">
                  Disabled option 2
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Horizontal Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Layout</CardTitle>
            <CardDescription>Radio group arranged horizontally</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="option1" className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="horizontal1" />
                <Label htmlFor="horizontal1" className="cursor-pointer font-normal">
                  Option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="horizontal2" />
                <Label htmlFor="horizontal2" className="cursor-pointer font-normal">
                  Option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="horizontal3" />
                <Label htmlFor="horizontal3" className="cursor-pointer font-normal">
                  Option 3
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option4" id="horizontal4" />
                <Label htmlFor="horizontal4" className="cursor-pointer font-normal">
                  Option 4
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Card Style Options */}
        <Card>
          <CardHeader>
            <CardTitle>Card Style Options</CardTitle>
            <CardDescription>Radio group with card-like appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
              <div
                className={`relative flex items-start space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  shippingMethod === "standard"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="standard" className="cursor-pointer font-medium">
                    Standard Shipping
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    5-7 business days
                  </p>
                  <p className="text-sm font-medium mt-1">Free</p>
                </div>
              </div>
              <div
                className={`relative flex items-start space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  shippingMethod === "express"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <RadioGroupItem value="express" id="express" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="express" className="cursor-pointer font-medium">
                    Express Shipping
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    2-3 business days
                  </p>
                  <p className="text-sm font-medium mt-1">$15.00</p>
                </div>
              </div>
              <div
                className={`relative flex items-start space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  shippingMethod === "overnight"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <RadioGroupItem value="overnight" id="overnight" className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor="overnight" className="cursor-pointer font-medium">
                    Overnight Shipping
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Next business day
                  </p>
                  <p className="text-sm font-medium mt-1">$35.00</p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing Plans</CardTitle>
            <CardDescription>Radio group for selecting subscription plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={plan} onValueChange={setPlan}>
              <div
                className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  plan === "free"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="free" id="free" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="free" className="cursor-pointer text-lg font-semibold">
                      Free
                    </Label>
                    <p className="text-2xl font-bold mt-2">$0<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Up to 5 projects
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Basic support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        1 GB storage
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  plan === "pro"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="pro" className="cursor-pointer text-lg font-semibold">
                        Pro
                      </Label>
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    </div>
                    <p className="text-2xl font-bold mt-2">$29<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Unlimited projects
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        100 GB storage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Advanced analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  plan === "enterprise"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="enterprise" className="cursor-pointer text-lg font-semibold">
                      Enterprise
                    </Label>
                    <p className="text-2xl font-bold mt-2">$99<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Unlimited everything
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Unlimited storage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        SLA guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Theme Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Theme Selection</CardTitle>
            <CardDescription>Radio group for theme preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={theme} onValueChange={setTheme}>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    theme === "light"
                      ? "border-primary"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <RadioGroupItem value="light" id="light" className="absolute top-4 right-4" />
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-white border border-border" />
                    <Label htmlFor="light" className="cursor-pointer font-medium">
                      Light
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Light mode theme
                    </p>
                  </div>
                </div>

                <div
                  className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    theme === "dark"
                      ? "border-primary"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <RadioGroupItem value="dark" id="dark" className="absolute top-4 right-4" />
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-slate-900 border border-border" />
                    <Label htmlFor="dark" className="cursor-pointer font-medium">
                      Dark
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Dark mode theme
                    </p>
                  </div>
                </div>

                <div
                  className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    theme === "system"
                      ? "border-primary"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <RadioGroupItem value="system" id="system" className="absolute top-4 right-4" />
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-gradient-to-br from-white to-slate-900 border border-border" />
                    <Label htmlFor="system" className="cursor-pointer font-medium">
                      System
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Use system setting
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Radio group in a complete form</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  How did you hear about us? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup defaultValue="social">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="social" id="social-media" />
                    <Label htmlFor="social-media" className="cursor-pointer font-normal">
                      Social Media
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="search" id="search-engine" />
                    <Label htmlFor="search-engine" className="cursor-pointer font-normal">
                      Search Engine
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend" className="cursor-pointer font-normal">
                      Friend or Colleague
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advertisement" id="advertisement" />
                    <Label htmlFor="advertisement" className="cursor-pointer font-normal">
                      Advertisement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer font-normal">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Preferred contact method <span className="text-destructive">*</span>
                </Label>
                <RadioGroup defaultValue="email-contact">
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="email-contact" id="email-contact" className="mt-0.5" />
                    <div className="flex-1">
                      <Label htmlFor="email-contact" className="cursor-pointer font-medium">
                        Email
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        We'll contact you via email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="phone-contact" id="phone-contact" className="mt-0.5" />
                    <div className="flex-1">
                      <Label htmlFor="phone-contact" className="cursor-pointer font-medium">
                        Phone
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        We'll call you during business hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="no-contact" id="no-contact" className="mt-0.5" />
                    <div className="flex-1">
                      <Label htmlFor="no-contact" className="cursor-pointer font-medium">
                        Don't contact me
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'll reach out if I need help
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Radio Group component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Controlled State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`const [value, setValue] = useState("option1")

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
</RadioGroup>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Description</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="flex items-start space-x-3">
  <RadioGroupItem value="option1" id="option1" className="mt-0.5" />
  <div className="flex-1">
    <Label htmlFor="option1">Option Label</Label>
    <p className="text-sm text-muted-foreground">
      Description text
    </p>
  </div>
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disabled Item</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<RadioGroupItem value="disabled" id="disabled" disabled />`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Horizontal Layout</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<RadioGroup defaultValue="option1" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="h1" />
    <Label htmlFor="h1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="h2" />
    <Label htmlFor="h2">Option 2</Label>
  </div>
</RadioGroup>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always use labels with radio buttons for better accessibility</li>
                  <li>Ensure labels are clickable by using the htmlFor attribute</li>
                  <li>Use radio groups when only one option can be selected</li>
                  <li>Provide clear, concise labels for each option</li>
                  <li>Consider using descriptions for complex options</li>
                  <li>Group related options together logically</li>
                  <li>Mark required fields with a visual indicator</li>
                  <li>Avoid too many options (consider using a select instead)</li>
                  <li>Use appropriate spacing between options</li>
                  <li>Consider card-style layouts for important selections</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Radio groups are keyboard navigable (arrow keys)</li>
                  <li>Space key selects the focused option</li>
                  <li>Each RadioGroupItem must have a unique id</li>
                  <li>Use proper ARIA attributes (handled automatically)</li>
                  <li>Provide clear focus indicators</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/progress">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Progress
          </Button>
        </Link>
        <Link href="/scroll-area">
          <Button variant="outline">
            Scroll Area
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
