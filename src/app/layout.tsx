import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recuro",
  description: "Screen recording platform with AI based transcription"
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={manrope.className}>
      <body className="bg-bg text-text min-h-dvh antialiased">{children}</body>
    </html>
  );
};

export default Layout;