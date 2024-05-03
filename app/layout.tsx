import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instdown",
  description: "Instagram video downloader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
