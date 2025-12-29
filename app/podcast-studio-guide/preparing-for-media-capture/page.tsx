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
            Preparing for Media Capture
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
                <BreadcrumbLink href="#">
                  Preparing for Media Capture
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Inserting the SD Card (Main Capture)
        </h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767042143/inserting-sd-card_d8kqoq.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>When you arrive, the SD card will be in the SD card reader.</li>
            <li>
              Take the card and insert it into the back of the Zoom L-8 until
              you hear a click. Ensure the card is fully inserted into the
              mixer.
            </li>
            <li>Use the knob located by the display to select SAVE TO SD.</li>
          </ol>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/powering-podcast-systems">
          <Button variant="outline">
            <ChevronLeft />
            Powering Podcast Systems
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/preparing-the-mixer">
          <Button variant="outline">
            Preparing the Mixer <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
