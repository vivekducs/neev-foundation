"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  FileText
} from "lucide-react";
import { DASHBOARD_PROJECTS, DONOR_METRICS_OVERVIEW } from "@/data/dashboardData";

export default function DonorDashboardPage() {
  const [selectedId, setSelectedId] = useState<string>(DASHBOARD_PROJECTS[0].projectId);
  const activeProject = DASHBOARD_PROJECTS.find((p) => p.projectId === selectedId) || DASHBOARD_PROJECTS[0];

  return (
    <div className="space-y-12 py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Minimal Header */}
      <div className="space-y-2 border-b border-[#E2E8F0] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#EB8317]">
          <Sparkles className="w-3.5 h-3.5 text-[#F3C623]" />
          <span>Donor Project Monitoring</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
          Project Progress Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] max-w-xl">
          Track project milestones and progress across our key areas of focus.
        </p>
      </div>

      {/* 4 Minimal Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Focus Areas
          </span>
          <p className="text-lg font-black text-[#0F172A]">
            {DONOR_METRICS_OVERVIEW.activeFocusDomains}
          </p>
          <span className="text-[10px] text-[#EB8317] font-semibold block">Clause III (A)</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Implementation
          </span>
          <p className="text-xs font-black text-[#0F172A] leading-tight">
            CSR & Govt. Partner
          </p>
          <span className="text-[10px] text-[#EB8317] font-semibold block">Clause III (B)</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Compliance
          </span>
          <p className="text-sm font-black text-[#0F172A]">
            {DONOR_METRICS_OVERVIEW.statutoryAuditStatus}
          </p>
          <span className="text-[10px] text-[#64748B] font-semibold block">Statutory Audit</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Locations
          </span>
          <p className="text-xs font-black text-[#0F172A] leading-tight">
            Regional Centers
          </p>
          <span className="text-[10px] text-[#EB8317] font-semibold block">North & Central</span>
        </div>
      </div>

      {/* Modern Minimal 2-Column Split: Project Switcher & Project Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Minimal Project Tabs */}
        <div className="lg:col-span-5 space-y-2">
          <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider px-1 block">
            Select Focus Project
          </span>

          <div className="space-y-2">
            {DASHBOARD_PROJECTS.map((project) => {
              const isSelected = selectedId === project.projectId;
              return (
                <button
                  key={project.projectId}
                  onClick={() => setSelectedId(project.projectId)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-[#FFFFFF] border-[#EB8317] shadow-md ring-1 ring-[#EB8317]"
                      : "bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#F3C623]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-[#EB8317]">
                      {project.focusDomain}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] font-bold text-[#64748B]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-[#0F172A] mb-2">
                    {project.title}
                  </h3>

                  {/* Minimal Progress Bar */}
                  <div className="w-full bg-[#F8FAFC] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#EB8317] h-full rounded-full transition-all duration-300"
                      style={{ width: `${project.progressPercent}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Clean Detail Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.projectId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-6 shadow-sm space-y-6"
            >
              {/* Header */}
              <div className="border-b border-[#E2E8F0] pb-4 space-y-1">
                <span className="text-xs font-bold text-[#EB8317]">
                  {activeProject.objectiveReference}
                </span>
                <h2 className="text-xl font-black text-[#0F172A]">
                  {activeProject.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#64748B] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Center: {activeProject.centerLocation}</span>
                </div>
              </div>

              {/* Progress Bar with Minimal Number */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#64748B]">Execution Progress</span>
                  <span className="text-[#EB8317]">{activeProject.progressPercent}%</span>
                </div>
                <div className="w-full bg-[#F8FAFC] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#EB8317] h-full rounded-full"
                    style={{ width: `${activeProject.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Milestones Checklist */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  Project Milestones
                </h3>

                <div className="space-y-2">
                  {activeProject.milestones.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                    >
                      {m.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#EB8317] shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#64748B] shrink-0" />
                      )}
                      <span className={m.completed ? "font-bold" : "text-[#64748B]"}>
                        {m.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal CTAs */}
              <div className="pt-2 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <ShieldCheck className="w-4 h-4 text-[#EB8317]" />
                  <span>80G / CSR Project Tracking</span>
                </div>

                <Link
                  href="/csr-partnerships"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all text-center"
                >
                  CSR Partnership Inquiry
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
