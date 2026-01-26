'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CheckboxShowcase() {
  const [checked, setChecked] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>(['item1'])

  const toggleItem = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A control that allows the user to toggle between checked and not checked.
          </p>
        </div>

        {/* Basic Checkbox */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Checkbox</CardTitle>
            <CardDescription>Simple checkbox without label</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Checkbox />
              <Checkbox defaultChecked />
              <Checkbox disabled />
              <Checkbox disabled defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Checkbox with Label */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Label</CardTitle>
            <CardDescription>Checkbox with text label</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Send me marketing emails
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Disabled checkbox
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controlled Checkbox */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Controlled Checkbox</CardTitle>
            <CardDescription>Checkbox with state management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="controlled"
                  checked={checked}
                  onCheckedChange={(value) => setChecked(value as boolean)}
                />
                <Label htmlFor="controlled" className="text-sm font-medium leading-none cursor-pointer">
                  I agree to the terms and conditions
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Status: {checked ? 'Checked' : 'Unchecked'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox with Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Description</CardTitle>
            <CardDescription>Checkbox with additional text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="notifications" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="notifications" className="text-sm font-medium leading-none cursor-pointer">
                    Email notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account activity and security alerts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="updates" className="mt-1" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="updates" className="text-sm font-medium leading-none cursor-pointer">
                    Product updates
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when we launch new features and improvements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Checkboxes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Selection</CardTitle>
            <CardDescription>Select multiple items from a list</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { id: 'item1', label: 'React', description: 'A JavaScript library for building user interfaces' },
                { id: 'item2', label: 'Next.js', description: 'The React framework for production' },
                { id: 'item3', label: 'TypeScript', description: 'JavaScript with syntax for types' },
                { id: 'item4', label: 'Tailwind CSS', description: 'A utility-first CSS framework' },
              ].map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={item.id}
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => toggleItem(item.id)}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor={item.id} className="text-sm font-medium leading-none cursor-pointer">
                      {item.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Selected: {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Checkbox in a form layout</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Account Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref1" defaultChecked />
                      <Label htmlFor="pref1" className="text-sm font-normal cursor-pointer">
                        Enable two-factor authentication
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref2" />
                      <Label htmlFor="pref2" className="text-sm font-normal cursor-pointer">
                        Make my profile public
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref3" defaultChecked />
                      <Label htmlFor="pref3" className="text-sm font-normal cursor-pointer">
                        Allow search engines to index my profile
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Notification Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notif1" defaultChecked />
                      <Label htmlFor="notif1" className="text-sm font-normal cursor-pointer">
                        Email notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notif2" defaultChecked />
                      <Label htmlFor="notif2" className="text-sm font-normal cursor-pointer">
                        Push notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notif3" />
                      <Label htmlFor="notif3" className="text-sm font-normal cursor-pointer">
                        SMS notifications
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Save Preferences</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>Different checkbox states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-3">Default</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="default-unchecked" />
                      <Label htmlFor="default-unchecked" className="text-sm font-normal cursor-pointer">
                        Unchecked
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="default-checked" defaultChecked />
                      <Label htmlFor="default-checked" className="text-sm font-normal cursor-pointer">
                        Checked
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-3">Disabled</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled-unchecked" disabled />
                      <Label htmlFor="disabled-unchecked" className="text-sm font-normal">
                        Unchecked
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled-checked" disabled defaultChecked />
                      <Label htmlFor="disabled-checked" className="text-sm font-normal">
                        Checked
                      </Label>
                    </div>
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
            <CardDescription>How to use the Checkbox component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

{/* Basic Checkbox */}
<Checkbox />

{/* With Label */}
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">
    Accept terms and conditions
  </Label>
</div>

{/* Controlled */}
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>

{/* With Description */}
<div className="flex items-start space-x-3">
  <Checkbox id="notifications" className="mt-1" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="notifications">
      Email notifications
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about your account activity.
    </p>
  </div>
</div>

{/* Disabled */}
<Checkbox disabled />
<Checkbox disabled checked />`}</code>
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
