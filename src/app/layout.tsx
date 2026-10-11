import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileAppDock } from "@/components/MobileAppDock";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Neev Welfare Foundation | Building Hope. Empowering Lives. Strengthening Communities",
  description: "Neev Welfare Foundation drives grassroots transformation through child welfare, youth vocational skilling, women self-help collectives, healthcare diagnostics, and climate action across India.",
  keywords: [
    "Neev Welfare Foundation",
    "Child Welfare and Education",
    "Youth Empowerment and Skill Development",
    "Women Empowerment SHG",
    "Healthcare Skill Training Centre",
    "CSR Implementing Partner",
    "Vocational Training Center",
    "Water Conservation and Rainwater Harvesting",
    "STEAM Tinkering Labs AI Robotics"
  ],
  authors: [{ name: "Neev Welfare Foundation" }],
  other: {
    "geo.region": "IN",
    "geo.placename": "New Delhi, India",
    "ICBM": "28.6139, 77.2090"
  },
  openGraph: {
    title: "Neev Welfare Foundation — Building Hope. Empowering Lives.",
    description: "Committed to community welfare by creating opportunities, supporting vulnerable groups, and promoting education, skills, health, and livelihoods.",
    url: "https://neevwelfare.org.in",
    siteName: "Neev Welfare Foundation",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0F172A] antialiased selection:bg-[#F3C623] selection:text-[#0F172A]">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        {/* Floating Mobile Bottom App-Style Dock */}
        <MobileAppDock />
      </body>
    </html>
  );
}
