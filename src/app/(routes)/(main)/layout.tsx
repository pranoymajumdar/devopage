import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sidebar } from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Devopage - Developer Social Platform",
  description: "Connect, share, and grow with the developer community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed width on desktop, hidden on mobile */}
      <div className="hidden md:flex md:w-64 lg:w-72">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
