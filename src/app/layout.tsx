import type { Metadata } from "next";
import { dmsans } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/global/navbar";

export const metadata: Metadata = {
  title: "Spider.academy | Learning is meant to be fun",
  description: "Learning is meant be exciting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="{dmsans.className} bg-gradient">
        <main className="relative flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
          <Toaster position="top-center" richColors />
        </main>
      </body>
    </html>
  );
}
