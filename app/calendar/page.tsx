'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function CalendarShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: new Date(2024, 0, 25),
  })
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(2024, 0, 10),
    new Date(2024, 0, 15),
    new Date(2024, 0, 20),
  ])

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A date picker component with range and multi-select support.
          </p>
        </div>

        {/* Basic Calendar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Calendar</CardTitle>
            <CardDescription>Single date selection</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            {date && (
              <p className="text-sm text-muted-foreground">
                Selected date: <span className="font-medium text-foreground">{format(date, 'PPP')}</span>
              </p>
            )}
          </CardContent>
        </Card>

        {/* Date Range Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Date Range Selection</CardTitle>
            <CardDescription>Select a range of dates</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border"
              numberOfMonths={2}
            />
            {dateRange?.from && (
              <div className="text-sm text-muted-foreground">
                {dateRange.to ? (
                  <>
                    Selected range: <span className="font-medium text-foreground">{format(dateRange.from, 'PPP')}</span>
                    {' to '}
                    <span className="font-medium text-foreground">{format(dateRange.to, 'PPP')}</span>
                  </>
                ) : (
                  <>
                    Start date: <span className="font-medium text-foreground">{format(dateRange.from, 'PPP')}</span>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Multiple Date Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Date Selection</CardTitle>
            <CardDescription>Select multiple individual dates</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="multiple"
              selected={multipleDates}
              onSelect={setMultipleDates}
              className="rounded-md border"
            />
            {multipleDates && multipleDates.length > 0 && (
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Selected dates ({multipleDates.length}):</p>
                <div className="flex flex-wrap gap-2">
                  {multipleDates.map((date, index) => (
                    <Badge key={index} variant="secondary">
                      {format(date, 'MMM d, yyyy')}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Calendar with Dropdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Calendar with Dropdown</CardTitle>
            <CardDescription>Month and year selection with dropdowns</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              fromYear={2020}
              toYear={2030}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Disabled Dates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled Dates</CardTitle>
            <CardDescription>Calendar with certain dates disabled</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Disable Past Dates */}
            <div>
              <p className="text-sm font-medium mb-3">Disable Past Dates</p>
              <Calendar
                mode="single"
                disabled={{ before: new Date() }}
                className="rounded-md border"
              />
            </div>

            {/* Disable Future Dates */}
            <div>
              <p className="text-sm font-medium mb-3">Disable Future Dates</p>
              <Calendar
                mode="single"
                disabled={{ after: new Date() }}
                className="rounded-md border"
              />
            </div>

            {/* Disable Weekends */}
            <div>
              <p className="text-sm font-medium mb-3">Disable Weekends</p>
              <Calendar
                mode="single"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Date Range with Constraints */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Date Range with Constraints</CardTitle>
            <CardDescription>Limit available dates for selection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Min and Max Date */}
            <div>
              <p className="text-sm font-medium mb-3">Restricted Range (2024 only)</p>
              <Calendar
                mode="single"
                fromDate={new Date(2024, 0, 1)}
                toDate={new Date(2024, 11, 31)}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Multiple Months */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Months</CardTitle>
            <CardDescription>Display multiple months at once</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Two Months */}
            <div>
              <p className="text-sm font-medium mb-3">Two Months</p>
              <Calendar
                mode="single"
                numberOfMonths={2}
                className="rounded-md border"
              />
            </div>

            {/* Three Months */}
            <div>
              <p className="text-sm font-medium mb-3">Three Months</p>
              <Calendar
                mode="single"
                numberOfMonths={3}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Week Numbers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Week Numbers</CardTitle>
            <CardDescription>Display week numbers</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="single"
              showWeekNumber
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Custom Modifiers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Styling</CardTitle>
            <CardDescription>Highlight specific dates with custom styles</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <Calendar
              mode="single"
              modifiers={{
                booked: [
                  new Date(2024, 0, 8),
                  new Date(2024, 0, 12),
                  new Date(2024, 0, 18),
                ],
              }}
              modifiersClassNames={{
                booked: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
              }}
              className="rounded-md border"
            />
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="size-4 rounded bg-blue-100 dark:bg-blue-900" />
                <span className="text-muted-foreground">Booked dates</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-world Examples</CardTitle>
            <CardDescription>Practical calendar usage scenarios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Booking Form */}
            <div>
              <p className="text-sm font-medium mb-3">Hotel Booking</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Select Your Stay</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose your check-in and check-out dates
                  </p>
                  <Calendar
                    mode="range"
                    numberOfMonths={2}
                    disabled={{ before: new Date() }}
                    className="rounded-md border"
                  />
                </div>
                <div className="flex gap-2 justify-end pt-4 border-t">
                  <Button variant="outline">Cancel</Button>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>

            {/* Event Planner */}
            <div>
              <p className="text-sm font-medium mb-3">Event Planner</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Schedule Event</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select dates for your event
                  </p>
                  <Calendar
                    mode="multiple"
                    disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border"
                  />
                </div>
                <div className="flex gap-2 justify-end pt-4 border-t">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Dates</Button>
                </div>
              </div>
            </div>

            {/* Birthday Picker */}
            <div>
              <p className="text-sm font-medium mb-3">Date of Birth</p>
              <div className="border rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select your date of birth
                  </p>
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                    disabled={{ after: new Date() }}
                    className="rounded-md border"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Calendar component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

{/* Single Date Selection */}
const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>

{/* Date Range Selection */}
const [dateRange, setDateRange] = useState<DateRange | undefined>()

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={2}
  className="rounded-md border"
/>

{/* Multiple Date Selection */}
const [dates, setDates] = useState<Date[] | undefined>()

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>

{/* With Dropdown */}
<Calendar
  mode="single"
  captionLayout="dropdown"
  fromYear={2020}
  toYear={2030}
  className="rounded-md border"
/>

{/* Disable Past Dates */}
<Calendar
  mode="single"
  disabled={{ before: new Date() }}
  className="rounded-md border"
/>

{/* Disable Weekends */}
<Calendar
  mode="single"
  disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
  className="rounded-md border"
/>

{/* Custom Modifiers */}
<Calendar
  mode="single"
  modifiers={{
    booked: [new Date(2024, 0, 8), new Date(2024, 0, 12)]
  }}
  modifiersClassNames={{
    booked: 'bg-blue-100 text-blue-900'
  }}
  className="rounded-md border"
/>`}</code>
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
