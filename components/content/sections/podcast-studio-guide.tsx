import { Review } from "@/type/review";
import GuideListItem from "../guide-list-item";
import { promises as fs } from "fs";
import path from "path";

async function getGuide() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/podcast-studio-guide.json")
  );
  return JSON.parse(data.toString());
}

export default async function GuideSection() {
  const guide = await getGuide();

  return (
    <section>
      <header className="pb-8">
        <h2 className="text-2xl font-semibold">Chapters</h2>
      </header>
      <div className="space-y-6">
        {guide.map((review: Review) => (
          <GuideListItem review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
}
