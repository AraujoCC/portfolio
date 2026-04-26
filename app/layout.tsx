import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { LangProvider } from "@/context/LangContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pedro Isaac — Backend Engineer",
  description:
    "Backend engineer focused on Java, Spring Boot, distributed systems and clean architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jetbrainsMono.variable}>
      <body className="bg-black text-white font-mono antialiased">
        <LangProvider>
          <Nav />
          {/* offset for fixed nav */}
          <main className="lg:pl-56 pt-14 lg:pt-0 min-h-screen">
            {children}
          </main>
        </LangProvider>
      </body>
    </html>
  );
}