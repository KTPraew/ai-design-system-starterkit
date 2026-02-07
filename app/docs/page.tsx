import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Beautiful and accessible components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      {/* About */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground leading-7">
          This is a collection of re-usable components built using Radix UI and Tailwind CSS.
          These components are designed to be accessible, customizable, and easy to use in your projects.
        </p>
        <p className="text-muted-foreground leading-7">
          The components are styled with Tailwind CSS and can be easily customized to match your design system.
          All components follow accessibility best practices and are fully keyboard navigable.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Accessible</CardTitle>
              <CardDescription>
                Built with accessibility in mind. All components follow WCAG guidelines.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customizable</CardTitle>
              <CardDescription>
                Easy to customize with Tailwind CSS classes and CSS variables.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TypeScript</CardTitle>
              <CardDescription>
                Fully typed with TypeScript for better developer experience.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dark Mode</CardTitle>
              <CardDescription>
                All components support dark mode out of the box.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Getting Started */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
        <p className="text-muted-foreground leading-7">
          Browse the components in the sidebar to see examples and usage instructions.
          Each component page includes live examples, code snippets, and API documentation.
        </p>
        <div className="flex gap-4">
          <Link href="/docs/components/accordion">
            <Button>Browse Components</Button>
          </Link>
          <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Visit shadcn/ui</Button>
          </Link>
        </div>
      </div>

      {/* Credits */}
      <div className="space-y-4 border-t pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Credits</h2>
        <p className="text-muted-foreground leading-7">
          Built with{' '}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          ,{' '}
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Radix UI
          </a>
          , and{' '}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </div>
  )
}
