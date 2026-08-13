import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honeycomb | Your Experience. Our Collective History.",
  description:
    "An organic, living archive of personal accounts of UAP, UFO, and unexplained experiences.",
  icons: {
    icon: "/hc-living-path-organic.svg",
    shortcut: "/hc-living-path-organic.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
