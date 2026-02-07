import { DocsSidebar } from '@/components/docs-sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-5xl py-10 px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
