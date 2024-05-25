import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Generative Manim",
  description: "Generate videos with Manim",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations("Index");
  return (
    <html lang={locale}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
