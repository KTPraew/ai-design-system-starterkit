"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Volume2Icon,
  VolumeXIcon,
  Volume1Icon,
  SunIcon,
  ThermometerIcon,
  DollarSignIcon,
  ZoomInIcon,
  ZoomOutIcon,
  SlidersIcon,
} from "lucide-react"

export default function SliderPage() {
  const [singleValue, setSingleValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])
  const [volume, setVolume] = useState([80])
  const [brightness, setBrightness] = useState([60])
  const [temperature, setTemperature] = useState([22])
  const [priceRange, setPriceRange] = useState([100, 500])
  const [zoom, setZoom] = useState([100])
  const [verticalValue, setVerticalValue] = useState([50])

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
          <Badge variant="secondary">Input</Badge>
        </div>
        <p className="text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      {/* Basic Slider */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Slider</h2>
            <p className="text-sm text-muted-foreground">
              A simple slider with a single value.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Value</Label>
                <span className="text-sm font-medium">{singleValue[0]}</span>
              </div>
              <Slider
                value={singleValue}
                onValueChange={setSingleValue}
                max={100}
                step={1}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [value, setValue] = useState([50])

<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Range Slider */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Range Slider</h2>
            <p className="text-sm text-muted-foreground">
              Slider with two thumbs for selecting a range.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Range</Label>
                <span className="text-sm font-medium">
                  {rangeValue[0]} - {rangeValue[1]}
                </span>
              </div>
              <Slider
                value={rangeValue}
                onValueChange={setRangeValue}
                max={100}
                step={1}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [range, setRange] = useState([25, 75])

<Slider
  value={range}
  onValueChange={setRange}
  max={100}
  step={1}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Different Step Values */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Different Step Values</h2>
            <p className="text-sm text-muted-foreground">
              Sliders with different step increments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Step: 1</Label>
                <span className="text-sm font-medium">{singleValue[0]}</span>
              </div>
              <Slider
                value={singleValue}
                onValueChange={setSingleValue}
                max={100}
                step={1}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Step: 5</Label>
                <span className="text-sm font-medium">{Math.round(singleValue[0] / 5) * 5}</span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={5}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Step: 10</Label>
                <span className="text-sm font-medium">{Math.round(singleValue[0] / 10) * 10}</span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Step: 25</Label>
                <span className="text-sm font-medium">{Math.round(singleValue[0] / 25) * 25}</span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={25}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Slider defaultValue={[50]} max={100} step={5} />
<Slider defaultValue={[50]} max={100} step={10} />
<Slider defaultValue={[50]} max={100} step={25} />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Min and Max */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Min and Max</h2>
            <p className="text-sm text-muted-foreground">
              Sliders with custom minimum and maximum values.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Range: 0-100</Label>
                <span className="text-sm font-medium">{singleValue[0]}</span>
              </div>
              <Slider
                value={singleValue}
                onValueChange={setSingleValue}
                min={0}
                max={100}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Range: 10-90</Label>
                <span className="text-sm font-medium">{Math.max(10, Math.min(90, singleValue[0]))}</span>
              </div>
              <Slider
                defaultValue={[50]}
                min={10}
                max={90}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Range: -50 to 50</Label>
                <span className="text-sm font-medium">{singleValue[0] - 50}</span>
              </div>
              <Slider
                defaultValue={[50]}
                min={0}
                max={100}
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Range: 1000-5000</Label>
                <span className="text-sm font-medium">{1000 + (singleValue[0] * 40)}</span>
              </div>
              <Slider
                defaultValue={[50]}
                min={0}
                max={100}
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Slider defaultValue={[50]} min={0} max={100} />
<Slider defaultValue={[50]} min={10} max={90} />
<Slider defaultValue={[0]} min={-50} max={50} />`}
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
              Slider in disabled state.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-muted-foreground">Disabled Single</Label>
                <span className="text-sm text-muted-foreground">50</span>
              </div>
              <Slider
                defaultValue={[50]}
                disabled
              />
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-muted-foreground">Disabled Range</Label>
                <span className="text-sm text-muted-foreground">25 - 75</span>
              </div>
              <Slider
                defaultValue={[25, 75]}
                disabled
              />
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Slider defaultValue={[50]} disabled />
<Slider defaultValue={[25, 75]} disabled />`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Volume Control */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Volume Control</h2>
            <p className="text-sm text-muted-foreground">
              Slider used as a volume control with icons.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Volume</Label>
                <span className="text-sm font-medium">{volume[0]}%</span>
              </div>
              <div className="flex items-center gap-4">
                {volume[0] === 0 ? (
                  <VolumeXIcon className="size-5 text-muted-foreground" />
                ) : volume[0] < 50 ? (
                  <Volume1Icon className="size-5 text-muted-foreground" />
                ) : (
                  <Volume2Icon className="size-5 text-muted-foreground" />
                )}
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setVolume([Math.max(0, volume[0] - 10)])}
                >
                  -10
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setVolume([0])}
                >
                  Mute
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setVolume([Math.min(100, volume[0] + 10)])}
                >
                  +10
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setVolume([100])}
                >
                  Max
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [volume, setVolume] = useState([80])

