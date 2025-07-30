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
          <h1 className="text-3xl lg:text-4xl font-semibold">Audio Board</h1>
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
                <BreadcrumbLink href="#">Audio Board</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Monitoring Audio</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842541/monitoringaudio_pxwqwl.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Check the board faders — all should be set to the same level.
            </li>
            <li>Make sure audio is playing through the studio headphones.</li>
            <li>Confirm audio levels are visible on the Hyperdeck.</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Monitoring Audio with the TV</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              If sharing audio with an audience, you can turn up the Control
              Room TV, but:
            </li>
            <ul>
              <li>Keep the volume below 40.</li>
              <li>Ensure the door is closed.</li>
            </ul>
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
              If You Hear Feedback
              <ul>
                <li>Immediately turn the red fader all the way down.</li>
                <li>
                  After lowering the red fader, contact support for further
                  help.
                </li>

                <li> Ensure the set TV is muted.</li>
              </ul>
            </li>
            <li>
              If There’s No Audio
              <ul>
                <li>
                  Check that the headphone knob on the Roland Switcher is turned
                  up.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/priming-the-hyperdeck">
          <Button variant="outline">
            <ChevronLeft />
            Priming the Hyperdeck
          </Button>
        </Link>
        <Link href="/studio-guide/switching">
          <Button variant="outline">
            Switching <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
