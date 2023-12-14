import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";
import TanProvider from "@/components/providers/TanProvider";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tale Weaver",
  description: "Create and share stories with your friends",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <TanProvider>
            <main className="flex flex-col min-h-screen">
              <Header />
              {children}
            </main>
            <Toaster />
          </TanProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
