import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Playball } from "next/font/google";
import { Floaters } from "@/components/Floaters";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Catering in DHA Karachi`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Chiniot Fresh Food Catering — wedding, mehendi, hi-tea, breakfast and corporate menus from DHA Phase 2 Ext., Karachi. Haji Fayyaz Ahmed (Chiniot 7 Star).",
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${playball.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Floaters />
      </body>
    </html>
  );
}
