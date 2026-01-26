'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
} from 'lucide-react'

export default function ChartShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Chart</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Data visualization components for displaying analytics and metrics.
          </p>
        </div>

        {/* Note about Chart Library */}
        <Card className="mb-8 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">Chart Library</CardTitle>
            <CardDescription className="text-blue-700 dark:text-blue-300">
              To use charts in your application, install a chart library like Recharts:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-sm text-blue-900 dark:text-blue-100">
              <code>npm install recharts</code>
            </pre>
          </CardContent>
        </Card>

        {/* Bar Chart Preview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Compare values across categories</CardDescription>
              </div>
              <BarChart className="size-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simple Bar Chart Visualization */}
              <div className="space-y-3">
                {[
                  { label: 'Jan', value: 65, color: 'bg-blue-500' },
                  { label: 'Feb', value: 78, color: 'bg-blue-500' },
                  { label: 'Mar', value: 90, color: 'bg-blue-500' },
                  { label: 'Apr', value: 55, color: 'bg-blue-500' },
                  { label: 'May', value: 85, color: 'bg-blue-500' },
                  { label: 'Jun', value: 95, color: 'bg-blue-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-sm font-medium w-10">{item.label}</span>
                    <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                      <div
                        className={`${item.color} h-full flex items-center justify-end px-3 transition-all`}
                        style={{ width: `${item.value}%` }}
                      >
                        <span className="text-xs font-medium text-white">{item.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Line Chart Preview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Line Chart</CardTitle>
                <CardDescription>Show trends over time</CardDescription>
              </div>
              <LineChart className="size-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2 px-4 py-4 bg-muted/30 rounded-lg">
              {[40, 65, 55, 75, 60, 85, 70, 90, 85, 95, 88, 100].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm" style={{ height: `${height}%` }} />
                  {index % 2 === 0 && (
                    <span className="text-xs text-muted-foreground">M{(index / 2) + 1}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
              <span>Jan 2024</span>
              <span>Jun 2024</span>
            </div>
          </CardContent>
        </Card>

        {/* Pie/Donut Chart Preview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pie Chart</CardTitle>
                <CardDescription>Show composition and percentages</CardDescription>
              </div>
              <PieChart className="size-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Donut Chart Visual */}
              <div className="relative size-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {/* Blue segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="20"
                    strokeDasharray="75.4 251.2"
                    strokeDashoffset="0"
                  />
                  {/* Green segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="20"
                    strokeDasharray="62.8 251.2"
                    strokeDashoffset="-75.4"
                  />
                  {/* Purple segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="20"
                    strokeDasharray="50.2 251.2"
                    strokeDashoffset="-138.2"
                  />
                  {/* Orange segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(249, 115, 22)"
                    strokeWidth="20"
                    strokeDasharray="62.8 251.2"
                    strokeDashoffset="-188.4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-3">
                {[
                  { label: 'Desktop', value: '30%', color: 'bg-blue-500' },
                  { label: 'Mobile', value: '25%', color: 'bg-green-500' },
                  { label: 'Tablet', value: '20%', color: 'bg-purple-500' },
                  { label: 'Other', value: '25%', color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-3 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Area Chart Preview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Area Chart</CardTitle>
                <CardDescription>Highlight volume and trends</CardDescription>
              </div>
              <Activity className="size-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative bg-gradient-to-b from-purple-500/20 to-transparent rounded-lg overflow-hidden">
              <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 0 80 L 30 70 L 60 75 L 90 60 L 120 65 L 150 50 L 180 55 L 210 40 L 240 45 L 270 30 L 300 35 L 300 100 L 0 100 Z"
                  fill="url(#gradient)"
                  opacity="0.5"
                />
                <path
                  d="M 0 80 L 30 70 L 60 75 L 90 60 L 120 65 L 150 50 L 180 55 L 210 40 L 240 45 L 270 30 L 300 35"
                  fill="none"
                  stroke="rgb(168, 85, 247)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Stats with Charts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dashboard Stats</CardTitle>
            <CardDescription>Key metrics with mini charts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Revenue */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Revenue</span>
                    <DollarSign className="size-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold mb-1">$45,231</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
                    <TrendingUp className="size-3" />
                    <span>+20.1% from last month</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[40, 55, 45, 65, 50, 70, 60, 80].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-green-500 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Users */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Users</span>
                    <Users className="size-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold mb-1">+2,350</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
                    <TrendingUp className="size-3" />
                    <span>+15.3% from last month</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[30, 45, 60, 50, 65, 55, 70, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-blue-500 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sales */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Sales</span>
                    <ShoppingCart className="size-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold mb-1">+12,234</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
                    <TrendingUp className="size-3" />
                    <span>+8.1% from last month</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[50, 60, 55, 70, 65, 75, 70, 80].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-purple-500 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Active */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Active</span>
                    <Activity className="size-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold mb-1">573</div>
                  <div className="flex items-center gap-1 text-xs text-red-600 mb-3">
                    <TrendingDown className="size-3" />
                    <span>-2.4% from last month</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[80, 75, 70, 65, 60, 55, 50, 45].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-orange-500 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Progress Bars as Charts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progress Metrics</CardTitle>
            <CardDescription>Goal tracking and completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { label: 'Q1 Target', value: 85, color: 'bg-blue-500' },
                { label: 'Q2 Target', value: 72, color: 'bg-green-500' },
                { label: 'Q3 Target', value: 65, color: 'bg-purple-500' },
                { label: 'Q4 Target', value: 45, color: 'bg-orange-500' },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={item.value} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stacked Bar Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Stacked Bar Chart</CardTitle>
            <CardDescription>Compare multiple data series</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: 'Mon', values: [30, 25, 20] },
                { label: 'Tue', values: [35, 30, 15] },
                { label: 'Wed', values: [25, 35, 25] },
                { label: 'Thu', values: [40, 20, 25] },
                { label: 'Fri', values: [30, 30, 25] },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-sm font-medium w-10">{item.label}</span>
                  <div className="flex-1 flex h-8 rounded-full overflow-hidden bg-muted">
                    <div
                      className="bg-blue-500 flex items-center justify-center"
                      style={{ width: `${item.values[0]}%` }}
                    >
                      <span className="text-xs font-medium text-white">{item.values[0]}%</span>
                    </div>
                    <div
                      className="bg-green-500 flex items-center justify-center"
                      style={{ width: `${item.values[1]}%` }}
                    >
                      <span className="text-xs font-medium text-white">{item.values[1]}%</span>
                    </div>
                    <div
                      className="bg-purple-500 flex items-center justify-center"
                      style={{ width: `${item.values[2]}%` }}
                    >
                      <span className="text-xs font-medium text-white">{item.values[2]}%</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 justify-center pt-4">
                {[
                  { label: 'Product A', color: 'bg-blue-500' },
                  { label: 'Product B', color: 'bg-green-500' },
                  { label: 'Product C', color: 'bg-purple-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`size-3 rounded-full ${item.color}`} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-world Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Complete analytics overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Total Visits</div>
                  <div className="text-2xl font-bold">124,563</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="size-3" />
                    +12.5%
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Avg. Duration</div>
                  <div className="text-2xl font-bold">3m 24s</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="size-3" />
                    +8.2%
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Bounce Rate</div>
                  <div className="text-2xl font-bold">42.3%</div>
                  <div className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <TrendingDown className="size-3" />
                    -3.1%
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Organic Search', value: 45, color: 'bg-blue-500' },
                  { label: 'Direct', value: 30, color: 'bg-green-500' },
                  { label: 'Social Media', value: 15, color: 'bg-purple-500' },
                  { label: 'Referral', value: 10, color: 'bg-orange-500' },
                ].map((source) => (
                  <div key={source.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{source.label}</span>
                      <span className="text-sm text-muted-foreground">{source.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${source.color}`} style={{ width: `${source.value}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Installation & Usage</CardTitle>
            <CardDescription>How to add charts to your application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Install Recharts:</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>npm install recharts</code>
              </pre>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Basic Example:</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
]

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}`}</code>
              </pre>
            </div>
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
