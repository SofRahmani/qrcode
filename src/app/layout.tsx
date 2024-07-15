import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontSans } from "../styles/fonts";
import "../styles/globals.css";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: "QR Code",
  description: "Generate QR Code"
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
