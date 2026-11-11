import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Manjiri Gawali | Software Developer",
  description:
    "Portfolio of Manjiri Gawali - Software Developer & Health Informatics Student at VIT Bhopal University",
  metadataBase: new URL("https://my-portfolio-lovat-rho-11.vercel.app"),
  openGraph: {
    title: "Manjiri Gawali | Software Developer",
    description:
      "Portfolio of Manjiri Gawali - Software Developer & Health Informatics Student at VIT Bhopal University",
    type: "website",
    images: [{ url: "/images/manjiriphoto.jpg", alt: "Manjiri Gawali" }],
  },
  twitter: {
    card: "summary",
    title: "Manjiri Gawali | Software Developer",
    images: ["/images/manjiriphoto.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">{children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
