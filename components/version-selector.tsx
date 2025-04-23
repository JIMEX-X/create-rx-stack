"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Available versions
const versions = [
  { version: "0.2.0", label: "v0.2.0 (Latest)", isLatest: true },
  { version: "0.1.0", label: "v0.1.0", isLatest: false },
  { version: "0.0.9", label: "v0.0.9", isLatest: false },
]

export function VersionSelector() {
  const [selectedVersion, setSelectedVersion] = useState(versions[0].version)

  // Load saved version from localStorage on mount
  useEffect(() => {
    const savedVersion = localStorage.getItem("docs-version")
    if (savedVersion) {
      const validVersion = versions.find((v) => v.version === savedVersion)
      if (validVersion) {
        setSelectedVersion(validVersion.version)
      }
    }
  }, [])

  // Save selected version to localStorage
  const handleVersionChange = (version: string) => {
    setSelectedVersion(version)
    localStorage.setItem("docs-version", version)

    // In a real implementation, this would update the documentation content
    console.log(`Switched to version: ${version}`)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
      <span className="text-sm text-muted-foreground">Version:</span>
      <Select value={selectedVersion} onValueChange={handleVersionChange}>
        <SelectTrigger className="w-full sm:w-[140px] h-9">
          <SelectValue placeholder="Select version" />
        </SelectTrigger>
        <SelectContent>
          {versions.map((v) => (
            <SelectItem key={v.version} value={v.version}>
              <div className="flex items-center justify-between w-full">
                <span>{v.version}</span>
                {v.isLatest && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    Latest
                  </Badge>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
