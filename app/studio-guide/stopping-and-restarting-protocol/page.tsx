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
            Stopping and Restarting Protocol
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
                  Stopping and Restarting Protocol
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Responding to a "Cut" Call</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>If talent Calls "Cut", DO NOT stop recording.</li>
            <li>
              Activate the Red Light to signal the stop to everyone on set.
            </li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Assess the Situation</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            Quickly identify the reason for the cut (e.g., technical issue,
            forgotten line, etc.).
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Log the Restart</h2>

        <div className="prose-content">
          <p className="text-muted-foreground ">
            In the online submission form log the cut: eg: cut time = ”20:30”
            speaker forgot lines.
          </p>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Resume the Shoot</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Confirm with the talent that they’re ready to continue.</li>
            <li>
              Reset any necessary elements (e.g., camera angles, props, etc.).
            </li>
            <li>Select your starting cam and put it in PGM.</li>
            <li>Activate the Green Start Light to indicate the restart.</li>
          </ol>
        </div>
        <br />

        <p className="text-muted-foreground ">
          Tip: Staying calm and maintaining clear communication with the talent
          helps ensure a smooth recovery.
        </p>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/starting-the-shoot">
          <Button variant="outline">
            <ChevronLeft />
            Starting the Shoot
          </Button>
        </Link>
        <Link href="/studio-guide/closing-and-leaving-the-space">
          <Button variant="outline">
            Closing & Leaving the Space <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
