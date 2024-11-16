import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Historcle - Guess the Year!",
  description: "Guess the Year!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${baskervville.className} ${baskervville.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
