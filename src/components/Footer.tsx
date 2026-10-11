"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-[#FFFFFF] text-[#0F172A] border-t border-[#E2E8F0] pb-24 lg:pb-8 transition-colors">
      {/* Sleek Minimal CTA Banner with 3D Hover Physics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#E2E8F0]">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-bold text-[#EB8317] shadow-xs cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F3C623]" />
              <span>Join Our Grassroots Mission</span>
            </motion.div>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Building a stronger, more inclusive society through meaningful action.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Collaborating across Child Welfare, Youth Skilling, Women SHGs, Public Healthcare, and Sustainable Ecology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <Link
                href="/csr-partnerships"
                className="px-6 py-3.5 rounded-full bg-[#EB8317] hover:bg-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#EB8317]/25 flex items-center gap-2 group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <Link
                href="/donor-dashboard"
                className="px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] hover:border-[#EB8317] transition-all shadow-sm"
              >
                Project Dashboard
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Clean 4-Column Footer with Interactive Hover Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Identity & Statutory */}
          <div className="space-y-3">
            <motion.div
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm font-black text-[#0F172A] cursor-default"
            >
              <ShieldCheck className="w-4 h-4 text-[#EB8317]" />
              <span>Neev Welfare Foundation</span>
            </motion.div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Section 8 non-profit company incorporated to pursue Clause III objects for community welfare and poverty alleviation across India.
            </p>
            <div className="space-y-1 text-[11px] text-[#64748B]">
              <motion.div whileHover={{ x: 2 }}>
                Registration: <strong className="text-[#0F172A]">Section 8 Compliant</strong>
              </motion.div>
              <motion.div whileHover={{ x: 2 }}>
                Tax Exemption: <strong className="text-[#EB8317]">80G & 12A Certified</strong>
              </motion.div>
            </div>
          </div>

          {/* Col 2: Clause III Focus Links with Hover Slide */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Areas of Focus
            </h4>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              {[
                { name: "Child Welfare & Education", href: "/focus-areas#child-welfare" },
                { name: "Youth Vocational Skilling", href: "/focus-areas#youth-skilling" },
                { name: "Women Self Help Groups", href: "/focus-areas#women-empowerment" },
                { name: "Healthcare & Public Welfare", href: "/focus-areas#healthcare-welfare" },
                { name: "Environment & Water Conservation", href: "/focus-areas#environment-water" }
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href={link.href} className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                    <span className="text-[#EB8317] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links with Hover Slide */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              {[
                { name: "Regional Center Locator", href: "/geo-centers" },
                { name: "Grassroots Impact Stories", href: "/impact-stories" },
                { name: "CSR Partnerships & Governance", href: "/csr-partnerships" },
                { name: "Live Donor Dashboard", href: "/donor-dashboard" }
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href={link.href} className="hover:text-[#EB8317] transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Col 4: Secretariat Details with Hover Box */}
          <div className="space-y-2.5 text-xs text-[#64748B]">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Secretariat
            </h4>
            <div className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                className="flex items-start gap-2 p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#EB8317] shrink-0 mt-0.5" />
                <span>[Plot No. 18, Institutional Area, New Delhi - 110001]</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EB8317] shrink-0" />
                <span>[+91 11 2345 XXXX]</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EB8317] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#EB8317] shrink-0" />
                <span>[contact@neevwelfare.org.in]</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Line with Hover Notice */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#94A3B8]">
          <p>© {currentYear} Neev Welfare Foundation. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <motion.span whileHover={{ color: "#0F172A" }} className="cursor-default transition-colors">
              Clause III MOA Compliant
            </motion.span>
            <span>•</span>
            <motion.span whileHover={{ color: "#EB8317" }} className="cursor-default transition-colors">
              Statutory Audit Verified
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
