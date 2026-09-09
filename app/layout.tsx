import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Terra UBC",
  description: "A student-run pro-bono sustainability consulting group",
  icons: { icon: "/assets/terraIcon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}