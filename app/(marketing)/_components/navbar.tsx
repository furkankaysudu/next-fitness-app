"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useScrollHook from '@/hooks/use-scroll-hook'
import Logo from './logo'
import ModeToggle from '@/components/mode-toggle'


export default function Navbar() {
    const scrolled = useScrollHook();
  return (
    <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo/>
      <div className={cn("md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2")}>
        <Button variant="ghost" size="sm">
          Giriş
        </Button>
        <Button size="sm">
          Kayıt
        </Button>
        <ModeToggle/>
      </div>
    </div>
    

  )
}
