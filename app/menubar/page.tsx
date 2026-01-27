"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, FileText, Copy, Scissors, ClipboardPaste, Undo, Redo, Settings, User, LogOut, Sun, Moon, Monitor, ZoomIn, ZoomOut, Maximize, Search, Download, Upload, Share2, Printer, Mail, Bell, Heart, Star, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"

export default function MenubarPage() {
  const [showGrid, setShowGrid] = useState(true)
  const [showRulers, setShowRulers] = useState(false)
  const [showGuides, setShowGuides] = useState(true)
  const [theme, setTheme] = useState("system")
  const [fontSize, setFontSize] = useState("medium")
  const [layout, setLayout] = useState("grid")

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Menubar</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Menubar */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Menubar</CardTitle>
            <CardDescription>Simple menubar with multiple menus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Export
                  </MenubarItem>
                  <MenubarItem>
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Reset Zoom
                    <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Menubar items with icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                    <MenubarShortcut>⌘D</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </MenubarItem>
                  <MenubarItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ClipboardPaste className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ZoomIn className="mr-2 h-4 w-4" />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOut className="mr-2 h-4 w-4" />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Maximize className="mr-2 h-4 w-4" />
                    Fullscreen
                    <MenubarShortcut>⌘F</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                    <MenubarShortcut>⌘K</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* With Checkboxes */}
        <Card>
          <CardHeader>
            <CardTitle>With Checkboxes</CardTitle>
            <CardDescription>Menubar with checkbox items for toggleable options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
                    Show Grid
                    <MenubarShortcut>⌘'</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
                    Show Rulers
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked={showGuides} onCheckedChange={setShowGuides}>
                    Show Guides
                    <MenubarShortcut>⌘;</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="p-4 border rounded-md bg-muted/30">
              <p className="text-sm">
                <strong>Current View Settings:</strong>
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>Grid: {showGrid ? "Visible" : "Hidden"}</li>
                <li>Rulers: {showRulers ? "Visible" : "Hidden"}</li>
                <li>Guides: {showGuides ? "Visible" : "Hidden"}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* With Radio Groups */}
        <Card>
          <CardHeader>
            <CardTitle>With Radio Groups</CardTitle>
            <CardDescription>Menubar with radio group items for mutually exclusive options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Layout</MenubarLabel>
                  <MenubarRadioGroup value={layout} onValueChange={setLayout}>
                    <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
                    <MenubarRadioItem value="list">List View</MenubarRadioItem>
                    <MenubarRadioItem value="gallery">Gallery View</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarLabel>Font Size</MenubarLabel>
                  <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
                    <MenubarRadioItem value="small">Small</MenubarRadioItem>
                    <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="large">Large</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Theme</MenubarLabel>
                  <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                    <MenubarRadioItem value="light">
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      <Monitor className="mr-2 h-4 w-4" />
                      System
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="p-4 border rounded-md bg-muted/30">
              <p className="text-sm">
                <strong>Current Settings:</strong>
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>Layout: {layout.charAt(0).toUpperCase() + layout.slice(1)}</li>
                <li>Font Size: {fontSize.charAt(0).toUpperCase() + fontSize.slice(1)}</li>
                <li>Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* With Submenus */}
        <Card>
          <CardHeader>
            <CardTitle>With Submenus</CardTitle>
            <CardDescription>Menubar with nested submenus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileText className="mr-2 h-4 w-4" />
                      New From Template
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Blank Document</MenubarItem>
                      <MenubarItem>Newsletter</MenubarItem>
                      <MenubarItem>Report</MenubarItem>
                      <MenubarItem>Resume</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>document.txt</MenubarItem>
                      <MenubarItem>report.pdf</MenubarItem>
                      <MenubarItem>presentation.pptx</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Clear Recent</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save As...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        Find
                        <MenubarShortcut>⌘F</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Find Next
                        <MenubarShortcut>⌘G</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Find Previous
                        <MenubarShortcut>⇧⌘G</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        Replace
                        <MenubarShortcut>⌘H</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Transform</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Uppercase</MenubarItem>
                      <MenubarItem>Lowercase</MenubarItem>
                      <MenubarItem>Capitalize</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Insert</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Media</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Image</MenubarItem>
                      <MenubarItem>Video</MenubarItem>
                      <MenubarItem>Audio</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Shape</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Rectangle</MenubarItem>
                      <MenubarItem>Circle</MenubarItem>
                      <MenubarItem>Triangle</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Custom Shape</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>Table</MenubarItem>
                  <MenubarItem>Link</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Application Menubar */}
        <Card>
          <CardHeader>
            <CardTitle>Application Menubar</CardTitle>
            <CardDescription>Complete menubar for a desktop-style application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>New Window</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>New Window</MenubarItem>
                      <MenubarItem>New Private Window</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save As...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </MenubarItem>
                  <MenubarItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Close Window</MenubarItem>
                  <MenubarItem>Quit</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ClipboardPaste className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Select All
                    <MenubarShortcut>⌘A</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Search className="mr-2 h-4 w-4" />
                    Find
                    <MenubarShortcut>⌘F</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem checked>
                    Show Toolbar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Show Sidebar
                    <MenubarShortcut>⌘B</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Show Status Bar
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Maximize className="mr-2 h-4 w-4" />
                    Enter Fullscreen
                    <MenubarShortcut>⌃⌘F</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ZoomIn className="mr-2 h-4 w-4" />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOut className="mr-2 h-4 w-4" />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Reset Zoom
                    <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Documentation</MenubarItem>
                  <MenubarItem>Keyboard Shortcuts</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Report Issue</MenubarItem>
                  <MenubarItem>Contact Support</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>About</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* User Account Menubar */}
        <Card>
          <CardHeader>
            <CardTitle>User Account Menubar</CardTitle>
            <CardDescription>Menubar for user account actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <User className="mr-2 h-4 w-4" />
                  Account
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>My Account</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </MenubarItem>
                  <MenubarItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </MenubarItem>
                  <MenubarItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Messages
                    <MenubarShortcut>3</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                    <MenubarShortcut>12</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Heart className="mr-2 h-4 w-4" />
                    Favorites
                  </MenubarItem>
                  <MenubarItem>
                    <Star className="mr-2 h-4 w-4" />
                    Saved Items
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Tools</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Download className="mr-2 h-4 w-4" />
                    Downloads
                  </MenubarItem>
                  <MenubarItem>
                    <Upload className="mr-2 h-4 w-4" />
                    Uploads
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Trash
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Appearance</MenubarLabel>
                  <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                    <MenubarRadioItem value="light">
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      <Monitor className="mr-2 h-4 w-4" />
                      System
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Disabled Items */}
        <Card>
          <CardHeader>
            <CardTitle>Disabled Items</CardTitle>
            <CardDescription>Menubar with disabled menu items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem disabled>
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>Save As...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem disabled>
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <p className="text-sm text-muted-foreground">
              Save and Redo actions are disabled because there are no changes to save or redo.
            </p>
          </CardContent>
        </Card>

        {/* Destructive Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Destructive Actions</CardTitle>
            <CardDescription>Menubar items with destructive variant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                    <MenubarShortcut>⌘⌫</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem variant="destructive">
                    Delete All
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">
                    Clear All
                  </MenubarItem>
                  <MenubarItem variant="destructive">
                    Reset to Default
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Account</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Profile
                  </MenubarItem>
                  <MenubarItem>
                    Settings
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </MenubarItem>
                  <MenubarItem variant="destructive">
                    Delete Account
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Menubar component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New File
        <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Checkboxes</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<MenubarCheckboxItem
  checked={showGrid}
  onCheckedChange={setShowGrid}
>
  Show Grid
</MenubarCheckboxItem>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Radio Group</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<MenubarRadioGroup value={theme} onValueChange={setTheme}>
  <MenubarRadioItem value="light">Light</MenubarRadioItem>
  <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
  <MenubarRadioItem value="system">System</MenubarRadioItem>
</MenubarRadioGroup>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Submenu</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<MenubarSub>
  <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
  <MenubarSubContent>
    <MenubarItem>document.txt</MenubarItem>
    <MenubarItem>report.pdf</MenubarItem>
  </MenubarSubContent>
</MenubarSub>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use menubars for desktop-style applications with multiple command sets</li>
                  <li>Group related actions together and separate groups with separators</li>
                  <li>Include keyboard shortcuts for common actions</li>
                  <li>Use icons sparingly to avoid visual clutter</li>
                  <li>Keep menu labels short and descriptive</li>
                  <li>Place destructive actions at the bottom with visual distinction</li>
                  <li>Disable menu items that aren't currently applicable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/label">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Label
          </Button>
        </Link>
        <Link href="/navigation-menu">
          <Button variant="outline">
            Navigation Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
