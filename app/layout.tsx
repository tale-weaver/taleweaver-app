import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import TanProvider from "@/components/providers/TanProvider";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/context/AppContext";

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
            <AppProvider>
              <main className="relative flex min-h-screen flex-col">
                <Header />
                <div className="flex-1">
                  <div className="container relative">
                    <section className="hidden md:block">
                      <div className="overflow-hidden">{children}</div>
                    </section>
                  </div>
                </div>
                <Footer />
              </main>
              <Toaster />
            </AppProvider>
          </TanProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
