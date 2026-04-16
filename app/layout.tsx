import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OYAK Anker Bank - Redirect Service",
  description: "Secure redirect service for OYAK Anker Bank transactions and authentication flows",
  keywords: ["OYAK", "Anker Bank", "redirect", "secure", "authentication"],
  authors: [{ name: "OYAK Anker Bank" }],
  openGraph: {
    title: "OYAK Anker Bank - Redirect Service",
    description: "Secure redirect service for OYAK Anker Bank",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
