'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Copy,
  Download,
  Edit,
  Eye,
  FileText,
  Share2,
  Star,
  Trash2,
  MoreHorizontal,
} from 'lucide-react'

export default function ContextMenuShowcase() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Context Menu</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a menu to the user — such as a set of actions or functions — triggered by right-click.
          </p>
        </div>

        {/* Basic Context Menu */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Context Menu</CardTitle>
            <CardDescription>Right-click on the area below</CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[200px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                  <ContextMenuShortcut>⌘E</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                  <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* With Submenu */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Submenu</CardTitle>
            <CardDescription>Context menu with nested submenus</CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[200px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  New File
                  <ContextMenuShortcut>⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Email Link</ContextMenuItem>
                    <ContextMenuItem>Copy Link</ContextMenuItem>
                    <ContextMenuItem>Share to Twitter</ContextMenuItem>
                    <ContextMenuItem>Share to Facebook</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    More Options
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Duplicate</ContextMenuItem>
                    <ContextMenuItem>Move to Folder</ContextMenuItem>
                    <ContextMenuItem>Add to Favorites</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* With Checkboxes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Checkboxes</CardTitle>
            <CardDescription>Context menu with checkbox items</CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[200px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Show Toolbar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked>
                  Show Sidebar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                  Show Minimap
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                  Show Line Numbers
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Panel Position</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="bottom">
                  <ContextMenuRadioItem value="top">
                    Top
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="bottom">
                    Bottom
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="right">
                    Right
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* File Manager Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Manager Example</CardTitle>
            <CardDescription>Context menu on file items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: 'Project Proposal.pdf', size: '2.4 MB', icon: FileText },
                { name: 'Meeting Notes.docx', size: '156 KB', icon: FileText },
                { name: 'Budget 2024.xlsx', size: '892 KB', icon: FileText },
              ].map((file, index) => (
                <ContextMenu key={index}>
                  <ContextMenuTrigger>
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <file.icon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">File</Badge>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Open
                      <ContextMenuShortcut>⌘O</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Make a Copy
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      Add to Favorites
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>Email Link</ContextMenuItem>
                        <ContextMenuItem>Copy Link</ContextMenuItem>
                        <ContextMenuItem>Get Shareable Link</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                      <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Image Gallery Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Gallery Example</CardTitle>
            <CardDescription>Context menu on image cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <ContextMenu key={num}>
                  <ContextMenuTrigger>
                    <div className="group relative aspect-square rounded-lg border overflow-hidden cursor-pointer hover:border-primary transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground">
                        {num}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Full Size
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download Image
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Image
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Image
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>Copy Link</ContextMenuItem>
                        <ContextMenuItem>Share on Social</ContextMenuItem>
                        <ContextMenuItem>Email</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Image
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Text Selection Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Text Selection Example</CardTitle>
            <CardDescription>Context menu on text content</CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex min-h-[150px] w-full rounded-md border p-4 text-sm">
                <p className="leading-relaxed">
                  Right-click on this text to see context menu options. This is a great way to provide
                  quick actions for text content. You can add options for copying, formatting, or
                  performing other text-related operations. Context menus are especially useful in
                  document editors, code editors, and content management systems.
                </p>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Bold</ContextMenuItem>
                    <ContextMenuItem>Italic</ContextMenuItem>
                    <ContextMenuItem>Underline</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Uppercase</ContextMenuItem>
                    <ContextMenuItem>Lowercase</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>Select All</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Context Menu component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

{/* Basic Context Menu */}
<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      View
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

{/* With Icons */}
<ContextMenuItem>
  <Copy className="mr-2 h-4 w-4" />
  Copy
  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
</ContextMenuItem>

{/* With Submenu */}
<ContextMenuSub>
  <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Email Link</ContextMenuItem>
    <ContextMenuItem>Copy Link</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>

{/* With Checkboxes */}
<ContextMenuCheckboxItem checked>
  Show Toolbar
</ContextMenuCheckboxItem>

{/* With Radio Group */}
<ContextMenuRadioGroup value="bottom">
  <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
  <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
</ContextMenuRadioGroup>

{/* With Label */}
<ContextMenuLabel>View Options</ContextMenuLabel>

{/* Destructive Item */}
<ContextMenuItem className="text-destructive">
  Delete
</ContextMenuItem>`}</code>
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
