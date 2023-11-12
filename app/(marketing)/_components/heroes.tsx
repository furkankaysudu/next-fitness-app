import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center space-x-3">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image
                fill
                src="/fitness1.jpg"
                alt="fitness1"
                className="object-contain"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80" sideOffset={-110}>
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/favicon-light.ico" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@etu</h4>
                  <p className="text-sm">Insert Image Introduction.</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="relative h-[370px] w-[370px] hidden md:block">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image
                fill
                src="/fitness2.jpg"
                alt="fitness2"
                className="object-contain"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80" sideOffset={-110}>
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/favicon-light.ico" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@etu</h4>
                  <p className="text-sm">Insert Image Introduction.</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="relative h-[370px] w-[370px] hidden md:block">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image
                fill
                src="/fitness3.jpg"
                alt="fitness3"
                className="object-contain"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80" sideOffset={-110}>
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/favicon-light.ico" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@etu</h4>
                  <p className="text-sm">Insert Image Introduction.</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
