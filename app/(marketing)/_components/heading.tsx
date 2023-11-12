"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Heading() {
  return (
    <div className="max-w-3xm space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
            Hareket Et Sağlıklı Kal 
            <span className="underline italic"> Egzersiz Takip Uygulaması</span>
      </h1>
      <Button asChild>
          <Link href="/">
          Egzersiz Takip Uygulaması&apos;na gir<ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Kendine uygun antrenörü bul <br /> Beslenme planını seç <br /> egzersize başla
      </h3>
    </div>
  );
}