<div className="flex items-center gap-4">
  <Volume2Icon />
  <Slider
    value={volume}
    onValueChange={setVolume}
    max={100}
  />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Brightness Control */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Brightness Control</h2>
            <p className="text-sm text-muted-foreground">
              Slider for adjusting brightness levels.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Screen Brightness</Label>
                <span className="text-sm font-medium">{brightness[0]}%</span>
              </div>
              <div className="flex items-center gap-4">
                <SunIcon className="size-5 text-muted-foreground" />
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  max={100}
                  step={5}
                  className="flex-1"
                />
              </div>
              <div
                className="h-24 rounded-lg border transition-opacity"
                style={{ opacity: brightness[0] / 100 }}
              >
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm font-medium">Preview</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [brightness, setBrightness] = useState([60])

<div className="flex items-center gap-4">
  <BrightnessIcon />
  <Slider
    value={brightness}
    onValueChange={setBrightness}
    max={100}
    step={5}
  />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Temperature Control */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Temperature Control</h2>
            <p className="text-sm text-muted-foreground">
              Slider for setting temperature values.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Room Temperature</Label>
                <span className="text-lg font-bold">{temperature[0]}°C</span>
              </div>
              <div className="flex items-center gap-4">
                <ThermometerIcon className="size-5 text-muted-foreground" />
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  min={16}
                  max={30}
                  step={0.5}
                  className="flex-1"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-md bg-blue-100 p-2 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  16°C - 18°C<br />Cold
                </div>
                <div className="rounded-md bg-green-100 p-2 text-green-900 dark:bg-green-900 dark:text-green-100">
                  19°C - 24°C<br />Comfortable
                </div>
                <div className="rounded-md bg-red-100 p-2 text-red-900 dark:bg-red-900 dark:text-red-100">
                  25°C - 30°C<br />Warm
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [temperature, setTemperature] = useState([22])

<Slider
  value={temperature}
  onValueChange={setTemperature}
  min={16}
  max={30}
  step={0.5}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Price Range */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <p className="text-sm text-muted-foreground">
              Range slider for filtering by price.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Price Range</Label>
                <span className="text-sm font-medium">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <DollarSignIcon className="size-5 text-muted-foreground" />
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={1000}
                  step={10}
                  className="flex-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-price" className="text-xs text-muted-foreground">
                    Min Price
                  </Label>
                  <Input
                    id="min-price"
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    min={0}
                    max={priceRange[1]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-price" className="text-xs text-muted-foreground">
                    Max Price
                  </Label>
                  <Input
                    id="max-price"
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    min={priceRange[0]}
                    max={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [priceRange, setPriceRange] = useState([100, 500])

<Slider
  value={priceRange}
  onValueChange={setPriceRange}
  min={0}
  max={1000}
  step={10}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Zoom Control */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Zoom Control</h2>
            <p className="text-sm text-muted-foreground">
              Slider for controlling zoom levels.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Zoom Level</Label>
                <span className="text-sm font-medium">{zoom[0]}%</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setZoom([Math.max(25, zoom[0] - 25)])}
                >
                  <ZoomOutIcon className="size-4" />
                </Button>
                <Slider
                  value={zoom}
                  onValueChange={setZoom}
                  min={25}
                  max={200}
                  step={25}
                  className="flex-1"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setZoom([Math.min(200, zoom[0] + 25)])}
                >
                  <ZoomInIcon className="size-4" />
                </Button>
              </div>
              <div className="flex h-32 items-center justify-center rounded-lg border bg-muted">
                <p
                  className="font-medium transition-all"
                  style={{ fontSize: `${zoom[0] / 100}rem` }}
                >
                  Preview Text
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom([25])}
                >
                  25%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom([50])}
                >
                  50%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom([100])}
                >
                  100%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom([150])}
                >
                  150%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom([200])}
                >
                  200%
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [zoom, setZoom] = useState([100])

