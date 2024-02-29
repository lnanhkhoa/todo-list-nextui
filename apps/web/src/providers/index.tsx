// providers/index.tsx
"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { DirectionProvider } from "@radix-ui/react-direction"

export function MainProviders({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>
}

export function ChildProviders({ children }: { children: React.ReactNode }) {
  return children
  // return <DirectionProvider dir="ltr">{children}</DirectionProvider>
}
