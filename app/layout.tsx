import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SameerDev | אתר לעסק תוך 3–5 ימים",
  description: "אתר פשוט, מהיר ומותאם לנייד עם כפתור וואטסאפ — ממוקד פניות ולקוחות חדשים.",
  openGraph: {
    title: "SameerDev",
    description: "אתר לעסק שלך תוך 3–5 ימים שמביא לך יותר פניות",
    locale: "he_IL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
