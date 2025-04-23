"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CommandOutput {
  type: "command" | "output" | "error"
  content: string
}

export function CLIDemo() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { type: "output", content: "Welcome to Create RX Stack CLI Demo!" },
    { type: "output", content: "Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Available commands and their responses
  const commands: Record<string, (args: string[]) => CommandOutput[]> = {
    help: () => [
      { type: "output", content: "Available commands:" },
      { type: "output", content: "  create-rx-stack [project-name] - Create a new project" },
      { type: "output", content: "  ls - List files in current directory" },
      { type: "output", content: "  cd [directory] - Change directory" },
      { type: "output", content: "  clear - Clear terminal" },
      { type: "output", content: "  help - Show this help message" },
    ],
    "create-rx-stack": (args) => {
      const projectName = args[0] || "my-app"
      return [
        { type: "output", content: `Creating a new project: ${projectName}...` },
        { type: "output", content: "✨ Welcome to create-rx-stack - A streamlined starter for Next.js with tRPC" },
        { type: "output", content: "" },
        { type: "output", content: "? Select your package manager: › npm" },
        { type: "output", content: "? Do you want to use a src/ directory? › Yes" },
        { type: "output", content: "? Do you want to include shadcn/ui components? › Yes" },
        { type: "output", content: "" },
        { type: "output", content: "Creating Next.js project with tRPC..." },
        { type: "output", content: "✓ Project created successfully!" },
        { type: "output", content: "" },
        { type: "output", content: `Success! Created RX Stack at ${projectName}` },
        { type: "output", content: "" },
        { type: "output", content: "We suggest that you begin by typing:" },
        { type: "output", content: "" },
        { type: "output", content: `  cd ${projectName}` },
        { type: "output", content: "  npm run dev" },
        { type: "output", content: "" },
        { type: "output", content: "Happy hacking!" },
      ]
    },
    // For backward compatibility
    "create-rx-app": (args) => [
      { type: "error", content: "Command 'create-rx-app' is deprecated. Please use 'create-rx-stack' instead." },
      ...commands["create-rx-stack"](args),
    ],
    ls: () => [{ type: "output", content: "node_modules  package.json  README.md  tsconfig.json" }],
    cd: (args) => {
      if (!args.length) {
        return [{ type: "error", content: "cd: missing directory argument" }]
      }
      return [{ type: "output", content: `Changed directory to ${args[0]}` }]
    },
    clear: () => {
      setTimeout(() => {
        setHistory([
          { type: "output", content: "Welcome to Create RX Stack CLI Demo!" },
          { type: "output", content: "Type 'help' to see available commands." },
        ])
      }, 0)
      return []
    },
  }

  // Process command input
  const processCommand = (cmd: string) => {
    if (!cmd.trim()) return

    const parts = cmd.trim().split(" ")
    const command = parts[0]
    const args = parts.slice(1)

    setIsProcessing(true)

    // Add command to history
    setHistory((prev) => [...prev, { type: "command", content: cmd }])

    // Process command after a small delay to simulate execution
    setTimeout(() => {
      if (command in commands) {
        const output = commands[command](args)
        setHistory((prev) => [...prev, ...output])
      } else {
        setHistory((prev) => [
          ...prev,
          { type: "error", content: `Command not found: ${command}. Type 'help' for available commands.` },
        ])
      }
      setIsProcessing(false)
      setInput("")

      // Scroll to bottom
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 300)
  }

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Focus input when clicking on terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-zinc-950 text-zinc-100 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium">Terminal</div>
        <div className="w-12"></div>
      </div>

      <div ref={terminalRef} className="h-80 overflow-y-auto p-4 font-mono text-sm" onClick={focusInput}>
        {history.map((item, index) => (
          <div
            key={index}
            className={cn(
              "whitespace-pre-wrap mb-1",
              item.type === "command" && "text-purple-400",
              item.type === "error" && "text-red-400",
            )}
          >
            {item.type === "command" ? `$ ${item.content}` : item.content}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-purple-400 mr-2">$</span>
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isProcessing) {
                processCommand(input)
              }
            }}
            className="flex-1 bg-transparent border-none text-zinc-100 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-6"
            placeholder={isProcessing ? "Processing..." : "Type a command..."}
            disabled={isProcessing}
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
