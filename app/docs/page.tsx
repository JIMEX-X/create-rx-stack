import Link from "next/link";
import type { Metadata } from "next";
import { DocCard } from "@/components/doc-card";
import {
  Book,
  Terminal,
  Wrench,
  Lightbulb,
  Shield,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for Create RX App CLI tool",
};

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Documentation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Comprehensive guide to using Create RX App CLI tool
        </p>
      </div>

      <div className="docs-grid">
        <DocCard
          href="/docs/installation"
          icon={<Terminal className="h-6 w-6" />}
          title="Installation"
          description="How to install Create RX App CLI tool"
        />
        <DocCard
          href="/docs/getting-started"
          icon={<Book className="h-6 w-6" />}
          title="Getting Started"
          description="Quick start guide and basic usage"
        />
        <DocCard
          href="/docs/features"
          icon={<Lightbulb className="h-6 w-6" />}
          title="Features"
          description="Explore all features and capabilities"
        />
        <DocCard
          href="/docs/configuration"
          icon={<Wrench className="h-6 w-6" />}
          title="Configuration"
          description="Configure your project settings"
        />
        <DocCard
          href="/docs/troubleshooting"
          icon={<Shield className="h-6 w-6" />}
          title="Troubleshoot"
          description="Common issues and solutions"
        />
        <DocCard
          href="/docs/faq"
          icon={<HelpCircle className="h-6 w-6" />}
          title="FAQ"
          description="Frequently asked questions"
        />
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
        <p className="mb-4">
          If you can't find what you're looking for in the documentation, you
          can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="https://github.com/JIMEX-X/create-rx-app/issues"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Open an issue on GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/jimex_m"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Reach out on Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/jimex_m"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Contact the developer directly
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
