'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function AspectRatioPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Aspect Ratio</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays content within a desired ratio.
          </p>
        </div>

        {/* Default Example - 16:9 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>16:9 Aspect Ratio</CardTitle>
            <CardDescription>Most common video and display ratio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-md">
              <AspectRatio ratio={16 / 9}>
                <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <div className="text-center text-white">
                    <p className="text-4xl font-bold">16:9</p>
                    <p className="text-sm mt-2">Widescreen</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* Image Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Image</CardTitle>
            <CardDescription>Using aspect ratio with Next.js Image component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-md">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* Common Ratios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Aspect Ratios</CardTitle>
            <CardDescription>Various standard aspect ratios used in design</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1:1 - Square */}
              <div>
                <p className="text-sm font-medium mb-2">1:1 - Square</p>
                <AspectRatio ratio={1 / 1}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">1:1</p>
                      <p className="text-xs mt-1">Instagram, Avatar</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 4:3 - Standard */}
              <div>
                <p className="text-sm font-medium mb-2">4:3 - Standard</p>
                <AspectRatio ratio={4 / 3}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">4:3</p>
                      <p className="text-xs mt-1">Classic Display</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 16:9 - Widescreen */}
              <div>
                <p className="text-sm font-medium mb-2">16:9 - Widescreen</p>
                <AspectRatio ratio={16 / 9}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">16:9</p>
                      <p className="text-xs mt-1">HD Video, YouTube</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 21:9 - Ultrawide */}
              <div>
                <p className="text-sm font-medium mb-2">21:9 - Ultrawide</p>
                <AspectRatio ratio={21 / 9}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">21:9</p>
                      <p className="text-xs mt-1">Cinema</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 3:2 - Photo */}
              <div>
                <p className="text-sm font-medium mb-2">3:2 - Photo</p>
                <AspectRatio ratio={3 / 2}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">3:2</p>
                      <p className="text-xs mt-1">35mm Film</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 9:16 - Vertical */}
              <div>
                <p className="text-sm font-medium mb-2">9:16 - Vertical</p>
                <div className="max-w-[200px]">
                  <AspectRatio ratio={9 / 16}>
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg">
                      <div className="text-center text-white">
                        <p className="text-3xl font-bold">9:16</p>
                        <p className="text-xs mt-1">Stories, Reels</p>
                      </div>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Embed Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Video Embed</CardTitle>
            <CardDescription>Responsive video container with 16:9 ratio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Images Grid */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Grid</CardTitle>
            <CardDescription>Consistent aspect ratios in a grid layout</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&dpr=2&q=80"
                  alt="Image 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&dpr=2&q=80"
                  alt="Image 2"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&dpr=2&q=80"
                  alt="Image 3"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=800&dpr=2&q=80"
                  alt="Image 4"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=800&dpr=2&q=80"
                  alt="Image 5"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=800&dpr=2&q=80"
                  alt="Image 6"
                  fill
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* Product Card Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Product Card Example</CardTitle>
            <CardDescription>Practical usage in e-commerce product cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="group cursor-pointer">
                <AspectRatio ratio={1 / 1} className="mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&dpr=2&q=80"
                    alt="Headphones"
                    fill
                    className="rounded-lg object-cover transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <h3 className="font-semibold">Premium Headphones</h3>
                <p className="text-sm text-muted-foreground">$299.99</p>
              </div>

              {/* Product 2 */}
              <div className="group cursor-pointer">
                <AspectRatio ratio={1 / 1} className="mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&dpr=2&q=80"
                    alt="Watch"
                    fill
                    className="rounded-lg object-cover transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <h3 className="font-semibold">Smart Watch</h3>
                <p className="text-sm text-muted-foreground">$399.99</p>
              </div>

              {/* Product 3 */}
              <div className="group cursor-pointer">
                <AspectRatio ratio={1 / 1} className="mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&dpr=2&q=80"
                    alt="Sunglasses"
                    fill
                    className="rounded-lg object-cover transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <h3 className="font-semibold">Designer Sunglasses</h3>
                <p className="text-sm text-muted-foreground">$199.99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Ratios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Aspect Ratios</CardTitle>
            <CardDescription>You can use any custom ratio value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 2:1 */}
              <div>
                <p className="text-sm font-medium mb-2">2:1 - Banner</p>
                <AspectRatio ratio={2 / 1}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">2:1</p>
                      <p className="text-xs mt-1">Wide Banner</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* 5:4 */}
              <div>
                <p className="text-sm font-medium mb-2">5:4 - Print</p>
                <AspectRatio ratio={5 / 4}>
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
                    <div className="text-center text-white">
                      <p className="text-3xl font-bold">5:4</p>
                      <p className="text-xs mt-1">Print Media</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the AspectRatio component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

{/* Basic Usage */}
<AspectRatio ratio={16 / 9}>
  <div>Your content here</div>
</AspectRatio>

{/* With Image */}
<AspectRatio ratio={16 / 9}>
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="rounded-md object-cover"
  />
</AspectRatio>

{/* Common Ratios */}
<AspectRatio ratio={1 / 1}>Square (1:1)</AspectRatio>
<AspectRatio ratio={4 / 3}>Standard (4:3)</AspectRatio>
<AspectRatio ratio={16 / 9}>Widescreen (16:9)</AspectRatio>
<AspectRatio ratio={21 / 9}>Cinema (21:9)</AspectRatio>
<AspectRatio ratio={9 / 16}>Vertical (9:16)</AspectRatio>

{/* With Video */}
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/..."
    className="w-full h-full"
  />
</AspectRatio>

{/* Custom Ratio */}
<AspectRatio ratio={2.35 / 1}>
  Anamorphic widescreen
</AspectRatio>`}</code>
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
  )
}
