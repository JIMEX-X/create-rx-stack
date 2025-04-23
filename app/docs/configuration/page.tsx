import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Configuration",
  description: "Configure your Create RX App project",
}

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration</h1>
        <p className="mt-2 text-lg text-muted-foreground">Learn how to configure your Create RX App project</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Initial Configuration</h2>
        <p>Create RX App provides several configuration options during project creation:</p>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p className="mt-1">
              The name of your project, which will be used for the directory name and in package.json.
            </p>
            <div className="code-block mt-2">
              <code>npx create-rx-app my-app</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Package Manager</h3>
            <p className="mt-1">Choose between npm, yarn, or pnpm for managing your project's dependencies.</p>
            <div className="code-block mt-2">
              <code>? Select your package manager: › npm / yarn / pnpm</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Directory Structure</h3>
            <p className="mt-1">Choose whether to use a src/ directory for better organization.</p>
            <div className="code-block mt-2">
              <code>? Do you want to use a src/ directory? › (Y/n)</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">UI Components</h3>
            <p className="mt-1">Choose whether to include shadcn/ui components.</p>
            <div className="code-block mt-2">
              <code>? Do you want to include shadcn/ui components? › (Y/n)</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Project Configuration Files</h2>
        <p>After creating your project, you can further customize it by modifying these configuration files:</p>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-xl font-semibold">next.config.js</h3>
            <p className="mt-1">
              Configure Next.js settings such as environment variables, redirects, rewrites, and more.
            </p>
            <div className="code-block mt-2">
              <code>{`/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your custom Next.js configuration
};

module.exports = nextConfig;`}</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">tailwind.config.js</h3>
            <p className="mt-1">Customize your Tailwind CSS configuration, including colors, fonts, and plugins.</p>
            <div className="code-block mt-2">
              <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Your custom theme configuration
  },
  plugins: [require("tailwindcss-animate")],
}`}</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">tsconfig.json</h3>
            <p className="mt-1">Configure TypeScript settings for your project.</p>
            <div className="code-block mt-2">
              <code>{`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">tRPC Configuration</h2>
        <p>You can customize your tRPC setup by modifying these files:</p>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold">server/api/trpc.ts</h3>
            <p className="mt-1">Configure tRPC server settings, middleware, and procedures.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">utils/trpc.tsx</h3>
            <p className="mt-1">Configure tRPC client settings and React Query integration.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Adding shadcn/ui Components</h2>
        <p>If you selected shadcn/ui during project creation, you can add more components using the shadcn CLI:</p>
        <div className="code-block">
          <code>npx shadcn@latest add [component-name]</code>
        </div>
        <p className="mt-2">For example, to add a dropdown menu component:</p>
        <div className="code-block">
          <code>npx shadcn@latest add dropdown-menu</code>
        </div>
      </div>
    </div>
  )
}
