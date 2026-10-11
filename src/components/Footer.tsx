import React from "react";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#0F172A] border-t border-[#E2E8F0] pb-24 lg:pb-8">
      {/* Sleek Minimal CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#E2E8F0]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#EB8317]">
              Join Our Mission
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Building a stronger, more inclusive society through meaningful action.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Collaborating across Child Welfare, Youth Skilling, Women SHGs, Public Healthcare, and Sustainable Ecology.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/csr-partnerships"
              className="px-6 py-3 rounded-full bg-[#EB8317] hover:bg-[#0F172A] text-[#FFFFFF] font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/donor-dashboard"
              className="px-6 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] transition-all"
            >
              Project Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Clean 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Identity & Statutory */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-[#0F172A]">
              <ShieldCheck className="w-4 h-4 text-[#EB8317]" />
              <span>Neev Welfare Foundation</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Section 8 non-profit company incorporated to pursue Clause III objects for community welfare and poverty alleviation across India.
            </p>
            <div className="space-y-1 text-[11px] text-[#64748B]">
              <div>Registration: <strong className="text-[#0F172A]">Section 8 Compliant</strong></div>
              <div>Tax Exemption: <strong className="text-[#EB8317]">80G & 12A Certified</strong></div>
            </div>
          </div>

          {/* Col 2: Clause III Focus */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Areas of Focus
            </h4>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>
                <Link href="/focus-areas#child-welfare" className="hover:text-[#EB8317] transition-colors">
                  Child Welfare & Education
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#youth-skilling" className="hover:text-[#EB8317] transition-colors">
                  Youth Vocational Skilling
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#women-empowerment" className="hover:text-[#EB8317] transition-colors">
                  Women Self Help Groups
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#healthcare-welfare" className="hover:text-[#EB8317] transition-colors">
                  Healthcare & Public Welfare
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#environment-water" className="hover:text-[#EB8317] transition-colors">
                  Environment & Water Conservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>
                <Link href="/geo-centers" className="hover:text-[#EB8317] transition-colors">
                  Regional Center Locator
                </Link>
              </li>
              <li>
                <Link href="/impact-stories" className="hover:text-[#EB8317] transition-colors">
                  Grassroots Impact Stories
                </Link>
              </li>
              <li>
                <Link href="/csr-partnerships" className="hover:text-[#EB8317] transition-colors">
                  CSR Partnerships & Governance
                </Link>
              </li>
              <li>
                <Link href="/donor-dashboard" className="hover:text-[#EB8317] transition-colors">
                  Live Donor Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Details */}
          <div className="space-y-2.5 text-xs text-[#64748B]">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Secretariat
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#EB8317] shrink-0 mt-0.5" />
                <span>[Plot No. 18, Institutional Area, New Delhi - 110001]</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#EB8317] shrink-0" />
                <span>[+91 11 2345 XXXX]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#EB8317] shrink-0" />
                <span>[contact@neevwelfare.org.in]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Line */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#94A3B8]">
          <p>© 2025 Neev Welfare Foundation. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Clause III MOA Compliant</span>
            <span>•</span>
            <span>Statutory Audit Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
