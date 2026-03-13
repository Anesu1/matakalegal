import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mataka Legal Practice | A Heritage of Legal Excellence",
  description: "A dedicated firm providing outstanding, competitive, and timely legal services across a wide range of practice areas in Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
