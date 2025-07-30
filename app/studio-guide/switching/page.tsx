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
          <h1 className="text-3xl lg:text-4xl font-semibold">Switching</h1>
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
                <BreadcrumbLink href="#">Switching</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Switching Multi-View Monitor{" "}
        </h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842381/switchingmultiview_gdd62o.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              On a Multi-View monitor, you'll see two windows: one labeled PVW
              (Preview) and the other labeled PGM (Program).
            </li>
            <li>The PGM (Program) Window shows what is being recorded.</li>
            <li>
              The PVW (Preview) Window lets you see another camera feed before
              it’s shown on the Program window. This helps you get ready for the
              next shot before you actually switch to it.
            </li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Buttons You Will Use</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842861/buttons_g9e0xd.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Switch 1 = Camera 1</li>
            <li>Switch 2 = Camera 2</li>
            <li>Switch 3 = Camera 3</li>
            <li>
              Cut = Switches the PVW (Preview) window with the PGM (Program)
              window
            </li>
            <li>Auto = Same function as cut, but with a fade transition</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Understanding the switcher buttons
        </h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Red Button = Active feed being recorded (PGM window).</li>
            <li>Green Button = Feed ready to switch (PVW window).</li>
            <li>
              Check the Multiview Monitor on your right — if the feed is in PGM,
              it's being recorded.
            </li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Changing Camera Shots</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Select a Camera: Press the button for the desired camera. It will
            turn green, and the feed appears in PVW.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Switch the Feed</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Press CUT for an instant switch.</li>
            <li>Press AUTO for a smooth fade transition.</li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/audio-board">
          <Button variant="outline">
            <ChevronLeft />
            Audio Board
          </Button>
        </Link>
        <Link href="/studio-guide/preparing-for-media-capture">
          <Button variant="outline">
            Preparing for Media Capture
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
