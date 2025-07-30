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
            Prepping the Talent
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
                <BreadcrumbLink href="#"> Prepping the Talent</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>
      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Seat the Talent</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Ask talent to take their designated positions. </li>
            <li>Ask talent and guests to silence phones.</li>
            <li>
              Encourage them to handle bathroom breaks, water, or calls
              beforehand.
            </li>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Provide Clear Instructions</h2>

        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>
              Explain which camera they should look at when recording starts.
            </li>
            <li>Review the Start Light rules</li>
            <ul>
              <li>Green = Start</li>
              <li>Yellow = Wrap-Up (3 minutes remaining)</li>
              <li>Red = Stop/Reset</li>
            </ul>
          </ol>
        </div>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Addressing the Audience</h2>

        <p className="text-muted-foreground ">
          If they’ll speak directly to the audience, indicate which camera to
          focus on.
        </p>
      </div>

      <hr />

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Posture & Behavior</h2>

        <p className="text-muted-foreground ">Remind them to:</p>
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <ul>
              <li>Avoid leaning back in their chairs.</li>
              <li>Avoid bumping microphones.</li>
              <li>Avoid covering their mouths with their hands. </li>
              <li>
                Ignore the cameras and focus on enjoying the conversation.
              </li>
            </ul>
          </ol>
        </div>
      </div>
      <div className="studio-nav">
        <Link href="/studio-guide/understanding-the-start-light">
          <Button variant="outline">
            <ChevronLeft />
            Understanding the Start Light
          </Button>
        </Link>
        <Link href="/studio-guide/audio-check">
          <Button variant="outline">
            Audio Check <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
