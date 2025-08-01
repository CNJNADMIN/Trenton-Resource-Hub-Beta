import { Review } from "@/type/review";
import ReviewListItem from "../review-list-item";
import { promises as fs } from "fs";
import path from "path";

async function getReviews() {
  const data = await fs.readFile(path.join(process.cwd(), "data/reviews.json"));
  return JSON.parse(data.toString());
}

export default async function GuideSection() {
  const reviews = await getReviews();

  return (
    <section>
      <header className="pb-8">
        <h2 className="text-2xl font-semibold">Explore Our Resources</h2>
      </header>
      <div className="space-y-6">
        {reviews.map((review: Review) => (
          <ReviewListItem review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
}
