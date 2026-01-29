"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Code, Quote, Strikethrough, Subscript, Superscript, MoreHorizontal, Palette, Type, Image, Link2, Calendar, Clock, MapPin, Phone, Mail, Globe, ChevronLeft, ChevronRight, Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Grid, LayoutList, LayoutGrid, SlidersHorizontal, FileText, Video, Music, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ToggleGroupPage() {
  const [textStyle, setTextStyle] = useState<string[]>(["bold"])
  const [alignment, setAlignment] = useState<string>("left")
  const [listType, setListType] = useState<string>()
  const [format, setFormat] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<string>("grid")
  const [mediaType, setMediaType] = useState<string>("all")

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-4xl font-bold">Toggle Group</h1>
          <Badge variant="outline">radix-ui</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      {/* Section 1: Basic Toggle Group (Single) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Toggle Group (Single Selection)</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">
    <AlignLeft className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 2: Multiple Selection */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Multiple Selection</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <ToggleGroup type="multiple" defaultValue={["bold"]}>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                <Strikethrough className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p className="text-sm text-muted-foreground">
              Multiple items can be selected at once
            </p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="multiple" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  {/* ... more items */}
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 3: Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Default</p>
              <ToggleGroup type="single" variant="default" defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Outline</p>
              <ToggleGroup type="single" variant="outline" defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup variant="default">...</ToggleGroup>
<ToggleGroup variant="outline">...</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 4: Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Small</p>
              <ToggleGroup type="single" size="sm" defaultValue="bold">
                <ToggleGroupItem value="bold">
                  <Bold className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Default</p>
              <ToggleGroup type="single" size="default" defaultValue="bold">
                <ToggleGroupItem value="bold">
                  <Bold className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Large</p>
              <ToggleGroup type="single" size="lg" defaultValue="bold">
                <ToggleGroupItem value="bold">
                  <Bold className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup size="sm">...</ToggleGroup>
<ToggleGroup size="default">...</ToggleGroup>
<ToggleGroup size="lg">...</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 5: With Spacing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Spacing</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">No Spacing (Connected - spacing={"{0}"})</p>
              <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify">
                  <AlignJustify className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">With Spacing (spacing={"{2}"})</p>
              <ToggleGroup type="single" variant="outline" spacing={2} defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify">
                  <AlignJustify className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup spacing={0}>Connected buttons</ToggleGroup>
<ToggleGroup spacing={2}>Spaced buttons</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 6: With Text Labels */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Text Labels</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Icons + Text</p>
              <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="text">
                <ToggleGroupItem value="text">
                  <FileText className="size-4" />
                  <span>Text</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="image">
                  <Image className="size-4" />
                  <span>Image</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="video">
                  <Video className="size-4" />
                  <span>Video</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="audio">
                  <Music className="size-4" />
                  <span>Audio</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Text Only</p>
              <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="day">
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
                <ToggleGroupItem value="year">Year</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="single">
  <ToggleGroupItem value="text">
    <FileText className="size-4" />
    <span>Text</span>
  </ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 7: Text Formatting Toolbar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Formatting Toolbar</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <ToggleGroup
                type="multiple"
                value={textStyle}
                onValueChange={setTextStyle}
              >
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                  <Strikethrough className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="w-px h-6 bg-border" />

              <ToggleGroup
                type="single"
                value={alignment}
                onValueChange={(value) => value && setAlignment(value)}
              >
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Justify">
                  <AlignJustify className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="w-px h-6 bg-border" />

              <ToggleGroup
                type="single"
                value={listType}
                onValueChange={setListType}
              >
                <ToggleGroupItem value="bullet" aria-label="Bullet list">
                  <List className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="numbered" aria-label="Numbered list">
                  <ListOrdered className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="p-3 bg-muted/30 rounded text-sm space-y-1">
              <p>Style: {textStyle.length > 0 ? textStyle.join(", ") : "none"}</p>
              <p>Alignment: {alignment}</p>
              <p>List: {listType || "none"}</p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [textStyle, setTextStyle] = useState(["bold"])

<ToggleGroup
  type="multiple"
  value={textStyle}
  onValueChange={setTextStyle}
>
  <ToggleGroupItem value="bold">
    <Bold />
  </ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 8: Advanced Formatting */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Formatting</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <ToggleGroup
                type="multiple"
                variant="outline"
                spacing={0}
                value={format}
                onValueChange={setFormat}
              >
                <ToggleGroupItem value="superscript" aria-label="Superscript">
                  <Superscript className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="subscript" aria-label="Subscript">
                  <Subscript className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="code" aria-label="Code">
                  <Code className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="quote" aria-label="Quote">
                  <Quote className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup type="single" variant="outline" spacing={0}>
                <ToggleGroupItem value="link" aria-label="Insert link">
                  <Link2 className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="image" aria-label="Insert image">
                  <Image className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="color" aria-label="Text color">
                  <Palette className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <p className="text-sm text-muted-foreground">
              Active formats: {format.length > 0 ? format.join(", ") : "none"}
            </p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="multiple" variant="outline" spacing={0}>
  <ToggleGroupItem value="superscript">
    <Superscript />
  </ToggleGroupItem>
  {/* ... more items */}
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 9: Navigation Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Navigation Controls</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Pagination</p>
              <ToggleGroup type="single" variant="outline" spacing={0}>
                <ToggleGroupItem value="prev" aria-label="Previous">
                  <ChevronLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="1">1</ToggleGroupItem>
                <ToggleGroupItem value="2">2</ToggleGroupItem>
                <ToggleGroupItem value="3">3</ToggleGroupItem>
                <ToggleGroupItem value="next" aria-label="Next">
                  <ChevronRight className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Media Player</p>
              <ToggleGroup type="single" variant="outline" spacing={0}>
                <ToggleGroupItem value="skip-back" aria-label="Skip back">
                  <SkipBack className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="play" aria-label="Play">
                  <Play className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="pause" aria-label="Pause">
                  <Pause className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="skip-forward" aria-label="Skip forward">
                  <SkipForward className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Playback Options</p>
              <ToggleGroup type="multiple" variant="outline" spacing={2}>
                <ToggleGroupItem value="shuffle" aria-label="Shuffle">
                  <Shuffle className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="repeat" aria-label="Repeat">
                  <Repeat className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="volume" aria-label="Volume">
                  <Volume2 className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="single" variant="outline" spacing={0}>
  <ToggleGroupItem value="prev">
    <ChevronLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="next">
    <ChevronRight />
  </ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 10: View Mode Switcher */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">View Mode Switcher</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <ToggleGroup
              type="single"
              variant="outline"
              spacing={0}
              value={viewMode}
              onValueChange={(value) => value && setViewMode(value)}
            >
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid className="size-4" />
                <span>Grid</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <LayoutList className="size-4" />
                <span>List</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="gallery" aria-label="Gallery view">
                <LayoutGrid className="size-4" />
                <span>Gallery</span>
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="p-4 bg-muted/30 rounded">
              <p className="text-sm mb-3">Current view: <strong>{viewMode}</strong></p>
              {viewMode === "grid" && (
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded" />
                  ))}
                </div>
              )}
              {viewMode === "list" && (
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 bg-muted rounded" />
                  ))}
                </div>
              )}
              {viewMode === "gallery" && (
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-muted rounded" />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [viewMode, setViewMode] = useState("grid")

<ToggleGroup
  type="single"
  value={viewMode}
  onValueChange={(value) => value && setViewMode(value)}
>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
  <ToggleGroupItem value="list">List</ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 11: Contact Information Selector */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Information Selector</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <ToggleGroup type="multiple" variant="outline" spacing={2} defaultValue={["email"]}>
              <ToggleGroupItem value="phone">
                <Phone className="size-4" />
                <span>Phone</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="email">
                <Mail className="size-4" />
                <span>Email</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="location">
                <MapPin className="size-4" />
                <span>Location</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="website">
                <Globe className="size-4" />
                <span>Website</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="multiple" variant="outline" spacing={2}>
  <ToggleGroupItem value="email">
    <Mail className="size-4" />
    <span>Email</span>
  </ToggleGroupItem>
  {/* ... more items */}
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 12: Filter Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Filter Controls</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Media Type Filter</p>
              <ToggleGroup
                type="single"
                variant="outline"
                spacing={0}
                value={mediaType}
                onValueChange={(value) => value && setMediaType(value)}
              >
                <ToggleGroupItem value="all">All</ToggleGroupItem>
                <ToggleGroupItem value="images">
                  <Image className="size-4" />
                  Images
                </ToggleGroupItem>
                <ToggleGroupItem value="videos">
                  <Video className="size-4" />
                  Videos
                </ToggleGroupItem>
                <ToggleGroupItem value="documents">
                  <FileText className="size-4" />
                  Documents
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="p-3 bg-muted/30 rounded text-sm">
              Showing: <strong>{mediaType}</strong>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup type="single" variant="outline" spacing={0}>
  <ToggleGroupItem value="all">All</ToggleGroupItem>
  <ToggleGroupItem value="images">Images</ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 13: Disabled State */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">All Disabled</p>
              <ToggleGroup type="single" disabled variant="outline" spacing={0} defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Individual Items Disabled</p>
              <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" disabled>
                  <AlignCenter className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<ToggleGroup disabled>All disabled</ToggleGroup>

<ToggleGroup>
  <ToggleGroupItem value="item" disabled>
    Individual item disabled
  </ToggleGroupItem>
</ToggleGroup>`}
            </code>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t">
        <a
          href="/toggle"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Toggle
        </a>
        <a
          href="/tooltip"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Tooltip →
        </a>
      </div>
    </div>
  )
}
