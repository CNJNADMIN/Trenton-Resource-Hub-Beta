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
            Arriving at the Studio
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
                <BreadcrumbLink href="#">Arriving at the Studio</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      </section>

      <div className="studio-div">
        <h2 className="text-2xl font-semibold">Door Lock</h2>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvjcjbbp7/video/upload/v1753842724/doorlock_cm9i0c.mp4"
          muted
          className="aspect-video rounded-xl shadow"
        />
        <div className="prose-content">
          <ol className="text-muted-foreground list-decimal pl-4 space-y-2">
            <li>Approach the door lock and tap the circular button.</li>
            <li>The keys should light up. Enter your assigned keycode.</li>
            <li>Press the "OK" button after entering your code.</li>
          </ol>
        </div>
      </div>

      <div className="studio-nav">
        <Link href="/podcast-studio-guide">
          <Button variant="outline">
            <ChevronLeft />
            Podcast Studio Guide
          </Button>
        </Link>
        <Link href="/podcast-studio-guide/powering-podcast-systems">
          <Button variant="outline">
            Powering Podcast Systems <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
