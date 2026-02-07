'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ChevronRight,
  MoreVertical,
  Star,
  Trash2,
  Edit,
  Eye,
  FileText,
  Folder,
  Image as ImageIcon,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  ArrowRight,
} from 'lucide-react'

export default function ItemShowcase() {
  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Item</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Reusable item patterns for lists, menus, and collections.
          </p>
        </div>

        {/* Basic List Item */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic List Item</CardTitle>
            <CardDescription>Simple list items with text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Item with Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icon</CardTitle>
            <CardDescription>List items with leading icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { icon: FileText, label: 'Documents', count: '24' },
                { icon: Folder, label: 'Projects', count: '12' },
                { icon: ImageIcon, label: 'Images', count: '156' },
                { icon: Star, label: 'Favorites', count: '8' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <Badge variant="secondary">{item.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Item with Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Avatar</CardTitle>
            <CardDescription>List items with user avatars</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: 'John Doe', email: 'john@example.com', avatar: 'JD' },
                { name: 'Jane Smith', email: 'jane@example.com', avatar: 'JS' },
                { name: 'Bob Johnson', email: 'bob@example.com', avatar: 'BJ' },
                { name: 'Alice Williams', email: 'alice@example.com', avatar: 'AW' },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://github.com/shadcn.png`} />
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Item with Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Actions</CardTitle>
            <CardDescription>List items with action buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { title: 'Project Alpha', status: 'Active', date: '2 days ago' },
                { title: 'Project Beta', status: 'In Progress', date: '5 days ago' },
                { title: 'Project Gamma', status: 'Completed', date: '1 week ago' },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold">{project.title}</h4>
                      <Badge
                        variant={
                          project.status === 'Active'
                            ? 'default'
                            : project.status === 'Completed'
                            ? 'secondary'
                            : 'outline'
                        }
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Updated {project.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Selectable Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Selectable Items</CardTitle>
            <CardDescription>List items with checkboxes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: 'Task 1: Complete project documentation', completed: true },
                { name: 'Task 2: Review pull requests', completed: false },
                { name: 'Task 3: Update dependencies', completed: false },
                { name: 'Task 4: Fix critical bugs', completed: true },
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Checkbox defaultChecked={task.completed} />
                  <span
                    className={`text-sm flex-1 ${
                      task.completed ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {task.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Item with Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Description</CardTitle>
            <CardDescription>List items with additional details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  title: 'Product Launch',
                  description: 'Launch the new product line with marketing campaign',
                  date: 'Mar 15, 2024',
                },
                {
                  title: 'Team Meeting',
                  description: 'Weekly sync with the engineering team',
                  date: 'Mar 18, 2024',
                },
                {
                  title: 'Client Presentation',
                  description: 'Present Q1 results to stakeholders',
                  date: 'Mar 20, 2024',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Items</CardTitle>
            <CardDescription>Contact list with details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  name: 'Sarah Connor',
                  role: 'Product Manager',
                  email: 'sarah@company.com',
                  phone: '+1 (555) 123-4567',
                },
                {
                  name: 'Michael Scott',
                  role: 'Sales Director',
                  email: 'michael@company.com',
                  phone: '+1 (555) 234-5678',
                },
                {
                  name: 'Pam Beesly',
                  role: 'Receptionist',
                  email: 'pam@company.com',
                  phone: '+1 (555) 345-6789',
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>
                        {contact.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="text-sm font-semibold">{contact.name}</h4>
                        <p className="text-xs text-muted-foreground">{contact.role}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Mail className="mr-2 h-3 w-3" />
                          {contact.email}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Phone className="mr-2 h-3 w-3" />
                          {contact.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive States</CardTitle>
            <CardDescription>Items with different states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 rounded-lg border cursor-pointer transition-colors">
                <span className="text-sm">Default state</span>
              </div>
              <div className="p-3 rounded-lg border bg-muted/50 cursor-pointer transition-colors">
                <span className="text-sm">Hover state</span>
              </div>
              <div className="p-3 rounded-lg border bg-accent cursor-pointer transition-colors">
                <span className="text-sm">Active/Selected state</span>
              </div>
              <div className="p-3 rounded-lg border opacity-50 cursor-not-allowed">
                <span className="text-sm">Disabled state</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notification Items</CardTitle>
            <CardDescription>Notification list items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                {
                  title: 'New message from John',
                  description: 'Hey, are we still meeting tomorrow?',
                  time: '5 min ago',
                  unread: true,
                },
                {
                  title: 'Payment received',
                  description: 'Your payment of $150 has been processed',
                  time: '1 hour ago',
                  unread: true,
                },
                {
                  title: 'Project update',
                  description: 'The design files have been updated',
                  time: '3 hours ago',
                  unread: false,
                },
                {
                  title: 'System maintenance',
                  description: 'Scheduled maintenance on Sunday',
                  time: '1 day ago',
                  unread: false,
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors ${
                    notification.unread ? 'bg-muted/50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold">{notification.title}</h4>
                      {notification.unread && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Items</CardTitle>
            <CardDescription>File list items with metadata</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                {
                  name: 'Project Proposal.pdf',
                  size: '2.4 MB',
                  modified: '2 hours ago',
                  icon: FileText,
                },
                {
                  name: 'Meeting Notes.docx',
                  size: '156 KB',
                  modified: '1 day ago',
                  icon: FileText,
                },
                {
                  name: 'Budget 2024.xlsx',
                  size: '892 KB',
                  modified: '3 days ago',
                  icon: FileText,
                },
                {
                  name: 'Design Assets',
                  size: '45 items',
                  modified: '1 week ago',
                  icon: Folder,
                },
              ].map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <file.icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {file.size} • {file.modified}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compact Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compact Items</CardTitle>
            <CardDescription>Dense list items for sidebars</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {[
                'Dashboard',
                'Projects',
                'Tasks',
                'Calendar',
                'Reports',
                'Settings',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors text-sm"
                >
                  {item}
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to implement item patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`{/* Basic List Item */}
<div className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
  <span className="text-sm">Item text</span>
</div>

{/* With Icon */}
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50">
  <FileText className="h-5 w-5 text-muted-foreground" />
  <span className="text-sm">Documents</span>
</div>

{/* With Avatar */}
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50">
  <Avatar>
    <AvatarImage src="/avatar.png" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">John Doe</p>
    <p className="text-xs text-muted-foreground">john@example.com</p>
  </div>
</div>

{/* With Actions */}
<div className="flex items-center justify-between p-4 rounded-lg border">
  <div className="flex-1">
    <h4 className="text-sm font-semibold">Title</h4>
    <p className="text-xs text-muted-foreground">Description</p>
  </div>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>

{/* Selectable */}
<div className="flex items-center gap-3 p-3">
  <Checkbox />
  <span className="text-sm">Selectable item</span>
</div>

{/* With Badge */}
<div className="flex items-center justify-between p-3">
  <span className="text-sm">Label</span>
  <Badge variant="secondary">12</Badge>
</div>`}</code>
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
