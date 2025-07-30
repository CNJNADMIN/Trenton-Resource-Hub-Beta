import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/type/review";

export default function ReviewListItem({ review }: { review: Review }) {
  return (
    <>
    <Link href={review.link} rel="noopener noreferrer" className="block"> 
      <Card
        className="bg-muted card-hover"
      >
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="size-12">
              <AvatarImage src={review.avatar} />
              <AvatarFallback>CNJN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{review.name}</span>
              <span className="text-sm text-muted-foreground">
                {review.company}
              </span>
            </div>
          </div>
          <p>{review.body}</p>
        </CardContent>
      </Card>
      </Link>
    </>
  );
}



