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
            Starting the Shoot
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
                <BreadcrumbLink href="#">Starting the Shoot</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Start Backup Recording</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/image/upload/v1757356512/Placeholder-1920x1080-1_bxvtuw.jpg"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <p className="text-muted-foreground ">
          On the HyperDeck, press the red circle to start recording.
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">
          Start Recording on the Switcher
        </h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/image/upload/v1757356512/Placeholder-1920x1080-1_bxvtuw.jpg"
          muted
          className="aspect-video rounded-xl shadow"
        />

        <div className="prose-content">
          <p className="text-muted-foreground ">
            On the touch screen click “Begin recording now” and then “Ok”.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Press the Start Light Button</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/image/upload/v1757356512/Placeholder-1920x1080-1_bxvtuw.jpg"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <p className="text-muted-foreground ">
            Activate the green light to signal the talent to begin.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Important Reminder</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>To stop recording, press the same button</li>
            <li>DO NOT remove the SD card before stopping the recording.</li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/final-pre-shoot-checklist">
          <Button variant="outline">
            <ChevronLeft />
            Final Pre-Shoot Checklist
          </Button>
        </Link>
        <Link href="/studio-guide/stopping-and-restarting-protocol">
          <Button variant="outline">
            Stopping and Restarting Protocol <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
