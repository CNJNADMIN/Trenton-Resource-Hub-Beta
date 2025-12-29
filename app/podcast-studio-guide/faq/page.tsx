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

export default function Page1() {
  return (
    <>
      <section>
        <header className="space-y-4 mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">FAQ</h1>
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
                <BreadcrumbLink href="#">FAQ</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <ul className="list-disc pl-4 space-y-4 text-muted-foreground">
          <li>
            <p className="font-semibold">Where are the bathrooms?</p>
            <p>Follow the posted signage.</p>
          </li>
          <li>
            <p className="font-semibold">Where are the mugs?</p>
            <p>
              In the kitchen—you’ll see them while following the bathroom signs.
            </p>
          </li>
          <li>
            <p className="font-semibold">When are we starting the shoot?</p>
            <p>Setup takes 15-30 minutes.</p>
          </li>
          <li>
            <p className="font-semibold">
              How do I know when to start talking?
            </p>
            <p>You’ll be cued with the start light or the word "Action."</p>
          </li>
          <li>
            <p className="font-semibold">What if I mess up?</p>
            <p>
              Just pause, take a breath, and indicate that you’re restarting.
              Begin again by restating your last point. The videographer should
              take note of what time in the recording this took place and pass
              on that information to your editor for them to correct in
              post-production.
            </p>
          </li>
          <li>
            <p className="font-semibold">Where can I put my bags?</p>
            <p>In the control room.</p>
          </li>
          <li>
            <p className="font-semibold">Where do I sit?</p>
            <p>
              Seating is available in the control room. You’re also free to wait
              on set, but please refrain from eating or drinking (except water)
              and moving the set furniture.
            </p>
          </li>
          <li>
            <p className="font-semibold">Which camera do I look at?</p>
            <p>
              If you need to look at a camera, refer to the confidence monitor
              (the on-set TV), which will indicate the active camera. Or consult
              your director for which camera they would like you to focus on.
            </p>
          </li>
          <li>
            <p className="font-semibold">How do I know when to stop?</p>
            <p>
              When the start light displays yellow that's your cue to wrap up.
              The Director will signal the program is complete via the red light
              or the word “cut.”
            </p>
          </li>
        </ul>
      </div>
      <div className="studio-nav">
        <Link href="/podcast-studio-guide/closing-and-leaving-the-space">
          <Button variant="outline">
            <ChevronLeft />
            Closing & Leaving the Space
          </Button>
        </Link>
        <Link href="/podcast-studio-guide">
          <Button variant="outline">
            Podcast Studio Guide <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
