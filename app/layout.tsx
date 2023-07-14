import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
export const metadata: Metadata = {
  title: "Its Me",
  description:
    "Hello world, this is a website to show the projects that I have made",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat.className}`}>
      <body>
        <main className="w-full min-h-screen bg-[#232223] text-white md:px-[20vh] px-[4vh] relative">
          {children}
        </main>
      </body>
    </html>
  );
}
