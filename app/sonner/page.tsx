"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import Link from "next/link"
import { toast } from "sonner"
import {
  BellIcon,
  CheckCircle2Icon,
  XCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
  Loader2Icon,
  TrashIcon,
  SaveIcon,
  MailIcon,
  DownloadIcon,
  UploadIcon,
  CopyIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
  MessageSquareIcon,
} from "lucide-react"

export default function SonnerPage() {
  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Sonner</h1>
          <Badge variant="secondary">Notifications</Badge>
        </div>
        <p className="text-muted-foreground">
          An opinionated toast component for React. Built on top of the Sonner library.
        </p>
      </div>

      {/* Basic Toast Types */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Toast Types</h2>
            <p className="text-sm text-muted-foreground">
              Different types of toast notifications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() => toast("Event has been created")}
            >
              Default
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Successfully saved!")}
            >
              <CheckCircle2Icon className="mr-2 size-4" />
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Something went wrong")}
            >
              <XCircleIcon className="mr-2 size-4" />
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Warning: This action cannot be undone")}
            >
              <AlertTriangleIcon className="mr-2 size-4" />
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("New updates available")}
            >
              <InfoIcon className="mr-2 size-4" />
              Info
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.loading("Loading...")}
            >
              <Loader2Icon className="mr-2 size-4" />
              Loading
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { toast } from "sonner"

toast("Event has been created")
toast.success("Successfully saved!")
toast.error("Something went wrong")
toast.warning("This action cannot be undone")
toast.info("New updates available")
toast.loading("Loading...")`}
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
              Toast notifications with additional description text.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast.success("Payment processed", {
                  description: "Your payment has been successfully processed.",
                })
              }
            >
              Success with Description
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Payment failed", {
                  description: "Please check your payment details and try again.",
                })
              }
            >
              Error with Description
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.info("New feature available", {
                  description: "We've added dark mode support. Check it out in settings!",
                })
              }
            >
              Info with Description
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast.success("Payment processed", {
  description: "Your payment has been successfully processed.",
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Actions */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Actions</h2>
            <p className="text-sm text-muted-foreground">
              Toast notifications with action buttons.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast("Event has been created", {
                  action: {
                    label: "Undo",
                    onClick: () => toast.info("Undo action triggered"),
                  },
                })
              }
            >
              With Action
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("File uploaded successfully", {
                  description: "document.pdf has been uploaded to your drive.",
                  action: {
                    label: "View",
                    onClick: () => toast.info("Opening file..."),
                  },
                })
              }
            >
              Success with Action
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Delete failed", {
                  description: "The file could not be deleted. Please try again.",
                  action: {
                    label: "Retry",
                    onClick: () => toast.loading("Retrying..."),
                  },
                })
              }
            >
              Error with Action
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Custom Duration */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Custom Duration</h2>
            <p className="text-sm text-muted-foreground">
              Control how long the toast is displayed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast("This disappears in 1 second", {
                  duration: 1000,
                })
              }
            >
              1 Second
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("This disappears in 3 seconds", {
                  duration: 3000,
                })
              }
            >
              3 Seconds
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("This stays for 10 seconds", {
                  duration: 10000,
                })
              }
            >
              10 Seconds
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("This stays until dismissed", {
                  duration: Infinity,
                })
              }
            >
              Infinite
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast("Message", { duration: 1000 })
toast("Message", { duration: 3000 })
toast("Message", { duration: Infinity })`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Promise Toast */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Promise Toast</h2>
            <p className="text-sm text-muted-foreground">
              Toast that updates based on promise state.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() => {
                const promise = new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "John Doe" }), 2000)
                )

                toast.promise(promise, {
                  loading: "Loading data...",
                  success: "Data loaded successfully",
                  error: "Failed to load data",
                })
              }}
            >
              Promise Success
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const promise = new Promise((_, reject) =>
                  setTimeout(() => reject(new Error("Network error")), 2000)
                )

                toast.promise(promise, {
                  loading: "Uploading file...",
                  success: "File uploaded",
                  error: "Upload failed",
                })
              }}
            >
              Promise Error
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const promise = new Promise((resolve) =>
                  setTimeout(() => resolve({ id: 123 }), 3000)
                )

                toast.promise(promise, {
                  loading: "Saving changes...",
                  success: (data: any) => `Saved with ID: ${data.id}`,
                  error: "Could not save",
                })
              }}
            >
              Dynamic Message
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const promise = fetch("/api/data")

