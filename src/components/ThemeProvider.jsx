"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children, defaultTheme = "system", enableSystem = false }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      localStorage.setItem("theme", theme)
    } else {
      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, enableSystem])

  useEffect(() => {
    if (theme === "system" && enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      const handleChange = () => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        root.classList.add(systemTheme)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme, enableSystem])

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
