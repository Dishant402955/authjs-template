import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authjs Template",
  description: "An Authentication Template for future Utilization",
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
