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
          <h1 className="text-3xl lg:text-4xl font-semibold">Audio Check</h1>
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
                <BreadcrumbLink href="#">Audio Check</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Instruct the Talent</h2>
        <p className="text-muted-foreground ">
          Announce: "We're going to do an audio check now. Let's have each of
          you take turns counting backwards from 20. We'll start with (Guest 1),
          followed by (Guest 2), and then (Guest 3)."
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Monitor the Audio</h2>{" "}
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Return to the control room and put on the headphones. </li>
            <li>Confirm that:</li>
            <ul>
              <li>You can hear clear audio in the headphones. </li>
              <li>
                You can see audio levels moving on the main audio monitor.
              </li>
              <li>Ensure the Set TV is muted.</li>
            </ul>
          </ol>
          <br />
          <p className="text-muted-foreground ">
            Key Tip: Confirm all cameras are framed, focused, and that the set
            looks good.
          </p>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/prepping-the-talent">
          <Button variant="outline">
            <ChevronLeft />
            Prepping the Talent
          </Button>
        </Link>
        <Link href="/studio-guide/final-pre-shoot-checklist">
          <Button variant="outline">
            Final Pre-Shoot Checklist <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
