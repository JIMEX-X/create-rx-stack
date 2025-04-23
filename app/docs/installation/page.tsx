import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install Create RX Stack CLI tool",
};

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Learn how to install and set up Create RX Stack
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Command Name Change</AlertTitle>
        <AlertDescription>
          The command has been updated from <code>create-rx-app</code> to{" "}
          <code>create-rx-stack</code>. Please use the new command in all your
          projects.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2
          id="requirements"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Requirements
        </h2>
        <p>
          Before installing Create RX Stack, make sure you have the following
          installed:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Node.js 16.14.0 or later</li>
          <li>
            npm 7.0.0 or later, yarn 1.22.0 or later, or pnpm 7.0.0 or later
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2
          id="installation-methods"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Installation Methods
        </h2>
        <p>
          You can install Create RX Stack using any of the following methods:
        </p>

        <Tabs defaultValue="npx">
          <TabsList>
            <TabsTrigger value="npx">Using npx (recommended)</TabsTrigger>
            <TabsTrigger value="npm">Global Installation</TabsTrigger>
            <TabsTrigger value="clone">From Source</TabsTrigger>
          </TabsList>
          <TabsContent value="npx" className="space-y-4">
            <p>
              The easiest way to use Create RX Stack is with npx, which comes
              with npm:
            </p>
            <CodeBlock code="npx create-rx-stack my-app" language="bash" />
            <p>
              This will create a new project in the <code>my-app</code>{" "}
              directory without installing the package globally.
            </p>
          </TabsContent>
          <TabsContent value="npm" className="space-y-4">
            <p>You can also install Create RX Stack globally:</p>
            <CodeBlock code="npm install -g create-rx-stack" language="bash" />
            <p>Then you can use it to create a new project:</p>
            <CodeBlock code="create-rx-stack my-app" language="bash" />
          </TabsContent>
          <TabsContent value="clone" className="space-y-4">
            <p>
              If you want to contribute or modify the tool, you can clone the
              repository:
            </p>
            <CodeBlock
              code="git clone https://github.com/JIMEX-X/create-rx-stack.git"
              language="bash"
            />
            <p>Then install dependencies and link the package:</p>
            <CodeBlock
              code="cd create-rx-stack\nnpm install\nnpm link"
              language="bash"
            />
            <p>Now you can use it to create a new project:</p>
            <CodeBlock code="create-rx-stack my-app" language="bash" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2
          id="verifying-installation"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Verifying Installation
        </h2>
        <p>To verify that Create RX Stack is installed correctly, run:</p>
        <CodeBlock code="npx create-rx-stack --version" language="bash" />
        <p>This should display the current version of Create RX Stack.</p>
      </div>

      <div className="space-y-4">
        <h2
          id="next-steps"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Next Steps
        </h2>
        <p>Now that you have Create RX Stack installed, you can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="/docs/getting-started"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Learn how to create your first project
            </a>
          </li>
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
        </ul>
      </div>
    </div>
  );
}
