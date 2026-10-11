"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Layers,
  MapPin,
  Heart,
  LayoutDashboard,
  Briefcase,
  Plus,
  X,
  FileCheck,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export function MobileAppDock() {
  const pathname = usePathname();
  const [showQuickSheet, setShowQuickSheet] = useState(false);

  const mainTabs = [
    { name: "Home", href: "/", icon: Home },
    { name: "Focus", href: "/focus-areas", icon: Layers },
    { name: "Centers", href: "/geo-centers", icon: MapPin },
    { name: "Stories", href: "/impact-stories", icon: Heart },
    { name: "Portal", href: "/donor-dashboard", icon: LayoutDashboard }
  ];

  return (
    <>
      {/* Quick Action Sheet Modal for Native Mobile Feel */}
      <AnimatePresence>
        {showQuickSheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuickSheet(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFF] rounded-t-3xl border-t-2 border-[#F3C623] p-6 space-y-5 shadow-2xl lg:hidden"
            >
              {/* Drag Handle Indicator */}
              <div className="w-12 h-1.5 bg-[#E2E8F0] rounded-full mx-auto" />

              <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-base font-black text-[#0F172A]">Quick Actions</h3>
                  <p className="text-xs text-[#64748B]">Neev Welfare Foundation Ecosystem</p>
                </div>
                <button
                  onClick={() => setShowQuickSheet(false)}
                  className="p-1.5 rounded-full bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/csr-partnerships"
                  onClick={() => setShowQuickSheet(false)}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] space-y-1.5 transition-all"
                >
                  <Briefcase className="w-5 h-5 text-[#EB8317]" />
                  <h4 className="text-xs font-bold text-[#0F172A]">CSR Partnerships</h4>
                  <p className="text-[11px] text-[#64748B]">Schedule VII Projects</p>
                </Link>

                <Link
                  href="/donor-dashboard"
                  onClick={() => setShowQuickSheet(false)}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F3C623] space-y-1.5 transition-all"
                >
                  <LayoutDashboard className="w-5 h-5 text-[#F3C623]" />
                  <h4 className="text-xs font-bold text-[#0F172A]">Live Dashboard</h4>
                  <p className="text-[11px] text-[#64748B]">Audit & 80G Receipts</p>
                </Link>

                <Link
                  href="/geo-centers"
                  onClick={() => setShowQuickSheet(false)}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] space-y-1.5 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#EB8317]" />
                  <h4 className="text-xs font-bold text-[#0F172A]">Center Locator</h4>
                  <p className="text-[11px] text-[#64748B]">Regional Hub Coordinates</p>
                </Link>

                <Link
                  href="/impact-stories"
                  onClick={() => setShowQuickSheet(false)}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F3C623] space-y-1.5 transition-all"
                >
                  <Heart className="w-5 h-5 text-[#F3C623]" />
                  <h4 className="text-xs font-bold text-[#0F172A]">Grassroots Voices</h4>
                  <p className="text-[11px] text-[#64748B]">Verified Case Studies</p>
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  href="/csr-partnerships"
                  onClick={() => setShowQuickSheet(false)}
                  className="w-full py-3.5 rounded-xl bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block shadow-lg hover:bg-[#F3C623] hover:text-[#0F172A] transition-all"
                >
                  Request CSR Collaboration Proposal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Bottom App Dock (Visible ONLY on Mobile & Tablet, Hidden on Desktop lg+) */}
      <nav aria-label="Mobile Bottom App Navigation" className="fixed bottom-3 left-4 right-4 z-40 lg:hidden">
        <div className="glass-dock rounded-full px-3 py-2 flex items-center justify-between shadow-2xl border-2 border-[#F3C623]/30">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="relative flex flex-col items-center justify-center py-1 px-2.5 transition-all group"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDockPill"
                    className="absolute inset-0 bg-[#EB8317] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <Icon
                  className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    isActive ? "text-[#FFFFFF]" : "text-[#64748B]"
                  }`}
                />
                <span
                  className={`text-[10px] font-bold tracking-tight mt-0.5 ${
                    isActive ? "text-[#FFFFFF]" : "text-[#64748B]"
                  }`}
                >
                  {tab.name}
                </span>
              </Link>
            );
          })}

          {/* Quick Action Center Floating Trigger */}
          <button
            onClick={() => setShowQuickSheet(true)}
            aria-label="Open Quick Action Sheet"
            className="w-10 h-10 rounded-full bg-[#F3C623] text-[#0F172A] flex items-center justify-center font-black shadow-lg hover:scale-105 active:scale-95 transition-transform border border-[#FFFFFF]"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </>
  );
}