toast.promise(promise, {
  loading: "Loading data...",
  success: "Data loaded successfully",
  error: "Failed to load data",
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Positions */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Positions</h2>
            <p className="text-sm text-muted-foreground">
              Toast can appear in different positions on screen.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border p-6 sm:grid-cols-2 lg:grid-cols-3">
            <Button
              onClick={() =>
                toast("Top Left", {
                  position: "top-left",
                })
              }
            >
              Top Left
            </Button>
            <Button
              onClick={() =>
                toast("Top Center", {
                  position: "top-center",
                })
              }
            >
              Top Center
            </Button>
            <Button
              onClick={() =>
                toast("Top Right", {
                  position: "top-right",
                })
              }
            >
              Top Right
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Left", {
                  position: "bottom-left",
                })
              }
            >
              Bottom Left
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Center", {
                  position: "bottom-center",
                })
              }
            >
              Bottom Center
            </Button>
            <Button
              onClick={() =>
                toast("Bottom Right", {
                  position: "bottom-right",
                })
              }
            >
              Bottom Right (Default)
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast("Message", { position: "top-left" })
toast("Message", { position: "top-center" })
toast("Message", { position: "bottom-right" })`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Custom Icons */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Custom Icons</h2>
            <p className="text-sm text-muted-foreground">
              Toast notifications with custom icons.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast("Message sent successfully", {
                  icon: <MailIcon className="size-4" />,
                })
              }
            >
              <MailIcon className="mr-2 size-4" />
              Email Sent
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Download complete", {
                  icon: <DownloadIcon className="size-4" />,
                })
              }
            >
              <DownloadIcon className="mr-2 size-4" />
              Downloaded
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Upload successful", {
                  icon: <UploadIcon className="size-4" />,
                })
              }
            >
              <UploadIcon className="mr-2 size-4" />
              Uploaded
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Copied to clipboard", {
                  icon: <CopyIcon className="size-4" />,
                })
              }
            >
              <CopyIcon className="mr-2 size-4" />
              Copied
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Shared successfully", {
                  icon: <ShareIcon className="size-4" />,
                })
              }
            >
              <ShareIcon className="mr-2 size-4" />
              Shared
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Added to favorites", {
                  icon: <HeartIcon className="size-4 fill-current" />,
                })
              }
            >
              <HeartIcon className="mr-2 size-4" />
              Favorited
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`import { MailIcon } from "lucide-react"

