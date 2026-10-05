import type { Metadata } from "next";
import { BaseOhFooter } from "@/components/interaction/footer/BaseOhFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenHack",
  description: "Coding made fun again",
  metadataBase: "https://openhack.dev",
  openGraph: {
    images: [
      {
        url: "https://openhack.dev/og-image.jpg",
        width: 1200,
        height: 630
      }
    ]
  },
  icons: {
    icon: [
      {
        url: "/icon-light.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-dark.ico",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <body className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
        <BaseOhFooter />
      </body>
    </html>
  );
}
