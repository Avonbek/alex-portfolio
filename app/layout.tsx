import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Threet - Full Stack Developer - AI Engineer - Designer",
  description:
    "I'm Alex Threet, a full stack developer, AI engineer and co-founder of Friendly AI.",
  openGraph: {
    title: "Alex Threet - Full Stack Developer - AI Engineer - Designer",
    description:
      "I'm Alex Threet, a full stack developer, AI engineer and co-founder of Friendly AI.",
    url: "https://alexthreet.dev",
    siteName: "Alex Threet Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  },
};

export const viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
      <GoogleTagManager gtmId="GTM-W42WXDT4" />
    </html>
  );
}
