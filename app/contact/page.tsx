import { Metadata } from "next";
import ContactFormSection from "@/components/content/sections/contact-form-section";
import ContactSection from "@/components/content/sections/contact-section";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact",
};


export default function Page() {
  return (
    <>
      <section>
        <header className="pb-8 space-y-4 mb-10">
          <h1 className="text-4xl font-semibold">Contact</h1>     
          <Separator className="my-4" />
        </header>
        <ContactSection />
      </section>
      <ContactFormSection />
    </>
  );
}
