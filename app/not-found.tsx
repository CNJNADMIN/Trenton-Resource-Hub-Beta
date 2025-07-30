"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
