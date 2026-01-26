'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp } from 'lucide-react'

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
            Beautiful charts built with Recharts. Copy and paste into your apps.
          </p>
        </div>

        {/* Area Chart Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Area Chart</CardTitle>
            <CardDescription>Showing total visitors for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Chart Container */}
            <div className="h-[300px] w-full">
              {/* Simple SVG Chart Placeholder */}
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="0" y1="60" x2="600" y2="60" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="180" x2="600" y2="180" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="240" x2="600" y2="240" stroke="currentColor" strokeOpacity="0.1" />

                {/* Area Chart */}
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 240 L 100 200 L 200 220 L 300 150 L 400 180 L 500 100 L 600 120 L 600 300 L 0 300 Z"
                  fill="url(#areaGradient)"
                />
                <path
                  d="M 0 240 L 100 200 L 200 220 L 300 150 L 400 180 L 500 100 L 600 120"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />

                {/* Labels */}
                <text x="0" y="295" fontSize="12" fill="currentColor" opacity="0.5">Jan</text>
                <text x="100" y="295" fontSize="12" fill="currentColor" opacity="0.5">Feb</text>
                <text x="200" y="295" fontSize="12" fill="currentColor" opacity="0.5">Mar</text>
                <text x="300" y="295" fontSize="12" fill="currentColor" opacity="0.5">Apr</text>
                <text x="400" y="295" fontSize="12" fill="currentColor" opacity="0.5">May</text>
                <text x="500" y="295" fontSize="12" fill="currentColor" opacity="0.5">Jun</text>
              </svg>
            </div>

            {/* Footer */}
            <div className="flex items-start gap-2 text-sm mt-4 pt-4 border-t">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="0" y1="60" x2="600" y2="60" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="180" x2="600" y2="180" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="240" x2="600" y2="240" stroke="currentColor" strokeOpacity="0.1" />

                {/* Bars */}
                <rect x="50" y="120" width="60" height="120" fill="hsl(var(--primary))" opacity="0.9" rx="4" />
                <rect x="150" y="80" width="60" height="160" fill="hsl(var(--primary))" opacity="0.9" rx="4" />
                <rect x="250" y="100" width="60" height="140" fill="hsl(var(--primary))" opacity="0.9" rx="4" />
                <rect x="350" y="50" width="60" height="190" fill="hsl(var(--primary))" opacity="0.9" rx="4" />
                <rect x="450" y="90" width="60" height="150" fill="hsl(var(--primary))" opacity="0.9" rx="4" />

                {/* Labels */}
                <text x="70" y="270" fontSize="12" fill="currentColor" opacity="0.5">Jan</text>
                <text x="170" y="270" fontSize="12" fill="currentColor" opacity="0.5">Feb</text>
                <text x="270" y="270" fontSize="12" fill="currentColor" opacity="0.5">Mar</text>
                <text x="370" y="270" fontSize="12" fill="currentColor" opacity="0.5">Apr</text>
                <text x="470" y="270" fontSize="12" fill="currentColor" opacity="0.5">May</text>
              </svg>
            </div>

            <div className="flex items-start gap-2 text-sm mt-4 pt-4 border-t">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Line Chart Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Line Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid */}
                <line x1="0" y1="60" x2="600" y2="60" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="180" x2="600" y2="180" stroke="currentColor" strokeOpacity="0.1" />
                <line x1="0" y1="240" x2="600" y2="240" stroke="currentColor" strokeOpacity="0.1" />

                {/* Line */}
                <path
                  d="M 50 180 L 150 140 L 250 160 L 350 90 L 450 110 L 550 60"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Dots */}
                <circle cx="50" cy="180" r="4" fill="hsl(var(--primary))" />
                <circle cx="150" cy="140" r="4" fill="hsl(var(--primary))" />
                <circle cx="250" cy="160" r="4" fill="hsl(var(--primary))" />
                <circle cx="350" cy="90" r="4" fill="hsl(var(--primary))" />
                <circle cx="450" cy="110" r="4" fill="hsl(var(--primary))" />
                <circle cx="550" cy="60" r="4" fill="hsl(var(--primary))" />

                {/* Labels */}
                <text x="40" y="270" fontSize="12" fill="currentColor" opacity="0.5">Jan</text>
                <text x="140" y="270" fontSize="12" fill="currentColor" opacity="0.5">Feb</text>
                <text x="240" y="270" fontSize="12" fill="currentColor" opacity="0.5">Mar</text>
                <text x="340" y="270" fontSize="12" fill="currentColor" opacity="0.5">Apr</text>
                <text x="440" y="270" fontSize="12" fill="currentColor" opacity="0.5">May</text>
                <text x="540" y="270" fontSize="12" fill="currentColor" opacity="0.5">Jun</text>
              </svg>
            </div>

            <div className="flex items-start gap-2 text-sm mt-4 pt-4 border-t">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pie Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Pie Chart */}
              <div className="relative size-[250px]">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Chrome - 25% (0 to 90 degrees) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="50"
                    strokeDasharray="39.27 157.08"
                    strokeDashoffset="0"
                  />
                  {/* Safari - 20% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="hsl(142 76% 36%)"
                    strokeWidth="50"
                    strokeDasharray="31.42 157.08"
                    strokeDashoffset="-39.27"
                  />
                  {/* Firefox - 30% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="hsl(221 83% 53%)"
                    strokeWidth="50"
                    strokeDasharray="47.12 157.08"
                    strokeDashoffset="-70.69"
                  />
                  {/* Edge - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="hsl(48 96% 53%)"
                    strokeWidth="50"
                    strokeDasharray="23.56 157.08"
                    strokeDashoffset="-117.81"
                  />
                  {/* Other - 10% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="hsl(280 65% 60%)"
                    strokeWidth="50"
                    strokeDasharray="15.71 157.08"
                    strokeDashoffset="-141.37"
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }} />
                  <span className="text-sm">Chrome</span>
                  <span className="text-sm text-muted-foreground ml-auto">25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(142,76%,36%)]" />
                  <span className="text-sm">Safari</span>
                  <span className="text-sm text-muted-foreground ml-auto">20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(221,83%,53%)]" />
                  <span className="text-sm">Firefox</span>
                  <span className="text-sm text-muted-foreground ml-auto">30%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(48,96%,53%)]" />
                  <span className="text-sm">Edge</span>
                  <span className="text-sm text-muted-foreground ml-auto">15%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(280,65%,60%)]" />
                  <span className="text-sm">Other</span>
                  <span className="text-sm text-muted-foreground ml-auto">10%</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm mt-6 pt-4 border-t">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>Copy and paste the code into your project</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}`}</code>
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
