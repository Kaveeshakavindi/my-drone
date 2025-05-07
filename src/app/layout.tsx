import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MINI DRONE",
  description: "Open to the sky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${russoOne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
