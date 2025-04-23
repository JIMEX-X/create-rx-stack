import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Terminal,
  Zap,
  Shield,
  Puzzle,
  Code,
  Layers,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { CLIDemo } from "@/components/cli-demo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  Create RX Stack
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl">
                  A streamlined CLI tool for bootstrapping Next.js applications
                  with tRPC, TypeScript, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/docs/installation"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-purple-800 px-8 text-sm font-medium text-white shadow transition-colors hover:from-purple-700 hover:to-purple-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
                >
                  Get Started
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                >
                  Documentation
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CLIDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-purple-700 dark:from-zinc-200 dark:to-purple-400">
                Everything you need to build modern apps
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Create RX Stack provides a streamlined developer experience with
                all the tools you need for building full-stack applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-purple-600" />}
              title="Modern Stack"
              description="Next.js 14, tRPC, TypeScript, and Tailwind CSS pre-configured and ready to go."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-600" />}
              title="Fast Development"
              description="Get up and running in seconds with a fully configured development environment."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="Type Safety"
              description="End-to-end type safety with TypeScript and tRPC for a robust development experience."
            />
            <FeatureCard
              icon={<Puzzle className="h-10 w-10 text-purple-600" />}
              title="Customizable"
              description="Choose your package manager, directory structure, and UI components."
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-purple-600" />}
              title="Best Practices"
              description="Follows industry best practices for code organization and project structure."
            />
            <FeatureCard
              icon={<Layers className="h-10 w-10 text-purple-600" />}
              title="UI Components"
              description="Optional shadcn/ui integration for beautiful, accessible components."
            />
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-zinc-950">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Quick Start
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-purple-700 dark:from-zinc-200 dark:to-purple-400">
                Get started in seconds
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Create your next project with a single command.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="rounded-lg border bg-zinc-950 p-4 shadow-sm">
              <pre className="text-sm text-zinc-100 overflow-x-auto">
                <code>npx create-rx-stack my-app</code>
              </pre>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-zinc-500 dark:text-zinc-400">
                Follow the interactive prompts to customize your project.
              </p>
              <Link href="/docs/getting-started">
                <Button variant="outline" className="gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-900 via-zinc-900 to-zinc-900">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to build your next project?
              </h2>
              <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with Create RX Stack today and experience the future
                of web development.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/docs/installation"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-zinc-900 shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/JIMEX-X/create-rx-stack"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
