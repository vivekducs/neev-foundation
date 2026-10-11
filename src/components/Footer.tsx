import React from "react";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe2,
  ExternalLink,
  Sparkles
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#0F172A] border-t-2 border-[#E2E8F0] relative z-10 pb-20 lg:pb-0">
      {/* Top Banner: Core Foundation Creed */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-bold text-[#EB8317]">
              <Sparkles className="w-3.5 h-3.5 text-[#F3C623]" />
              <span>Neev Welfare Foundation</span>
            </div>
            <h3 className="text-2xl font-black text-[#0F172A]">
              Building a stronger, more inclusive, and sustainable society.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl font-medium">
              Committed to Child Welfare, Youth Vocational Skilling, Women Self Help Groups, Public Healthcare, and Environmental Action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/csr-partnerships"
              className="px-5 py-2.5 rounded-xl bg-[#EB8317] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C623] hover:text-[#0F172A] transition-all shadow-md"
            >
              CSR Implementation Proposal
            </Link>
            <Link
              href="/donor-dashboard"
              className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] text-[#0F172A] font-bold text-xs uppercase tracking-wider hover:bg-[#F8FAFC] border border-[#E2E8F0] transition-all shadow-sm"
            >
              Monitor Live Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & MOA Objects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Statutory & MOA Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#0F172A] font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-[#EB8317]" />
              <span>Statutory Alignment</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Incorporated under Clause III of the Memorandum of Association to pursue public welfare, community empowerment, and socio-economic transformation across India.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5 text-xs">
              <div className="flex justify-between text-[#334155]">
                <span>Registration Status:</span>
                <span className="font-bold text-[#EB8317]">[Section 8 / MOA Compliant]</span>
              </div>
              <div className="flex justify-between text-[#334155]">
                <span>CSR Reg. Code:</span>
                <span className="font-bold text-[#EB8317]">[CSR00098765]</span>
              </div>
              <div className="flex justify-between text-[#334155]">
                <span>Tax Exemption:</span>
                <span className="font-bold text-[#EB8317]">[80G & 12A Certified]</span>
              </div>
            </div>
          </div>

          {/* Column 2: MOA Key Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Clause III Focus Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <Link href="/focus-areas#child-welfare" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Child Welfare & Holistic Education
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#youth-skilling" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Youth Vocational & Healthcare Skilling
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#women-empowerment" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Women SHGs & Economic Empowerment
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#education-digital" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Digital Literacy & Community Libraries
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#healthcare-welfare" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Public Health, Blood Camps & Nutrition
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#environment-water" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> Rainwater Harvesting & Afforestation
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#tech-innovation" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EB8317]">▸</span> AI, Robotics & STEAM Tinkering Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Centers & Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Regional Hubs & Links
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Delhi NCR Hub [NWF-DL-01]</span>
                </Link>
              </li>
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Varanasi Learning Hub [NWF-UP-02]</span>
                </Link>
              </li>
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Pune SHG Center [NWF-MH-03]</span>
                </Link>
              </li>
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Alwar Water & Agro Hub [NWF-RJ-04]</span>
                </Link>
              </li>
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8317]" />
                  <span>Ranchi STEAM Tinkering Lab [NWF-JH-05]</span>
                </Link>
              </li>
              <li>
                <Link href="/donor-dashboard" className="hover:text-[#EB8317] transition-colors flex items-center gap-1.5 text-[#EB8317] font-bold pt-1">
                  <ExternalLink className="w-3.5 h-3.5 text-[#F3C623]" />
                  <span>Interactive Donor Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat Placeholder */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Contact Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-[#64748B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB8317] shrink-0 mt-0.5" />
                <span>[Plot No. 18, Institutional Area, Institutional Sector, New Delhi - 110001]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EB8317] shrink-0" />
                <span>[+91 11 2345 XXXX / +91 98765 XXXXX]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EB8317] shrink-0" />
                <span>[contact@neevwelfare.org.in]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-4 h-4 text-[#EB8317] shrink-0" />
                <span>[csr.desk@neevwelfare.org.in]</span>
              </div>
            </div>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 text-[11px] rounded-full bg-[#F8FAFC] text-[#EB8317] border border-[#E2E8F0] font-bold">
                Section 8 Non-Profit Corporation
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
          <p>
            © 2025 Neev Welfare Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#EB8317] font-semibold">Statutory Audit Compliant</span>
            <span>•</span>
            <span className="text-[#64748B]">Transparent Field Metrics & Regional Tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
