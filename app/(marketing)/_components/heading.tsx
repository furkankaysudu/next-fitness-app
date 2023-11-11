"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import {ArrowRight} from "lucide-react"

export default function Heading() {

    return (
        <div className='max-w-3xm space-y-4'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-emerald-600'>
            <span className='underline italic'>Egzersiz Takip Uygulaması</span><br />
                Hareket Et Sağlıklı Kal 
            </h1>
        </div>
        
  )
}
