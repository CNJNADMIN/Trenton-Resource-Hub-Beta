import { Metadata } from "next";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import BackButton from "@/components/back-button";
import ContactSection from "@/components/content/sections/contact-section";
import { Blog } from "@/type/blog";

async function getBlogs() {
  const data = await fs.readFile(path.join(process.cwd(), "data/blogs.json"));
  return JSON.parse(data.toString());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const blogs = await getBlogs();
  const blog = blogs.find((b: Blog) => b.slug === slug);

  return {
    title: blog.title,
  };
}

const wrapVideoWithResponsiveClass = (content: string) => {
  return content.replace(
    /<iframe(.*?)<\/iframe>/g, // Regex to find all iframe tags
    (match) => {
      return `<div class="video-responsive">${match}</div>`; // Wrap the iframe in a responsive div
    }
  );
};

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const blog = blogs.find((b: Blog) => b.slug === params.slug);

  // Call wrapVideoWithResponsiveClass to preprocess the content before rendering
  const content = wrapVideoWithResponsiveClass(blog.content);

  return (
    <>
      <BackButton url="creator-resources" />
      <section className="space-y-6">
        <header className="lg:pb-8 space-y-6 lg:space-y-8">
          <h1 className="text-3xl lg:text-4xl font-semibold">{blog.title}</h1>
          <div className="grid grid-cols-2 text-sm">
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Date</span>
              <span>{blog.date}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Author</span>
              <span>{blog.author}</span>
            </div>
          </div>
        </header>
        <figure>
          <Image
            width={960}
            height={540}
            src={blog.image}
            className="w-full"
            alt="..."
          />
        </figure>
        {/* Render the processed content with wrapped video iframes */}
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <ContactSection />
    </>
  );
}
