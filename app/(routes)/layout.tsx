import { Provider } from "@/components/providers";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { BottomNav } from "./_components/bottom-nav";
import { Sidebar } from "./_components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devopage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          <div className="h-full">
            <div className="fixed inset-y-0 z-50 hidden h-full w-60 flex-col md:flex">
              <Sidebar />
            </div>
            <div className="min-h-screen md:ml-60">{children}</div>
          </div>
          <BottomNav />
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