toast("Message sent", {
  icon: <MailIcon className="size-4" />,
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Actions */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Actions</h2>
            <p className="text-sm text-muted-foreground">
              Interactive toast notifications with action buttons.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast("Item deleted", {
                  description: "The item has been moved to trash.",
                  action: {
                    label: "Undo",
                    onClick: () => toast.success("Deletion undone"),
                  },
                })
              }
            >
              Delete with Undo
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Changes saved", {
                  description: "Your changes have been saved successfully.",
                  action: {
                    label: "View",
                    onClick: () => toast.info("Opening..."),
                  },
                })
              }
            >
              Save with View
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("New message received", {
                  description: "You have a new message from John Doe.",
                  action: {
                    label: "Reply",
                    onClick: () => toast.info("Opening reply..."),
                  },
                })
              }
            >
              Message with Reply
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.info("Update available", {
                  description: "A new version of the app is available.",
                  action: {
                    label: "Update",
                    onClick: () => toast.loading("Updating..."),
                  },
                })
              }
            >
              Update Available
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast("Item deleted", {
  description: "The item has been moved to trash.",
  action: {
    label: "Undo",
    onClick: () => toast.success("Undone"),
  },
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Rich Content */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Rich Content</h2>
            <p className="text-sm text-muted-foreground">
              Toast with custom JSX content.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast(
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold">New follower</p>
                      <p className="text-sm text-muted-foreground">John Doe started following you</p>
                    </div>
                  </div>
                )
              }
            >
              New Follower
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast(
                  <div className="flex items-start gap-3">
                    <StarIcon className="mt-0.5 size-5 fill-yellow-500 text-yellow-500" />
                    <div>
                      <p className="font-semibold">Rating received</p>
                      <p className="text-sm text-muted-foreground">
                        Your post received a 5-star rating!
                      </p>
                    </div>
                  </div>
                )
              }
            >
              Rating Notification
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast(
                  <div className="flex items-start gap-3">
                    <MessageSquareIcon className="mt-0.5 size-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">New comment</p>
                      <p className="text-sm text-muted-foreground">
                        Someone commented on your post: "Great work!"
                      </p>
                    </div>
                  </div>
                )
              }
            >
              Comment Notification
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast(
  <div className="flex items-center gap-3">
    <Avatar>JD</Avatar>
    <div>
      <p>New follower</p>
      <p className="text-sm">John Doe started following you</p>
    </div>
  </div>
)`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Dismissible */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Dismissible Options</h2>
            <p className="text-sm text-muted-foreground">
              Control whether toasts can be dismissed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast("This toast can be dismissed", {
                  description: "Click the X button or swipe to dismiss.",
                })
              }
            >
              Dismissible (Default)
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("This toast cannot be dismissed", {
                  description: "It will auto-dismiss after 5 seconds.",
                  duration: 5000,
                  cancel: {
                    label: "Close",
                    onClick: () => {},
                  },
                })
              }
            >
              With Close Button
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Important notification", {
                  description: "This requires your attention.",
                  duration: Infinity,
                  action: {
                    label: "Acknowledge",
                    onClick: () => toast.success("Acknowledged"),
                  },
                })
              }
            >
              Requires Action
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast("Message", {
  duration: Infinity,
  cancel: {
    label: "Close",
    onClick: () => {},
  },
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Real-world Examples */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Real-world Examples</h2>
            <p className="text-sm text-muted-foreground">
              Common toast notification use cases.
            </p>
          </div>

          <div className="space-y-6">
            {/* Save Form Example */}
            <div className="space-y-3 rounded-lg border p-4">
              <Label className="text-sm font-medium">Save Form</Label>
              <div className="grid gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <Button
                  onClick={() => {
                    const promise = new Promise((resolve) =>
                      setTimeout(resolve, 1500)
                    )

                    toast.promise(promise, {
                      loading: "Saving...",
                      success: "Profile updated successfully!",
                      error: "Failed to update profile",
                    })
                  }}
                >
                  <SaveIcon className="mr-2 size-4" />
                  Save Profile
                </Button>
              </div>
            </div>

            {/* Delete Confirmation */}
            <div className="space-y-3 rounded-lg border p-4">
              <Label className="text-sm font-medium">Delete Action</Label>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="text-sm font-medium">Important Document.pdf</p>
                  <p className="text-xs text-muted-foreground">Last modified 2 hours ago</p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() =>
                    toast.error("File deleted", {
                      description: "The file has been moved to trash.",
                      action: {
                        label: "Undo",
                        onClick: () => toast.success("File restored"),
                      },
                    })
                  }
                >
                  <TrashIcon className="mr-2 size-4" />
                  Delete
                </Button>
              </div>
            </div>

            {/* Copy to Clipboard */}
            <div className="space-y-3 rounded-lg border p-4">
              <Label className="text-sm font-medium">Copy to Clipboard</Label>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value="https://example.com/share/abc123"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText("https://example.com/share/abc123")
                    toast.success("Copied to clipboard", {
                      description: "Link has been copied to your clipboard.",
                      icon: <CopyIcon className="size-4" />,
                    })
                  }}
                >
                  <CopyIcon className="size-4" />
                </Button>
              </div>
            </div>

            {/* Notification Example */}
            <div className="space-y-3 rounded-lg border p-4">
              <Label className="text-sm font-medium">Send Notification</Label>
              <div className="grid gap-3">
                <Input placeholder="Notification title" />
                <Textarea placeholder="Notification message" rows={3} />
                <Button
                  onClick={() =>
                    toast.success("Notification sent", {
                      description: "Your notification has been sent to all users.",
                      icon: <BellIcon className="size-4" />,
                      duration: 5000,
                    })
                  }
                >
                  <BellIcon className="mr-2 size-4" />
                  Send to All Users
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`// Form save
const promise = saveProfile(data)
toast.promise(promise, {
  loading: "Saving...",
  success: "Profile updated!",
  error: "Failed to update",
})

