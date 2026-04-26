import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

const geist = localFont({
  src: "../fonts/Geist-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Endiama_Mining",
  description: "Site corporativo da empresa Endiama ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white overflow-x-hidden">
        <Navbar />
          <main className="flex-1 pt-16">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}
