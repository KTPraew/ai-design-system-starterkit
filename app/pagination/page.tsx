"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(5)
  const [currentPage3, setCurrentPage3] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const totalPages = 10
  const totalItems = 247

  return (
    <DocsLayoutWrapper><div className="container mx-auto py-10">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Pagination</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Pagination lets users navigate through pages of content, breaking large data sets into manageable chunks.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Pagination</CardTitle>
            <CardDescription>Simple pagination with previous and next buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* With Ellipsis */}
        <Card>
          <CardHeader>
            <CardTitle>With Ellipsis</CardTitle>
            <CardDescription>Pagination with ellipsis for large page counts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Middle Page */}
        <Card>
          <CardHeader>
            <CardTitle>Middle Page</CardTitle>
            <CardDescription>Pagination showing a middle page with ellipsis on both sides</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Last Page */}
        <Card>
          <CardHeader>
            <CardTitle>Last Page</CardTitle>
            <CardDescription>Pagination on the last page</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    10
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" aria-disabled="true" className="pointer-events-none opacity-50" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Compact Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>Compact Pagination</CardTitle>
            <CardDescription>Pagination with just previous and next buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <span className="text-sm text-muted-foreground px-4">
                    Page 2 of 10
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Interactive Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Pagination</CardTitle>
            <CardDescription>Working pagination with state management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm font-medium mb-2">Current Page: {currentPage}</p>
              <div className="h-32 flex items-center justify-center border-2 border-dashed rounded">
                <p className="text-muted-foreground">Content for page {currentPage}</p>
              </div>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(prev => Math.max(1, prev - 1))
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {[1, 2, 3, 4, 5].map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(page)
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(prev => Math.min(5, prev + 1))
                    }}
                    className={currentPage === 5 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Dynamic Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>Dynamic Pagination</CardTitle>
            <CardDescription>Pagination that adapts to current page position</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm font-medium mb-2">Current Page: {currentPage2} of {totalPages}</p>
              <div className="h-32 flex items-center justify-center border-2 border-dashed rounded">
                <p className="text-muted-foreground">Content for page {currentPage2}</p>
              </div>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage2(prev => Math.max(1, prev - 1))
                    }}
                    className={currentPage2 === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {currentPage2 > 2 && (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage2(1)
                        }}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    {currentPage2 > 3 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                  </>
                )}

                {currentPage2 > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage2(currentPage2 - 1)
                      }}
                    >
                      {currentPage2 - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {currentPage2}
                  </PaginationLink>
                </PaginationItem>

                {currentPage2 < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage2(currentPage2 + 1)
                      }}
                    >
                      {currentPage2 + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {currentPage2 < totalPages - 1 && (
                  <>
                    {currentPage2 < totalPages - 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage2(totalPages)
                        }}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage2(prev => Math.min(totalPages, prev + 1))
                    }}
                    className={currentPage2 === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* With Items Per Page */}
        <Card>
          <CardHeader>
            <CardTitle>With Items Per Page</CardTitle>
            <CardDescription>Pagination combined with items per page selector</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show</span>
                <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
                  <SelectTrigger className="w-[70px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">entries</span>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {((currentPage3 - 1) * parseInt(itemsPerPage)) + 1} to {Math.min(currentPage3 * parseInt(itemsPerPage), totalItems)} of {totalItems} entries
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium">ID</th>
                    <th className="text-left p-3 text-sm font-medium">Name</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: parseInt(itemsPerPage) }).map((_, i) => {
                    const itemNumber = ((currentPage3 - 1) * parseInt(itemsPerPage)) + i + 1
                    if (itemNumber > totalItems) return null
                    return (
                      <tr key={i} className="border-t">
                        <td className="p-3 text-sm">{itemNumber}</td>
                        <td className="p-3 text-sm">Item {itemNumber}</td>
                        <td className="p-3 text-sm">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Active
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage3(prev => Math.max(1, prev - 1))
                    }}
                    className={currentPage3 === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: Math.ceil(totalItems / parseInt(itemsPerPage)) }).slice(0, 5).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage3 === i + 1}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage3(i + 1)
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {Math.ceil(totalItems / parseInt(itemsPerPage)) > 5 && (
                  <>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage3(Math.ceil(totalItems / parseInt(itemsPerPage)))
                        }}
                      >
                        {Math.ceil(totalItems / parseInt(itemsPerPage))}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage3(prev => Math.min(Math.ceil(totalItems / parseInt(itemsPerPage)), prev + 1))
                    }}
                    className={currentPage3 === Math.ceil(totalItems / parseInt(itemsPerPage)) ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        {/* Alignment Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Alignment Variants</CardTitle>
            <CardDescription>Different alignment options for pagination</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Center (Default)</h4>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Left Aligned</h4>
              <Pagination className="justify-start">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Right Aligned</h4>
              <Pagination className="justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive Pagination</CardTitle>
            <CardDescription>Pagination that adapts to different screen sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Desktop View</h4>
              <Pagination className="hidden md:flex">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Mobile View</h4>
              <Pagination className="md:hidden">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <span className="text-sm text-muted-foreground px-4">2 / 10</span>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Pagination component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Ellipsis</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<PaginationItem>
  <PaginationEllipsis />
</PaginationItem>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disabled State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<PaginationPrevious
  href="#"
  className="pointer-events-none opacity-50"
/>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always show the current page clearly with isActive prop</li>
                  <li>Disable previous button on first page and next button on last page</li>
                  <li>Use ellipsis for large page counts to keep UI compact</li>
                  <li>Show total pages or items count for better context</li>
                  <li>Consider a compact view for mobile devices</li>
                  <li>Allow users to jump to first/last page in long lists</li>
                  <li>Provide keyboard navigation support</li>
                  <li>Include proper ARIA labels for accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/navigation-menu">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Navigation Menu
          </Button>
        </Link>
        <Link href="/popover">
          <Button variant="outline">
            Popover
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
