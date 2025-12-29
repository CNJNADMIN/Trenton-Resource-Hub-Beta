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
            Final Pre-Shoot Checklist
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
                  Final Pre-Shoot Checklist
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <div className="prose-content">
          <p className="text-muted-foreground ">
            Ensure the SD card is fully inserted into the switcher and Save is
            selected.
          </p>
          <br />

          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>
                Ensure Channels 1–4 and the Master have REC/PLAY enabled and are
                not muted or soloed
              </li>
              <li>Set Gain on Channels 1–4 to ~75%</li>
              <li>
                Set faders on Channels 1–4 and the Master to ~75% (or your
                preset level)
              </li>
              <li>Press the Record button (bottom-right of the mixer)</li>
              <li>Set the Master Headphone knob to ~75%</li>
              <li>
                Ensure Mix A is switched up and the Mix A knob is set to ~75%
              </li>
            </ol>
          </ol>

          <br />
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide/fader-adjustments">
          <Button variant="outline">
            <ChevronLeft />
            Fader Adjustments
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/starting-the-recording">
          <Button variant="outline">
            Starting the Recording <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
