"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Users,
  Target,
  FileSpreadsheet,
  ArrowRight,
  Send,
  Building2,
  Phone,
  Mail,
  Sparkles
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";

export default function CsrPartnershipsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    csrDomain: "Skill & Vocational Training (Item 6)",
    budgetRange: "₹25 Lakhs - ₹50 Lakhs",
    targetState: "Delhi NCR",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#F3C623]" />
            <span>Clause III (B) — CSR Implementation Partner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
            Corporate Social Responsibility (CSR) Partnerships
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Partnering with Corporates, PSUs, and Multilateral Institutions to deliver impactful, audit-ready social development programs across India. 100% compliant with Section 135 and Schedule VII of the Companies Act.
          </p>
        </div>
      </section>

      {/* CSR Compliance & Governance Framework in 3D Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Motion3DCard tiltAngle={10}>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] space-y-2 shadow-lg h-full">
              <span className="text-xs font-black uppercase text-[#EB8317]">Statutory Registration</span>
              <h3 className="text-lg font-black text-[#0F172A]">MCA CSR-1 Form</h3>
              <p className="text-xs text-[#64748B]">
                Registered with the Ministry of Corporate Affairs for direct CSR project execution. Code: [CSR00098765].
              </p>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] space-y-2 shadow-lg h-full">
              <span className="text-xs font-black uppercase text-[#EB8317]">Tax Benefits</span>
              <h3 className="text-lg font-black text-[#0F172A]">80G & 12A Certified</h3>
              <p className="text-xs text-[#64748B]">
                All contributions eligible for maximum tax deductions under Income Tax Department provisions.
              </p>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] space-y-2 shadow-lg h-full">
              <span className="text-xs font-black uppercase text-[#EB8317]">Verification</span>
              <h3 className="text-lg font-black text-[#0F172A]">Third-Party Audits</h3>
              <p className="text-xs text-[#64748B]">
                Independent baseline assessments, quarterly monitoring reports, and final social impact audits.
              </p>
            </div>
          </Motion3DCard>

          <Motion3DCard tiltAngle={10}>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] space-y-2 shadow-lg h-full">
              <span className="text-xs font-black uppercase text-[#EB8317]">Transparency</span>
              <h3 className="text-lg font-black text-[#0F172A]">Live Donor Portal</h3>
              <p className="text-xs text-[#64748B]">
                Digital milestone tracking, geo-tagged center inspection, and fund utilization dashboards.
              </p>
            </div>
          </Motion3DCard>
        </div>

        {/* 4-Step CSR Execution Lifecycle */}
        <div className="bg-[#FFFFFF] text-[#0F172A] rounded-3xl p-8 sm:p-12 border-2 border-[#E2E8F0] shadow-xl space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              End-to-End Implementation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Our 4-Stage CSR Delivery Model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#EB8317] text-[#FFFFFF] font-black text-xs flex items-center justify-center">1</span>
              <h4 className="font-bold text-sm text-[#0F172A]">Baseline Need Assessment</h4>
              <p className="text-xs text-[#64748B]">On-ground community surveys to identify socio-economic gaps and establish key KPIs.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#EB8317] text-[#FFFFFF] font-black text-xs flex items-center justify-center">2</span>
              <h4 className="font-bold text-sm text-[#0F172A]">Center Mobilization</h4>
              <p className="text-xs text-[#64748B]">Setting up specialized labs, appointing qualified master trainers, and beneficiary onboarding.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#EB8317] text-[#FFFFFF] font-black text-xs flex items-center justify-center">3</span>
              <h4 className="font-bold text-sm text-[#0F172A]">Rozgar Linkage & Support</h4>
              <p className="text-xs text-[#64748B]">Organizing Job Fairs (Rozgar Melas), SHG credit linkages, and healthcare distribution camps.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#EB8317] text-[#FFFFFF] font-black text-xs flex items-center justify-center">4</span>
              <h4 className="font-bold text-sm text-[#0F172A]">Social Audit & Reporting</h4>
              <p className="text-xs text-[#64748B]">Submitting statutory fund utilization certificates, case documentation, and final audit dossiers.</p>
            </div>
          </div>
        </div>

        {/* CSR Proposal Inquiry Form */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Start Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Request an Aligned CSR Proposal
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Connect with our Institutional Partnerships Secretariat. Our leadership will formulate a bespoke concept note aligned with your corporate CSR committee goals.
            </p>

            <div className="pt-4 space-y-3 text-xs text-[#334155] font-medium">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#EB8317]" />
                <span>Neev Welfare Foundation — Institutional Partnerships Desk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EB8317]" />
                <span>csr.desk@neevwelfare.org.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EB8317]" />
                <span>+91 11 2345 XXXX / +91 98765 XXXXX</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="p-8 rounded-3xl bg-[#F8FAFC] text-[#0F172A] text-center space-y-4 border-2 border-[#EB8317]">
                <CheckCircle2 className="w-12 h-12 text-[#EB8317] mx-auto" />
                <h3 className="text-xl font-black">Partnership Request Acknowledged</h3>
                <p className="text-xs text-[#64748B] max-w-md mx-auto">
                  Thank you for reaching out. A dedicated CSR Project Officer will review your parameters and provide an aligned proposal package within 2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 rounded-2xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Organization / Corporate Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corporation Limited"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Contact Person & Designation *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Head of CSR / Sustainability"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="csr@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Preferred Focus Domain</label>
                    <select
                      value={formData.csrDomain}
                      onChange={(e) => setFormData({ ...formData, csrDomain: e.target.value })}
                      className="w-full px-3 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    >
                      <option>Skill & Vocational Training (Item 6)</option>
                      <option>Healthcare & Allied Medical Skilling</option>
                      <option>Women SHG & Economic Livelihoods</option>
                      <option>Child Remedial Education & Nutrition</option>
                      <option>Water Harvesting & Ecological Forestry</option>
                      <option>Emerging Tech & AI Tinkering Labs</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0F172A]">Target State / Region</label>
                    <select
                      value={formData.targetState}
                      onChange={(e) => setFormData({ ...formData, targetState: e.target.value })}
                      className="w-full px-3 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                    >
                      <option>Delhi NCR</option>
                      <option>Uttar Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Rajasthan</option>
                      <option>Jharkhand</option>
                      <option>Madhya Pradesh (Upcoming Hub)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0F172A]">Project Details / Objectives</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on project size, timelines, or specific CSR priorities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#EB8317] hover:bg-[#F3C623] hover:text-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#EB8317]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit CSR Proposal Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
