import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import MainContent from "@/components/layout/main";

const inter = Nunito({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CNJN Trenton Resource Hub",
  description:
    "Discover the CNJN Trenton Resource Hub – your go-to platform for community resources, local news, and vital information in Trenton, NJ. Empowering residents with valuable insights and support.",
  openGraph: {
    images: ["/images/cnjn-card.png"],  
  },
  icons: {
    icon: "/images/fava.png",        // Modern browsers
    shortcut: "/images/fava.png", // Chrome
    apple: "/images/fava.png", // Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
