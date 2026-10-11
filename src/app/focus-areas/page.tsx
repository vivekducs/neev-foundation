"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Baby,
  Briefcase,
  Users,
  Laptop,
  HeartPulse,
  Sprout,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  FileText
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";
import { FOCUS_AREAS, FocusArea } from "@/data/focusAreasData";

export default function FocusAreasPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

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

  const filteredAreas = selectedFilter === "all"
    ? FOCUS_AREAS
    : FOCUS_AREAS.filter((area) => area.id === selectedFilter);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#F3C623]" />
            <span>MOA Clause III — Main Objects of the Company</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
            Strategic Focus Areas & Charter Mandate
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Every initiative at Neev Welfare Foundation directly stems from Clause III of our charter, pursuing socio-economic equity, holistic child protection, youth skilling, women financial inclusion, public health, and sustainable development.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap gap-2 pb-2">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              selectedFilter === "all"
                ? "bg-[#EB8317] text-[#FFFFFF] shadow-sm shadow-[#EB8317]/25"
                : "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:bg-[#FFFFFF]"
            }`}
          >
            All 7 Charter Areas
          </button>
          {FOCUS_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedFilter(area.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                selectedFilter === area.id
                  ? "bg-[#EB8317] text-[#FFFFFF] shadow-sm shadow-[#EB8317]/25"
                  : "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:bg-[#FFFFFF]"
              }`}
            >
              {area.title.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Detailed List of Focus Areas with 3D Tilt Cards */}
        <div className="space-y-12">
          {filteredAreas.map((area, idx) => {
            const Icon = getIcon(area.iconName);
            return (
              <motion.div
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Core Mandate */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EB8317] to-[#F3C623] flex items-center justify-center text-[#FFFFFF] shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
                          {area.clauseRef}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                          {area.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-[#EB8317] italic">
                      &quot;{area.tagline}&quot;
                    </p>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {area.fullDesc}
                    </p>

                    {/* Key Strategic Initiatives */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                        Key Operational Programs:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {area.keyInitiatives.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#334155] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#EB8317] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {area.sdgGoals.map((sdg, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-bold"
                        >
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 3D Metrics Display */}
                  <div className="lg:col-span-4">
                    <Motion3DCard tiltAngle={14}>
                      <div className="bg-[#FFFFFF] text-[#0F172A] rounded-2xl p-6 border-2 border-[#E2E8F0] shadow-xl space-y-6">
                        <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#EB8317]">
                            Impact Metrics
                          </span>
                          <h4 className="text-base font-black text-[#0F172A]">
                            Field Coverage Indicators
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {area.metricsPlaceholder.map((metric, i) => (
                            <div key={i} className="space-y-0.5">
                              <span className="text-xs text-[#64748B]">{metric.label}</span>
                              <p className="text-base font-black text-[#EB8317]">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                          <Link
                            href={`/geo-centers`}
                            className="w-full py-3 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider text-center block transition-all shadow-md"
                          >
                            Locate Relevant Centers
                          </Link>
                          <Link
                            href={`/donor-dashboard`}
                            className="w-full py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] font-black text-xs uppercase tracking-wider text-center block transition-all"
                          >
                            Track Milestone Progress
                          </Link>
                        </div>
                      </div>
                    </Motion3DCard>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Clause III (B) Enabling Powers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Clause III (B) — Execution & Enabling Powers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Matters Necessary for Furtherance of the Objects
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-4xl">
              Neev Welfare Foundation is empowered to act as an Implementing Agency, Training Partner, and CSR consortium collaborator across all governmental and institutional levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">1. CSR Project Implementation</span>
              <p className="text-xs text-[#64748B]">Executing CSR mandates of Corporates, PSUs, and institutional funds with rigorous compliance.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">2. Government Training Partner</span>
              <p className="text-xs text-[#64748B]">Acting as Project Implementation Agency for Central/State Government departments and multilateral missions.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">3. Job Fairs & Rozgar Melas</span>
              <p className="text-xs text-[#64748B]">Organizing placement melas, seminars, career workshops, and health awareness campaigns.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">4. Calamity & Disaster Relief</span>
              <p className="text-xs text-[#64748B]">Delivering humanitarian relief, emergency medical assistance, and rehabilitation during calamities.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">5. Social Audits & Impact Studies</span>
              <p className="text-xs text-[#64748B]">Conducting independent research, baseline assessments, social audits, and documented impact studies.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <span className="font-bold text-sm text-[#0F172A]">6. Multi-Stakeholder Collaboration</span>
              <p className="text-xs text-[#64748B]">Partnering with trusts, societies, universities, and international non-profit organizations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
