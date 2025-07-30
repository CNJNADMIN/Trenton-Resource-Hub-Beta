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
                <BreadcrumbLink href="/studio-guide">
                  Studio Guide
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
        <h2 className="text-2xl font-semibold">Audio Check</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Confirm audio is clear in the headphones.</li>
            <li>Ensure audio levels are visible on the backup monitor.</li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Switching Check</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Verify the starting camera is set in PGM.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Camera Shot Finalization</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Confirm all camera angles are properly framed.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Final Set Check</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Ensure the set is tidy, well-lit, and visually prepared.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">SD Card Check</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Confirm the SD card is securely inserted in the Roland Switcher.
            </li>
            <li>Confirm the SSD card is securely inserted in the HyperDeck.</li>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/audio-check">
          <Button variant="outline">
            <ChevronLeft />
            Audio Check
          </Button>
        </Link>
        <Link href="/studio-guide/starting-the-shoot">
          <Button variant="outline">
            Starting the Shoot
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
