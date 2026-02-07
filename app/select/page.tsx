"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Globe, CreditCard, User, Building, Truck, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SelectPage() {
  const [selectedValue, setSelectedValue] = useState("")
  const [country, setCountry] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  return (
    <DocsLayoutWrapper><div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Select</h1>
          <Badge>Forms</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Select */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Select</CardTitle>
            <CardDescription>Simple select dropdown with options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic-select">Select an option</Label>
              <Select>
                <SelectTrigger id="basic-select">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4">Option 4</SelectItem>
                  <SelectItem value="option5">Option 5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fruit-select">Select a fruit</Label>
              <Select defaultValue="apple">
                <SelectTrigger id="fruit-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                  <SelectItem value="mango">Mango</SelectItem>
                  <SelectItem value="strawberry">Strawberry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Select */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Select</CardTitle>
            <CardDescription>Select with controlled state</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="controlled-select">Choose an option</Label>
              <Select value={selectedValue} onValueChange={setSelectedValue}>
                <SelectTrigger id="controlled-select">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4">Option 4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm">
                <strong>Selected value:</strong> {selectedValue || "None"}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedValue("option1")}
              >
                Select Option 1
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedValue("option2")}
              >
                Select Option 2
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedValue("")}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* With Groups */}
        <Card>
          <CardHeader>
            <CardTitle>With Groups</CardTitle>
            <CardDescription>Select with grouped options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="grouped-select">Select a timezone</Label>
              <Select>
                <SelectTrigger id="grouped-select">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">Eastern Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="bkk">Indochina Time (ICT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
                    <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
                    <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category-select">Product Category</Label>
              <Select>
                <SelectTrigger id="category-select">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Electronics</SelectLabel>
                    <SelectItem value="phones">Smartphones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Clothing</SelectLabel>
                    <SelectItem value="mens">Men's Clothing</SelectItem>
                    <SelectItem value="womens">Women's Clothing</SelectItem>
                    <SelectItem value="kids">Kids' Clothing</SelectItem>
                    <SelectItem value="shoes">Shoes</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Home & Garden</SelectLabel>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="decor">Home Decor</SelectItem>
                    <SelectItem value="kitchen">Kitchen</SelectItem>
                    <SelectItem value="garden">Garden</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Select options with icon elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country-select">
                <Globe className="inline h-4 w-4 mr-1" />
                Country
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country-select">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <span className="flex items-center gap-2">
                      🇺🇸 United States
                    </span>
                  </SelectItem>
                  <SelectItem value="uk">
                    <span className="flex items-center gap-2">
                      🇬🇧 United Kingdom
                    </span>
                  </SelectItem>
                  <SelectItem value="ca">
                    <span className="flex items-center gap-2">
                      🇨🇦 Canada
                    </span>
                  </SelectItem>
                  <SelectItem value="au">
                    <span className="flex items-center gap-2">
                      🇦🇺 Australia
                    </span>
                  </SelectItem>
                  <SelectItem value="th">
                    <span className="flex items-center gap-2">
                      🇹🇭 Thailand
                    </span>
                  </SelectItem>
                  <SelectItem value="jp">
                    <span className="flex items-center gap-2">
                      🇯🇵 Japan
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment-select">
                <CreditCard className="inline h-4 w-4 mr-1" />
                Payment Method
              </Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger id="payment-select">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">
                    <span className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Credit Card
                    </span>
                  </SelectItem>
                  <SelectItem value="paypal">
                    <span className="flex items-center gap-2">
                      💳 PayPal
                    </span>
                  </SelectItem>
                  <SelectItem value="bank">
                    <span className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Bank Transfer
                    </span>
                  </SelectItem>
                  <SelectItem value="cash">
                    <span className="flex items-center gap-2">
                      💵 Cash on Delivery
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Select with different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small-select" className="text-xs">Small Select</Label>
              <Select>
                <SelectTrigger id="small-select" size="sm">
                  <SelectValue placeholder="Small size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-select">Default Select</Label>
              <Select>
                <SelectTrigger id="default-select">
                  <SelectValue placeholder="Default size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>Different states for select component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="normal-select">Normal</Label>
              <Select>
                <SelectTrigger id="normal-select">
                  <SelectValue placeholder="Normal state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-select" className="text-muted-foreground">
                Disabled
              </Label>
              <Select disabled>
                <SelectTrigger id="disabled-select">
                  <SelectValue placeholder="Disabled state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="error-select" className="text-destructive">
                Error
              </Label>
              <Select>
                <SelectTrigger id="error-select" aria-invalid>
                  <SelectValue placeholder="Error state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-destructive">This field is required</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-items-select">With Disabled Items</Label>
              <Select>
                <SelectTrigger id="disabled-items-select">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Available Option 1</SelectItem>
                  <SelectItem value="2" disabled>Disabled Option 2</SelectItem>
                  <SelectItem value="3">Available Option 3</SelectItem>
                  <SelectItem value="4" disabled>Disabled Option 4</SelectItem>
                  <SelectItem value="5">Available Option 5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Width Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Width Variants</CardTitle>
            <CardDescription>Select with different widths</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-width-select">Full Width</Label>
              <Select>
                <SelectTrigger id="full-width-select" className="w-full">
                  <SelectValue placeholder="Full width select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fixed-width-select">Fixed Width (280px)</Label>
              <Select>
                <SelectTrigger id="fixed-width-select" className="w-[280px]">
                  <SelectValue placeholder="Fixed width select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="auto-width-select">Auto Width (Inline)</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm">Show</span>
                <Select defaultValue="10">
                  <SelectTrigger id="auto-width-select" className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm">entries</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example - Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example - Shipping</CardTitle>
            <CardDescription>Select components in a shipping form</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <input
                    id="first-name"
                    type="text"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last-name">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <input
                    id="last-name"
                    type="text"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-country">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Country <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="form-country">
                    <SelectValue placeholder="Select your country" />
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
                <Label htmlFor="address">
                  Street Address <span className="text-destructive">*</span>
                </Label>
                <input
                  id="address"
                  type="text"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                  placeholder="123 Main St"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <input
                    id="city"
                    type="text"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                    placeholder="New York"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">
                    State / Province <span className="text-destructive">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shipping">
                  <Truck className="inline h-4 w-4 mr-1" />
                  Shipping Method <span className="text-destructive">*</span>
                </Label>
                <Select defaultValue="standard">
                  <SelectTrigger id="shipping">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Shipping (5-7 days) - Free</SelectItem>
                    <SelectItem value="express">Express Shipping (2-3 days) - $15.00</SelectItem>
                    <SelectItem value="overnight">Overnight Shipping (1 day) - $35.00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Continue to Payment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Scrollable Content */}
        <Card>
          <CardHeader>
            <CardTitle>Scrollable Content</CardTitle>
            <CardDescription>Select with many options requiring scroll</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="scrollable-select">Select a country</Label>
              <Select>
                <SelectTrigger id="scrollable-select">
                  <SelectValue placeholder="Search and select..." />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
                    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Botswana",
                    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
                    "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
                    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
                    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                  ].map((country) => (
                    <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Select component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Groups</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { SelectGroup, SelectLabel } from "@/components/ui/select"

<SelectContent>
  <SelectGroup>
    <SelectLabel>Group 1</SelectLabel>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectGroup>
  <SelectGroup>
    <SelectLabel>Group 2</SelectLabel>
    <SelectItem value="3">Option 3</SelectItem>
    <SelectItem value="4">Option 4</SelectItem>
  </SelectGroup>
</SelectContent>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Controlled State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`const [value, setValue] = useState("")

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disabled State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

// Disable specific item
<SelectItem value="2" disabled>Disabled Option</SelectItem>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide a clear placeholder text</li>
                  <li>Use labels to describe what the select is for</li>
                  <li>Group related options together with SelectGroup</li>
                  <li>Mark required fields with a visual indicator</li>
                  <li>Provide helpful error messages when validation fails</li>
                  <li>Consider using search/filter for long lists (10+ items)</li>
                  <li>Use appropriate width for the expected content</li>
                  <li>Test keyboard navigation (arrow keys, Enter, Escape)</li>
                  <li>Ensure sufficient contrast for readability</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keyboard navigable (arrow keys, Enter to select, Escape to close)</li>
                  <li>Screen reader compatible with ARIA attributes</li>
                  <li>Focus management handled automatically</li>
                  <li>Use htmlFor on labels to associate with SelectTrigger id</li>
                  <li>Disabled state properly communicated to assistive technologies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/scroll-area">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Scroll Area
          </Button>
        </Link>
        <Link href="/separator">
          <Button variant="outline">
            Separator
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
