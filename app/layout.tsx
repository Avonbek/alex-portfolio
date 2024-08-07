import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// possible additions:
// react-hot-toast

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Threet",
  description: "Portfolio of Alex Threet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">{children}</body>
    </html>
  );
}
