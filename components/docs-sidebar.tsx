"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Getting Started",
        href: "/docs/getting-started",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Features Overview",
        href: "/docs/features",
      },
      {
        title: "Configuration",
        href: "/docs/configuration",
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        title: "Troubleshooting",
        href: "/docs/troubleshooting",
      },
      {
        title: "FAQ",
        href: "/docs/faq",
      },
    ],
  },
]

interface DocsSidebarItemsProps {
  onClick?: () => void
}

export function DocsSidebarItems({ onClick }: DocsSidebarItemsProps) {
  const pathname = usePathname()

  return (
    <>
      {sidebarItems.map((section, index) => (
        <div key={index} className="pb-6">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{section.title}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
                  "bg-accent": pathname === item.href,
                })}
                onClick={onClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export function DocsSidebar() {
  return (
    <div className="w-full">
      <DocsSidebarItems />
    </div>
  )
}
