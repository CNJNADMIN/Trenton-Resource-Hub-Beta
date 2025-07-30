"use client";

import { CheckIcon, CopyIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section className="space-y-4">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        Welcome!
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <span className="text-primary">Guides, Tools, & Support</span>
          <div className="rounded-lg border px-3 py-2 inline-flex items-center gap-2 text-base lg:text-xl sm:ms-4 mt-3 lg:mt-0">
            <MapPinIcon className="size-4 lg:size-6" /> Trenton, NJ
          </div>
        </div>
      </h1>
      <p className="text-muted-foreground text-lg ">
        This site is dedicated to providing comprehensive resources and expert guidance to
        streamline your studio operations and enhance creative outcomes. Here you'll find key pages and forms detailing studio use, content creation, and more.
      </p>
      <Separator className="my-4" />
    </section>
  );
}
