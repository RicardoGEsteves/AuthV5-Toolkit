import type { Metadata } from "next";
import { Roboto_Mono as Mono } from "next/font/google";
import "./globals.css";

const mono = Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth V5 Toolkit",
  description:
    "A toolkit for building advanced custom authentication into your next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
