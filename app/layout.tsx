import type { Metadata, Viewport } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "בניית אתרים לעסקים קטנים | SameerDev",
  description:
    "אתר מקצועי לעסק שלך תוך 3-5 ימים עם חיבור לוואטסאפ לקבלת לקוחות",
  openGraph: {
    title: "בניית אתרים לעסקים קטנים | SameerDev",
    description:
      "אתר מקצועי לעסק שלך תוך 3-5 ימים עם חיבור לוואטסאפ לקבלת לקוחות",
    locale: "he_IL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${heebo.className}`}>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
