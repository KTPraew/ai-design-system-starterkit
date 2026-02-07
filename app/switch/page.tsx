"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import Link from "next/link"
import {
  BellIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  WifiIcon,
  BluetoothIcon,
  VolumeXIcon,
  Volume2Icon,
  AirplayIcon,
  LockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react"

export default function SwitchPage() {
  const [basicSwitch, setBasicSwitch] = useState(false)
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [wifi, setWifi] = useState(true)
  const [bluetooth, setBluetooth] = useState(false)
  const [sound, setSound] = useState(true)
  const [airplay, setAirplay] = useState(false)
  const [twoFactor, setTwoFactor] = useState(true)
  const [publicProfile, setPublicProfile] = useState(false)
  const [showActivity, setShowActivity] = useState(true)
  const [marketing, setMarketing] = useState(false)

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
          <Badge variant="secondary">Toggle</Badge>
        </div>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      {/* Basic Switch */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Switch</h2>
            <p className="text-sm text-muted-foreground">
              Simple on/off toggle switch.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-6">
            <Switch
              checked={basicSwitch}
              onCheckedChange={setBasicSwitch}
            />
            <span className="text-sm">
              Switch is {basicSwitch ? "ON" : "OFF"}
            </span>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { Switch } from "@/components/ui/switch"

const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={setChecked}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Label */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Label</h2>
            <p className="text-sm text-muted-foreground">
              Switch with descriptive labels.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="airplane-mode" className="cursor-pointer">
                Airplane Mode
              </Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="wifi" className="cursor-pointer">
                Wi-Fi
              </Label>
              <Switch
                id="wifi"
                checked={wifi}
                onCheckedChange={setWifi}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="bluetooth" className="cursor-pointer">
                Bluetooth
              </Label>
              <Switch
                id="bluetooth"
                checked={bluetooth}
                onCheckedChange={setBluetooth}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center justify-between">
  <Label htmlFor="wifi" className="cursor-pointer">
    Wi-Fi
  </Label>
  <Switch id="wifi" />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Description */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Description</h2>
            <p className="text-sm text-muted-foreground">
              Switch with label and description text.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email about your account activity
                </p>
              </div>
              <Switch
                id="email-notif"
                checked={emailNotif}
                onCheckedChange={setEmailNotif}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notif">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications on your device
                </p>
              </div>
              <Switch
                id="push-notif"
                checked={pushNotif}
                onCheckedChange={setPushNotif}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing Emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new products and features
                </p>
              </div>
              <Switch
                id="marketing"
                checked={marketing}
                onCheckedChange={setMarketing}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label htmlFor="email-notif">Email Notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive email about your account activity
    </p>
  </div>
  <Switch id="email-notif" />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Icons */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Icons</h2>
            <p className="text-sm text-muted-foreground">
              Switch with icons for better visual context.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border p-6 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <MoonIcon className="size-5 text-muted-foreground" />
                ) : (
                  <SunIcon className="size-5 text-muted-foreground" />
                )}
                <Label htmlFor="dark-mode" className="cursor-pointer">
                  Dark Mode
                </Label>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <WifiIcon className="size-5 text-muted-foreground" />
                <Label htmlFor="wifi-2" className="cursor-pointer">
                  Wi-Fi
                </Label>
              </div>
              <Switch
                id="wifi-2"
                checked={wifi}
                onCheckedChange={setWifi}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <BluetoothIcon className="size-5 text-muted-foreground" />
                <Label htmlFor="bluetooth-2" className="cursor-pointer">
                  Bluetooth
                </Label>
              </div>
              <Switch
                id="bluetooth-2"
                checked={bluetooth}
                onCheckedChange={setBluetooth}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                {sound ? (
                  <Volume2Icon className="size-5 text-muted-foreground" />
                ) : (
                  <VolumeXIcon className="size-5 text-muted-foreground" />
                )}
                <Label htmlFor="sound" className="cursor-pointer">
                  Sound
                </Label>
              </div>
              <Switch
                id="sound"
                checked={sound}
                onCheckedChange={setSound}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <AirplayIcon className="size-5 text-muted-foreground" />
                <Label htmlFor="airplay" className="cursor-pointer">
                  AirPlay
                </Label>
              </div>
              <Switch
                id="airplay"
                checked={airplay}
                onCheckedChange={setAirplay}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <BellIcon className="size-5 text-muted-foreground" />
                <Label htmlFor="notifications" className="cursor-pointer">
                  Notifications
                </Label>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center gap-3">
  <WifiIcon className="size-5" />
  <Label htmlFor="wifi">Wi-Fi</Label>
  <Switch id="wifi" />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Disabled State */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Disabled State</h2>
            <p className="text-sm text-muted-foreground">
              Switches in disabled state.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border p-6 md:grid-cols-2">
            <div className="flex items-center justify-between">
              <Label className="text-muted-foreground">Disabled (Off)</Label>
              <Switch disabled />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-muted-foreground">Disabled (On)</Label>
              <Switch disabled defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-muted-foreground">Premium Feature</Label>
                <p className="text-xs text-muted-foreground">
                  Upgrade to enable this feature
                </p>
              </div>
              <Switch disabled />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-muted-foreground">System Setting</Label>
                <p className="text-xs text-muted-foreground">
                  Managed by administrator
                </p>
              </div>
              <Switch disabled defaultChecked />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Switch disabled />
<Switch disabled defaultChecked />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Settings Panel */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Settings Panel</h2>
            <p className="text-sm text-muted-foreground">
              Switches organized in a settings interface.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-settings">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get emails about activity on your account
                    </p>
                  </div>
                  <Switch
                    id="email-settings"
                    checked={emailNotif}
                    onCheckedChange={setEmailNotif}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-settings">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get push notifications in your browser
                    </p>
                  </div>
                  <Switch
                    id="push-settings"
                    checked={pushNotif}
                    onCheckedChange={setPushNotif}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-4">Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {twoFactor ? (
                      <LockIcon className="size-4 text-muted-foreground" />
                    ) : (
                      <UnlockIcon className="size-4 text-muted-foreground" />
                    )}
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={twoFactor}
                    onCheckedChange={setTwoFactor}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-4">Privacy</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {publicProfile ? (
                      <EyeIcon className="size-4 text-muted-foreground" />
                    ) : (
                      <EyeOffIcon className="size-4 text-muted-foreground" />
                    )}
                    <div className="space-y-0.5">
                      <Label htmlFor="public-profile">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to everyone
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="public-profile"
                    checked={publicProfile}
                    onCheckedChange={setPublicProfile}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-activity">Show Activity Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Let others see when you're online
                    </p>
                  </div>
                  <Switch
                    id="show-activity"
                    checked={showActivity}
                    onCheckedChange={setShowActivity}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-6">
  <div>
    <h3>Notifications</h3>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Label>Email Notifications</Label>
          <p className="text-sm">Description</p>
        </div>
        <Switch />
      </div>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* In Forms */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">In Forms</h2>
            <p className="text-sm text-muted-foreground">
              Switches used in form contexts.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Account Preferences</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="newsletter" defaultChecked />
                <Label htmlFor="newsletter" className="cursor-pointer">
                  Subscribe to newsletter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="remember" />
                <Label htmlFor="remember" className="cursor-pointer">
                  Remember me on this device
                </Label>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-4">Communication Preferences</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MailIcon className="size-4 text-muted-foreground" />
                  <Label htmlFor="email-updates" className="cursor-pointer">
                    Email Updates
                  </Label>
                </div>
                <Switch id="email-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellIcon className="size-4 text-muted-foreground" />
                  <Label htmlFor="sms-alerts" className="cursor-pointer">
                    SMS Alerts
                  </Label>
                </div>
                <Switch id="sms-alerts" />
              </div>
            </div>

            <Button className="w-full">Submit</Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center space-x-2">
  <Switch id="terms" />
  <Label htmlFor="terms">
    I agree to the terms and conditions
  </Label>
