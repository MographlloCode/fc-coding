import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding Football",
  description: "Created by Gus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased w-screen h-screen text-zinc-100 bg-zinc-950`}
      >
        <div className="flex size-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
