import { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { CallToAction } from "@/templates/landing-page/sections";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${ptSansCaption.variable} ${inter.variable}
      relative flex min-h-screen flex-col dark font-inter `}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12 ">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}
