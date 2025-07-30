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
            Operating Camera Controller
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
                  Operating the Camera Controller
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Camera Presets</h2>

        <p className="text-muted-foreground">
          When the system boots, all cameras load with the correct presets — no
          adjustments needed.
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Selecting a Camera</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842437/selcamera_krteem.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />

        <p className="text-muted-foreground">
          Use the designated button on the touch screen to switch camera
          control:{" "}
        </p>
        <div className="prose-content">
          <ul className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Press once = Camera 1</li>
            <li>Press twice = Camera 2</li>
            <li>And so on…</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Controlling the Camera</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841080/contcamera_hw6s2c.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Use the joystick to adjust the camera's angle.</li>
            <li>Use the zoom rocker to zoom in and out. </li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <span className="text-2xl font-semibold text-tertiary">
          Trouble Shooting
        </span>
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Accidental Settings Change
              <ul>
                <li>
                  If you accidentally enter the settings menu by touching the
                  screen, ignore it and continue as normal.
                </li>
              </ul>
            </li>
            <li>
              General Issues
              <ul>
                <li>
                  Turn off the main power, wait a few seconds, then turn it back
                  on.
                </li>
              </ul>
            </li>
            <li>
              Important Reminder
              <ul>
                <li>
                  Do not touch any extra buttons or screen functions — they are
                  not needed for standard operation.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/preparing-for-media-capture">
          <Button variant="outline">
            <ChevronLeft />
            Preparing for Media Capture
          </Button>
        </Link>
        <Link href="/studio-guide/determining-the-starting-shot">
          <Button variant="outline">
            Determining the Starting Shot <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
