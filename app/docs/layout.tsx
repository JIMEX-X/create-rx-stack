import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { VersionSelector } from "@/components/version-selector"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex-1 px-4 md:px-6">
      {/* Mobile breadcrumbs */}
      <div className="md:hidden py-4">
        <Breadcrumbs />
      </div>

      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-2 lg:py-8 overflow-y-auto">
            <div className="mb-6">
              <VersionSelector />
            </div>
            <DocsSidebar />
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 px-1 sm:px-2 md:px-0">
            {/* Desktop breadcrumbs */}
            <div className="hidden md:block mb-4">
              <Breadcrumbs />
            </div>
            {children}
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-10 overflow-y-auto">
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
