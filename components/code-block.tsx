"use client"

import { useState } from "react"
import { SyntaxHighlighter } from "@/lib/syntax-highlighter"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  title?: string
  className?: string
}

export function CodeBlock({ code, language = "bash", showLineNumbers = false, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative rounded-md overflow-hidden border", className)}>
      {title && <div className="bg-muted px-4 py-1.5 text-sm font-medium border-b">{title}</div>}
      <div className="relative">
        <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers}>
          {code}
        </SyntaxHighlighter>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={copyToClipboard}
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
