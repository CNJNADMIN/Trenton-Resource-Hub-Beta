import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-6 text-sm text-muted-foreground">
        <div className="container mx-auto max-w-screen-md flex justify-between items-center">
          <div>© {new Date().getFullYear()} Central New Jersey Network</div>
          <div>
            Main Site: {" "} 
            <Link href="https://cnjn.org/" target="_blank">
             cnjn.org
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
