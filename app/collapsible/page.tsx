'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, ChevronRight, ChevronsUpDown, Star } from 'lucide-react'

export default function CollapsibleShowcase() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Collapsible</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            An interactive component which expands/collapses a panel.
          </p>
        </div>

        {/* Basic Collapsible */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Collapsible</CardTitle>
            <CardDescription>Simple collapsible panel</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* Controlled Collapsible */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Controlled Collapsible</CardTitle>
            <CardDescription>Collapsible with controlled state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-sm font-semibold">
                    Can I use this in my project?
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  Yes. Free to use for personal and commercial projects. No attribution required.
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 text-sm">
                    The components are built using Radix UI and Tailwind CSS.
                  </div>
                  <div className="rounded-md border px-4 py-3 text-sm">
                    They are accessible, customizable, and open source.
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <p className="text-sm text-muted-foreground">
                Status: {isOpen ? 'Open' : 'Closed'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* With Chevron Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Chevron Icon</CardTitle>
            <CardDescription>Collapsible with rotating chevron indicator</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible className="w-full space-y-2">
              <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-accent transition-colors">
                  <span className="font-semibold">What payment methods do you accept?</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                  We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.
                  For enterprise customers, we also offer invoice-based payments.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* FAQ Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>FAQ Example</CardTitle>
            <CardDescription>Multiple collapsible items for FAQ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  question: 'What is your return policy?',
                  answer: 'We offer a 30-day money-back guarantee for all purchases. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.'
                },
                {
                  question: 'How long does shipping take?',
                  answer: 'Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for delivery within 2-3 business days.'
                },
                {
                  question: 'Do you ship internationally?',
                  answer: 'Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by location.'
                },
                {
                  question: 'How can I track my order?',
                  answer: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.'
                }
              ].map((item, index) => (
                <Collapsible key={index} className="w-full">
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-accent transition-colors">
                      <span className="font-semibold">{item.question}</span>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-90" />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="rounded-lg border border-t-0 p-4 text-sm text-muted-foreground">
                      {item.answer}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Settings Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Settings Panel</CardTitle>
            <CardDescription>Collapsible sections in settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Collapsible className="w-full">
                <div className="rounded-lg border">
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center justify-between p-4 text-left hover:bg-accent transition-colors">
                      <div>
                        <h4 className="font-semibold">Account Settings</h4>
                        <p className="text-sm text-muted-foreground">Manage your account preferences</p>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-t p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email notifications</span>
                        <Badge variant="secondary">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Two-factor authentication</span>
                        <Badge variant="secondary">Disabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Profile visibility</span>
                        <Badge variant="secondary">Public</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              <Collapsible className="w-full">
                <div className="rounded-lg border">
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center justify-between p-4 text-left hover:bg-accent transition-colors">
                      <div>
                        <h4 className="font-semibold">Privacy Settings</h4>
                        <p className="text-sm text-muted-foreground">Control your privacy options</p>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-t p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Show activity status</span>
                        <Badge variant="secondary">On</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Allow search engines</span>
                        <Badge variant="secondary">Off</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Data collection</span>
                        <Badge variant="secondary">Minimal</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          </CardContent>
        </Card>

        {/* With Custom Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Custom Content</CardTitle>
            <CardDescription>Rich content inside collapsible</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible className="w-full">
              <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">Premium Features</span>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="rounded-lg border border-t-0 p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-primary mt-2" />
                      <div>
                        <h5 className="font-medium">Advanced Analytics</h5>
                        <p className="text-sm text-muted-foreground">
                          Get detailed insights into your data with advanced analytics tools.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-primary mt-2" />
                      <div>
                        <h5 className="font-medium">Priority Support</h5>
                        <p className="text-sm text-muted-foreground">
                          24/7 priority customer support with dedicated account manager.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-primary mt-2" />
                      <div>
                        <h5 className="font-medium">Custom Integrations</h5>
                        <p className="text-sm text-muted-foreground">
                          Build custom integrations with our powerful API.
                        </p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Upgrade Now</Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Collapsible component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

{/* Basic */}
<Collapsible>
  <CollapsibleTrigger>Can I use this?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>

{/* Controlled */}
const [isOpen, setIsOpen] = useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    Content here
  </CollapsibleContent>
</Collapsible>

{/* With Custom Button */}
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="sm">
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Content here
  </CollapsibleContent>
</Collapsible>`}</code>
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
