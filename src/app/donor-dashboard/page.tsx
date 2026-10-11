"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  CheckCircle2,
  Clock,
  Download,
  ShieldCheck,
  Building,
  Target,
  DollarSign,
  PieChart,
  Users,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";
import { DASHBOARD_PROJECTS, DONOR_METRICS_OVERVIEW, ProjectProgress } from "@/data/dashboardData";

export default function DonorDashboardPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(DASHBOARD_PROJECTS[0].projectId);
  const [filterDomain, setFilterDomain] = useState<string>("All");
  const [receiptSimulated, setReceiptSimulated] = useState(false);

  const selectedProject = DASHBOARD_PROJECTS.find((p) => p.projectId === selectedProjectId) || DASHBOARD_PROJECTS[0];

  const filteredProjects = filterDomain === "All"
    ? DASHBOARD_PROJECTS
    : DASHBOARD_PROJECTS.filter((p) => p.focusDomain.includes(filterDomain));

  return (
    <div className="space-y-12 pb-20">
      {/* Dashboard Top Header */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-14 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] uppercase tracking-wider">
              <LayoutDashboard className="w-4 h-4 text-[#F3C623]" />
              <span>Real-Time Donor & CSR Project Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Impact & Milestone Monitoring Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
              Track active projects, field beneficiary counters, milestone progress bars, and audited statutory allocations across all Neev Regional Hubs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setReceiptSimulated(true)}
              className="px-5 py-3 rounded-2xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md shadow-[#EB8317]/25"
            >
              <FileText className="w-4 h-4" />
              <span>Generate 80G Receipt</span>
            </button>
            <div className="px-3 py-2 rounded-2xl bg-[#F8FAFC] text-xs text-[#EB8317] font-bold border border-[#E2E8F0]">
              Audit Status: Verified
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* KPI Overview Cards with 3D Tilt */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Motion3DCard tiltAngle={10}>
            <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-5 shadow-lg space-y-2 h-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Active Project Allocations
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A]">
                {DONOR_METRICS_OVERVIEW.totalAllocatedBudgetPlaceholder}
              </p>
              <span className="text-[10px] text-[#EB8317] font-bold block">
                Audited by Statutory Review
              </span>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-5 shadow-lg space-y-2 h-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Verified Fund Deployment
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#EB8317]">
                {DONOR_METRICS_OVERVIEW.totalUtilizedBudgetPlaceholder}
              </p>
              <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#EB8317] h-full rounded-full"
                  style={{ width: `${DONOR_METRICS_OVERVIEW.overallUtilizationPercentage}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-[#0F172A] font-bold block">
                {DONOR_METRICS_OVERVIEW.overallUtilizationPercentage}% Utilization Rate
              </span>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-5 shadow-lg space-y-2 h-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Beneficiaries Covered
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A]">
                {DONOR_METRICS_OVERVIEW.verifiedBeneficiariesCount}
              </p>
              <span className="text-[10px] text-[#EB8317] font-bold block">
                Across 6 Strategic Regional Hubs
              </span>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-5 shadow-lg space-y-2 h-full">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Statutory 80G Compliance
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A]">
                100% Tax Compliant
              </p>
              <span className="text-[10px] text-[#64748B] font-bold block">
                Receipts Instantaneously Issued
              </span>
            </div>
          </Motion3DCard>
        </div>

        {/* 80G Receipt Preview Modal */}
        {receiptSimulated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-3xl bg-[#FFFFFF] text-[#0F172A] border-2 border-[#EB8317] shadow-2xl space-y-4"
          >
            <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#EB8317]" />
                <h3 className="text-lg font-black text-[#0F172A]">Simulated 80G Tax Exemption Receipt Preview</h3>
              </div>
              <button
                onClick={() => setReceiptSimulated(false)}
                className="text-xs px-3 py-1 rounded-xl bg-[#EB8317] text-[#FFFFFF] font-bold"
              >
                Close Preview
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-[#EB8317] font-bold">Issuer Entity:</span>
                <p className="font-bold">Neev Welfare Foundation</p>
                <p className="text-[#64748B]">80G Reg: [AAA TN0123 RF]</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-[#EB8317] font-bold">Donor Placeholder:</span>
                <p className="font-bold">Corporate CSR / Philanthropic Partner</p>
                <p className="text-[#64748B]">PAN: [ABCDE1234F]</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <span className="text-[#EB8317] font-bold">Donation Serial:</span>
                <p className="font-mono text-[#EB8317] font-bold">NWF-80G-2024-8842</p>
                <p className="text-[#64748B]">Eligible Deduction: 50% under 80G</p>
              </div>
            </div>

            <p className="text-[11px] text-[#64748B]">
              * Official receipts with automated digital signatures are dispatched to registered donor emails within 15 minutes of contribution settlement.
            </p>
          </motion.div>
        )}

        {/* Project Selector & Milestone Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Projects List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                Active Initiatives ({filteredProjects.length})
              </span>
              <span className="text-xs text-[#EB8317] font-bold">Select to inspect</span>
            </div>

            <div className="space-y-3">
              {filteredProjects.map((proj) => {
                const isSelected = selectedProjectId === proj.projectId;
                return (
                  <motion.div
                    key={proj.projectId}
                    onClick={() => setSelectedProjectId(proj.projectId)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-3xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FFFFFF] text-[#0F172A] border-[#EB8317] shadow-xl shadow-[#EB8317]/15 ring-2 ring-[#EB8317]/20"
                        : "bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0] hover:border-[#F3C623]"
                    }`}
                  >
                    <div className="flex justify-between items-center gap-2 mb-1.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        isSelected ? "bg-[#EB8317] text-[#FFFFFF]" : "bg-[#F8FAFC] text-[#EB8317] border border-[#E2E8F0]"
                      }`}>
                        {proj.projectCode}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        proj.status === "Milestone Achieved"
                          ? "border-[#F3C623] text-[#EB8317] bg-[#F8FAFC]"
                          : "border-[#E2E8F0] text-[#64748B]"
                      }`}>
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-black leading-snug mb-1 text-[#0F172A]">
                      {proj.title}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-[#64748B]">
                        {proj.focusDomain}
                      </span>
                      <span className="font-bold text-[#EB8317]">
                        {proj.fundUtilizedPercent}% Utilized
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Project Inspection */}
          <div className="lg:col-span-8">
            <Motion3DCard tiltAngle={12}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.projectId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFFFFF] text-[#0F172A] border-2 border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
                >
                  {/* Project Header */}
                  <div className="border-b border-[#E2E8F0] pb-4 space-y-2">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#EB8317] text-[#FFFFFF] font-black text-xs">
                        {selectedProject.projectCode}
                      </span>
                      <span className="text-xs text-[#EB8317] font-bold">
                        Timeline: {selectedProject.startDate} – {selectedProject.targetCompletion}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                      <span className="flex items-center gap-1 text-[#EB8317] font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#F3C623]" />
                        {selectedProject.centerName}
                      </span>
                      <span>•</span>
                      <span>Sponsor: {selectedProject.donorOrGrantPartnerPlaceholder}</span>
                    </div>
                  </div>

                  {/* Fund Utilization Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#64748B]">Budget Utilization Progress:</span>
                      <span className="text-[#EB8317] font-bold">
                        {selectedProject.fundUtilizedPercent}% ({selectedProject.budgetAllocatedPlaceholder})
                      </span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden p-0.5">
                      <div
                        className="bg-[#EB8317] h-full rounded-full transition-all duration-500"
                        style={{ width: `${selectedProject.fundUtilizedPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Beneficiary Milestone Counters */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                        Target Outreach
                      </span>
                      <p className="text-lg font-black text-[#0F172A]">
                        {selectedProject.targetBeneficiaries}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <span className="text-[11px] font-bold text-[#EB8317] uppercase tracking-wider">
                        Current Achieved Cohort
                      </span>
                      <p className="text-lg font-black text-[#EB8317]">
                        {selectedProject.currentBeneficiariesCovered}
                      </p>
                    </div>
                  </div>

                  {/* Live Milestone Tracker Timeline */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                      Milestone Progress & Statutory Verification:
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.milestones.map((m, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                        >
                          <div className="flex items-start gap-2.5">
                            {m.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-[#EB8317] shrink-0 mt-0.5" />
                            ) : (
                              <Clock className="w-5 h-5 text-[#F3C623] shrink-0 mt-0.5" />
                            )}
                            <div className="space-y-0.5">
                              <h4 className="text-xs font-bold text-[#0F172A]">{m.title}</h4>
                              <span className="text-[11px] text-[#EB8317] font-medium block">
                                Audit Status: {m.auditStatus}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs text-[#64748B] sm:text-right shrink-0">
                            Target: {m.targetDate}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SDGs Aligned */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#64748B]">SDG Alignment:</span>
                      {selectedProject.sdgAligned.map((sdg, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] text-xs font-bold">
                          {sdg}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/csr-partnerships"
                      className="px-4 py-2.5 rounded-xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#EB8317]/25"
                    >
                      Request Project Audit Dossier
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Motion3DCard>
          </div>
        </div>
      </div>
    </div>
  );
}
