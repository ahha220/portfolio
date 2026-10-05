import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amy Huang",
  description: "Amy Huang's site",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-black text-white antialiased selection:bg-accent selection:text-white">
      <body>{children}</body>
    </html>
  );
}
