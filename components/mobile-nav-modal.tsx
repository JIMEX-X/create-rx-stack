"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X, ChevronRight, Github, ArrowLeft } from "lucide-react";
import { DocsSidebarItems } from "@/components/docs-sidebar";
import { VersionSelector } from "@/components/version-selector";
import { Search } from "@/components/search";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useKeyPress } from "@/hooks/use-key-press";

interface Route {
  href: string;
  label: string;
  active: boolean;
}

interface MobileNavModalProps {
  open: boolean;
  onClose: () => void;
  routes: Route[];
}

export function MobileNavModal({ open, onClose, routes }: MobileNavModalProps) {
  const [showDocs, setShowDocs] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Handle body scroll locking
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [open]);

  // Close on escape key press
  useKeyPress("Escape", () => {
    if (open) onClose();
  });

  // Close when clicking outside the modal content
  useOnClickOutside(
    // @ts-ignore
    modalRef,
    () => {
      if (open) onClose();
    },
    ["button", "[data-ignore-outside-clicks]"]
  );

  // Handle navigation
  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  // Handle back button in docs section
  const handleBack = () => {
    setShowDocs(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
        >
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Full-screen modal container */}
          <motion.div
            ref={modalRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8,
            }}
            className="fixed inset-0 flex flex-col bg-background"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 id="mobile-nav-title" className="text-lg font-semibold">
                {showDocs ? "Documentation" : "Menu"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Search bar */}
            <div className="border-b px-4 py-3">
              <Search />
            </div>

            {/* Modal content with scrolling */}
            <div className="flex-1 overflow-y-auto overscroll-contain pb-safe">
              <AnimatePresence mode="wait">
                {showDocs ? (
                  <motion.div
                    key="docs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 py-3"
                  >
                    <div className="mb-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleBack}
                        className="mb-4 w-full justify-start"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to main menu
                      </Button>

                      <div className="mb-6">
                        <VersionSelector />
                      </div>

                      <div className="space-y-6">
                        <DocsSidebarItems onClick={onClose} />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="main-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="divide-y"
                  >
                    {/* Main navigation links */}
                    {routes.map((route, index) => (
                      <motion.div
                        key={route.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-1"
                      >
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-between py-6 text-lg",
                            route.active
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          )}
                          onClick={() => {
                            if (route.href.startsWith("/docs")) {
                              setShowDocs(true);
                            } else {
                              handleNavigation(route.href);
                            }
                          }}
                        >
                          {route.label}
                          {route.href.startsWith("/docs") && (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </Button>
                      </motion.div>
                    ))}

                    {/* External links */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: routes.length * 0.05 }}
                      className="px-4 py-1"
                    >
                      <Link
                        href="https://github.com/JIMEX-M/create-rx-stack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between py-6 text-lg text-muted-foreground"
                        onClick={onClose}
                      >
                        <div className="flex items-center">
                          <Github className="mr-3 h-5 w-5" />
                          GitHub
                        </div>
                        <ChevronRight className="h-5 w-5 rotate-[-45deg]" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom safe area for iOS devices */}
            <div className="h-safe-bottom bg-background" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
