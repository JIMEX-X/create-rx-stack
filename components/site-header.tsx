"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Search } from "@/components/search";
import { MobileNavModal } from "@/components/mobile-nav-modal";
import Image from "next/image";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/docs",
      label: "Documentation",
      active: pathname === "/docs" || pathname?.startsWith("/docs/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200",
          scrolled && "shadow-sm"
        )}
      >
        <div className="px-5 w-full flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/icon1.png"}
                alt="logo"
                width={10}
                height={10}
                className="h-6 w-6 object-cover rounded-full "
              />
              <span className="font-bold text-lg hidden sm:inline-block">
                Create RX Stack
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Search />
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    route.active
                      ? "text-foreground font-semibold"
                      : "text-foreground/60"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <div className="hidden md:block">
                <Link
                  href="https://github.com/JIMEX-X/create-rx-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">GitHub</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile navigation modal */}
      <MobileNavModal
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        routes={routes}
      />
    </>
  );
}
