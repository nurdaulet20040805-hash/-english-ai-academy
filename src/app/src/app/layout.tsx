import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English AI Academy",
  description: "English learning platform for kids in Kazakhstan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
