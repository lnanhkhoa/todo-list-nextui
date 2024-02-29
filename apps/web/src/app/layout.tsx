import { MainProviders, ChildProviders } from "../providers"

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

// These styles apply to every route in the application
import "@/styles/globals.css"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainProviders>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <ChildProviders>{children}</ChildProviders>
        </body>
      </html>
    </MainProviders>
  )
}
