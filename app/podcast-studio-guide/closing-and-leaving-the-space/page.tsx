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
            Closing & Leaving the Space
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
                  Closing & Leaving the Space
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="prose-content">
        <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
          <li>
            Reset Audio Levels
            <ul>
              <li>
                Ensure all audio levels are set back to unity (default level
                around 75%).
              </li>
            </ul>
          </li>
          <br />
          <li>
            Power Down Equipment
            <ul>
              <li>
                After stopping the recording, wait 1 minute before powering down
                the Zoom L-8 mixer.
              </li>
              <li>
                Flip the rack mounted Power Switch labeled Main Power off
                position.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Clean Up
            <ul>
              <li>
                Clean any used mugs and place them in the kitchen drying rack.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Complete the Checklist
            <ul>
              <li>
                Review and fill out the provided checklist to confirm all steps
                are complete.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Clean Up
            <ul>
              <li>
                Clean any used mugs and place them in the kitchen drying rack.
              </li>
            </ul>
          </li>
          <br />

          <li>
            Return Props
            <ul>
              <li>Place all props back in their designated locations.</li>
            </ul>
          </li>
          <br />
          <li>
            Secure the Space
            <ul>
              <li>Ensure the door locks properly before leaving.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="studio-nav">
        <Link href="/podcast-studio-guide/ending-the-podcast">
          <Button variant="outline">
            <ChevronLeft />
            Ending the Podcast
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/faq">
          <Button variant="outline">
            FAQ <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
