import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import SmoothScroll from "@/app/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakash Sports Academy | Haridwar's Premier Cricket Training Center",
  description: "Prakash Sports Academy in Haridwar provides professional cricket coaching, modern practice nets, fitness conditioning, and tournament prep for ages 5 to 30.",
  keywords: "crawford academy, cricket academy haridwar, cricket training, prakash sports academy, cricket coach, sports academy, cricket nets haridwar, best cricket academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
