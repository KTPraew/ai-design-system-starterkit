'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export default function InputOTPShowcase() {
  const [value, setValue] = useState('')
  const [value6, setValue6] = useState('')
  const [value8, setValue8] = useState('')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Input OTP</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Accessible one-time password component with copy paste functionality.
          </p>
        </div>

        {/* Basic OTP Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic OTP Input</CardTitle>
            <CardDescription>Default 4-digit OTP input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Enter OTP</Label>
                <InputOTP maxLength={4} value={value} onChange={setValue}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                {value && (
                  <p className="text-sm text-muted-foreground">
                    Value: <span className="font-mono">{value}</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6-Digit OTP */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6-Digit OTP</CardTitle>
            <CardDescription>Common 6-digit verification code</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Verification Code</Label>
                <InputOTP maxLength={6} value={value6} onChange={setValue6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {value6 && (
                  <p className="text-sm text-muted-foreground">
                    Entered: <span className="font-mono font-semibold">{value6}</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* OTP with Separator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Separator</CardTitle>
            <CardDescription>OTP input with visual separator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Enter 6-digit Code</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8-Digit with Multiple Separators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Separators</CardTitle>
            <CardDescription>8-digit OTP with multiple groups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Security Code</Label>
                <InputOTP maxLength={8} value={value8} onChange={setValue8}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                  </InputOTPGroup>
                </InputOTP>
                {value8 && (
                  <p className="text-sm text-muted-foreground">
                    Code: <span className="font-mono">{value8}</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pattern Validation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pattern Validation</CardTitle>
            <CardDescription>OTP with numeric-only validation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Numeric Code</Label>
                <InputOTP maxLength={6} pattern="^[0-9]+$">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-xs text-muted-foreground">
                  Only numbers are allowed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>Non-editable OTP input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Disabled OTP</Label>
                <InputOTP maxLength={6} disabled defaultValue="123456">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verification Form</CardTitle>
            <CardDescription>Complete verification flow example</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Verify your email</h3>
                <p className="text-sm text-muted-foreground">
                  We've sent a 6-digit code to your email address.
                  <br />
                  Please enter it below to verify your account.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex flex-col items-center gap-2">
                  <Button className="w-full max-w-xs">Verify</Button>
                  <Button variant="ghost" size="sm">
                    Resend code
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>2FA verification example</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter the code from your authenticator app
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Authentication Code</Label>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button className="flex-1">Verify & Continue</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SMS Verification */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>SMS Verification</CardTitle>
            <CardDescription>Phone number verification flow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Verify your phone number</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the 4-digit code sent to +1 (555) 123-4567
                </p>
              </div>
              <div className="space-y-4">
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Didn't receive code?</span>
                  <Button variant="link" size="sm" className="px-0">
                    Resend in 30s
                  </Button>
                </div>
                <Button className="w-full">Verify Phone Number</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
            <CardDescription>OTP inputs in various sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-2">
                <Label>Small (4 digits)</Label>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-8 w-8" />
                    <InputOTPSlot index={1} className="h-8 w-8" />
                    <InputOTPSlot index={2} className="h-8 w-8" />
                    <InputOTPSlot index={3} className="h-8 w-8" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="grid gap-2">
                <Label>Default (6 digits)</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="grid gap-2">
                <Label>Large (4 digits)</Label>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-14 w-14 text-lg" />
                    <InputOTPSlot index={1} className="h-14 w-14 text-lg" />
                    <InputOTPSlot index={2} className="h-14 w-14 text-lg" />
                    <InputOTPSlot index={3} className="h-14 w-14 text-lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Input OTP component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'

{/* Basic 4-digit OTP */}
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

{/* 6-digit with Separator */}
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

{/* Controlled */}
const [value, setValue] = useState('')

<InputOTP
  maxLength={6}
  value={value}
  onChange={setValue}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

{/* Pattern Validation (numbers only) */}
<InputOTP maxLength={6} pattern="^[0-9]+$">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>

{/* Disabled */}
<InputOTP maxLength={6} disabled>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>

{/* Custom Size */}
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} className="h-14 w-14 text-lg" />
    <InputOTPSlot index={1} className="h-14 w-14 text-lg" />
    <InputOTPSlot index={2} className="h-14 w-14 text-lg" />
    <InputOTPSlot index={3} className="h-14 w-14 text-lg" />
  </InputOTPGroup>
</InputOTP>`}</code>
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
