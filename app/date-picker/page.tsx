'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

export default function DatePickerShowcase() {
  const [date, setDate] = useState<Date>()
  const [dateWithTime, setDateWithTime] = useState<Date>()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [multipleDates, setMultipleDates] = useState<Date[]>([])

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Date Picker</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A date picker component with range and presets.
          </p>
        </div>

        {/* Basic Date Picker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Date Picker</CardTitle>
            <CardDescription>Simple date picker with popover</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {date && (
                <p className="text-sm text-muted-foreground">
                  Selected: <span className="font-medium text-foreground">{format(date, 'PPP')}</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Date Range Picker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Date Range Picker</CardTitle>
            <CardDescription>Select a date range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      'w-[300px] justify-start text-left font-normal',
                      !dateRange && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, 'LLL dd, y')} -{' '}
                          {format(dateRange.to, 'LLL dd, y')}
                        </>
                      ) : (
                        format(dateRange.from, 'LLL dd, y')
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              {dateRange?.from && dateRange?.to && (
                <p className="text-sm text-muted-foreground">
                  Selected range: <span className="font-medium text-foreground">
                    {format(dateRange.from, 'PPP')} - {format(dateRange.to, 'PPP')}
                  </span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Date Picker with Presets */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Presets</CardTitle>
            <CardDescription>Date picker with quick preset options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !dateWithTime && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateWithTime ? format(dateWithTime, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                      onClick={() => setDateWithTime(new Date())}
                    >
                      Today
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                      onClick={() => {
                        const tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        setDateWithTime(tomorrow)
                      }}
                    >
                      Tomorrow
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                      onClick={() => {
                        const nextWeek = new Date()
                        nextWeek.setDate(nextWeek.getDate() + 7)
                        setDateWithTime(nextWeek)
                      }}
                    >
                      In a week
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                      onClick={() => {
                        const nextMonth = new Date()
                        nextMonth.setMonth(nextMonth.getMonth() + 1)
                        setDateWithTime(nextMonth)
                      }}
                    >
                      In a month
                    </Button>
                  </div>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={dateWithTime}
                      onSelect={setDateWithTime}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              {dateWithTime && (
                <p className="text-sm text-muted-foreground">
                  Selected: <span className="font-medium text-foreground">{format(dateWithTime, 'PPP')}</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Date picker in a form layout</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Date of Birth <span className="text-destructive">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-sm text-muted-foreground">
                  Select your date of birth
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Event Date Range <span className="text-destructive">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date range</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-sm text-muted-foreground">
                  Select event start and end dates
                </p>
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Date Picker States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different States</CardTitle>
            <CardDescription>Date picker in various states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Default</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">With Value</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(new Date(), 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={new Date()} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Disabled</label>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  disabled
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Pick a date</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Booking Example</CardTitle>
            <CardDescription>Real-world booking scenario</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-out Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="rounded-lg border p-4 space-y-2">
                <h4 className="font-medium">Booking Summary</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Check-in: Not selected</p>
                  <p>Check-out: Not selected</p>
                  <p>Duration: - nights</p>
                </div>
              </div>

              <Button className="w-full">Check Availability</Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Date Picker component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

{/* Basic Date Picker */}
const [date, setDate] = useState<Date>()

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        'w-[280px] justify-start text-left font-normal',
        !date && 'text-muted-foreground'
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, 'PPP') : <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>

{/* Date Range Picker */}
import { DateRange } from 'react-day-picker'

const [dateRange, setDateRange] = useState<DateRange | undefined>()

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {dateRange?.from ? (
        dateRange.to ? (
          <>
            {format(dateRange.from, 'LLL dd, y')} -
            {format(dateRange.to, 'LLL dd, y')}
          </>
        ) : (
          format(dateRange.from, 'LLL dd, y')
        )
      ) : (
        <span>Pick a date range</span>
      )}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      initialFocus
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
    />
  </PopoverContent>
</Popover>

{/* Disable Past Dates */}
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) => date < new Date()}
/>

{/* With Presets */}
<PopoverContent className="flex w-auto flex-col space-y-2 p-2">
  <Button onClick={() => setDate(new Date())}>
    Today
  </Button>
  <Calendar mode="single" selected={date} onSelect={setDate} />
</PopoverContent>`}</code>
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
