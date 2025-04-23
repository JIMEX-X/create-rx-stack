"use client"

import { type RefObject, useEffect } from "react"

type Event = MouseEvent | TouchEvent

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  excludeSelectors: string[] = [],
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      const target = event.target as Node

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(target)) {
        return
      }

      // Check if the click was on an excluded element
      for (const selector of excludeSelectors) {
        const excludedEl = document.querySelector(selector)
        if (excludedEl && (excludedEl === target || excludedEl.contains(target))) {
          return
        }
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler, excludeSelectors])
}
