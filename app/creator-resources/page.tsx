import BlogListItem from "@/components/content/blog-list-item";
import ContactSection from "@/components/content/sections/contact-section";
import { Blog } from "@/type/blog";
import { promises as fs } from "fs";
import { Metadata } from "next";
import path from "path";
import { Separator } from "@/components/ui/separator";

async function getBlogs() {
  const data = await fs.readFile(path.join(process.cwd(), "data/blogs.json"));
  return JSON.parse(data.toString());
}

export const metadata: Metadata = {
  title: "Creator Resources",  
};


export default async function Page() {
  const blogs = await getBlogs();

  return (
    <>
      <section>
        <header className="lg:pb-8 space-y-4 mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">Creator Resources</h1>
          <p className="text-lg text-muted-foreground">
           This page is dedicated to helping you bring your vision to life. Each subject below is presented sequentially, allowing you to explore one topic before progressing to the next as you see fit.
          </p>
          <Separator className="my-4" />
        </header>
        <div className="space-y-10">
          {blogs.map((blog: Blog) => (
            <BlogListItem blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
