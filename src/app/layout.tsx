import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontSans } from "../styles/fonts";
import "../styles/globals.css";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrcode.sofiane-rahmani.com/"),
  title: "QR Code Generator",
  description:
    "Générez vos QR Codes facilement et rapidement avec ce générateur de QR Code.",
  keywords: [
    "Sofiane Rahmani",
    "QR Code",
    "Générateur",
    "QR Code Generator",
    "applications web",
    "applications web modernes",
    "QR Code couleurs"
  ],

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    type: "website",
    url: "https://qrcode.sofiane-rahmani.com/",
    title: "QR Code Generator",
    siteName: "Sofiane Rahmani - Projet QR Code",
    description:
      "Générez vos QR Codes facilement et rapidement avec ce générateur de QR Code.",
    images: [
      {
        url: "https://qrcode.sofiane-rahmani.com/card.jpg",
        secureUrl: "./card.jpg",
        width: 1200,
        height: 630,
        alt: "Sofiane Rahmani - QR Code Generator's card image",
      },
    ],
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="min-h-screen !scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange={true}
          defaultTheme="light"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
