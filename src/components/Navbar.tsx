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
  ArrowRight
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Regional Centers", href: "/geo-centers" },
    { name: "Impact Stories", href: "/impact-stories" },
    { name: "CSR Partnerships", href: "/csr-partnerships" },
    { name: "Donor Dashboard", href: "/donor-dashboard" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-[#E2E8F0]/80">
      {/* Sleek Top Verification Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]/60 text-[11px] py-1.5 px-4 sm:px-8 text-[#64748B]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB8317] animate-pulse"></span>
            <span className="font-semibold text-[#0F172A]">Neev Welfare Foundation</span>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <span className="hidden sm:inline">Clause III Registered Non-Profit</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#0F172A] font-semibold">80G & 12A Certified</span>
            <span className="text-[#CBD5E1]">•</span>
            <Link
              href="/geo-centers"
              className="text-[#EB8317] hover:text-[#0F172A] transition-colors font-bold flex items-center gap-0.5"
            >
              <span>Regional Centers</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#EB8317] via-[#F3C623] to-[#EB8317] flex items-center justify-center text-[#FFFFFF] font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-[#0F172A] font-black text-base sm:text-lg tracking-tight leading-none group-hover:text-[#EB8317] transition-colors">
                Neev Welfare Foundation
              </span>
              <span className="text-[11px] text-[#64748B] font-medium tracking-tight mt-1">
                Building Hope • Empowering Lives • Strengthening Communities
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#0F172A] text-[#FFFFFF] shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donor-dashboard"
              className="px-4 py-2 rounded-full text-xs font-bold text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] transition-all"
            >
              Dashboard
            </Link>
            <Link
              href="/csr-partnerships"
              className="px-5 py-2 rounded-full text-xs font-black bg-[#EB8317] text-[#FFFFFF] hover:bg-[#0F172A] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Quick Action Pill */}
          <div className="flex lg:hidden">
            <Link
              href="/csr-partnerships"
              className="px-4 py-1.5 rounded-full bg-[#EB8317] text-[#FFFFFF] font-bold text-xs shadow-sm"
            >
              Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
