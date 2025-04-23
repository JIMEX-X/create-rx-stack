export function HeroCode() {
  return (
    <div className="rounded-lg bg-zinc-950 p-4 shadow-xl">
      <pre className="text-sm text-zinc-100 overflow-x-auto">
        <code>{`$ npx create-rx-app my-app

✨ Welcome to create-rx-app - A streamlined starter for Next.js with tRPC

? Select your package manager: › 
❯ npm
  yarn
  pnpm

? Do you want to use a src/ directory? › Yes

? Do you want to include shadcn/ui components? › Yes

Creating Next.js project with tRPC...
✓ Project created successfully!

Success! Created RX App at my-app

We suggest that you begin by typing:

  cd my-app
  npm run dev

Happy hacking!`}</code>
      </pre>
    </div>
  )
}
