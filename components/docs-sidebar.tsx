'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Home, BookOpen } from 'lucide-react'

const components = [
  { name: 'Accordion', href: '/docs/components/accordion' },
  { name: 'Alert', href: '/docs/components/alert' },
  { name: 'Aspect Ratio', href: '/docs/components/aspect-ratio' },
  { name: 'Avatar', href: '/docs/components/avatar' },
  { name: 'Badge', href: '/docs/components/badge' },
  { name: 'Breadcrumb', href: '/docs/components/breadcrumb' },
  { name: 'Button', href: '/docs/components/button' },
  { name: 'Button Group', href: '/docs/components/button-group' },
  { name: 'Calendar', href: '/docs/components/calendar' },
  { name: 'Card', href: '/docs/components/card' },
  { name: 'Carousel', href: '/docs/components/carousel' },
  { name: 'Chart', href: '/docs/components/chart' },
  { name: 'Checkbox', href: '/docs/components/checkbox' },
  { name: 'Collapsible', href: '/docs/components/collapsible' },
  { name: 'Combobox', href: '/docs/components/combobox' },
  { name: 'Command', href: '/docs/components/command' },
  { name: 'Context Menu', href: '/docs/components/context-menu' },
  { name: 'Data Table', href: '/docs/components/data-table' },
  { name: 'Date Picker', href: '/docs/components/date-picker' },
  { name: 'Dialog', href: '/docs/components/dialog' },
  { name: 'Drawer', href: '/docs/components/drawer' },
  { name: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
  { name: 'Empty', href: '/docs/components/empty' },
  { name: 'Field', href: '/docs/components/field' },
  { name: 'Hover Card', href: '/docs/components/hover-card' },
  { name: 'Input', href: '/docs/components/input' },
  { name: 'Input Group', href: '/docs/components/input-group' },
  { name: 'Input OTP', href: '/docs/components/input-otp' },
  { name: 'Item', href: '/docs/components/item' },
  { name: 'KBD', href: '/docs/components/kbd' },
  { name: 'Label', href: '/docs/components/label' },
  { name: 'Menubar', href: '/docs/components/menubar' },
  { name: 'Native Select', href: '/docs/components/native-select' },
  { name: 'Navigation Menu', href: '/docs/components/navigation-menu' },
  { name: 'Pagination', href: '/docs/components/pagination' },
  { name: 'Popover', href: '/docs/components/popover' },
  { name: 'Progress', href: '/docs/components/progress' },
  { name: 'Radio Group', href: '/docs/components/radio-group' },
  { name: 'Scroll Area', href: '/docs/components/scroll-area' },
  { name: 'Select', href: '/docs/components/select' },
  { name: 'Separator', href: '/docs/components/separator' },
  { name: 'Sheet', href: '/docs/components/sheet' },
  { name: 'Sidebar', href: '/docs/components/sidebar' },
  { name: 'Skeleton', href: '/docs/components/skeleton' },
  { name: 'Slider', href: '/docs/components/slider' },
  { name: 'Sonner', href: '/docs/components/sonner' },
  { name: 'Spinner', href: '/docs/components/spinner' },
  { name: 'Switch', href: '/docs/components/switch' },
  { name: 'Table', href: '/docs/components/table' },
  { name: 'Tabs', href: '/docs/components/tabs' },
  { name: 'Textarea', href: '/docs/components/textarea' },
  { name: 'Toggle', href: '/docs/components/toggle' },
  { name: 'Toggle Group', href: '/docs/components/toggle-group' },
  { name: 'Tooltip', href: '/docs/components/tooltip' },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 z-30 hidden h-screen w-64 shrink-0 border-r bg-background md:sticky md:block">
      <ScrollArea className="h-full py-6 px-4">
        <div className="space-y-6">
          {/* Header */}
          <div className="px-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-semibold">shadcn/ui</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="space-y-1">
            <Link href="/">
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === '/' && 'bg-muted'
                )}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === '/docs' && 'bg-muted'
                )}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Introduction
              </Button>
            </Link>
          </div>

          {/* Components List */}
          <div className="space-y-1">
            <h4 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
              Components
            </h4>
            <div className="space-y-0.5">
              {components.map((component) => (
                <Link key={component.href} href={component.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start text-sm font-normal',
                      pathname === component.href && 'bg-muted font-medium'
                    )}
                  >
                    {component.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
