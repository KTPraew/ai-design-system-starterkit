"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Loader2Icon, RefreshCwIcon } from "lucide-react"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function SpinnerPage() {
  const [loading, setLoading] = useState(false)
  const [loadingButton1, setLoadingButton1] = useState(false)
  const [loadingButton2, setLoadingButton2] = useState(false)
  const [loadingButton3, setLoadingButton3] = useState(false)

  const handleButtonClick = (
    setLoader: (value: boolean) => void
  ) => {
    setLoader(true)
    setTimeout(() => setLoader(false), 3000)
  }

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spinner</h1>
          <Badge variant="secondary">Loading</Badge>
        </div>
        <p className="text-muted-foreground">
          Loading indicators to show activity or progress.
        </p>
      </div>

      {/* Basic Spinner */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Spinner</h2>
            <p className="text-sm text-muted-foreground">
              Default loading spinner.
            </p>
          </div>

          <div className="flex items-center justify-center rounded-lg border p-12">
            <Spinner />
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { Spinner } from "@/components/ui/spinner"

<Spinner />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Sizes */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Sizes</h2>
            <p className="text-sm text-muted-foreground">
              Spinner in different sizes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 rounded-lg border p-12">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <Label className="text-xs text-muted-foreground">Small</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <Label className="text-xs text-muted-foreground">Medium (Default)</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <Label className="text-xs text-muted-foreground">Large</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <Label className="text-xs text-muted-foreground">Extra Large</Label>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Variants */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Variants</h2>
            <p className="text-sm text-muted-foreground">
              Spinner in different color variants.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 rounded-lg border p-12">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="default" />
              <Label className="text-xs text-muted-foreground">Default</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="primary" />
              <Label className="text-xs text-muted-foreground">Primary</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="secondary" />
              <Label className="text-xs text-muted-foreground">Secondary</Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="destructive" />
              <Label className="text-xs text-muted-foreground">Destructive</Label>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Spinner variant="default" />
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="destructive" />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Text */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Text</h2>
            <p className="text-sm text-muted-foreground">
              Spinner with accompanying text labels.
            </p>
          </div>

          <div className="grid gap-6 rounded-lg border p-6 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Spinner size="sm" />
              <span className="text-sm">Loading...</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="sm" variant="primary" />
              <span className="text-sm">Processing your request...</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Spinner size="lg" />
              <span className="text-sm font-medium">Please wait</span>
              <span className="text-xs text-muted-foreground">This may take a few moments</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Spinner size="lg" variant="primary" />
              <span className="text-sm font-medium">Uploading files</span>
              <span className="text-xs text-muted-foreground">45% complete</span>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center gap-3">
  <Spinner size="sm" />
  <span>Loading...</span>
</div>

<div className="flex flex-col items-center gap-3">
  <Spinner size="lg" />
  <span>Please wait</span>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Buttons */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Buttons</h2>
            <p className="text-sm text-muted-foreground">
              Loading states for buttons.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 rounded-lg border p-6">
            <Button
              disabled={loadingButton1}
              onClick={() => handleButtonClick(setLoadingButton1)}
            >
              {loadingButton1 ? (
                <>
                  <Loader2Icon className="mr-2 size-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Click to Load"
              )}
            </Button>

            <Button
              variant="outline"
              disabled={loadingButton2}
              onClick={() => handleButtonClick(setLoadingButton2)}
            >
              {loadingButton2 ? (
                <>
                  <Loader2Icon className="mr-2 size-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>

            <Button
              variant="secondary"
              disabled={loadingButton3}
              onClick={() => handleButtonClick(setLoadingButton3)}
            >
              {loadingButton3 ? (
                <>
                  <Loader2Icon className="mr-2 size-4 animate-spin" />
                  Processing
                </>
              ) : (
                "Process Data"
              )}
            </Button>

            <Button disabled>
              <Loader2Icon className="mr-2 size-4 animate-spin" />
              Please wait...
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { Loader2Icon } from "lucide-react"

<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2Icon className="mr-2 size-4 animate-spin" />
      Loading...
    </>
  ) : (
    "Click to Load"
  )}
</Button>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Loading States */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Loading States</h2>
            <p className="text-sm text-muted-foreground">
              Different loading state patterns.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card Loading */}
            <div className="space-y-3 rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Card Loading</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLoading(!loading)}
                >
                  Toggle
                </Button>
              </div>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Spinner size="lg" />
                  <p className="mt-4 text-sm text-muted-foreground">Loading content...</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Content Title</p>
                  <p className="text-sm text-muted-foreground">
                    This is the actual content that appears after loading is complete.
                  </p>
                </div>
              )}
            </div>

            {/* Inline Loading */}
            <div className="space-y-3 rounded-lg border p-6">
              <h3 className="text-sm font-semibold">Inline Loading</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <span className="text-sm">User data</span>
                  <Spinner size="sm" />
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <span className="text-sm">Analytics</span>
                  <Spinner size="sm" variant="primary" />
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <span className="text-sm">Reports</span>
                  <Spinner size="sm" variant="secondary" />
                </div>
              </div>
            </div>

            {/* Overlay Loading */}
            <div className="relative space-y-3 rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Overlay Loading</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const overlay = document.getElementById("overlay-loading")
                    if (overlay) {
                      overlay.classList.remove("hidden")
                      setTimeout(() => overlay.classList.add("hidden"), 2000)
                    }
                  }}
                >
                  Start
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm">Content underneath the overlay</p>
                <p className="text-sm text-muted-foreground">
                  Click Start to see the loading overlay
                </p>
              </div>
              <div
                id="overlay-loading"
                className="absolute inset-0 hidden flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-3">
                  <Spinner size="lg" />
                  <span className="text-sm font-medium">Processing...</span>
                </div>
              </div>
            </div>

            {/* Full Screen Loading */}
            <div className="space-y-3 rounded-lg border p-6">
              <h3 className="text-sm font-semibold">Full Screen Concept</h3>
              <div className="flex h-48 items-center justify-center rounded-md bg-muted/50">
                <div className="flex flex-col items-center gap-3">
                  <Spinner size="xl" variant="primary" />
                  <div className="text-center">
                    <p className="text-sm font-medium">Loading Application</p>
                    <p className="text-xs text-muted-foreground">Please wait...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`// Card Loading
{loading ? (
  <div className="flex flex-col items-center py-12">
    <Spinner size="lg" />
    <p>Loading content...</p>
  </div>
) : (
  <div>Content here</div>
)}

// Overlay Loading
<div className="relative">
  <div>Content</div>
  <div className="absolute inset-0 bg-background/80">
    <Spinner size="lg" />
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Form Loading */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Form Loading</h2>
            <p className="text-sm text-muted-foreground">
              Loading states in form submissions.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button
              className="w-full"
              disabled={loadingButton1}
              onClick={() => handleButtonClick(setLoadingButton1)}
            >
              {loadingButton1 ? (
                <>
                  <Loader2Icon className="mr-2 size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [loading, setLoading] = useState(false)

const handleSubmit = async () => {
  setLoading(true)
  await submitForm()
  setLoading(false)
}

<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2Icon className="mr-2 size-4 animate-spin" />
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</Button>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Custom Animation */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Custom Spinner</h2>
            <p className="text-sm text-muted-foreground">
              Different spinner styles and animations.
            </p>
          </div>

          <div className="grid gap-6 rounded-lg border p-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <Loader2Icon className="size-8 animate-spin text-primary" />
              <Label className="text-xs text-muted-foreground">Default Spin</Label>
            </div>

            <div className="flex flex-col items-center gap-3">
              <RefreshCwIcon className="size-8 animate-spin text-primary" />
              <Label className="text-xs text-muted-foreground">Refresh Icon</Label>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <Label className="text-xs text-muted-foreground">Border Spinner</Label>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="size-8 animate-spin rounded-full border-4 border-dashed border-primary" />
              <Label className="text-xs text-muted-foreground">Dashed Border</Label>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="size-8 animate-pulse rounded-full bg-primary" />
              <Label className="text-xs text-muted-foreground">Pulse</Label>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1">
                <div className="size-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                <div className="size-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                <div className="size-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
              </div>
              <Label className="text-xs text-muted-foreground">Dots</Label>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`// Icon Spinner
