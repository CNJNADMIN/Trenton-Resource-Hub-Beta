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
            Powering Podcast Systems
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
                  Powering Podcast Systems
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Power On the Rack System</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767041396/powering-on-rack-system_jbvgqm.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Locate the equipment rack which can be found on the far left of
              the control desk.
            </li>
            <li>Flip the switch labeled Main Power 1 ON.</li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Power on Zoom L-8 Mixer</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767042193/power-on-zoom-l-8-mixer_lcdwkw.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Find the back of the Zoom L-8 mixer.</li>
            <li>Locate the on switch which can be found behind the mixer.</li>
            <li>Flip the switch to the "On" position.</li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Turn on Tvs</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1767042284/turn-on-tvs_zl5tch.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Turn on the control TV (the one facing the operator) by pressing
              the small black button on the back of the unit.
            </li>
            <li>
              Turn on the set TV (the TV facing the podcasters) via the Set TV
              Remote.
            </li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Checking Computer Power</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Tap the spacebar to wake the computer from sleep mode.</li>
            <li>The passcode is written on the computer</li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <span className="text-2xl font-semibold text-tertiary">
          Trouble Shooting
        </span>
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Zoom L-8 not powering on
              <ul>
                <li>
                  Ensure the Zoom L-8 is securely connected to the computer.
                </li>
                <li>Make sure the computer is powered on.</li>
                <li>If needed, restart the computer.</li>
              </ul>
            </li>
            <li>
              TVs Not Working
              <ul>
                <li>Check if the remotes have fresh batteries.</li>
                <li>
                  Replacement batteries are in the utility drawer found within
                  the rack.
                </li>
              </ul>
            </li>
            <li>
              Set TV on Wrong Input
              <ul>
                <li>
                  Use the remotes to switch the set TV to HDMI 3 for proper
                  display.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/podcast-studio-guide/arriving">
          <Button variant="outline">
            <ChevronLeft />
            Arriving at the Studio
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/preparing-for-media-capture">
          <Button variant="outline">
            Preparing for Media Capture <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
