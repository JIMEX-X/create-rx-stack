import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troubleshooting",
  description: "Troubleshoot common issues with Create RX App",
};

export default function TroubleshootingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Troubleshooting
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Solutions for common issues with Create RX App
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation Issues
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Permission Errors</h3>
            <p className="mt-1">
              If you encounter permission errors when installing globally:
            </p>
            <div className="code-block mt-2">
              <code>Error: EACCES: permission denied</code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use npx instead of global installation</li>
              <li>
                Fix npm permissions as described in the{" "}
                <a
                  href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"
                  className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  npm documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Version Compatibility</h3>
            <p className="mt-1">
              If you see errors related to Node.js version:
            </p>
            <div className="code-block mt-2">
              <code>
                Error: Create RX App requires Node.js 16.14.0 or later.
              </code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Update Node.js to version 16.14.0 or later</li>
              <li>Use a version manager like nvm to switch Node.js versions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Project Creation Issues
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Directory Already Exists</h3>
            <p className="mt-1">
              If you see an error about the directory already existing:
            </p>
            <div className="code-block mt-2">
              <code>
                Error: Directory my-app already exists and is not empty
              </code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choose a different project name</li>
              <li>Remove or rename the existing directory</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Network Issues</h3>
            <p className="mt-1">
              If you encounter network errors during dependency installation:
            </p>
            <div className="code-block mt-2">
              <code>npm ERR! network timeout</code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check your internet connection</li>
              <li>Try using a different npm registry</li>
              <li>
                Increase the network timeout:{" "}
                <code>npm config set fetch-timeout 300000</code>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Runtime Issues
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">tRPC Connection Errors</h3>
            <p className="mt-1">
              If you see errors related to tRPC connection:
            </p>
            <div className="code-block mt-2">
              <code>TRPCClientError: Failed to fetch</code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make sure your server is running</li>
              <li>
                Check that the tRPC endpoint URL is correct in your client
                configuration
              </li>
              <li>Verify that your API routes are properly set up</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">TypeScript Errors</h3>
            <p className="mt-1">If you encounter TypeScript errors:</p>
            <div className="code-block mt-2">
              <code>
                TS2307: Cannot find module '@/components/ui/button' or its
                corresponding type declarations.
              </code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make sure all dependencies are installed</li>
              <li>Check your tsconfig.json paths configuration</li>
              <li>Restart your TypeScript server in your editor</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">shadcn/ui Issues</h3>
            <p className="mt-1">
              If you have issues with shadcn/ui components:
            </p>
            <div className="code-block mt-2">
              <code>Error: Cannot find module '@radix-ui/react-slot'</code>
            </div>
            <p className="mt-2">Solution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Install the missing dependency:{" "}
                <code>npm install @radix-ui/react-slot</code>
              </li>
              <li>Make sure you've followed the shadcn/ui setup correctly</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Getting Help
        </h2>
        <p>If you're still experiencing issues, you can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://github.com/JIMEX-X/create-rx-app/issues"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Open an issue on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jimex_m"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Reach out on Twitter
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jimex_m"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Contact the developer directly
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
