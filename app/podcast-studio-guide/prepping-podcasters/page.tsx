import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/videos"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <section>
        <header className="space-y-4 mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Prepping Podcasters
          </h1>
          <Separator className="my-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/podcast-studio-guide">
                  Podcast Studio Guide
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Prepping Podcasters</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Microphone Tips</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Position microphones about 5 inches from each speaker’s mouth.
            </li>
            <li>Remind podcasters:</li>
            <ul className="list-disc pl-6 space-y-1">
              <li>No shouting</li>
              <li>No whispering</li>
              <li>Speak at room level</li>
              <li>Don't tap or hit the table</li>
              <li>Keep the mic close at all times</li>
              <li>Don't turn your head away from the mic</li>
              <li>Phones should be off or silent</li>
            </ul>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Headphone Check</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              All podcasters should wear headphones so they can hear themselves
              and each other.
            </li>
            <li>
              Confirm that each podcaster can hear everyone clearly in their
              headphones.
            </li>
            <li>
              Confirm you can hear all podcasters through the headphones located
              at the board.
            </li>
          </ol>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/preparing-the-mixer">
          <Button variant="outline">
            <ChevronLeft />
            Preparing the Mixer
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/fader-adjustments">
          <Button variant="outline">
            Fader Adjustments
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
