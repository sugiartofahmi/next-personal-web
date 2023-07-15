"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat.className}`}>
      <head>
        <title>Its Me</title>
        <link rel="icon" href="/nexts.svg >" />
      </head>
      <body>
        <main className="w-full min-h-screen bg-[#232223] text-white md:px-[20vh] px-[4vh] relative">
          {children}
        </main>
      </body>
    </html>
  );
}
