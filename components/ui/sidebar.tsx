"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"

const SidebarContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}>({
  collapsed: false,
  setCollapsed: () => {},
})

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: React.ReactNode
  defaultCollapsed?: boolean
}) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

function Sidebar({
  className,
  children,
  ...props
}: React.ComponentProps<"aside">) {
  const { collapsed } = useSidebar()

  return (
    <aside
      data-slot="sidebar"
      data-collapsed={collapsed}
      className={cn(
        "flex h-full flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex items-center gap-2 border-b p-4", className)}
      {...props}
    />
  )
}

function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn("flex-1 overflow-auto p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("border-t p-4", className)}
      {...props}
    />
  )
}

function SidebarNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="sidebar-nav"
      className={cn("space-y-1", className)}
      {...props}
    />
  )
}

function SidebarNavItem({
  className,
  active,
  disabled,
  children,
  icon,
  ...props
}: React.ComponentProps<"button"> & {
  active?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}) {
  const { collapsed } = useSidebar()

  return (
    <button
      data-slot="sidebar-nav-item"
      disabled={disabled}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active && "bg-accent text-accent-foreground",
        disabled && "pointer-events-none opacity-50",
        collapsed && "justify-center px-2",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {!collapsed && <span className="flex-1 text-left">{children}</span>}
    </button>
  )
}

function SidebarNavGroup({
  className,
  label,
  children,
  icon,
  defaultOpen = false,
}: {
  className?: string
  label: string
  children: React.ReactNode
  icon?: React.ReactNode
  defaultOpen?: boolean
}) {
  const { collapsed } = useSidebar()
  const [open, setOpen] = React.useState(defaultOpen)

  if (collapsed) {
    return (
      <button
        className={cn(
          "flex w-full items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
      </button>
    )
  }

  return (
    <div data-slot="sidebar-nav-group" className={cn("space-y-1", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="flex-1 text-left">{label}</span>
        <ChevronRightIcon
          className={cn(
            "size-4 shrink-0 transition-transform",
            open && "rotate-90"
          )}
        />
      </button>
      {open && <div className="ml-6 space-y-1 border-l pl-3">{children}</div>}
    </div>
  )
}

function SidebarToggle({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <button
      data-slot="sidebar-toggle"
      onClick={() => setCollapsed(!collapsed)}
      className={cn(
        "flex items-center justify-center rounded-md p-2 transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      <ChevronRightIcon
        className={cn(
          "size-4 transition-transform",
          !collapsed && "rotate-180"
        )}
      />
    </button>
  )
}

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarNavGroup,
  SidebarToggle,
  useSidebar,
}
