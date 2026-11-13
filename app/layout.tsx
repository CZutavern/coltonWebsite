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

const description =
  "Electrical engineering student at Texas A&M building real-world systems: embedded computing, automotive electronics, audio DSP, ferrite core memory, and a self-hosted home server.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coltonzutavern.com"),
  title: {
    default: "Colton Zutavern | Electrical Engineering Portfolio",
    template: "%s | Colton Zutavern",
  },
  description,
  authors: [{ name: "Colton Zutavern" }],
  openGraph: {
    type: "website",
    siteName: "Colton Zutavern",
    title: "Colton Zutavern | Electrical Engineering Portfolio",
    description,
    url: "/",
    images: [{ url: "/headshot.jpg", alt: "Colton Zutavern" }],
  },
  twitter: {
    card: "summary",
    title: "Colton Zutavern | Electrical Engineering Portfolio",
    description,
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
