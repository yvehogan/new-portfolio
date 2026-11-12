import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const description =
  "Evelyn Ita Hogan is a Frontend Engineer with 4+ years building production web applications in React, Next.js and TypeScript for banking, government and EdTech.";

export const metadata: Metadata = {
  title: `${profile.fullName} · ${profile.title}`,
  description,
  openGraph: { title: `${profile.fullName} · ${profile.title}`, description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0b0a14" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}>
      <body>
        {children}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
      </body>
    </html>
  );
}
