import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenav from "./ui/sidenav";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s | Finance dashboard",
    default: "Finance dashboard",
  },
  description: "Practice Invoices app project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidenav />
          <div className="flex-grow">
            <SessionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </SessionProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
