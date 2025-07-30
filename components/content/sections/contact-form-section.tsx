"use client";

import React, { useState } from "react"; // Add React import
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters." }),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false); // For success message
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema), // Zod resolver for validation
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Submitted:", data);

    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await res.json();

      if (res.ok) {
        // Reset form fields
        reset();

        // Show success message
        setIsSubmitted(true);

        // Hide the success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Form submission error:", response);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <section className="p-6 !pb-6 border rounded-lg">
      <header className="pb-8 space-y-2">
        <h2 className="text-2xl font-semibold">Your Feedback Matters!</h2>
        <p className="text-lg text-muted-foreground">
          This form is for general feedback about CNJN's services. We value your
          input and appreciate your feedback.
        </p>
      </header>
      <Card className="bg-muted">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          {/* Show confirmation message if form is submitted */}
          {isSubmitted && (
            <div className="mt-4 text-green-500">
              <p>Form Submitted Successfully!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
