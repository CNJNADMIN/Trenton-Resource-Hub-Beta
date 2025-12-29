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
            Ending the Podcast
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
                <BreadcrumbLink href="#"> Ending the Podcast</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767042005/ending_c8vbpl.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <p className="text-muted-foreground ">
            Once your shoot has concluded, you’ll need to do the following:
          </p>
          <br />
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>Press the Stop button to finish and save your recording.</li>
              <li>Wait one minute, then power off the Zoom L-8 mixer.</li>
              <li>
                Remove the SD card from the back of the mixer and insert it into
                the SD recording deck.
              </li>
            </ol>
          </ol>

          <br />

          <p className="text-muted-foreground ">
            WARNING: Do not power off the device until you have stopped the
            recording. Failure to do so may corrupt your media files.
          </p>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/starting-the-recording">
          <Button variant="outline">
            <ChevronLeft />
            Starting the Recording
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/closing-and-leaving-the-space">
          <Button variant="outline">
            Closing and Leaving the Space
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
