'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Star, Quote } from 'lucide-react'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function CarouselShowcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useState(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  })

  return (
    <DocsLayoutWrapper><div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A carousel component for cycling through elements with navigation controls.
          </p>
        </div>

        {/* Basic Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Carousel</CardTitle>
            <CardDescription>Simple carousel with navigation arrows</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Multiple Items Per View */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Items Per View</CardTitle>
            <CardDescription>Show multiple slides at once</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-4xl"
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* With Current Slide Indicator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Slide Indicator</CardTitle>
            <CardDescription>Display current slide number</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Carousel setApi={setApi} className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </CardContent>
        </Card>

        {/* Dot Indicators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dot Indicators</CardTitle>
            <CardDescription>Navigate with dot pagination</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  key={index}
                  className={`size-2 rounded-full transition-colors ${
                    index === current - 1 ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Image Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Carousel</CardTitle>
            <CardDescription>Showcase images in a carousel</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
                          <span className="text-6xl font-bold">Image {index + 1}</span>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Product Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Product Carousel</CardTitle>
            <CardDescription>E-commerce product showcase</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {[
                  { name: 'Wireless Headphones', price: '$299', rating: 4.8 },
                  { name: 'Smart Watch Pro', price: '$449', rating: 4.9 },
                  { name: 'Laptop Stand', price: '$79', rating: 4.6 },
                  { name: 'Mechanical Keyboard', price: '$159', rating: 4.7 },
                  { name: 'USB-C Hub', price: '$89', rating: 4.5 },
                ].map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <div className="aspect-square bg-muted" />
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold">{product.price}</span>
                            <div className="flex items-center gap-1">
                              <Star className="size-4 fill-yellow-500 text-yellow-500" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-3" size="sm">
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Testimonial Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Testimonial Carousel</CardTitle>
            <CardDescription>Customer reviews and feedback</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'CEO, TechCorp',
                    text: 'This product has completely transformed how we work. Highly recommended!',
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Designer, Creative Co',
                    text: 'Amazing quality and attention to detail. Worth every penny.',
                  },
                  {
                    name: 'Emily Rodriguez',
                    role: 'Developer, StartupXYZ',
                    text: 'The best investment we\'ve made for our team. Fantastic support too.',
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-muted/30">
                        <CardContent className="p-8">
                          <Quote className="size-10 text-primary mb-4" />
                          <p className="text-lg mb-6 italic">{testimonial.text}</p>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <div className="flex gap-1 mt-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Auto-play Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vertical Carousel</CardTitle>
            <CardDescription>Carousel with vertical orientation</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="w-full max-w-xs"
            >
              <CarouselContent className="h-[400px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">Slide {index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Card Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feature Showcase</CardTitle>
            <CardDescription>Highlight key features with cards</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {[
                  {
                    title: 'Fast Performance',
                    description: 'Lightning-fast load times and smooth animations for the best user experience.',
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    title: 'Secure & Reliable',
                    description: 'Enterprise-grade security with 99.9% uptime guarantee.',
                    color: 'from-green-500 to-emerald-500',
                  },
                  {
                    title: 'Easy Integration',
                    description: 'Simple API and comprehensive documentation to get started quickly.',
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    title: '24/7 Support',
                    description: 'Round-the-clock customer support from our dedicated team.',
                    color: 'from-orange-500 to-red-500',
                  },
                ].map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <div className={`h-32 bg-gradient-to-br ${feature.color}`} />
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Small Items Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Thumbnail Gallery</CardTitle>
            <CardDescription>Small items carousel for thumbnails</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-4xl"
            >
              <CarouselContent>
                {Array.from({ length: 12 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="p-1">
                      <Card className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                        <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
                          <span className="text-white font-semibold">{index + 1}</span>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Carousel component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

{/* Basic Carousel */}
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

{/* Multiple Items Per View */}
<Carousel
  opts={{
    align: 'start',
  }}
  className="w-full max-w-4xl"
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          {/* Your content */}
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

{/* Vertical Carousel */}
<Carousel
  orientation="vertical"
  className="w-full max-w-xs"
>
  <CarouselContent className="h-[400px]">
    {items.map((item, index) => (
      <CarouselItem key={index}>
        {/* Your content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

{/* With API Control */}
const [api, setApi] = useState<CarouselApi>()

<Carousel setApi={setApi} className="w-full max-w-xs">
  <CarouselContent>
    {/* Items */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
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
