'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ChevronLeft,
  ChevronRight,
  Grid,
  List as ListView,
  Calendar,
  Table,
  BarChart,
  PieChart,
  LineChart,
  Download,
  Share2,
  Copy,
  Edit,
  Trash2,
  MoreHorizontal,
  Settings,
  Users,
  Bell,
  Search,
  Filter,
  SortAsc,
  Plus,
  Minus,
  X,
  Check,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'

export default function ButtonGroupShowcase() {
  const [alignment, setAlignment] = useState('left')
  const [view, setView] = useState('grid')
  const [format, setFormat] = useState<string[]>([])
  const [count, setCount] = useState(5)

  const toggleFormat = (value: string) => {
    setFormat(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Button Group</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Groups of related buttons for actions, navigation, and selection.
          </p>
        </div>

        {/* Basic Horizontal Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Button Group</CardTitle>
            <CardDescription>Horizontal group of connected buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Outline Group */}
            <div>
              <p className="text-sm font-medium mb-3">Outline Style</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  <ChevronLeft />
                  Previous
                </Button>
                <Button variant="outline" className="rounded-none">
                  Current
                </Button>
                <Button variant="outline" className="rounded-l-none border-l-0">
                  Next
                  <ChevronRight />
                </Button>
              </div>
            </div>

            {/* Default Style */}
            <div>
              <p className="text-sm font-medium mb-3">Default Style</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button className="rounded-r-none">First</Button>
                <Button className="rounded-none">Second</Button>
                <Button className="rounded-l-none">Third</Button>
              </div>
            </div>

            {/* Secondary Style */}
            <div>
              <p className="text-sm font-medium mb-3">Secondary Style</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="secondary" className="rounded-r-none">
                  Option 1
                </Button>
                <Button variant="secondary" className="rounded-none">
                  Option 2
                </Button>
                <Button variant="secondary" className="rounded-l-none">
                  Option 3
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Icon Button Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Button Groups</CardTitle>
            <CardDescription>Groups of icon-only buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Text Formatting */}
            <div>
              <p className="text-sm font-medium mb-3">Text Formatting</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-r-none border-r-0"
                  onClick={() => toggleFormat('bold')}
                  data-active={format.includes('bold')}
                >
                  <Bold />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-none border-r-0"
                  onClick={() => toggleFormat('italic')}
                  data-active={format.includes('italic')}
                >
                  <Italic />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-l-none"
                  onClick={() => toggleFormat('underline')}
                  data-active={format.includes('underline')}
                >
                  <Underline />
                </Button>
              </div>
            </div>

            {/* Alignment */}
            <div>
              <p className="text-sm font-medium mb-3">Text Alignment</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button
                  size="icon"
                  variant={alignment === 'left' ? 'default' : 'outline'}
                  className="rounded-r-none border-r-0"
                  onClick={() => setAlignment('left')}
                >
                  <AlignLeft />
                </Button>
                <Button
                  size="icon"
                  variant={alignment === 'center' ? 'default' : 'outline'}
                  className="rounded-none border-r-0"
                  onClick={() => setAlignment('center')}
                >
                  <AlignCenter />
                </Button>
                <Button
                  size="icon"
                  variant={alignment === 'right' ? 'default' : 'outline'}
                  className="rounded-none border-r-0"
                  onClick={() => setAlignment('right')}
                >
                  <AlignRight />
                </Button>
                <Button
                  size="icon"
                  variant={alignment === 'justify' ? 'default' : 'outline'}
                  className="rounded-l-none"
                  onClick={() => setAlignment('justify')}
                >
                  <AlignJustify />
                </Button>
              </div>
            </div>

            {/* List Types */}
            <div>
              <p className="text-sm font-medium mb-3">List Types</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
                  <List />
                </Button>
                <Button size="icon" variant="outline" className="rounded-l-none">
                  <ListOrdered />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Segmented Control */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Segmented Control</CardTitle>
            <CardDescription>Single selection button groups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* View Toggle */}
            <div>
              <p className="text-sm font-medium mb-3">View Mode</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button
                  variant={view === 'grid' ? 'default' : 'outline'}
                  className="rounded-r-none border-r-0"
                  onClick={() => setView('grid')}
                >
                  <Grid />
                  Grid
                </Button>
                <Button
                  variant={view === 'list' ? 'default' : 'outline'}
                  className="rounded-l-none"
                  onClick={() => setView('list')}
                >
                  <ListView />
                  List
                </Button>
              </div>
            </div>

            {/* Chart Types */}
            <div>
              <p className="text-sm font-medium mb-3">Chart Type</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
                  <BarChart />
                </Button>
                <Button size="icon" variant="outline" className="rounded-none border-r-0">
                  <PieChart />
                </Button>
                <Button size="icon" variant="outline" className="rounded-l-none">
                  <LineChart />
                </Button>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <p className="text-sm font-medium mb-3">Time Period</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  Day
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  Week
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  Month
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  Year
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Action Groups</CardTitle>
            <CardDescription>Common action button groups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Edit Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Edit Actions</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
                  <Edit />
                </Button>
                <Button size="icon" variant="outline" className="rounded-none border-r-0">
                  <Copy />
                </Button>
                <Button size="icon" variant="outline" className="rounded-l-none">
                  <Trash2 />
                </Button>
              </div>
            </div>

            {/* Share Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Share & Export</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  <Download />
                  Download
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  <Share2 />
                  Share
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  <Copy />
                  Copy
                </Button>
              </div>
            </div>

            {/* More Actions */}
            <div>
              <p className="text-sm font-medium mb-3">With More Menu</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  <Edit />
                  Edit
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  <Copy />
                  Copy
                </Button>
                <Button size="icon" variant="outline" className="rounded-l-none">
                  <MoreHorizontal />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Button Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vertical Button Groups</CardTitle>
            <CardDescription>Stacked button groups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Menu Style */}
            <div>
              <p className="text-sm font-medium mb-3">Menu Style</p>
              <div className="inline-flex flex-col w-48 shadow-sm" role="group">
                <Button variant="outline" className="rounded-b-none border-b-0 justify-start">
                  <Settings />
                  Settings
                </Button>
                <Button variant="outline" className="rounded-none border-b-0 justify-start">
                  <Users />
                  Team
                </Button>
                <Button variant="outline" className="rounded-none border-b-0 justify-start">
                  <Bell />
                  Notifications
                </Button>
                <Button variant="outline" className="rounded-t-none justify-start">
                  <Search />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes in Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Size Variations</CardTitle>
            <CardDescription>Button groups in different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Small */}
            <div>
              <p className="text-sm font-medium mb-3">Small</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="sm" variant="outline" className="rounded-r-none border-r-0">
                  First
                </Button>
                <Button size="sm" variant="outline" className="rounded-none border-r-0">
                  Second
                </Button>
                <Button size="sm" variant="outline" className="rounded-l-none">
                  Third
                </Button>
              </div>
            </div>

            {/* Default */}
            <div>
              <p className="text-sm font-medium mb-3">Default</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  First
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  Second
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  Third
                </Button>
              </div>
            </div>

            {/* Large */}
            <div>
              <p className="text-sm font-medium mb-3">Large</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button size="lg" variant="outline" className="rounded-r-none border-r-0">
                  First
                </Button>
                <Button size="lg" variant="outline" className="rounded-none border-r-0">
                  Second
                </Button>
                <Button size="lg" variant="outline" className="rounded-l-none">
                  Third
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Counter Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Counter Button Group</CardTitle>
            <CardDescription>Increment and decrement controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="inline-flex items-center rounded-md shadow-sm" role="group">
              <Button
                size="icon"
                variant="outline"
                className="rounded-r-none border-r-0"
                onClick={() => setCount(Math.max(0, count - 1))}
              >
                <Minus />
              </Button>
              <div className="flex items-center justify-center min-w-16 px-4 border-y border-input bg-background text-sm font-medium">
                {count}
              </div>
              <Button
                size="icon"
                variant="outline"
                className="rounded-l-none border-l-0"
                onClick={() => setCount(count + 1)}
              >
                <Plus />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-world Examples</CardTitle>
            <CardDescription>Practical button group usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Toolbar */}
            <div>
              <p className="text-sm font-medium mb-3">Text Editor Toolbar</p>
              <div className="border rounded-lg p-3 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Button size="icon-sm" variant="outline" className="rounded-r-none border-r-0">
                      <Bold />
                    </Button>
                    <Button size="icon-sm" variant="outline" className="rounded-none border-r-0">
                      <Italic />
                    </Button>
                    <Button size="icon-sm" variant="outline" className="rounded-l-none">
                      <Underline />
                    </Button>
                  </div>

                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Button size="icon-sm" variant="outline" className="rounded-r-none border-r-0">
                      <AlignLeft />
                    </Button>
                    <Button size="icon-sm" variant="outline" className="rounded-none border-r-0">
                      <AlignCenter />
                    </Button>
                    <Button size="icon-sm" variant="outline" className="rounded-l-none">
                      <AlignRight />
                    </Button>
                  </div>

                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Button size="icon-sm" variant="outline" className="rounded-r-none border-r-0">
                      <List />
                    </Button>
                    <Button size="icon-sm" variant="outline" className="rounded-l-none">
                      <ListOrdered />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table Actions */}
            <div>
              <p className="text-sm font-medium mb-3">Data Table Controls</p>
              <div className="border rounded-lg p-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Button size="sm" variant="outline" className="rounded-r-none border-r-0">
                      <Filter />
                      Filter
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-l-none">
                      <SortAsc />
                      Sort
                    </Button>
                  </div>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Button size="sm" variant="outline" className="rounded-r-none border-r-0">
                    <Download />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-none border-r-0">
                    <Share2 />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-l-none">
                    <MoreHorizontal />
                  </Button>
                </div>
              </div>
            </div>

            {/* Media Player */}
            <div>
              <p className="text-sm font-medium mb-3">Media Player Controls</p>
              <div className="border rounded-lg p-4 flex items-center justify-center">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
                    <SkipBack />
                  </Button>
                  <Button size="icon" variant="default" className="rounded-none">
                    <Play />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-none border-l-0 border-r-0">
                    <SkipForward />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-l-none">
                    <Volume2 />
                  </Button>
                </div>
              </div>
            </div>

            {/* Calendar Navigation */}
            <div>
              <p className="text-sm font-medium mb-3">Calendar Navigation</p>
              <div className="border rounded-lg p-3 flex items-center justify-between">
                <Button size="icon-sm" variant="outline">
                  <ChevronLeft />
                </Button>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">January 2024</span>
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Button size="sm" variant="outline" className="rounded-r-none border-r-0">
                      <Calendar />
                      Day
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-none border-r-0">
                      Week
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-l-none">
                      Month
                    </Button>
                  </div>
                </div>
                <Button size="icon-sm" variant="outline">
                  <ChevronRight />
                </Button>
              </div>
            </div>

            {/* Confirmation Dialog */}
            <div>
              <p className="text-sm font-medium mb-3">Dialog Actions</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Confirm Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to proceed with this action?
                  </p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline">
                    <X />
                    Cancel
                  </Button>
                  <Button>
                    <Check />
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to create button groups</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Button } from '@/components/ui/button'

