import { useState, useCallback } from 'react'

/**
 * Hook to copy text to clipboard
 * Returns { isCopied, copy, reset }
 */
export function useClipboard(timeout: number = 2000) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), timeout)
      return true
    } catch (error) {
      console.error('Failed to copy:', error)
      return false
    }
  }, [timeout])

  const reset = useCallback(() => {
    setIsCopied(false)
  }, [])

  return { isCopied, copy, reset }
}
