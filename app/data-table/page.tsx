'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  ArrowUpDown,
  ChevronDown,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
} from 'lucide-react'

// Sample data type
type User = {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  role: string
  joinDate: string
}

// Sample data
const data: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'Admin',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'active',
    role: 'Editor',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'inactive',
    role: 'Viewer',
    joinDate: '2024-03-10',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    status: 'active',
    role: 'Editor',
    joinDate: '2024-01-25',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    status: 'pending',
    role: 'Viewer',
    joinDate: '2024-04-05',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    status: 'active',
    role: 'Admin',
    joinDate: '2024-02-15',
  },
  {
    id: '7',
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    status: 'inactive',
    role: 'Editor',
    joinDate: '2024-03-20',
  },
  {
    id: '8',
    name: 'Fiona Green',
    email: 'fiona@example.com',
    status: 'active',
    role: 'Viewer',
    joinDate: '2024-04-10',
  },
]

export default function DataTableShowcase() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  // Define columns
  const columns: ColumnDef<User>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="font-medium">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string
        return (
          <Badge
            variant={
              status === 'active'
                ? 'default'
                : status === 'inactive'
                ? 'secondary'
                : 'outline'
            }
          >
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => <div>{row.getValue('role')}</div>,
    },
    {
      accessorKey: 'joinDate',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Join Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue('joinDate'))
        return <div>{date.toLocaleDateString()}</div>
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                Copy user ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit user
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <DocsLayoutWrapper>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Data Table</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Powerful table and data grid with sorting, filtering, and pagination.
          </p>
        </div>

        {/* Basic Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Table</CardTitle>
            <CardDescription>Simple table with basic styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(0, 4).map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === 'active'
                              ? 'default'
                              : user.status === 'inactive'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Table with All Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Advanced Data Table</CardTitle>
            <CardDescription>
              With sorting, filtering, pagination, row selection, and column visibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center space-x-2">
                  <Input
                    placeholder="Filter names..."
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    onChange={(event) =>
                      table.getColumn('name')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Columns <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {table
                      .getAllColumns()
                      .filter((column) => column.getCanHide())
                      .map((column) => {
                        return (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        )
                      })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          return (
                            <TableHead key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </TableHead>
                          )
                        })}
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                    {table.getRowModel().rows?.length ? (
                      table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && 'selected'}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={columns.length}
                          className="h-24 text-center"
                        >
                          No results.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                  {table.getFilteredSelectedRowModel().rows.length} of{' '}
                  {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </Button>
                  <div className="text-sm font-medium">
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compact Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compact Table</CardTitle>
            <CardDescription>Dense table layout for more data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="h-10">ID</TableHead>
                    <TableHead className="h-10">Name</TableHead>
                    <TableHead className="h-10">Email</TableHead>
                    <TableHead className="h-10">Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(0, 5).map((user) => (
                    <TableRow key={user.id} className="h-10">
                      <TableCell className="py-2 text-xs">{user.id}</TableCell>
                      <TableCell className="py-2 text-xs font-medium">{user.name}</TableCell>
                      <TableCell className="py-2 text-xs">{user.email}</TableCell>
                      <TableCell className="py-2 text-xs">{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Striped Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Striped Table</CardTitle>
            <CardDescription>Table with alternating row colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(0, 5).map((user, index) => (
                    <TableRow
                      key={user.id}
                      className={index % 2 === 0 ? 'bg-muted/50' : ''}
                    >
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === 'active'
                              ? 'default'
                              : user.status === 'inactive'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Usage Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Data Table component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

// Define your data type
type User = {
  id: string
  name: string
  email: string
}

// Define columns
const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
]

// In your component
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})

// Basic Table
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

// Advanced Table with TanStack Table
<Table>
  <TableHeader>
    {table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
  <TableBody>
    {table.getRowModel().rows.map((row) => (
      <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            )}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
</Table>`}</code>
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
