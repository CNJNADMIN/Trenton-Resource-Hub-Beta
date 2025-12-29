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
            Starting the Recording
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
                <BreadcrumbLink href="#">Starting the Recording</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Recording Procedures</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767041674/fader-adjustments_spanl0.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>
                Press the Record button on the bottom-right of the mixer (it has
                “Record” written above it)
              </li>
              <li>Press the red circle to enter recording mode</li>
              <li>Press the green triangle to start recording</li>
              <li>
                Ensure the timer is moving in the L-8’s display window; if the
                timer is not moving, you are not recording
              </li>
              <li>
                Once recording has started, cue the podcasters to begin their
                podcast
              </li>
              <li>
                Once the podcast is over press the Stop button (the square icon
                to the left of the triangle). WARNING: stopping the recording
                will exit recording mode. To start recording again you must redo
                the Recording Procedures
              </li>
            </ol>
          </ol>

          <br />
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Stopping and Restarting Protocol
        </h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Normally, you should not stop the recording untill the podcast
            concludes; but if you need to, press the Stop button (the square
            icon to the left of the triangle). WARNING: stopping the recording
            will exit recording mode. To start recording again you must redo the
            Recording Procedures.
          </p>
          <br />
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>
                Press the Record button on the bottom-right of the mixer (it has
                “Record” written above it).
              </li>
              <li>Press the red circle to enter recording mode.</li>
              <li>Press the green triangle to start recording.</li>
              <li>
                Ensure the timer is moving in the L-8’s display window. If the
                timer is not moving, you are not recording.
              </li>
            </ol>
          </ol>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/final-pre-shoot-checklist">
          <Button variant="outline">
            <ChevronLeft />
            Final Pre-Shoot Checklist
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/ending-the-podcast">
          <Button variant="outline">
            Ending the Podcast
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
