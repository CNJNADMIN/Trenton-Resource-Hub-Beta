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
            Preparing the Mixer
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
                <BreadcrumbLink href="#">Preparing the Mixer</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Channel Components & Priming</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767042228/priming-the-l-8-mixer-for-recording_xvjsdk.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <p className="text-muted-foreground ">
            Each mixer channel has several controls. For normal podcasting,
            these are the ones you need to use:
          </p>
          <br />
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Make sure Channels 1, 2, 3, 4, and the Master have their REC/PLAY
              buttons selected and are not muted or soloed.
            </li>
            <li>
              Make sure Channels 1, 2, 3, 4 have their Gain knobs set to about
              75%.
            </li>
            <li>
              Make sure Channels 1, 2, 3, 4, and the Master have their faders
              set to about 75% or to a custom level you have set.
            </li>
            <li>
              Press the Record button on the bottom-right of the mixer (it has
              "Record" written above it).
            </li>
            <li>Make sure the Master Headphone knob is set to about 75%.</li>
            <li>
              Make sure the Mix A switch is up and the Mix A knob is set to 75%.
            </li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Priming the L-8 Mixer for Recording
        </h2>

        <div className="prose-content">
          <p className="text-muted-foreground">
            Follow the channel checklist above to prime the mixer before
            recording.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Checking Headphone Controls</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767041493/checking-headphone-controls_rip9ea.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <p className="text-muted-foreground">
            Confirm headphone levels and Mix A settings as listed above.
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
        <Link href="/podcast-studio-guide/prepping-podcasters">
          <Button variant="outline">
            Preparing Podcasters
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
