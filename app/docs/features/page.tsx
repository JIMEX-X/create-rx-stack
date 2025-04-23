import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the features of Create RX App",
}

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Features</h1>
        <p className="mt-2 text-lg text-muted-foreground">Explore the features and capabilities of Create RX App</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Core Features</h2>

        <div className="space-y-6">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next.js 14</h3>
            <p className="mt-2">Create RX App sets up a Next.js 14 project with the App Router, which provides:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Server Components for improved performance</li>
              <li>Simplified routing with the file-system based router</li>
              <li>Built-in optimizations for images, fonts, and scripts</li>
              <li>Automatic code splitting and bundling</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">tRPC Integration</h3>
            <p className="mt-2">End-to-end typesafe APIs with tRPC, providing:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Type safety across your entire application</li>
              <li>Automatic API documentation</li>
              <li>React Query integration for data fetching and caching</li>
              <li>Simplified API development with TypeScript</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">TypeScript</h3>
            <p className="mt-2">Full TypeScript support with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Preconfigured tsconfig.json</li>
              <li>Type definitions for all included libraries</li>
              <li>Type checking during development and build</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Tailwind CSS</h3>
            <p className="mt-2">Utility-first CSS framework with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Preconfigured tailwind.config.js</li>
              <li>PostCSS and Autoprefixer setup</li>
              <li>Custom color scheme with zinc and purple gradients</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Optional Features</h2>

        <div className="space-y-6">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">shadcn/ui Components</h3>
            <p className="mt-2">Optional integration with shadcn/ui, providing:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Beautiful, accessible UI components</li>
              <li>Customizable components with Tailwind CSS</li>
              <li>Pre-installed Button and Card components</li>
              <li>Easy addition of more components as needed</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Directory Structure Options</h3>
            <p className="mt-2">Choose between:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Standard structure with files in the root directory</li>
              <li>src/ directory structure for better organization</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Package Manager Selection</h3>
            <p className="mt-2">Choose your preferred package manager:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>npm</li>
              <li>yarn</li>
              <li>pnpm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Coming Soon</h2>

        <div className="space-y-6">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prisma Integration</h3>
            <p className="mt-2">Future releases will include Prisma ORM integration for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Type-safe database access</li>
              <li>Automatic migrations</li>
              <li>Database schema management</li>
            </ul>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">NextAuth.js Integration</h3>
            <p className="mt-2">Authentication will be added with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Multiple authentication providers</li>
              <li>Session management</li>
              <li>Protected routes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
