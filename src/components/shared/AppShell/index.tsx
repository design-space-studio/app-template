import type { ReactNode } from "react"

/**
 * AppShell — outer wrapper: sidebar + topbar
 */

interface AppShellProps {
  children?: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return <div className="app-shell">{children}</div>
}
