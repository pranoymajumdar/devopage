import { Provider } from "@/components/providers";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { auth } from "@/server/auth";
import { prisma } from "@/server/prisma";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user || null;
  const profile = await prisma.profile.findFirst({
    where: {
      userId: user?.id,
    },
  });
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
          <BottomNav profile={profile} />
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
