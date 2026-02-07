'use client'

import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function AspectRatioPage() {
  return (
    <DocsLayoutWrapper>
      {/* Main Card */}
      <div className="bg-card border border-border rounded-3xl p-14 shadow-sm">
        {/* Header with Button */}
        <div className="flex items-start justify-between mb-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              Aspect Ratio
            </h1>
            <p className="text-base text-muted-foreground">
              Displays content within a desired ratio.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-1.5"
            asChild
          >
            <a
              href="https://ui.shadcn.com/docs/components/aspect-ratio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium underline">View in Shadcn</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Aspect Ratio Example */}
        <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>
    </DocsLayoutWrapper>
  )
}
