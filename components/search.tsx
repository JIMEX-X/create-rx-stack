"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SearchIcon, X, FileText, ArrowRight } from "lucide-react";
import { CommandShortcut } from "@/components/ui/command";

// Documentation structure for search indexing
const docsStructure = [
  {
    title: "Introduction",
    path: "/docs",
    content: "Comprehensive guide to using Create RX Stack CLI tool",
    keywords: ["introduction", "overview", "docs", "documentation", "guide"],
  },
  {
    title: "Installation",
    path: "/docs/installation",
    content:
      "How to install Create RX Stack CLI tool and set up your environment",
    keywords: ["install", "setup", "npm", "npx", "yarn", "pnpm"],
  },
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    content: "Learn how to create your first project with Create RX Stack",
    keywords: ["start", "create", "new", "project", "first", "begin"],
  },
  {
    title: "Features",
    path: "/docs/features",
    content: "Explore the features and capabilities of Create RX Stack",
    keywords: ["features", "capabilities", "functionality", "options"],
  },
  {
    title: "Configuration",
    path: "/docs/configuration",
    content: "Configure your Create RX Stack project and customize settings",
    keywords: ["config", "settings", "customize", "options", "setup"],
  },
  {
    title: "Troubleshooting",
    path: "/docs/troubleshooting",
    content: "Solutions for common issues with Create RX Stack",
    keywords: ["troubleshoot", "issues", "problems", "errors", "debug", "fix"],
  },
  {
    title: "FAQ",
    path: "/docs/faq",
    content: "Frequently asked questions about Create RX Stack",
    keywords: ["faq", "questions", "answers", "common", "help"],
  },
];

interface SearchResult {
  title: string;
  path: string;
  content: string;
  relevance: number;
}

export function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = searchQuery.toLowerCase().split(" ");

    const searchResults = docsStructure
      .map((doc) => {
        let relevance = 0;

        // Check title matches (highest relevance)
        searchTerms.forEach((term) => {
          if (doc.title.toLowerCase().includes(term)) {
            relevance += 10;
          }
        });

        // Check content matches
        searchTerms.forEach((term) => {
          if (doc.content.toLowerCase().includes(term)) {
            relevance += 5;
          }
        });

        // Check keyword matches
        searchTerms.forEach((term) => {
          doc.keywords.forEach((keyword) => {
            if (keyword.includes(term)) {
              relevance += 3;
            }
          });
        });

        // Check path matches
        searchTerms.forEach((term) => {
          if (doc.path.toLowerCase().includes(term)) {
            relevance += 2;
          }
        });

        return {
          ...doc,
          relevance,
        };
      })
      .filter((doc) => doc.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    setResults(searchResults);
  }, []);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    performSearch(newQuery);
  };

  // Navigate to result and close search
  const handleSelectResult = (path: string) => {
    router.push(path);
    setOpen(false);
    setQuery("");
    setResults([]);
  };

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when dialog opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 gap-0 max-w-2xl">
          <div className="flex items-center border-b px-3">
            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              ref={inputRef}
              value={query}
              onChange={handleSearchChange}
              placeholder="Search documentation..."
              className="h-12 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
            {/* <CommandShortcut>⌘K</CommandShortcut> */}
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-0">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((result) => (
                  <button
                    key={result.path}
                    className="w-full text-left px-4 py-2 hover:bg-accent flex items-start gap-2"
                    onClick={() => handleSelectResult(result.path)}
                  >
                    <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{result.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {result.content}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </button>
                ))}
              </div>
            ) : query ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found for "{query}"
              </div>
            ) : (
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Popular searches:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "installation",
                    "getting started",
                    "features",
                    "configuration",
                    "troubleshooting",
                  ].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      className="h-8"
                      onClick={() => {
                        setQuery(term);
                        performSearch(term);
                      }}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
