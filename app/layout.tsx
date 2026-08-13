import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honeycomb | Your Experience. Our Collective History.",
  description:
    "An organic, living archive of personal accounts of UAP, UFO, and unexplained experiences.",
  icons: {
    icon: "/hc-connected-field-watermark.svg",
    shortcut: "/hc-connected-field-watermark.svg",
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
