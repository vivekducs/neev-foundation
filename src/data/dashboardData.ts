export interface ProjectProgress {
  projectId: string;
  projectCode: string;
  title: string;
  focusDomain: string;
  centerId: string;
  centerName: string;
  donorOrGrantPartnerPlaceholder: string;
  budgetAllocatedPlaceholder: string;
  fundUtilizedPercent: number;
  startDate: string;
  targetCompletion: string;
  status: "In Progress" | "Milestone Achieved" | "Phase 2 Scaling";
  targetBeneficiaries: string;
  currentBeneficiariesCovered: string;
  milestones: {
    title: string;
    targetDate: string;
    completed: boolean;
    auditStatus: string;
  }[];
  sdgAligned: string[];
}

export const DASHBOARD_PROJECTS: ProjectProgress[] = [
  {
    projectId: "proj-healthcare-24",
    projectCode: "[NWF-PRJ-24-HC]",
    title: "Healthcare Skill Training & Allied Sector Employment Drive",
    focusDomain: "Healthcare Skilling",
    centerId: "[NWF-DL-01]",
    centerName: "Neev Apex Skill & Innovation Center, Okhla",
    donorOrGrantPartnerPlaceholder: "[CSR Grant Consortium - Partner Group Alpha]",
    budgetAllocatedPlaceholder: "[₹48,50,000/- Allocated]",
    fundUtilizedPercent: 74,
    startDate: "April 2024",
    targetCompletion: "March 2025",
    status: "In Progress",
    targetBeneficiaries: "[500 Candidates]",
    currentBeneficiariesCovered: "[385 Candidates Enrolled / 290 Placed]",
    milestones: [
      { title: "Lab Infrastructure Setup & Medical Simulators Procurement", targetDate: "May 2024", completed: true, auditStatus: "[Verified by Statutory Auditor]" },
      { title: "Batch 1 & Batch 2 NSDC Curriculum Delivery", targetDate: "August 2024", completed: true, auditStatus: "[Verified by Third-Party Assessor]" },
      { title: "Hospital Internship & Clinical On-Job Training", targetDate: "November 2024", completed: true, auditStatus: "[Clinical Certificates Issued]" },
      { title: "Rozgar Placement Mela & Post-Placement Tracking", targetDate: "February 2025", completed: false, auditStatus: "[In Progress - Tracking Cohort]" }
    ],
    sdgAligned: ["SDG 3: Good Health", "SDG 8: Decent Work"]
  },
  {
    projectId: "proj-women-livelihood-24",
    projectCode: "[NWF-PRJ-24-SHG]",
    title: "Rural Women Livelihood & Micro-Enterprise Collective (SHG)",
    focusDomain: "Women Empowerment",
    centerId: "[NWF-MH-03]",
    centerName: "Neev Women SHG Enterprise Center, Pune",
    donorOrGrantPartnerPlaceholder: "[CSR Foundation - Manufacturing Partner Beta]",
    budgetAllocatedPlaceholder: "[₹32,00,000/- Allocated]",
    fundUtilizedPercent: 88,
    startDate: "June 2024",
    targetCompletion: "May 2025",
    status: "Milestone Achieved",
    targetBeneficiaries: "[300 Women Entrepreneurs]",
    currentBeneficiariesCovered: "[275 Active Women in 22 SHGs]",
    milestones: [
      { title: "SHG Mobilization & Bank Savings Account Linkage", targetDate: "July 2024", completed: true, auditStatus: "[Bank Letters Authenticated]" },
      { title: "Industrial Sewing Machine Deployment & Master Training", targetDate: "October 2024", completed: true, auditStatus: "[Asset Register Verified]" },
      { title: "First Commercial Institutional Supply Contract Delivery", targetDate: "December 2024", completed: true, auditStatus: "[GST Invoices Documented]" },
      { title: "Federation General Body Formation & Dividend Distribution", targetDate: "April 2025", completed: false, auditStatus: "[Scheduled Q4 Audit]" }
    ],
    sdgAligned: ["SDG 5: Gender Equality", "SDG 1: No Poverty"]
  },
  {
    projectId: "proj-child-learning-24",
    projectCode: "[NWF-PRJ-24-EDU]",
    title: "Foundational Literacy, Nutrition & Child Protection Mission",
    focusDomain: "Child Welfare",
    centerId: "[NWF-UP-02]",
    centerName: "Neev Community Learning & Health Hub, Varanasi",
    donorOrGrantPartnerPlaceholder: "[Community Welfare Trust / General Donors]",
    budgetAllocatedPlaceholder: "[₹22,00,000/- Allocated]",
    fundUtilizedPercent: 62,
    startDate: "July 2024",
    targetCompletion: "June 2025",
    status: "In Progress",
    targetBeneficiaries: "[450 Out-of-School Children]",
    currentBeneficiariesCovered: "[310 Regular Students]",
    milestones: [
      { title: "Learning Hub Baseline Learning Level Assessment", targetDate: "August 2024", completed: true, auditStatus: "[Baseline Scorecards Archived]" },
      { title: "Nutritional Mid-Day Supplementation Implementation", targetDate: "September 2024", completed: true, auditStatus: "[Food Safety Log Verified]" },
      { title: "E-Tablet Interactive Phonics Lab Activation", targetDate: "December 2024", completed: true, auditStatus: "[Asset In Place]" },
      { title: "Formal School Mainstream Transition Exams", targetDate: "April 2025", completed: false, auditStatus: "[Enrollment Form Pipeline]" }
    ],
    sdgAligned: ["SDG 4: Quality Education", "SDG 2: Zero Hunger"]
  },
  {
    projectId: "proj-water-ecology-24",
    projectCode: "[NWF-PRJ-24-ECO]",
    title: "Rainwater Harvesting & Climate-Resilient Rural Agriculture",
    focusDomain: "Environment & Water",
    centerId: "[NWF-RJ-04]",
    centerName: "Neev Rural Water Hub, Alwar",
    donorOrGrantPartnerPlaceholder: "[Environmental CSR Fund - Partner Gamma]",
    budgetAllocatedPlaceholder: "[₹38,00,000/- Allocated]",
    fundUtilizedPercent: 91,
    startDate: "January 2024",
    targetCompletion: "December 2024",
    status: "Milestone Achieved",
    targetBeneficiaries: "[800 Farmers & Households]",
    currentBeneficiariesCovered: "[840 Households Directly Impacted]",
    milestones: [
      { title: "Hydro-geological Survey & Percolation Site Mapping", targetDate: "February 2024", completed: true, auditStatus: "[Groundwater Board Certified]" },
      { title: "Construction of 4 Check Dams & 12 Recharge Shafts", targetDate: "June 2024", completed: true, auditStatus: "[Civil Engineering Sign-off]" },
      { title: "Mass Afforestation Drive (15,000 Native Saplings)", targetDate: "August 2024", completed: true, auditStatus: "[Geo-tagged Sapling Registry]" },
      { title: "Post-Monsoon Water Table Increment Measurement", targetDate: "November 2024", completed: true, auditStatus: "[Hydrology Report Validated]" }
    ],
    sdgAligned: ["SDG 6: Clean Water", "SDG 13: Climate Action"]
  }
];

export const DONOR_METRICS_OVERVIEW = {
  totalAllocatedBudgetPlaceholder: "[₹1,40,50,000/- Active Projects]",
  totalUtilizedBudgetPlaceholder: "[₹1,09,25,000/- Verified Spends]",
  overallUtilizationPercentage: 77.8,
  activeCentersCovered: "[6 Strategic Regional Hubs]",
  verifiedBeneficiariesCount: "[14,200+ Individuals Supported]",
  auditedReportsCount: "[4 Independent Social Audits Completed]",
  statutoryComplianceScore: "[100% Tax & 80G Compliant]"
};
