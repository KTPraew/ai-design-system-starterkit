import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

interface SpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "primary" | "secondary" | "destructive"
}

function Spinner({ className, size = "md", variant = "default", ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <Loader2Icon
        className={cn(
          "animate-spin",
          {
            "size-4": size === "sm",
            "size-6": size === "md",
            "size-8": size === "lg",
            "size-12": size === "xl",
          },
          {
            "text-foreground": variant === "default",
            "text-primary": variant === "primary",
            "text-muted-foreground": variant === "secondary",
            "text-destructive": variant === "destructive",
          }
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { Spinner }
