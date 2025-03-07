import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const monaco = localFont({
  src: [
    {
      path: "./../../public/fonts/monaco.woff",
      weight: "normal",
      style: "normal",
    },
  ],
});
const camphor = localFont({
  src: [
    {
      path: "./../../public/fonts/campohr.woff",
      weight: "normal",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Yaswanth",
  description: "Portfolio of Yaswanth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn(camphor.className, "lg:px-60 px-6")}>{children}</body>
    </html>
  );
}
