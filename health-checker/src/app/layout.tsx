import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./layoutProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNS Health Checker",
  description: "A website that provides an integrity check for a domain you want to verify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
