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
                <BreadcrumbLink href="/studio-guide">
                  Studio Guide
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
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842680/insertsd_zvfzij.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>When you arrive, the SD card will be in the SD card reader.</li>
            <li>
              Take the card and insert it into the Roland Switcher until you
              hear a click.
            </li>
            <li>Ensure the card is fully inserted into the switcher.</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Checking the SSD Card (Backup Capture)
        </h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841089/insertssd_ygdmy7.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Confirm the SSD card is inserted in the HyperDeck.</li>
            <li>If needed, insert the SSD card into the HyperDeck.</li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide//switching">
          <Button variant="outline">
            <ChevronLeft />
            Switching
          </Button>
        </Link>
        <Link href="/studio-guide/operating-the-camera-controller">
          <Button variant="outline">
            Operating the Camera Controller <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
