"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Sparkles
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
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-[#E2E8F0]/80 transition-all">
      {/* Sleek Top Verification Bar with Hover Interactions */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]/60 text-[11px] py-1.5 px-4 sm:px-8 text-[#64748B]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ x: 2 }}
            className="flex items-center gap-2 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB8317] animate-pulse"></span>
            <span className="font-semibold text-[#0F172A]">Neev Welfare Foundation</span>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <span className="hidden sm:inline">Clause III Registered Non-Profit</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.05, color: "#EB8317" }}
              className="text-[#0F172A] font-semibold cursor-default transition-colors"
            >
              80G & 12A Certified
            </motion.span>
            <span className="text-[#CBD5E1]">•</span>
            <motion.div whileHover={{ x: 3 }}>
              <Link
                href="/geo-centers"
                className="text-[#EB8317] hover:text-[#0F172A] transition-colors font-bold flex items-center gap-0.5 group"
              >
                <span>Regional Centers</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with 3D Hover Spring */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: [0, -6, 6, 0],
                boxShadow: "0 10px 25px -5px rgba(235, 131, 23, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#EB8317] via-[#F3C623] to-[#EB8317] flex items-center justify-center text-[#FFFFFF] font-black text-xl shadow-md cursor-pointer"
            >
              N
            </motion.div>
            <motion.div whileHover={{ x: 2 }} className="flex flex-col">
              <span className="text-[#0F172A] font-black text-base sm:text-lg tracking-tight leading-none group-hover:text-[#EB8317] transition-colors">
                Neev Welfare Foundation
              </span>
              <span className="text-[11px] text-[#64748B] font-medium tracking-tight mt-1 group-hover:text-[#0F172A] transition-colors">
                Building Hope • Empowering Lives • Strengthening Communities
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Links with Floating Pill Hover */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all relative block ${
                      isActive
                        ? "bg-[#0F172A] text-[#FFFFFF] shadow-md shadow-[#0F172A]/20"
                        : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] hover:shadow-xs"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Action CTAs with Hover Animations */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <Link
                href="/donor-dashboard"
                className="px-4 py-2 rounded-full text-xs font-bold text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] transition-all block shadow-xs"
              >
                Dashboard
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 12px 28px -6px rgba(235, 131, 23, 0.4)"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <Link
                href="/csr-partnerships"
                className="px-5 py-2.5 rounded-full text-xs font-black bg-[#EB8317] hover:bg-[#0F172A] text-[#FFFFFF] transition-all shadow-md flex items-center gap-1.5 group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Quick Action Pill with Spring Hover */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex lg:hidden"
          >
            <Link
              href="/csr-partnerships"
              className="px-4 py-1.5 rounded-full bg-[#EB8317] text-[#FFFFFF] font-bold text-xs shadow-md"
            >
              Partner
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
