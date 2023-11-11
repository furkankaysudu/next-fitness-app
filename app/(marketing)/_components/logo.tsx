
import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
  });

export default function Logo() {
  
    return (
    <div >
        <Image src="/favicon-light.ico" height="50" width="50" alt='logo' className='dark:hidden'/>
        <Image src="/favicon-dark.ico" height="50" width="50" alt='logo' className='hidden dark:block'/>
        <p className={cn("font-semibold", font.className)}>
            Egzersiz Takip Uygulamasi
        </p>
    </div>
  )
}