</div>

<div className="flex items-center justify-between">
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
  <Switch id="newsletter" />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Feature Flags */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Feature Flags</h2>
            <p className="text-sm text-muted-foreground">
              Toggle features on and off.
            </p>
          </div>

          <div className="space-y-3 rounded-lg border p-6">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="beta-feature">Beta Features</Label>
                  <Badge variant="secondary" className="text-xs">Experimental</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable experimental features (may be unstable)
                </p>
              </div>
              <Switch id="beta-feature" />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="analytics">Analytics</Label>
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing anonymous usage data
                </p>
              </div>
              <Switch id="analytics" defaultChecked />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="auto-updates">Automatic Updates</Label>
                  <Badge variant="default" className="text-xs">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically download and install updates
                </p>
              </div>
              <Switch id="auto-updates" defaultChecked />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <div className="flex items-center gap-2">
      <Label htmlFor="beta">Beta Features</Label>
      <Badge>Experimental</Badge>
    </div>
    <p className="text-sm text-muted-foreground">
      Enable experimental features
    </p>
  </div>
  <Switch id="beta" />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Accessibility */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Accessibility</h2>
            <p className="text-sm text-muted-foreground">
              Switches are keyboard accessible and screen reader friendly.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Keyboard Navigation</Label>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <kbd className="rounded border bg-muted px-1.5 py-0.5">Tab</kbd> - Focus the switch</li>
                <li>• <kbd className="rounded border bg-muted px-1.5 py-0.5">Space</kbd> or <kbd className="rounded border bg-muted px-1.5 py-0.5">Enter</kbd> - Toggle the switch</li>
              </ul>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-sm font-medium">Try it:</Label>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <Label htmlFor="keyboard-test">Focus me with keyboard</Label>
                <Switch id="keyboard-test" />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm">
              <strong>Note:</strong> The Switch component is built on Radix UI primitives and follows
              WAI-ARIA design patterns for optimal accessibility. It includes proper ARIA attributes,
              keyboard navigation support, and works well with screen readers.
            </p>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/spinner">
          <Button variant="outline">
            ← Spinner
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/table">
          <Button variant="outline">
            Table →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
