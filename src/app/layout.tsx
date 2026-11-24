import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "English AI Academy",
  description: "English learning platform for kids in Kazakhstan.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
