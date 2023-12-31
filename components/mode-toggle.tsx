"use client"

import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Moon,Sun } from 'lucide-react'

export default function ModeToggle() {
    const {setTheme} = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">tema değiitir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          aydınlık
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          karanlık
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          sistem
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
