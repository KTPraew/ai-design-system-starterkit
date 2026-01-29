"use client"

import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Code, Quote, Link2, Image, Volume2, VolumeX, Bell, BellOff, Star, Heart, Bookmark, Eye, EyeOff, Lock, Unlock, Sun, Moon, Grid, LayoutList } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TogglePage() {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [alignment, setAlignment] = useState<string>("left")
  const [isMuted, setIsMuted] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isDark, setIsDark] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-4xl font-bold">Toggle</h1>
          <Badge variant="outline">radix-ui</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          A two-state button that can be either on or off.
        </p>
      </div>

      {/* Section 1: Basic Toggle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Toggle</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-4">
              <Toggle aria-label="Toggle bold">
                <Bold className="size-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="size-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="size-4" />
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 2: Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Default</p>
              <div className="flex items-center gap-2">
                <Toggle variant="default" aria-label="Toggle bold">
                  <Bold className="size-4" />
                </Toggle>
                <Toggle variant="default" aria-label="Toggle italic">
                  <Italic className="size-4" />
                </Toggle>
                <Toggle variant="default" aria-label="Toggle underline">
                  <Underline className="size-4" />
                </Toggle>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Outline</p>
              <div className="flex items-center gap-2">
                <Toggle variant="outline" aria-label="Toggle bold">
                  <Bold className="size-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle italic">
                  <Italic className="size-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle underline">
                  <Underline className="size-4" />
                </Toggle>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle variant="default">Default</Toggle>
<Toggle variant="outline">Outline</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 3: Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-4">
              <Toggle size="sm" aria-label="Small toggle">
                <Bold className="size-4" />
              </Toggle>
              <Toggle size="default" aria-label="Default toggle">
                <Bold className="size-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Large toggle">
                <Bold className="size-4" />
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle size="sm">Small</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">Large</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 4: States */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Normal</p>
              <Toggle aria-label="Normal state">
                <Bold className="size-4" />
              </Toggle>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Pressed (On)</p>
              <Toggle defaultPressed aria-label="Pressed state">
                <Bold className="size-4" />
              </Toggle>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Disabled</p>
              <Toggle disabled aria-label="Disabled state">
                <Bold className="size-4" />
              </Toggle>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Disabled + Pressed</p>
              <Toggle disabled defaultPressed aria-label="Disabled pressed state">
                <Bold className="size-4" />
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle>Normal</Toggle>
<Toggle defaultPressed>Pressed</Toggle>
<Toggle disabled>Disabled</Toggle>
<Toggle disabled defaultPressed>Disabled + Pressed</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 5: With Text */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Text</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="flex flex-wrap items-center gap-2">
              <Toggle aria-label="Toggle bold">
                <Bold className="size-4" />
                <span>Bold</span>
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="size-4" />
                <span>Italic</span>
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="size-4" />
                <span>Underline</span>
              </Toggle>
              <Toggle aria-label="Toggle code">
                <Code className="size-4" />
                <span>Code</span>
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle>
  <Bold className="size-4" />
  <span>Bold</span>
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 6: Text Formatting Toolbar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Formatting Toolbar</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Style Options</p>
              <div className="flex items-center gap-2">
                <Toggle
                  pressed={isBold}
                  onPressedChange={setIsBold}
                  aria-label="Toggle bold"
                >
                  <Bold className="size-4" />
                </Toggle>
                <Toggle
                  pressed={isItalic}
                  onPressedChange={setIsItalic}
                  aria-label="Toggle italic"
                >
                  <Italic className="size-4" />
                </Toggle>
                <Toggle
                  pressed={isUnderline}
                  onPressedChange={setIsUnderline}
                  aria-label="Toggle underline"
                >
                  <Underline className="size-4" />
                </Toggle>
                <div className="w-px h-6 bg-border mx-1" />
                <Toggle aria-label="Insert link">
                  <Link2 className="size-4" />
                </Toggle>
                <Toggle aria-label="Insert code">
                  <Code className="size-4" />
                </Toggle>
                <Toggle aria-label="Insert quote">
                  <Quote className="size-4" />
                </Toggle>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">List Options</p>
              <div className="flex items-center gap-2">
                <Toggle aria-label="Bullet list">
                  <List className="size-4" />
                </Toggle>
                <Toggle aria-label="Numbered list">
                  <ListOrdered className="size-4" />
                </Toggle>
              </div>
            </div>
            <div className="p-3 bg-muted/30 rounded text-sm">
              Active: {[isBold && "Bold", isItalic && "Italic", isUnderline && "Underline"]
                .filter(Boolean)
                .join(", ") || "None"}
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [isBold, setIsBold] = useState(false)

<Toggle pressed={isBold} onPressedChange={setIsBold}>
  <Bold className="size-4" />
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 7: Text Alignment */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Alignment</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <Toggle
                variant="outline"
                pressed={alignment === "left"}
                onPressedChange={() => setAlignment("left")}
                aria-label="Align left"
              >
                <AlignLeft className="size-4" />
              </Toggle>
              <Toggle
                variant="outline"
                pressed={alignment === "center"}
                onPressedChange={() => setAlignment("center")}
                aria-label="Align center"
              >
                <AlignCenter className="size-4" />
              </Toggle>
              <Toggle
                variant="outline"
                pressed={alignment === "right"}
                onPressedChange={() => setAlignment("right")}
                aria-label="Align right"
              >
                <AlignRight className="size-4" />
              </Toggle>
              <Toggle
                variant="outline"
                pressed={alignment === "justify"}
                onPressedChange={() => setAlignment("justify")}
                aria-label="Justify"
              >
                <AlignJustify className="size-4" />
              </Toggle>
            </div>
            <div className="p-4 bg-muted/30 rounded">
              <p className={`text-sm ${
                alignment === "left" ? "text-left" :
                alignment === "center" ? "text-center" :
                alignment === "right" ? "text-right" :
                "text-justify"
              }`}>
                This text alignment is set to: <strong>{alignment}</strong>
              </p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [alignment, setAlignment] = useState("left")

<Toggle
  pressed={alignment === "left"}
  onPressedChange={() => setAlignment("left")}
>
  <AlignLeft />
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 8: Settings Toggles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Settings Toggles</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications
                </p>
              </div>
              <Toggle
                variant="outline"
                pressed={notifications}
                onPressedChange={setNotifications}
                aria-label="Toggle notifications"
              >
                {notifications ? (
                  <Bell className="size-4" />
                ) : (
                  <BellOff className="size-4" />
                )}
              </Toggle>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sound</p>
                <p className="text-sm text-muted-foreground">
                  Enable sound effects
                </p>
              </div>
              <Toggle
                variant="outline"
                pressed={isMuted}
                onPressedChange={setIsMuted}
                aria-label="Toggle sound"
              >
                {isMuted ? (
                  <VolumeX className="size-4" />
                ) : (
                  <Volume2 className="size-4" />
                )}
              </Toggle>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">
                  Use dark color scheme
                </p>
              </div>
              <Toggle
                variant="outline"
                pressed={isDark}
                onPressedChange={setIsDark}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [notifications, setNotifications] = useState(true)

<Toggle pressed={notifications} onPressedChange={setNotifications}>
  {notifications ? <Bell /> : <BellOff />}
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 9: Icon Toggles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Icon Toggles</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Favorites</p>
              <div className="flex items-center gap-2">
                <Toggle
                  pressed={isFavorite}
                  onPressedChange={setIsFavorite}
                  aria-label="Toggle favorite"
                >
                  <Star className={`size-4 ${isFavorite ? "fill-current" : ""}`} />
                </Toggle>
                <Toggle aria-label="Toggle heart">
                  <Heart className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle bookmark">
                  <Bookmark className="size-4" />
                </Toggle>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Visibility</p>
              <div className="flex items-center gap-2">
                <Toggle
                  variant="outline"
                  pressed={isVisible}
                  onPressedChange={setIsVisible}
                  aria-label="Toggle visibility"
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle lock">
                  <Lock className="size-4" />
                </Toggle>
                <Toggle variant="outline" defaultPressed aria-label="Toggle unlock">
                  <Unlock className="size-4" />
                </Toggle>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle pressed={isFavorite} onPressedChange={setIsFavorite}>
  <Star className={isFavorite ? "fill-current" : ""} />
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 10: View Mode Toggle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">View Mode Toggle</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <Toggle
                variant="outline"
                pressed={viewMode === "grid"}
                onPressedChange={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid className="size-4" />
              </Toggle>
              <Toggle
                variant="outline"
                pressed={viewMode === "list"}
                onPressedChange={() => setViewMode("list")}
                aria-label="List view"
              >
                <LayoutList className="size-4" />
              </Toggle>
            </div>
            <div className="p-4 bg-muted/30 rounded">
              <p className="text-sm">Current view: <strong>{viewMode}</strong></p>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2 mt-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-muted rounded" />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`const [viewMode, setViewMode] = useState("grid")

<Toggle
  pressed={viewMode === "grid"}
  onPressedChange={() => setViewMode("grid")}
>
  <Grid />
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 11: Outline Variant with Text */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Outline with Text</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="flex flex-wrap items-center gap-2">
              <Toggle variant="outline" aria-label="Insert image">
                <Image className="size-4" />
                <span>Image</span>
              </Toggle>
              <Toggle variant="outline" aria-label="Insert link">
                <Link2 className="size-4" />
                <span>Link</span>
              </Toggle>
              <Toggle variant="outline" aria-label="Insert code block">
                <Code className="size-4" />
                <span>Code</span>
              </Toggle>
              <Toggle variant="outline" aria-label="Insert quote">
                <Quote className="size-4" />
                <span>Quote</span>
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle variant="outline">
  <Image className="size-4" />
  <span>Image</span>
</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Section 12: Different Sizes with Outline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes with Outline Variant</h2>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-4">
              <Toggle variant="outline" size="sm" aria-label="Small">
                <Bold className="size-4" />
              </Toggle>
              <Toggle variant="outline" size="default" aria-label="Default">
                <Bold className="size-4" />
              </Toggle>
              <Toggle variant="outline" size="lg" aria-label="Large">
                <Bold className="size-4" />
              </Toggle>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <code className="text-sm">
              {`<Toggle variant="outline" size="sm">Small</Toggle>
<Toggle variant="outline" size="default">Default</Toggle>
<Toggle variant="outline" size="lg">Large</Toggle>`}
            </code>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t">
        <a
          href="/toast"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Toast
        </a>
        <a
          href="/toggle-group"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Toggle Group →
        </a>
      </div>
    </div>
  )
}
