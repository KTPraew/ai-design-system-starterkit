'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { CreditCard, HelpCircle, Settings, User, Shield, Bell, Palette } from 'lucide-react'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function AccordionPage() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>

        {/* Default Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Accordion</CardTitle>
            <CardDescription>Single item can be expanded at a time</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern for accordions.
                  The accordion component is built on top of Radix UI primitives,
                  ensuring full keyboard navigation and screen reader support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other components
                  in shadcn/ui. You can easily customize the styles using Tailwind CSS
                  utility classes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It uses CSS animations for smooth open and close transitions.
                  The chevron icon also rotates to indicate the expanded state.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Multiple Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Accordion</CardTitle>
            <CardDescription>Multiple items can be expanded simultaneously</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes! When using type=&quot;multiple&quot;, you can have multiple accordion
                  items expanded at the same time. This is useful for FAQ sections
                  where users might want to compare answers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I control the accordion?</AccordionTrigger>
                <AccordionContent>
                  The accordion can be controlled or uncontrolled. Use the value
                  prop for controlled mode, or defaultValue for uncontrolled mode
                  with an initial expanded item.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I disable items?</AccordionTrigger>
                <AccordionContent>
                  Yes, individual accordion items can be disabled by adding the
                  disabled prop to the AccordionItem component.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* FAQ Style Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>Common questions about our service</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, MasterCard, American Express),
                  PayPal, and bank transfers. For enterprise customers, we also offer
                  invoice-based payments with NET 30 terms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
                <AccordionContent>
                  You can cancel your subscription at any time from your account settings.
                  Navigate to Settings → Billing → Cancel Subscription. Your access will
                  continue until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee for all new subscriptions.
                  If you&apos;re not satisfied with our service, contact our support team
                  within 30 days of purchase for a full refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use industry-standard encryption (AES-256) for all data
                  at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2
                  Type II certified and we undergo regular security audits.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Settings Style Accordion with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="profile">
                <AccordionTrigger>
                  <span className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Profile Settings
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-muted-foreground">
                      Manage your profile information, avatar, and display name.
                    </p>
                    <Button size="sm" variant="outline">Edit Profile</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="billing">
                <AccordionTrigger>
                  <span className="flex items-center gap-3">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    Billing & Payments
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-muted-foreground">
                      View your billing history, update payment methods, and manage invoices.
                    </p>
                    <Button size="sm" variant="outline">Manage Billing</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security">
                <AccordionTrigger>
                  <span className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    Security
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-muted-foreground">
                      Configure two-factor authentication, manage sessions, and view login history.
                    </p>
                    <Button size="sm" variant="outline">Security Settings</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="notifications">
                <AccordionTrigger>
                  <span className="flex items-center gap-3">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    Notifications
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-muted-foreground">
                      Choose which notifications you want to receive via email, push, or SMS.
                    </p>
                    <Button size="sm" variant="outline">Notification Preferences</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="appearance">
                <AccordionTrigger>
                  <span className="flex items-center gap-3">
                    <Palette className="h-4 w-4 text-muted-foreground" />
                    Appearance
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-7">
                    <p className="text-sm text-muted-foreground">
                      Customize the look and feel of your dashboard with theme options.
                    </p>
                    <Button size="sm" variant="outline">Theme Settings</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Default Expanded */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Expanded</CardTitle>
            <CardDescription>Accordion with a default expanded item</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>This item is expanded by default</AccordionTrigger>
                <AccordionContent>
                  Use the defaultValue prop to set which item should be expanded
                  when the accordion first renders. This is useful for highlighting
                  important information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>This item is collapsed by default</AccordionTrigger>
                <AccordionContent>
                  Other items remain collapsed until the user interacts with them.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Accordion component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Is it accessible?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
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