<div className="flex items-center gap-4">
  <Button onClick={() => setZoom([zoom[0] - 25])}>
    <ZoomOutIcon />
  </Button>
  <Slider
    value={zoom}
    onValueChange={setZoom}
    min={25}
    max={200}
    step={25}
  />
  <Button onClick={() => setZoom([zoom[0] + 25])}>
    <ZoomInIcon />
  </Button>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Vertical Orientation */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Vertical Orientation</h2>
            <p className="text-sm text-muted-foreground">
              Slider oriented vertically.
            </p>
          </div>

          <div className="flex justify-center rounded-lg border p-12">
            <div className="flex items-end gap-8">
              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium">{verticalValue[0]}%</span>
                <Slider
                  orientation="vertical"
                  value={verticalValue}
                  onValueChange={setVerticalValue}
                  max={100}
                  step={1}
                />
                <Label className="text-xs text-muted-foreground">Volume</Label>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium">75%</span>
                <Slider
                  orientation="vertical"
                  defaultValue={[75]}
                  max={100}
                  step={5}
                />
                <Label className="text-xs text-muted-foreground">Bass</Label>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium">60%</span>
                <Slider
                  orientation="vertical"
                  defaultValue={[60]}
                  max={100}
                  step={5}
                />
                <Label className="text-xs text-muted-foreground">Treble</Label>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium">50%</span>
                <Slider
                  orientation="vertical"
                  defaultValue={[50]}
                  max={100}
                  step={5}
                />
                <Label className="text-xs text-muted-foreground">Balance</Label>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Slider
  orientation="vertical"
  defaultValue={[50]}
  max={100}
  step={1}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Labels */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Labels</h2>
            <p className="text-sm text-muted-foreground">
              Sliders with descriptive labels and markers.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <Label className="text-sm font-medium">Satisfaction Level</Label>
              <Slider defaultValue={[75]} max={100} step={25} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Very Low</span>
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
                <span>Very High</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-medium">Priority</Label>
              <Slider defaultValue={[2]} min={1} max={5} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 - Low</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5 - Critical</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-medium">Experience</Label>
              <Slider defaultValue={[5]} min={0} max={10} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 yrs</span>
                <span>2 yrs</span>
                <span>5 yrs</span>
                <span>7 yrs</span>
                <span>10+ yrs</span>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="space-y-4">
  <Label>Satisfaction Level</Label>
  <Slider defaultValue={[75]} max={100} step={25} />
  <div className="flex justify-between text-xs">
    <span>Very Low</span>
    <span>Low</span>
    <span>Medium</span>
    <span>High</span>
    <span>Very High</span>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Complex Example */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Complex Example</h2>
            <p className="text-sm text-muted-foreground">
              Advanced slider configuration with multiple controls.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersIcon className="size-5" />
                <h3 className="font-semibold">Audio Mixer</h3>
              </div>
              <Button size="sm" variant="outline">Reset</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Master Volume</Label>
                  <span className="text-sm font-medium">{volume[0]}%</span>
                </div>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Brightness</Label>
                  <span className="text-sm font-medium">{brightness[0]}%</span>
                </div>
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  max={100}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Temperature</Label>
                  <span className="text-sm font-medium">{temperature[0]}°C</span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  min={16}
                  max={30}
                  step={0.5}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Zoom</Label>
                  <span className="text-sm font-medium">{zoom[0]}%</span>
                </div>
                <Slider
                  value={zoom}
                  onValueChange={setZoom}
                  min={25}
                  max={200}
                  step={25}
                />
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<div className="grid gap-6 md:grid-cols-2">
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <Label>Master Volume</Label>
      <span>{volume}%</span>
    </div>
    <Slider
      value={volume}
      onValueChange={setVolume}
      max={100}
    />
  </div>
  {/* More sliders... */}
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/skeleton">
          <Button variant="outline">
            ← Skeleton
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
