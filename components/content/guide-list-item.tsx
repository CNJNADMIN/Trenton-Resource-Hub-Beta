import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/type/review";
import { ArrowRightIcon } from "lucide-react";

export default function GuideListItem({ review }: { review: Review }) {
  return (
    <>
    <Link href={review.link} rel="noopener noreferrer" className="block"> 
      <Card className="bg-muted card-hover">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{review.name}</span>
            </div>
            {/* Arrow positioned directly next to the review.name */}
            <ArrowRightIcon className= "size-3 ml-2 hidden sm:block"/>
          </div>
        
        </CardContent>
      </Card>
      </Link>
    </>
  );
}



