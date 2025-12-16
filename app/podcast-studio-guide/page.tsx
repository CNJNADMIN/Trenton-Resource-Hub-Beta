import { Metadata } from "next";
import ContactSection from "@/components/content/sections/contact-section";
import { Separator } from "@/components/ui/separator";
import GuideSection from "@/components/content/sections/podcast-studio-guide";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Resources",
};

export default function Page() {
  return (
    <>
      <header className="lg:pb-8 space-y-4 mb-10">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          Podcast Studio Usage Guide
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to our podcast studio. This page serves as your comprehensive
          guide to ensure a successful shoot. Please review the guidelines and
          procedures below prior to your session.
        </p>
        <div className="flex gap-4 pt-2">
          <Link href="/podcast-studio-guide/arriving-at-the-studio">
            <Button variant="outline">Start</Button>
          </Link>
        </div>
        <Separator className="my-4" />

        <GuideSection />
      </header>
      <ContactSection />
    </>
  );
}
