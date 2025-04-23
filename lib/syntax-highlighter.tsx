"use client"

import { useEffect } from "react"
import Prism from "prismjs"

// Import Prism core styles
import "prismjs/themes/prism-tomorrow.css"

// Import language support
import "prismjs/components/prism-bash"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-json"
import "prismjs/components/prism-css"
import "prismjs/components/prism-markdown"

// Import plugins
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/toolbar/prism-toolbar"
import "prismjs/plugins/toolbar/prism-toolbar.css"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"

interface SyntaxHighlighterProps {
  children: string
  language?: string
  showLineNumbers?: boolean
}

export function SyntaxHighlighter({ children, language = "bash", showLineNumbers = false }: SyntaxHighlighterProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <pre className={`${showLineNumbers ? "line-numbers" : ""} rounded-md`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
