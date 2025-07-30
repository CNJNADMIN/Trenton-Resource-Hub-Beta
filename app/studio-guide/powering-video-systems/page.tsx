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
            Powering Video Systems
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
                <BreadcrumbLink href="#">Powering Video Systems</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Power On the Rack System</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842512/powerrack_sdkjpq.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Find the equipment rack in the control room.</li>
            <li>
              Flip the switches labeled Main Power 1 and Main Power 2 to ON.
            </li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Turn On the TVs</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841230/turnontv_cbc3eo.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Wait for the Roland switcher to finish booting and stop flashing.
            </li>
            <li>
              Use the remotes on the desk to turn on the Control Room TV and Set
              TV.
            </li>
          </ol>
        </div>
      </div>

      <hr className="my-6" />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Visual Checks</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841182/visualchecks_zctpiu.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Make sure all 4 main set lights are on.</li>
            <li>Make sure the decorative lamp on the set is on. </li>
            <li>
              Look to confirm both floor outlets are on. The lights should be
              green.
            </li>
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
              Remotes Not Working
              <ul>
                <li>Check if the remotes have fresh batteries.</li>
                <li>
                  Replacement batteries are in the utility drawer labeled in the
                  control room.
                </li>
              </ul>
            </li>
            <li>
              Lights Not Powering On
              <ul>
                <li>Make sure both floor outlets are on.</li>
              </ul>
            </li>
            <li>
              TVs on Wrong Input
              <ul>
                <li>
                  Use the remotes to switch each TV to HDMI 3 for proper
                  display.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/arriving-at-the-studio">
          <Button variant="outline">
            <ChevronLeft />
            Arriving at the Studio
          </Button>
        </Link>
        <Link href="/studio-guide/priming-the-hyperdeck">
          <Button variant="outline">
            Priming the Hyperdeck <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
