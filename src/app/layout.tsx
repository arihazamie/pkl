import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import HomePage from "@/components/ui/navbar";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SiskaMart Report",
  description: "SiskaMart Financial Report",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomePage />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
