"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
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
    <div className="space-y-16 lg:space-y-28 pb-16">
      {/* 1. HERO SECTION WITH VIBRANT WHITE CANVAS & 3D PARALLAX FLOAT */}
      <section className="relative overflow-hidden bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 border-b border-[#E2E8F0] bg-grid-pattern">
        {/* Ambient Gradient Glows (Sunset Orange & Golden Amber only) */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F3C623] blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#EB8317] blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Core Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] tracking-wider uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-[#F3C623]" />
                <span>Introducing Neev Welfare Foundation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-[#0F172A]">
                Building Hope. <br />
                <span className="text-[#EB8317]">Empowering Lives.</span> <br />
                <span className="text-[#F3C623]">Strengthening Communities.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed max-w-2xl">
                Building a stronger, more inclusive, and sustainable society through meaningful action. We are committed to community welfare by creating opportunities, supporting vulnerable groups, and promoting education, skills, health, and livelihoods.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/geo-centers"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#F3C623] hover:text-[#0F172A] transition-all shadow-xl shadow-[#EB8317]/25 flex items-center justify-center gap-2.5 group"
                >
                  <MapPin className="w-4 h-4 group-hover:scale-125 transition-transform" />
                  <span>Locate Regional Hubs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/donor-dashboard"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFFFFF] text-[#0F172A] font-black text-xs uppercase tracking-wider hover:bg-[#F8FAFC] transition-all border-2 border-[#E2E8F0] shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Live Donor Dashboard</span>
                  <ExternalLink className="w-4 h-4 text-[#EB8317]" />
                </Link>
              </div>

              {/* Statutory Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
                  <ShieldCheck className="w-4 h-4 text-[#EB8317]" />
                  <span>Clause III MOA Objects</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#F3C623]" />
                  <span>80G / 12A Certified</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
                  <FileCheck className="w-4 h-4 text-[#EB8317]" />
                  <span>CSR Implementing Partner</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D Tilt Interactive Impact Metric Card */}
            <div className="lg:col-span-5">
              <Motion3DCard tiltAngle={16}>
                <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
                        National Reach Overview
                      </span>
                      <h2 className="text-xl font-black text-[#0F172A]">
                        Regional Footprint
                      </h2>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-[#F3C623] text-[#0F172A] shadow-sm">
                      FY 24-25
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Beneficiaries Reached</span>
                      <p className="text-xl font-black text-[#EB8317]">
                        {DONOR_METRICS_OVERVIEW.verifiedBeneficiariesCount}
                      </p>
                      <span className="text-[10px] text-[#64748B] block">[Placeholder Verified]</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Regional Centers</span>
                      <p className="text-xl font-black text-[#F3C623]">
                        {DONOR_METRICS_OVERVIEW.activeCentersCovered}
                      </p>
                      <span className="text-[10px] text-[#64748B] block">[North & Central Hubs]</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Active Project Spend</span>
                      <p className="text-base font-black text-[#0F172A]">
                        {DONOR_METRICS_OVERVIEW.totalUtilizedBudgetPlaceholder}
                      </p>
                      <span className="text-[10px] text-[#EB8317] font-bold block">
                        {DONOR_METRICS_OVERVIEW.overallUtilizationPercentage}% Deployed
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-xs text-[#64748B] block">Social Impact Audits</span>
                      <p className="text-base font-black text-[#EB8317]">
                        {DONOR_METRICS_OVERVIEW.auditedReportsCount}
                      </p>
                      <span className="text-[10px] text-[#64748B] block">[Independent Reviews]</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/donor-dashboard"
                      className="w-full py-3.5 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block transition-all shadow-md"
                    >
                      View Audited Financials & Utilization
                    </Link>
                  </div>
                </div>
              </Motion3DCard>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FOCUS AREAS WITH SMOOTH SCROLL REVEALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-black text-[#EB8317] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#F3C623]" />
            <span>Charter Objectives & Action Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Our Key Areas of Focus
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Pursuing Clause III (A) of our Memorandum of Association to build sustainable, scalable grassroots interventions for vulnerable and marginalized groups.
          </p>
        </motion.div>

        {/* Interactive Focus Area Tabs */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap gap-2 border-b border-[#E2E8F0] pb-4 mb-6">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = getIcon(area.iconName);
              const isSelected = activeAreaTab === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaTab(idx)}
                  className={`px-4 py-2.5 rounded-2xl font-black text-xs transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#EB8317] text-[#FFFFFF] shadow-md shadow-[#EB8317]/25"
                      : "bg-[#F8FAFC] text-[#334155] hover:bg-[#FFFFFF] border border-[#E2E8F0]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#FFFFFF]" : "text-[#EB8317]"}`} />
                  <span>{area.title.split("&")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content with Framer Motion AnimatePresence */}
          <AnimatePresence mode="wait">
            {FOCUS_AREAS[activeAreaTab] && (
              <motion.div
                key={FOCUS_AREAS[activeAreaTab].id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#EB8317]/30 text-[#EB8317] font-black text-xs uppercase tracking-wide">
                    {FOCUS_AREAS[activeAreaTab].clauseRef}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                    {FOCUS_AREAS[activeAreaTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#EB8317] italic">
                    &quot;{FOCUS_AREAS[activeAreaTab].tagline}&quot;
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {FOCUS_AREAS[activeAreaTab].fullDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                      Key Strategic Interventions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {FOCUS_AREAS[activeAreaTab].keyInitiatives.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#334155] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#EB8317] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {FOCUS_AREAS[activeAreaTab].sdgGoals.map((sdg, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-bold"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <Motion3DCard tiltAngle={12}>
                    <div className="bg-[#FFFFFF] text-[#0F172A] rounded-2xl p-6 border-2 border-[#E2E8F0] shadow-xl space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#EB8317] border-b border-[#E2E8F0] pb-2">
                        Verified Field Metrics (Placeholders)
                      </h4>
                      <div className="space-y-3">
                        {FOCUS_AREAS[activeAreaTab].metricsPlaceholder.map((metric, i) => (
                          <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-[#64748B]">{metric.label}:</span>
                            <span className="font-black text-sm text-[#EB8317]">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[#E2E8F0]">
                        <Link
                          href="/focus-areas"
                          className="w-full py-3 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block transition-all shadow-md"
                        >
                          Explore All 7 Focus Areas
                        </Link>
                      </div>
                    </div>
                  </Motion3DCard>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. GEO-FRIENDLY REGIONAL CENTERS IN 3D CARDS */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
                Geo-Friendly Regional Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Our Strategic Center Locations
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Operating skill centres, learning hubs, and health camps across Delhi NCR, UP, Maharashtra, Rajasthan, and Jharkhand.
              </p>
            </div>
            <Link
              href="/geo-centers"
              className="px-6 py-3.5 rounded-2xl bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#F3C623] hover:text-[#0F172A] transition-all flex items-center gap-2 shadow-md shadow-[#EB8317]/25"
            >
              <span>Explore Interactive Center Locator</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Featured Regional Centers with 3D Tilt Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEO_CENTERS.slice(0, 3).map((center) => (
              <Motion3DCard key={center.id} tiltAngle={14}>
                <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 h-full transition-all">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#EB8317] text-[#FFFFFF] font-black text-xs">
                        {center.code}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-[#F3C623] text-[#EB8317] bg-[#F8FAFC]">
                        {center.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#0F172A] leading-snug">
                      {center.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#EB8317] font-bold">
                      <MapPin className="w-4 h-4 text-[#F3C623] shrink-0" />
                      <span>{center.city}, {center.state}</span>
                    </div>

                    <p className="text-xs text-[#64748B]">
                      {center.addressPlaceholder}
                    </p>

                    <div className="pt-2 border-t border-[#E2E8F0] space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Coverage:</span>
                        <span className="font-bold text-[#EB8317]">{center.metrics.beneficiariesCovered}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Key Labs:</span>
                        <span className="font-bold text-[#0F172A]">{center.metrics.labsEstablished}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/geo-centers?center=${center.id}`}
                    className="w-full py-3 rounded-xl bg-[#F8FAFC] text-[#0F172A] hover:bg-[#EB8317] hover:text-[#FFFFFF] border border-[#E2E8F0] font-black text-xs uppercase tracking-wider text-center block transition-all"
                  >
                    View Center Capabilities
                  </Link>
                </div>
              </Motion3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED IMPACT STORIES IN 3D CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Lives Touched & Transformations Made
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Verified Grassroots Impact Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Vocational skilling, remedial child education, and women micro-enterprises creating self-reliance and community dignity.
            </p>
          </div>
          <Link
            href="/impact-stories"
            className="px-6 py-3.5 rounded-2xl bg-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#EB8317] transition-all flex items-center gap-2 shadow-md"
          >
            <span>Read All Impact Journeys</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_STORIES.slice(0, 3).map((story) => (
            <Motion3DCard key={story.id} tiltAngle={12}>
              <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6 h-full transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#EB8317] text-xs font-bold border border-[#E2E8F0]">
                      {story.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-bold">
                      {story.location}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#0F172A] leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-[#475569] italic border-l-4 border-[#EB8317] pl-3 py-1">
                    {story.quotePlaceholder}
                  </p>

                  <div className="space-y-2 text-xs pt-1">
                    <div>
                      <strong className="text-[#0F172A]">Intervention: </strong>
                      <span className="text-[#64748B]">{story.intervention}</span>
                    </div>
                    <div>
                      <strong className="text-[#EB8317]">Impact Outcome: </strong>
                      <span className="text-[#0F172A] font-bold">{story.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap gap-1.5">
                  {story.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion3DCard>
          ))}
        </div>
      </section>

      {/* 5. CSR & PARTNERSHIPS TRUST SECTION */}
      <section className="bg-[#FFFFFF] border-t border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Clause III (B) Mandate: Partnerships & Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A]">
              Your Trusted CSR Implementing Agency & Training Partner
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We collaborate with Corporates, PSUs, Central and State Government departments to implement impactful CSR, vocational skilling, healthcare camps, job fairs (Rozgar Melas), and climate-resilience projects with end-to-end statutory documentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-xs font-black text-[#EB8317]">Independent Audits</span>
                <p className="text-xs text-[#64748B]">Third-party social impact audit and transparency reports.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-xs font-black text-[#F3C623]">Rozgar Placement</span>
                <p className="text-xs text-[#64748B]">Job Melas & corporate placement tie-ups for certified youth.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-xs font-black text-[#EB8317]">Disaster & Relief</span>
                <p className="text-xs text-[#64748B]">Rapid response and rehabilitation during calamities & emergencies.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 border-2 border-[#E2E8F0]">
            <h3 className="text-xl font-black text-[#0F172A]">
              Partner with Neev Foundation
            </h3>
            <p className="text-xs text-[#64748B]">
              Submit your CSR mandate or project parameters for an aligned, customized implementation roadmap.
            </p>
            <Link
              href="/csr-partnerships"
              className="w-full py-3.5 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block transition-all shadow-md shadow-[#EB8317]/25"
            >
              Request CSR Project Deck
            </Link>
            <Link
              href="/donor-dashboard"
              className="w-full py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-black text-xs uppercase tracking-wider text-center block transition-all"
            >
              Open Live Milestone Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
