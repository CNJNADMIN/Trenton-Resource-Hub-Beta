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
            Determining the Starting Shot
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
                  Determining the Starting Shot
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Set the Starting Shot in PGM</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842408/selectstart_egkv56.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />

        <p className="text-muted-foreground ">
          Once you’ve chosen the starting camera, place it in the PGM window to
          ensure it’s ready for recording.
        </p>
      </div>

      <div className="studio-nav">
        <Link href="/studio-guide/operating-the-camera-controller">
          <Button variant="outline">
            <ChevronLeft />
            Operating the Camera Controller
          </Button>
        </Link>
        <Link href="/studio-guide/prepping-the-set">
          <Button variant="outline">
            Prepping the Set <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