// Delete with undo
toast.error("File deleted", {
  action: {
    label: "Undo",
    onClick: () => toast.success("Restored"),
  },
})

// Copy to clipboard
navigator.clipboard.writeText(text)
toast.success("Copied to clipboard")`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Multiple Toasts */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Multiple Toasts</h2>
            <p className="text-sm text-muted-foreground">
              Trigger multiple toasts in sequence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() => {
                toast.success("First notification")
                setTimeout(() => toast.info("Second notification"), 500)
                setTimeout(() => toast.warning("Third notification"), 1000)
              }}
            >
              3 Sequential Toasts
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                for (let i = 1; i <= 5; i++) {
                  setTimeout(() => {
                    toast(`Notification ${i}`, {
                      description: `This is notification number ${i}`,
                    })
                  }, i * 300)
                }
              }}
            >
              5 Stacked Toasts
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast.loading("Step 1: Validating...")
                setTimeout(() => {
                  toast.loading("Step 2: Processing...")
                }, 1000)
                setTimeout(() => {
                  toast.loading("Step 3: Saving...")
                }, 2000)
                setTimeout(() => {
                  toast.success("All steps completed!")
                }, 3000)
              }}
            >
              Multi-step Process
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast.success("First notification")
setTimeout(() => toast.info("Second notification"), 500)
setTimeout(() => toast.warning("Third notification"), 1000)`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Dismiss Toasts */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Dismiss Toasts</h2>
            <p className="text-sm text-muted-foreground">
              Programmatically dismiss toasts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() => {
                const id = toast("This is a toast", {
                  duration: Infinity,
                  description: "It will stay until you dismiss it.",
                })
                setTimeout(() => {
                  toast.dismiss(id)
                }, 3000)
              }}
            >
              Auto-dismiss in 3s
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast("Toast 1", { duration: Infinity })
                toast("Toast 2", { duration: Infinity })
                toast("Toast 3", { duration: Infinity })
              }}
            >
              Show 3 Toasts
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.dismiss()}
            >
              Dismiss All
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`// Dismiss specific toast
const id = toast("Message")
toast.dismiss(id)

// Dismiss all toasts
toast.dismiss()`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Custom Styling */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Custom Styling</h2>
            <p className="text-sm text-muted-foreground">
              Toast with custom classes and styles.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-lg border p-6">
            <Button
              onClick={() =>
                toast.success("Payment successful!", {
                  description: "$299.00 has been charged to your card.",
                  className: "border-green-500",
                })
              }
            >
              Success with Border
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Payment failed", {
                  description: "Please check your payment method.",
                  className: "border-red-500",
                })
              }
            >
              Error with Border
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Custom styled toast", {
                  description: "This toast has custom styling.",
                  className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0",
                })
              }
            >
              Gradient Toast
            </Button>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`toast.success("Payment successful!", {
  className: "border-green-500",
})

toast("Custom toast", {
  className: "bg-gradient-to-r from-purple-500 to-pink-500",
})`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Important Note */}
      <Card className="p-6 bg-muted/50">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <InfoIcon className="mt-0.5 size-5 text-blue-500" />
            <div className="space-y-2">
              <p className="text-sm font-semibold">Important Setup Note</p>
              <p className="text-sm text-muted-foreground">
                Make sure to add the <code className="rounded bg-muted px-1.5 py-0.5">&lt;Toaster /&gt;</code> component
                to your root layout for Sonner to work properly:
              </p>
              <pre className="mt-2 rounded-md bg-background p-4 text-xs overflow-x-auto">
{`import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}
              </pre>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/slider">
          <Button variant="outline">
            ← Slider
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
