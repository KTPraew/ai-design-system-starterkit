"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  MoreHorizontalIcon,
  ArrowUpDownIcon,
  SearchIcon,
  EditIcon,
  TrashIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"

export default function TablePage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
    { id: "INV006", status: "Pending", method: "Credit Card", amount: "$200.00" },
    { id: "INV007", status: "Unpaid", method: "Bank Transfer", amount: "$300.00" },
  ]

  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive" },
    { id: "4", name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
    { id: "5", name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "Active" },
  ]

  const products = [
    { id: "1", name: "Wireless Headphones", category: "Electronics", price: "$299.00", stock: 45 },
    { id: "2", name: "Smart Watch", category: "Electronics", price: "$399.00", stock: 23 },
    { id: "3", name: "Laptop Stand", category: "Accessories", price: "$79.00", stock: 156 },
    { id: "4", name: "USB-C Hub", category: "Accessories", price: "$49.00", stock: 89 },
    { id: "5", name: "Mechanical Keyboard", category: "Electronics", price: "$159.00", stock: 67 },
  ]

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedRows(selectedRows.length === users.length ? [] : users.map((u) => u.id))
  }

  const paginatedInvoices = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const totalPages = Math.ceil(invoices.length / itemsPerPage)

  return (
    <DocsLayoutWrapper><div className="container mx-auto space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Table</h1>
          <Badge variant="secondary">Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          A responsive table component for displaying data.
        </p>
      </div>

      {/* Basic Table */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Table</h2>
            <p className="text-sm text-muted-foreground">
              A simple table with rows and columns.
            </p>
          </div>

          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell>{invoice.id}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Footer */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Footer</h2>
            <p className="text-sm text-muted-foreground">
              Table with summary footer row.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$1,750.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TableFooter>
  <TableRow>
    <TableCell colSpan={3}>Total</TableCell>
    <TableCell className="text-right">$1,750.00</TableCell>
  </TableRow>
</TableFooter>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Status Badges */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Status Badges</h2>
            <p className="text-sm text-muted-foreground">
              Table with colored status indicators.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid"
                          ? "default"
                          : invoice.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TableCell>
  <Badge variant={status === "Paid" ? "default" : "destructive"}>
    {status}
  </Badge>
</TableCell>`}
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
              Table with action buttons in each row.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <EyeIcon className="mr-2 size-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <EditIcon className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <TrashIcon className="mr-2 size-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TableCell className="text-right">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>View</DropdownMenuItem>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</TableCell>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Checkboxes */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Checkboxes</h2>
            <p className="text-sm text-muted-foreground">
              Selectable rows with checkboxes.
            </p>
          </div>

          <div className="space-y-4">
            {selectedRows.length > 0 && (
              <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
                <span className="text-sm font-medium">
                  {selectedRows.length} row(s) selected
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedRows([])}
                >
                  Clear
                </Button>
              </div>
            )}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedRows.length === users.length}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(user.id)}
                        onCheckedChange={() => toggleRow(user.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [selectedRows, setSelectedRows] = useState<string[]>([])

<TableHead>
  <Checkbox
    checked={selectedRows.length === data.length}
    onCheckedChange={toggleAll}
  />
</TableHead>

<TableCell>
  <Checkbox
    checked={selectedRows.includes(row.id)}
    onCheckedChange={() => toggleRow(row.id)}
  />
</TableCell>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Avatars */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Avatars</h2>
            <p className="text-sm text-muted-foreground">
              Table with user avatars and rich content.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src={`https://github.com/shadcn.png`} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`<TableCell>
  <div className="flex items-center gap-3">
    <Avatar className="size-8">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
    <span>{user.name}</span>
  </div>
</TableCell>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Striped Rows */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Striped Rows</h2>
            <p className="text-sm text-muted-foreground">
              Table with alternating row colors.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.id}
                  className={index % 2 === 0 ? "bg-muted/50" : ""}
                >
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`{products.map((product, index) => (
  <TableRow
    key={product.id}
    className={index % 2 === 0 ? "bg-muted/50" : ""}
  >
    <TableCell>{product.name}</TableCell>
  </TableRow>
))}`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Search */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Search</h2>
            <p className="text-sm text-muted-foreground">
              Table with search/filter functionality.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-10"
              />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [search, setSearch] = useState("")
const filtered = data.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase())
)

<Input
  placeholder="Search..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* With Pagination */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">With Pagination</h2>
            <p className="text-sm text-muted-foreground">
              Table with pagination controls.
            </p>
          </div>

          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.status === "Paid"
                            ? "default"
                            : invoice.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, invoices.length)} of{" "}
                {invoices.length} results
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="size-4" />
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="size-8"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRightIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [page, setPage] = useState(1)
const itemsPerPage = 5
const paginated = data.slice(
  (page - 1) * itemsPerPage,
  page * itemsPerPage
)

<Button onClick={() => setPage(p => p - 1)}>
  Previous
</Button>
<Button onClick={() => setPage(p => p + 1)}>
  Next
</Button>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Sortable */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Sortable Columns</h2>
            <p className="text-sm text-muted-foreground">
              Table with sortable column headers.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="h-8 p-0">
                    Product
                    <ArrowUpDownIcon className="ml-2 size-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 p-0">
                    Category
                    <ArrowUpDownIcon className="ml-2 size-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 p-0">
                    Price
                    <ArrowUpDownIcon className="ml-2 size-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" className="h-8 p-0">
                    Stock
                    <ArrowUpDownIcon className="ml-2 size-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm">
            <span className="font-semibold">Usage:</span>
            <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
{`const [sortBy, setSortBy] = useState("name")
const [sortOrder, setSortOrder] = useState("asc")

<TableHead>
  <Button
    variant="ghost"
    onClick={() => handleSort("name")}
  >
    Name
    <ArrowUpDownIcon className="ml-2 size-4" />
  </Button>
</TableHead>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Responsive */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Responsive</h2>
            <p className="text-sm text-muted-foreground">
              Table automatically scrolls horizontally on small screens.
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>Jan 20, 2025</TableCell>
                  <TableCell>Jan 28, 2025</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <p className="text-sm text-muted-foreground">
            Try resizing your browser window to see the table scroll horizontally.
          </p>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <Link href="/switch">
          <Button variant="outline">
            ← Switch
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Components</Button>
        </Link>
        <Link href="/tabs">
          <Button variant="outline">
            Tabs →
          </Button>
        </Link>
      </div>
    </div>
    </DocsLayoutWrapper>
  )
}
