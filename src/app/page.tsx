"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Baby,
  HeartPulse,
  Sprout,
  Laptop,
  Cpu,
  MapPin,
  FileCheck,
  ChevronRight,
  Layers,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";
import { FOCUS_AREAS } from "@/data/focusAreasData";
import { GEO_CENTERS } from "@/data/centersData";
import { IMPACT_STORIES } from "@/data/impactStoriesData";
import { DONOR_METRICS_OVERVIEW } from "@/data/dashboardData";

export default function HomePage() {
  const [activeAreaTab, setActiveAreaTab] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case "Baby": return Baby;
      case "Briefcase": return Briefcase;
      case "Users": return Users;
      case "Laptop": return Laptop;
      case "HeartPulse": return HeartPulse;
      case "Sprout": return Sprout;
      case "Cpu": return Cpu;
      default: return Layers;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION: CLEAN, MINIMAL, SOPHISTICATED */}
      <section className="relative overflow-hidden bg-[#FFFFFF] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#EB8317]">
                <Sparkles className="w-3.5 h-3.5 text-[#F3C623]" />
                <span>Neev Welfare Foundation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.12]">
                Building Hope. <br />
                <span className="text-[#EB8317]">Empowering Lives.</span> <br />
                <span className="text-[#0F172A]">Strengthening Communities.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
                Building a stronger, more inclusive, and sustainable society through meaningful action. We create opportunities, support vulnerable groups, and promote education, skills, health, and livelihoods.
              </p>

              {/* Minimal Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/geo-centers"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#EB8317] hover:bg-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Explore Centers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/donor-dashboard"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] transition-all flex items-center justify-center gap-2"
                >
                  <span>Project Dashboard</span>
                </Link>
              </div>

              {/* Minimal Trust Pills */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#64748B]">
                <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] font-semibold text-[#0F172A]">
                  Clause III MOA Objects
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] font-semibold text-[#0F172A]">
                  80G & 12A Certified
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] font-semibold text-[#0F172A]">
                  CSR Implementation Partner
                </span>
              </div>
            </motion.div>

            {/* Right 3D Card: Minimal Overview */}
            <div className="lg:col-span-5">
              <Motion3DCard tiltAngle={12}>
                <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-4">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#EB8317]">
                        Foundation Overview
                      </span>
                      <h2 className="text-lg font-black text-[#0F172A]">
                        Charter Footprint
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]">
                      Registered Section 8
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Focus Areas</span>
                      <p className="text-lg font-black text-[#0F172A]">
                        {DONOR_METRICS_OVERVIEW.activeFocusDomains}
                      </p>
                      <span className="text-[10px] text-[#EB8317] font-semibold block">Clause III (A)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Delivery Model</span>
                      <p className="text-xs font-black text-[#0F172A] leading-tight">
                        CSR & Govt. Partner
                      </p>
                      <span className="text-[10px] text-[#EB8317] font-semibold block">Clause III (B)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Statutory Audit</span>
                      <p className="text-xs font-black text-[#0F172A]">
                        {DONOR_METRICS_OVERVIEW.statutoryAuditStatus}
                      </p>
                      <span className="text-[10px] text-[#64748B] block">Tax Compliant</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Field Coverage</span>
                      <p className="text-xs font-black text-[#0F172A]">
                        Regional Centers
                      </p>
                      <span className="text-[10px] text-[#EB8317] font-semibold block">Active Locations</span>
                    </div>
                  </div>

                  <Link
                    href="/donor-dashboard"
                    className="w-full py-3 rounded-full bg-[#0F172A] hover:bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block transition-all shadow-sm"
                  >
                    Open Live Project Dashboard
                  </Link>
                </div>
              </Motion3DCard>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOCUS AREAS: CLEAN INTERACTIVE TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
            Core Domains
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            Our Key Areas of Focus
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Pursuing Clause III (A) of our Memorandum of Association to build opportunities and support vulnerable communities.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap gap-2 border-b border-[#E2E8F0] pb-4">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = getIcon(area.iconName);
              const isSelected = activeAreaTab === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaTab(idx)}
                  className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#0F172A] text-[#FFFFFF] shadow-sm"
                      : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#EB8317]" : "text-[#64748B]"}`} />
                  <span>{area.title.split("&")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content */}
          <AnimatePresence mode="wait">
            {FOCUS_AREAS[activeAreaTab] && (
              <motion.div
                key={FOCUS_AREAS[activeAreaTab].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-8 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#EB8317] font-bold text-xs">
                    {FOCUS_AREAS[activeAreaTab].clauseRef}
                  </span>
                  <h3 className="text-2xl font-black text-[#0F172A]">
                    {FOCUS_AREAS[activeAreaTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#EB8317] italic">
                    &quot;{FOCUS_AREAS[activeAreaTab].tagline}&quot;
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {FOCUS_AREAS[activeAreaTab].fullDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#0F172A] block">
                      Key Programs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {FOCUS_AREAS[activeAreaTab].keyInitiatives.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EB8317] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 space-y-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0F172A] block">
                    Verified Field Indicators
                  </span>
                  <div className="space-y-3 text-xs">
                    {FOCUS_AREAS[activeAreaTab].metricsPlaceholder.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-[#64748B]">{metric.label}:</span>
                        <strong className="text-[#0F172A]">{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/focus-areas"
                    className="w-full py-2.5 rounded-full bg-[#0F172A] hover:bg-[#EB8317] text-[#FFFFFF] font-bold text-xs text-center block transition-all"
                  >
                    View All Focus Areas
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. REGIONAL CENTERS: MINIMAL 3-COL GRID */}
      <section className="bg-[#F8FAFC] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
                Regional Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                Center Locations & Coverage
              </h2>
            </div>
            <Link
              href="/geo-centers"
              className="text-xs font-bold text-[#EB8317] hover:text-[#0F172A] flex items-center gap-1 transition-colors"
            >
              <span>View All 6 Centers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GEO_CENTERS.slice(0, 3).map((center) => (
              <div
                key={center.id}
                className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 shadow-sm transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#EB8317]">
                      {center.code}
                    </span>
                    <span className="text-[10px] font-bold text-[#64748B]">
                      {center.status}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#0F172A]">
                    {center.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                    <span>{center.city}, {center.state}</span>
                  </div>

                  <p className="text-xs text-[#64748B] line-clamp-1">
                    {center.centerType}
                  </p>
                </div>

                <Link
                  href={`/geo-centers?center=${center.id}`}
                  className="w-full py-2.5 rounded-full bg-[#F8FAFC] hover:bg-[#0F172A] text-[#0F172A] hover:text-[#FFFFFF] border border-[#E2E8F0] font-bold text-xs text-center block transition-all"
                >
                  Inspect Center
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED IMPACT STORIES: MINIMAL 3-COL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Community Voice
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Grassroots Impact Stories
            </h2>
          </div>
          <Link
            href="/impact-stories"
            className="text-xs font-bold text-[#EB8317] hover:text-[#0F172A] flex items-center gap-1 transition-colors"
          >
            <span>Read All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_STORIES.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F8FAFC] text-[#EB8317] border border-[#E2E8F0]">
                  {story.category}
                </span>

                <h3 className="text-base font-black text-[#0F172A] leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-[#64748B] italic border-l-2 border-[#EB8317] pl-3 py-0.5">
                  {story.quotePlaceholder}
                </p>

                <p className="text-xs text-[#0F172A] font-medium pt-1">
                  <strong>Outcome: </strong> {story.outcome}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap gap-1">
                {story.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-[10px] font-medium text-[#64748B]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CSR PARTNERSHIPS SECTION: MINIMAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Clause III (B) Mandate
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Corporate Social Responsibility (CSR) Implementation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Partnering with Corporates, PSUs, and Government departments to execute high-impact vocational skilling, healthcare camps, job fairs (Rozgar Melas), and sustainable development programs.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <Link
              href="/csr-partnerships"
              className="w-full py-3.5 rounded-full bg-[#EB8317] hover:bg-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center transition-all shadow-sm"
            >
              Request CSR Collaboration
            </Link>
            <Link
              href="/donor-dashboard"
              className="w-full py-3 rounded-full bg-[#F8FAFC] hover:bg-[#FFFFFF] text-[#0F172A] font-bold text-xs border border-[#E2E8F0] text-center transition-all"
            >
              Open Live Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
