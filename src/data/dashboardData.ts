export interface ProjectProgress {
  projectId: string;
  title: string;
  focusDomain: string;
  centerLocation: string;
  status: "In Progress" | "Milestone Achieved";
  progressPercent: number;
  objectiveReference: string;
  milestones: {
    title: string;
    completed: boolean;
  }[];
}

// Strictly derived from the provided Clause III Objects & Foundation Mandate
export const DASHBOARD_PROJECTS: ProjectProgress[] = [
  {
    projectId: "child-welfare-prog",
    title: "Child Welfare & Holistic Education",
    focusDomain: "Child Welfare",
    centerLocation: "[Center Location Placeholder]",
    status: "In Progress",
    progressPercent: 75,
    objectiveReference: "Clause III (A) - Child Welfare & Education",
    milestones: [
      { title: "Remedial Learning & School Enrollment", completed: true },
      { title: "Child Nutrition & Wholesome Health Drives", completed: true },
      { title: "Child Protection & Holistic Development Camps", completed: false }
    ]
  },
  {
    projectId: "youth-skilling-prog",
    title: "Youth Empowerment & Vocational Skilling",
    focusDomain: "Youth Development",
    centerLocation: "[Center Location Placeholder]",
    status: "In Progress",
    progressPercent: 80,
    objectiveReference: "Clause III (A) - Youth & Skill Centres",
    milestones: [
      { title: "Healthcare & Allied Sector Skill Training", completed: true },
      { title: "Vocational Guidance & Career Counselling", completed: true },
      { title: "Job Fairs & Rozgar Melas Placement Linkage", completed: false }
    ]
  },
  {
    projectId: "women-empowerment-prog",
    title: "Women Empowerment & Self Help Groups",
    focusDomain: "Women Empowerment",
    centerLocation: "[Center Location Placeholder]",
    status: "Milestone Achieved",
    progressPercent: 90,
    objectiveReference: "Clause III (A) - Women SHGs & Livelihood",
    milestones: [
      { title: "Self Help Group (SHG) Formation", completed: true },
      { title: "Livelihood Promotion & Enterprise Training", completed: true },
      { title: "Financial Inclusion & Economic Empowerment", completed: true }
    ]
  },
  {
    projectId: "health-environment-prog",
    title: "Healthcare, Water & Environmental Protection",
    focusDomain: "Community & Ecology",
    centerLocation: "[Center Location Placeholder]",
    status: "In Progress",
    progressPercent: 70,
    objectiveReference: "Clause III (A) - Health, Water & Environment",
    milestones: [
      { title: "Public Health Camps & Nutrition Awareness", completed: true },
      { title: "Drinking Water, Harvesting & Sanitation", completed: true },
      { title: "Tree Plantation & Renewable Energy Drives", completed: false }
    ]
  }
];

export const DONOR_METRICS_OVERVIEW = {
  activeFocusDomains: "7 Core Areas",
  implementationModel: "CSR & Govt. Partnership (Clause III B)",
  statutoryAuditStatus: "80G & 12A Certified",
  regionalCenterTracking: "Regional Center Locations"
};
