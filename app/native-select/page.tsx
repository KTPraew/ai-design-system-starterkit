"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Globe, CreditCard, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"

export default function NativeSelectPage() {
  const [country, setCountry] = useState("")
  const [language, setLanguage] = useState("en")
  const [cardMonth, setCardMonth] = useState("")
  const [cardYear, setCardYear] = useState("")
  const [timeZone, setTimeZone] = useState("")

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Native Select</h1>
          <Badge>Forms</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A native HTML select element styled to match the design system. Provides better performance and accessibility for simple dropdown needs.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Native Select */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Native Select</CardTitle>
            <CardDescription>Simple native select dropdowns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic-select">Choose an option</Label>
              <NativeSelect id="basic-select">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fruit-select">Select a fruit</Label>
              <NativeSelect id="fruit-select" defaultValue="apple">
                <option value="">Choose a fruit</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
                <option value="mango">Mango</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="color-select">Favorite color</Label>
              <NativeSelect id="color-select">
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Native select with icon labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country-select" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Country
              </Label>
              <NativeSelect
                id="country-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="th">Thailand</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
                <option value="sg">Singapore</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language-select" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Language
              </Label>
              <NativeSelect
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="th">ไทย</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="zh">中文</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Required and Optional */}
        <Card>
          <CardHeader>
            <CardTitle>Required and Optional</CardTitle>
            <CardDescription>Native select with required and optional states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required-select">
                Country <span className="text-destructive">*</span>
              </Label>
              <NativeSelect id="required-select" required>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </NativeSelect>
              <p className="text-sm text-muted-foreground">This field is required</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="optional-select">
                State <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <NativeSelect id="optional-select">
                <option value="">Select a state</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
                <option value="fl">Florida</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Different sizes for native select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small-select" className="text-xs">Small Select</Label>
              <NativeSelect id="small-select" className="h-8 text-xs">
                <option value="">Small option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-select">Default Select</Label>
              <NativeSelect id="default-select">
                <option value="">Default option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="large-select" className="text-base">Large Select</Label>
              <NativeSelect id="large-select" className="h-12">
                <option value="">Large option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>Different states for native select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-state-select">Default</Label>
              <NativeSelect id="default-state-select">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-select" className="text-muted-foreground">
                Disabled
              </Label>
              <NativeSelect id="disabled-select" disabled>
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="error-select" className="text-destructive">
                Error
              </Label>
              <NativeSelect id="error-select" error>
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </NativeSelect>
              <p className="text-sm text-destructive">Please select a valid option</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="readonly-select" className="text-muted-foreground">
                Read-only (via disabled with value)
              </Label>
              <NativeSelect id="readonly-select" disabled defaultValue="1">
                <option value="1">Selected Option</option>
                <option value="2">Option 2</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Grouped Options */}
        <Card>
          <CardHeader>
            <CardTitle>Grouped Options</CardTitle>
            <CardDescription>Native select with optgroup for organizing options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timezone-select">
                <MapPin className="inline h-4 w-4 mr-1" />
                Time Zone
              </Label>
              <NativeSelect
                id="timezone-select"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
              >
                <option value="">Select a timezone</option>
                <optgroup label="North America">
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="mst">Mountain Time (MST)</option>
                  <option value="cst">Central Time (CST)</option>
                  <option value="est">Eastern Time (EST)</option>
                </optgroup>
                <optgroup label="Europe">
                  <option value="gmt">Greenwich Mean Time (GMT)</option>
                  <option value="cet">Central European Time (CET)</option>
                  <option value="eet">Eastern European Time (EET)</option>
                </optgroup>
                <optgroup label="Asia">
                  <option value="ist">India Standard Time (IST)</option>
                  <option value="cst-china">China Standard Time (CST)</option>
                  <option value="jst">Japan Standard Time (JST)</option>
                  <option value="bkk">Bangkok Time (ICT)</option>
                </optgroup>
                <optgroup label="Pacific">
                  <option value="aest">Australian Eastern Time (AEST)</option>
                  <option value="nzst">New Zealand Standard Time (NZST)</option>
                </optgroup>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category-select">Product Category</Label>
              <NativeSelect id="category-select">
                <option value="">Select a category</option>
                <optgroup label="Electronics">
                  <option value="phones">Phones</option>
                  <option value="laptops">Laptops</option>
                  <option value="tablets">Tablets</option>
                </optgroup>
                <optgroup label="Clothing">
                  <option value="shirts">Shirts</option>
                  <option value="pants">Pants</option>
                  <option value="shoes">Shoes</option>
                </optgroup>
                <optgroup label="Home & Garden">
                  <option value="furniture">Furniture</option>
                  <option value="decor">Decor</option>
                  <option value="tools">Tools</option>
                </optgroup>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Select */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Select</CardTitle>
            <CardDescription>Native select with multiple option selection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="multiple-select">
                Select multiple countries (Hold Ctrl/Cmd to select multiple)
              </Label>
              <NativeSelect id="multiple-select" multiple className="h-auto py-1">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="th">Thailand</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
                <option value="sg">Singapore</option>
              </NativeSelect>
              <p className="text-sm text-muted-foreground">
                Hold Ctrl (Windows) or Cmd (Mac) to select multiple options
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills-select">Skills</Label>
              <NativeSelect id="skills-select" multiple className="h-auto py-1">
                <optgroup label="Frontend">
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="js">JavaScript</option>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                </optgroup>
                <optgroup label="Backend">
                  <option value="node">Node.js</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="php">PHP</option>
                </optgroup>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Width Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Width Variants</CardTitle>
            <CardDescription>Native select with different widths</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-width-select">Full Width</Label>
              <NativeSelect id="full-width-select" className="w-full">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="auto-width-select">Auto Width (Inline)</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm">Show</span>
                <NativeSelect id="auto-width-select" className="w-auto">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </NativeSelect>
                <span className="text-sm">entries</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fixed-width-select">Fixed Width</Label>
              <NativeSelect id="fixed-width-select" className="w-64">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Form Example - Credit Card */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example - Credit Card</CardTitle>
            <CardDescription>Native select in a credit card form</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="card-name">
                  <CreditCard className="inline h-4 w-4 mr-1" />
                  Cardholder Name <span className="text-destructive">*</span>
                </Label>
                <input
                  id="card-name"
                  type="text"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-number">
                  Card Number <span className="text-destructive">*</span>
                </Label>
                <input
                  id="card-number"
                  type="text"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card-month">
                    Month <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="card-month"
                    value={cardMonth}
                    onChange={(e) => setCardMonth(e.target.value)}
                    required
                  >
                    <option value="">MM</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-year">
                    Year <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="card-year"
                    value={cardYear}
                    onChange={(e) => setCardYear(e.target.value)}
                    required
                  >
                    <option value="">YYYY</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-cvv">
                    CVV <span className="text-destructive">*</span>
                  </Label>
                  <input
                    id="card-cvv"
                    type="text"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-type">
                  Card Type <span className="text-destructive">*</span>
                </Label>
                <NativeSelect id="card-type" required>
                  <option value="">Select card type</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="amex">American Express</option>
                  <option value="discover">Discover</option>
                </NativeSelect>
              </div>

              <Button type="submit" className="w-full">
                Submit Payment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Form Example - User Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example - User Profile</CardTitle>
            <CardDescription>Native select in a user profile form</CardDescription>
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
                <Label htmlFor="profile-country">
                  Country <span className="text-destructive">*</span>
                </Label>
                <NativeSelect id="profile-country" required>
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="th">Thailand</option>
                  <option value="jp">Japan</option>
                </NativeSelect>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age-range">Age Range</Label>
                  <NativeSelect id="age-range">
                    <option value="">Select age range</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55+">55+</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <NativeSelect id="gender">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </NativeSelect>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <NativeSelect id="occupation">
                  <option value="">Select occupation</option>
                  <optgroup label="Technology">
                    <option value="developer">Software Developer</option>
                    <option value="designer">Designer</option>
                    <option value="pm">Product Manager</option>
                  </optgroup>
                  <optgroup label="Business">
                    <option value="analyst">Business Analyst</option>
                    <option value="consultant">Consultant</option>
                    <option value="manager">Manager</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </optgroup>
                </NativeSelect>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-language">Preferred Language</Label>
                <NativeSelect id="profile-language" defaultValue="en">
                  <option value="en">English</option>
                  <option value="th">ไทย</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </NativeSelect>
              </div>

              <Button type="submit" className="w-full">
                Save Profile
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Native Select component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { NativeSelect } from "@/components/ui/native-select"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</NativeSelect>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Label</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <NativeSelect id="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </NativeSelect>
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Grouped Options</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect>
  <option value="">Select a category</option>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</NativeSelect>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Error State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect error>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
</NativeSelect>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Multiple Selection</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect multiple className="h-auto py-1">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</NativeSelect>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">When to Use Native Select</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Better Performance:</strong> Native selects are lighter and faster than custom dropdowns</li>
                  <li><strong>Mobile Optimization:</strong> Mobile devices provide optimized native picker UIs</li>
                  <li><strong>Accessibility:</strong> Built-in keyboard navigation and screen reader support</li>
                  <li><strong>Simple Use Cases:</strong> When you don't need custom styling or complex interactions</li>
                  <li><strong>Form Validation:</strong> Works seamlessly with HTML5 form validation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">When to Use Custom Select</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Need custom styling beyond CSS capabilities</li>
                  <li>Want to display icons or images in options</li>
                  <li>Require complex filtering or search functionality</li>
                  <li>Need multi-select with tags/chips display</li>
                  <li>Want async loading of options</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/menubar">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Menubar
          </Button>
        </Link>
        <Link href="/navigation-menu">
          <Button variant="outline">
            Navigation Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
