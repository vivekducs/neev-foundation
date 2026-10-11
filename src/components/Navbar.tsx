"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Layers,
  MapPin,
  Heart,
  Briefcase,
  LayoutDashboard,
  ChevronRight,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Sparkles },
    { name: "Focus Areas", href: "/focus-areas", icon: Layers },
    { name: "Regional Centers", href: "/geo-centers", icon: MapPin },
    { name: "Impact Stories", href: "/impact-stories", icon: Heart },
    { name: "CSR Partnerships", href: "/csr-partnerships", icon: Briefcase },
    { name: "Donor Dashboard", href: "/donor-dashboard", icon: LayoutDashboard }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
      {/* Top Notice Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs py-1.5 px-4 sm:px-8 text-[#64748B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-[#EB8317] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#EB8317] animate-pulse"></span>
              Clause III Non-Profit Foundation
            </span>
            <span className="hidden md:inline text-[#E2E8F0]">|</span>
            <span className="hidden md:inline">Govt. & CSR Implementing Partner</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#334155]">
              Tax Exemption: <strong className="text-[#EB8317]">80G & 12A Certified</strong>
            </span>
            <Link
              href="/geo-centers"
              className="text-[#EB8317] hover:text-[#F3C623] transition-colors font-bold flex items-center gap-0.5"
            >
              <span>Explore 6 Regional Hubs</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Foundation Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EB8317] to-[#F3C623] flex items-center justify-center text-[#FFFFFF] font-black text-2xl shadow-lg shadow-[#EB8317]/25 group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-[#0F172A] font-black text-xl tracking-tight leading-tight group-hover:text-[#EB8317] transition-colors">
                Neev Welfare Foundation
              </span>
              <span className="text-xs text-[#EB8317] font-bold tracking-wide">
                Building Hope • Empowering Lives • Strengthening Communities
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#EB8317] text-[#FFFFFF] shadow-sm"
                      : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#EB8317]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#FFFFFF]" : "text-[#EB8317]"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donor-dashboard"
              className="px-4 py-2.5 rounded-xl text-xs font-black bg-[#FFFFFF] text-[#0F172A] hover:bg-[#F8FAFC] transition-all border border-[#E2E8F0] shadow-sm"
            >
              Donor Portal
            </Link>
            <Link
              href="/csr-partnerships"
              className="px-4 py-2.5 rounded-xl text-xs font-black bg-[#EB8317] text-[#FFFFFF] hover:bg-[#F3C623] hover:text-[#0F172A] transition-all shadow-md shadow-[#EB8317]/25 flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Partner With Us</span>
            </Link>
          </div>

          {/* Mobile Quick Info Toggle (Dock is at bottom) */}
          <div className="flex lg:hidden">
            <Link
              href="/csr-partnerships"
              className="px-3.5 py-1.5 rounded-full bg-[#EB8317] text-[#FFFFFF] font-black text-xs shadow-md"
            >
              Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