<Loader2Icon className="size-8 animate-spin" />
<RefreshCwIcon className="size-8 animate-spin" />

// Border Spinner
<div className="size-8 animate-spin rounded-full
  border-4 border-primary border-t-transparent" />

// Pulse
<div className="size-8 animate-pulse rounded-full bg-primary" />

// Bouncing Dots
<div className="flex gap-1">
  <div className="size-2 animate-bounce rounded-full bg-primary" />
  <div className="size-2 animate-bounce rounded-full bg-primary"
    style={{ animationDelay: "150ms" }} />
  <div className="size-2 animate-bounce rounded-full bg-primary"
    style={{ animationDelay: "300ms" }} />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Page Loading */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Page Loading Example</h2>
            <p className="text-sm text-muted-foreground">
              Full page loading state simulation.
            </p>
          </div>

          <div className="flex h-96 items-center justify-center rounded-lg border bg-muted/20">
            <div className="flex flex-col items-center gap-4">
              <Spinner size="xl" variant="primary" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Loading Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Fetching your data...
                </p>
              </div>
              <div className="mt-2 flex gap-1">
                <div className="size-2 animate-bounce rounded-full bg-primary" />
                <div className="size-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                <div className="size-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`{isLoading ? (
  <div className="flex h-screen items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Spinner size="xl" variant="primary" />
      <div className="text-center">
        <h3>Loading Dashboard</h3>
        <p>Fetching your data...</p>
      </div>
    </div>
  </div>
) : (
  <Dashboard />
)}`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/sonner">
          <Button variant="outline">
            ← Sonner
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/switch">
          <Button variant="outline">
            Switch →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
