"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Breadcrumbs() {
  const pathname = usePathname()

  if (!pathname || pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  // Create breadcrumb items with proper labels
  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`

    // Format the label (capitalize, replace hyphens with spaces)
    let label = segment.replace(/-/g, " ")
    label = label.charAt(0).toUpperCase() + label.slice(1)

    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumbs" className="flex items-center text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" aria-hidden="true" />
            <Link
              href={breadcrumb.href}
              className={cn(
                "hover:text-foreground transition-colors",
                index === breadcrumbs.length - 1 ? "font-medium text-foreground" : "",
              )}
              aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
            >
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
