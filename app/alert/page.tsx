'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Terminal,
  XCircle,
  Rocket,
  ShieldCheck,
  Bell,
  Zap,
} from 'lucide-react'

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a callout for user attention with contextual feedback messages.
          </p>
        </div>

        {/* Default Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Alert</CardTitle>
            <CardDescription>Basic alert with icon, title and description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Destructive Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Destructive Alert</CardTitle>
            <CardDescription>Alert for errors and critical warnings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again to continue.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Variants with Custom Styling */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert Variants</CardTitle>
            <CardDescription>Different alert styles for various contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Info Alert */}
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-800 dark:text-blue-200">Information</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                Your account settings have been updated successfully.
              </AlertDescription>
            </Alert>

            {/* Success Alert */}
            <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            {/* Warning Alert */}
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-200">Warning</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                Your subscription will expire in 3 days. Please renew to avoid interruption.
              </AlertDescription>
            </Alert>

            {/* Error Alert */}
            <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-800 dark:text-red-200">Error</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                Failed to process your request. Please try again later.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert without Title */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert without Title</CardTitle>
            <CardDescription>Simple alerts with only description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This is a simple alert with only a description and no title.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Something went wrong. Please check your input and try again.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert without Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert without Icon</CardTitle>
            <CardDescription>Alerts can be used without icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                This alert does not have an icon. The layout adjusts automatically.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Please review the terms and conditions before proceeding.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert with Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert with Actions</CardTitle>
            <CardDescription>Alerts can include interactive elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
              <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-800 dark:text-blue-200">New Feature Available!</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                <p className="mb-3">
                  We&apos;ve just released a new dashboard with improved analytics and reporting capabilities.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="default">Try it now</Button>
                  <Button size="sm" variant="outline">Learn more</Button>
                </div>
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Payment Failed</AlertTitle>
              <AlertDescription>
                <p className="mb-3">
                  We were unable to process your payment. Please update your payment method.
                </p>
                <Button size="sm" variant="outline" className="border-destructive/50 hover:bg-destructive/10">
                  Update Payment Method
                </Button>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Contextual Alerts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contextual Alerts</CardTitle>
            <CardDescription>Real-world usage examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Security Alert */}
            <Alert className="border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950">
              <ShieldCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-800 dark:text-purple-200">Two-Factor Authentication</AlertTitle>
              <AlertDescription className="text-purple-700 dark:text-purple-300">
                Secure your account by enabling two-factor authentication in your security settings.
              </AlertDescription>
            </Alert>

            {/* Notification Alert */}
            <Alert className="border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950">
              <Bell className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-800 dark:text-orange-200">Notification Settings</AlertTitle>
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                You have notifications disabled. Enable them to stay updated on important changes.
              </AlertDescription>
            </Alert>

            {/* Performance Alert */}
            <Alert className="border-cyan-200 bg-cyan-50 dark:border-cyan-900 dark:bg-cyan-950">
              <Zap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-800 dark:text-cyan-200">Performance Tip</AlertTitle>
              <AlertDescription className="text-cyan-700 dark:text-cyan-300">
                Enable caching to improve your application&apos;s load time by up to 50%.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Alert component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

{/* Default Alert */}
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

{/* Destructive Alert */}
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired.
  </AlertDescription>
</Alert>

{/* Custom Styled Alert */}
<Alert className="border-green-200 bg-green-50">
  <CheckCircle2 className="h-4 w-4 text-green-600" />
  <AlertTitle className="text-green-800">Success</AlertTitle>
  <AlertDescription className="text-green-700">
    Your changes have been saved.
  </AlertDescription>
</Alert>`}</code>
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