{/* Basic Horizontal Group */}
<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button variant="outline" className="rounded-r-none border-r-0">
    First
  </Button>
  <Button variant="outline" className="rounded-none border-r-0">
    Second
  </Button>
  <Button variant="outline" className="rounded-l-none">
    Third
  </Button>
</div>

{/* Icon Button Group */}
<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button size="icon" variant="outline" className="rounded-r-none border-r-0">
    <Edit />
  </Button>
  <Button size="icon" variant="outline" className="rounded-none border-r-0">
    <Copy />
  </Button>
  <Button size="icon" variant="outline" className="rounded-l-none">
    <Trash2 />
  </Button>
</div>

{/* Vertical Group */}
<div className="inline-flex flex-col w-48 shadow-sm" role="group">
  <Button variant="outline" className="rounded-b-none border-b-0 justify-start">
    First
  </Button>
  <Button variant="outline" className="rounded-none border-b-0 justify-start">
    Second
  </Button>
  <Button variant="outline" className="rounded-t-none justify-start">
    Third
  </Button>
</div>

{/* Segmented Control */}
<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button
    variant={selected === 'option1' ? 'default' : 'outline'}
    className="rounded-r-none border-r-0"
    onClick={() => setSelected('option1')}
  >
    Option 1
  </Button>
  <Button
    variant={selected === 'option2' ? 'default' : 'outline'}
    className="rounded-l-none"
    onClick={() => setSelected('option2')}
  >
    Option 2
  </Button>
</div>`}</code>
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
