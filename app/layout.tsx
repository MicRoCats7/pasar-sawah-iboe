import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinggir Sawah Iboe",
  description: "Website coffee shop Pinggir Sawah Iboe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
