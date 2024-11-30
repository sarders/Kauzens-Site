import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Kauzens",
  description: "Drive sales on autopilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className}`}>{children}</body>
    </html>
  );
}
