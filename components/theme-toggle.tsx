"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsClicked(true)
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // Force body background color change immediately
    if (newTheme === "dark") {
      document.body.style.backgroundColor = "#121212"
      document.documentElement.style.backgroundColor = "#121212"
    } else {
      document.body.style.backgroundColor = "white"
      document.documentElement.style.backgroundColor = "white"
    }

    // Reset the clicked state after animation
    setTimeout(() => {
      setIsClicked(false)
    }, 300)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className={`
        relative overflow-hidden transition-all duration-300 transform
        ${
          theme === "light"
            ? "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            : "bg-[#121212] text-white border-gray-600 hover:bg-gray-800"
        }
        ${isClicked ? "scale-95 ring-2 ring-blue-500 ring-opacity-50" : ""}
      `}
    >
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
