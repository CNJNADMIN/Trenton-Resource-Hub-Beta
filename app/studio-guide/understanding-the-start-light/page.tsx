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
            Understanding the Start Light
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
                  Understanding the Start Light
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Light Purpose</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842632/light_gbf5qy.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <p className="text-muted-foreground ">
          The Start Light is used to communicate timing cues to on-screen
          talent. It features three colored buttons that signal different
          instructions.
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Light Meanings</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Green = Action — Signals talent to begin.</li>
            <li>Yellow = Wrap-Up — Signals talent they have 3 minutes left.</li>
            <li>Red = Stop — Signals an immediate stop and reset.</li>
          </ol>
        </div>
        <p className="text-muted-foreground ">
          Important Reminder: Always press the on/off button after each cue to
          ensure only one light is active at a time.
        </p>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/prepping-the-set">
          <Button variant="outline">
            <ChevronLeft />
            Prepping the Set
          </Button>
        </Link>
        <Link href="/studio-guide/prepping-the-talent">
          <Button variant="outline">
            Prepping the Talent
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
