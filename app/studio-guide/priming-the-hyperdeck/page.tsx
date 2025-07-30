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
            Priming Hyperdeck
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
                <BreadcrumbLink href="#">Priming the Hyperdeck</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Locate the Hyperdeck</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841072/locatehyperdeck_x5azhj.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <p className="text-muted-foreground">
          It's in the rack below the monitor.
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Prime the Hyperdeck</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842455/primehyperdeck_ysazcf.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Press the Input button once.</li>
            <li>Wait a moment — this should turn on the Control TV.</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <span className="text-2xl font-semibold text-tertiary">
          Trouble Shooting
        </span>
        <p className="text-muted-foreground">
          If you pressed the Input button more than once, the screen may go
          black. Continue pressing the Input button until the screen displays
          HDMI + HDMI and a visual appears.
        </p>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/powering-video-systems">
          <Button variant="outline">
            <ChevronLeft />
            Powering Video Systems
          </Button>
        </Link>
        <Link href="/studio-guide/audio-board">
          <Button variant="outline">
            Audio Board <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
