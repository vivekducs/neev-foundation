"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  Filter,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";
import { GEO_CENTERS, GeoCenter } from "@/data/centersData";

export default function GeoCentersPage() {
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<GeoCenter>(GEO_CENTERS[0]);

  const states = ["All", ...Array.from(new Set(GEO_CENTERS.map((c) => c.state)))];

  const filteredCenters = GEO_CENTERS.filter((center) => {
    const matchesState = selectedState === "All" || center.state === selectedState;
    const matchesStatus = selectedStatus === "All" || center.status === selectedStatus;
    const matchesSearch =
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesStatus && matchesSearch;
  });

  const centerSchema = {
    "@context": "https://schema.org",
    "@type": "CivicStructure",
    "name": selectedCenter.name,
    "identifier": selectedCenter.code,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": selectedCenter.addressPlaceholder,
      "addressLocality": selectedCenter.city,
      "addressRegion": selectedCenter.state,
      "postalCode": selectedCenter.pincodePlaceholder,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": selectedCenter.coordinates.lat,
      "longitude": selectedCenter.coordinates.lng
    },
    "telephone": selectedCenter.phonePlaceholder,
    "email": selectedCenter.emailPlaceholder
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(centerSchema) }}
      />

      {/* Header Banner */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#F3C623]" />
            <span>Geo-Friendly Regional Infrastructure & Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
            Regional Center Locator & Field Tracker
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Neev Welfare Foundation deploys specialized field centres across North and Central India. Discover operational and CSR co-funded locations, facility capabilities, and verified impact indicators.
          </p>
        </div>
      </section>

      {/* Main Interactive Directory & 3D Center Inspector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Filter Toolbar */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded-3xl p-4 sm:p-6 shadow-md grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by center name, city, or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-2">
            <span className="text-xs font-bold text-[#64748B] shrink-0">State:</span>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
            >
              {states.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <span className="text-xs font-bold text-[#64748B] shrink-0">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-bold focus:outline-none focus:border-[#EB8317]"
            >
              <option value="All">All Statuses</option>
              <option value="Operational">Operational</option>
              <option value="CSR Co-Funded">CSR Co-Funded</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
        </div>

        {/* Master & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Center List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
                Matching Centers ({filteredCenters.length})
              </span>
              <span className="text-xs text-[#EB8317] font-bold">
                Tap card to inspect
              </span>
            </div>

            <div className="space-y-3 max-h-[720px] overflow-y-auto pr-1">
              {filteredCenters.map((center) => {
                const isSelected = selectedCenter.id === center.id;
                return (
                  <motion.div
                    key={center.id}
                    onClick={() => setSelectedCenter(center)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-5 rounded-3xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FFFFFF] text-[#0F172A] border-[#EB8317] shadow-xl shadow-[#EB8317]/15 ring-2 ring-[#EB8317]/20"
                        : "bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0] hover:border-[#F3C623] hover:shadow"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-md font-black text-xs ${
                        isSelected ? "bg-[#EB8317] text-[#FFFFFF]" : "bg-[#F8FAFC] text-[#EB8317] border border-[#E2E8F0]"
                      }`}>
                        {center.code}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-[#F3C623] text-[#EB8317] bg-[#F8FAFC]">
                        {center.status}
                      </span>
                    </div>

                    <h3 className="text-base font-black leading-snug mb-1 text-[#0F172A]">
                      {center.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-bold mb-2 text-[#EB8317]">
                      <MapPin className="w-3.5 h-3.5 text-[#F3C623]" />
                      <span>{center.city}, {center.state}</span>
                    </div>

                    <p className="text-xs text-[#64748B] line-clamp-1">
                      {center.centerType}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Center Inspection with 3D Tilt Card */}
          <div className="lg:col-span-7">
            <Motion3DCard tiltAngle={12}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCenter.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFFFFF] text-[#0F172A] border-2 border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
                >
                  {/* Center Title Header */}
                  <div className="border-b border-[#E2E8F0] pb-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-lg bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase tracking-wider">
                        Center Code: {selectedCenter.code}
                      </span>
                      <span className="text-xs font-bold text-[#EB8317] flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#F3C623] animate-pulse"></span>
                        Status: {selectedCenter.status}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                      {selectedCenter.name}
                    </h2>

                    <div className="text-xs text-[#64748B] font-bold flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#EB8317]" />
                      <span>Specialization: {selectedCenter.centerType}</span>
                    </div>
                  </div>

                  {/* Geo Coordinates & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 text-xs">
                      <span className="text-[#EB8317] font-bold block uppercase tracking-wider text-[11px]">
                        Postal & Geo Details
                      </span>
                      <p className="text-[#334155] font-medium">
                        {selectedCenter.addressPlaceholder}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[#64748B]">
                        <span>Coordinates:</span>
                        <span className="font-mono text-[#EB8317] font-bold">
                          {selectedCenter.coordinates.lat.toFixed(4)}° N, {selectedCenter.coordinates.lng.toFixed(4)}° E
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 text-xs">
                      <span className="text-[#EB8317] font-bold block uppercase tracking-wider text-[11px]">
                        Center Secretariat
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#334155]">
                          <Phone className="w-3.5 h-3.5 text-[#EB8317]" />
                          <span>{selectedCenter.phonePlaceholder}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#334155]">
                          <Mail className="w-3.5 h-3.5 text-[#EB8317]" />
                          <span>{selectedCenter.emailPlaceholder}</span>
                        </div>
                        <div className="pt-1 text-[#64748B]">
                          Lead: {selectedCenter.contactPersonPlaceholder}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verified Metrics Overview */}
                  <div className="space-y-3">
                    <span className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                      Verified Center Metrics (Placeholders)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#F8FAFC] text-center space-y-1 border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] block">Beneficiaries</span>
                        <strong className="text-xs font-black text-[#EB8317]">
                          {selectedCenter.metrics.beneficiariesCovered}
                        </strong>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#F8FAFC] text-center space-y-1 border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] block">Active Cohorts</span>
                        <strong className="text-xs font-black text-[#F3C623]">
                          {selectedCenter.metrics.activeBatches}
                        </strong>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#F8FAFC] text-center space-y-1 border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] block">Labs / Units</span>
                        <strong className="text-xs font-black text-[#0F172A]">
                          {selectedCenter.metrics.labsEstablished}
                        </strong>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#F8FAFC] text-center space-y-1 border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] block">Linkage Rate</span>
                        <strong className="text-xs font-black text-[#EB8317]">
                          {selectedCenter.metrics.placementOrSupportRate}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                      Key Infrastructure & Labs Present:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedCenter.facilities.map((fac, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#EB8317] shrink-0" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Co-Fund CTA */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
                    <div>
                      <span className="text-[#0F172A] font-bold">Funding & CSR Partnership:</span>
                      <p className="text-[#64748B]">{selectedCenter.partnerOrSponsorPlaceholder}</p>
                    </div>
                    <Link
                      href="/csr-partnerships"
                      className="px-4 py-2.5 rounded-xl bg-[#EB8317] text-[#FFFFFF] font-black text-xs uppercase hover:bg-[#F3C623] hover:text-[#0F172A] transition-all shadow-md shrink-0"
                    >
                      Co-Fund a Regional Center
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Motion3DCard>
          </div>
        </div>
      </section>
    </div>
  );
}
