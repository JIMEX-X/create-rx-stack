import type { Metadata } from "next"
import { CodeBlock } from "@/components/code-block"
import { CLIDemo } from "@/components/cli-demo"

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Quick start guide for Create RX Stack",
}

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Learn how to create your first project with Create RX Stack
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="interactive-demo" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <p>Try out the Create RX Stack CLI in this interactive demo:</p>
        <div className="my-6">
          <CLIDemo />
        </div>
        <p className="text-sm text-muted-foreground">
          Type <code>create-rx-stack my-app</code> to see how the CLI works, or <code>help</code> to see all available
          commands.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="creating-a-new-project" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Creating a New Project
        </h2>
        <p>To create a new project, run the following command:</p>
        <CodeBlock code="npx create-rx-stack my-app" language="bash" />
        <p>
          Replace <code>my-app</code> with your desired project name.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="interactive-setup" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Interactive Setup
        </h2>
        <p>Create RX Stack will guide you through an interactive setup process:</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Project Name:</strong> If you didn't specify a project name in the command, you'll be prompted to
            enter one.
          </li>
          <li>
            <strong>Package Manager:</strong> Choose between npm, yarn, or pnpm.
            <CodeBlock
              code="? Select your package manager: › - Use arrow-keys. Return to submit.
❯ npm
  yarn
  pnpm"
              language="bash"
            />
          </li>
          <li>
            <strong>Directory Structure:</strong> Choose whether to use a src/ directory.
            <CodeBlock code="? Do you want to use a src/ directory? › (Y/n)" language="bash" />
          </li>
          <li>
            <strong>UI Components:</strong> Choose whether to include shadcn/ui components.
            <CodeBlock code="? Do you want to include shadcn/ui components? › (Y/n)" language="bash" />
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 id="project-structure" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Project Structure
        </h2>
        <p>After the setup is complete, your project will have the following structure:</p>
        <CodeBlock
          code="my-app/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── src/ (if selected)
    ├── app/
    │   ├── api/
    │   │   └── trpc/
    │   │       └── [trpc]/
    │   │           └── route.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/ (if shadcn/ui selected)
    │   └── ui/
    │       ├── button.tsx
    │       └── card.tsx
    ├── lib/
    │   └── utils.ts
    ├── server/
    │   └── api/
    │       ├── root.ts
    │       ├── routers/
    │       │   └── example.ts
    │       └── trpc.ts
    └── utils/
        └── trpc.tsx"
          language="bash"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 id="running-your-project" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Running Your Project
        </h2>
        <p>Once the project is created, you can start it with the following commands:</p>
        <CodeBlock
          code="cd my-app
npm run dev"
          language="bash"
        />
        <p>Or if you're using yarn or pnpm:</p>
        <CodeBlock
          code="cd my-app
yarn dev"
          language="bash"
        />
        <CodeBlock
          code="cd my-app
pnpm dev"
          language="bash"
        />
        <p>
          Your application will be available at <code>http://localhost:3000</code>.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="next-steps" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <p>Now that you have your project up and running, you can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="/docs/features"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Explore the features of Create RX Stack
            </a>
          </li>
          <li>
            <a
              href="/docs/configuration"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Learn about configuration options
            </a>
          </li>
          <li>
            <a
              href="/docs/troubleshooting"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Troubleshoot common issues
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
