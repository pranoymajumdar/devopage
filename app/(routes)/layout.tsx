import { Provider } from "@/components/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomNav } from "./_components/bottom-nav";
import { Sidebar } from "./_components/sidebar";
import { TopNav } from "./_components/top-nav";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <TopNav />
          <div className="h-full">
            <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
              <Sidebar />
            </div>
            <div className="md:ml-64">{children}</div>
          </div>
          <BottomNav />
        </Provider>
      </body>
    </html>
  );
}
