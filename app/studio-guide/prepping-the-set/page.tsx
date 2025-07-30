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
            Prepping the Set
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
                <BreadcrumbLink href="#">Prepping the Set</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Check the Lights</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753841071/checklight_yd7w8m.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Make sure all studio lights are on. </li>
            <li>Turn off the house lights.</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Check the Cameras</h2>

        <p className="text-muted-foreground ">
          Confirm all cameras are framed, focused, and that the set looks good.
        </p>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/determining-the-starting-shot">
          <Button variant="outline">
            <ChevronLeft />
            Determining the Starting Shot
          </Button>
        </Link>
        <Link href="/studio-guide/understanding-the-start-light">
          <Button variant="outline">
            Understanding the Start Light <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
