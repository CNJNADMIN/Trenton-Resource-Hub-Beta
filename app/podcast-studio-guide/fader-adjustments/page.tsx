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
            Fader Adjustments
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
                <BreadcrumbLink href="#">Fader Adjustments</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767041674/fader-adjustments_spanl0.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <p className="text-muted-foreground ">
            The fader is the sliding lever on your audio mixer that controls the
            volume of a specific microphone or sound source. To adjust a
            speaker's loudness:
          </p>
          <br />

          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>Find the fader for their microphone channel.</li>
              <li>Slide it up to make them louder.</li>
              <li>Slide it down to make them quieter.</li>
            </ol>
          </ol>

          <br />
          <p className="text-muted-foreground ">
            Keep an eye on the volume meters to ensure the sound isn't too low
            or peaking into the red.
          </p>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/preparing-for-media-capture">
          <Button variant="outline">
            <ChevronLeft />
            Preparing for Media Capture
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/final-pre-shoot-checklist">
          <Button variant="outline">
            Final Pre-Shoot Checklist
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
