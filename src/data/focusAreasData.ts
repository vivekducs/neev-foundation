export interface FocusArea {
  id: string;
  title: string;
  clauseRef: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tagline: string;
  keyInitiatives: string[];
  sdgGoals: string[];
  metricsPlaceholder: {
    label: string;
    value: string;
  }[];
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "child-welfare",
    title: "Child Welfare & Holistic Education",
    clauseRef: "Clause III (A) - Item 1",
    shortDesc: "Supporting education, protection, child rights, nutrition, and holistic development of orphan, street, and underprivileged children.",
    fullDesc: "Neev Welfare Foundation is dedicated to shielding children from distress while building foundational literacy and cognitive development. We bridge the educational divide through learning hubs, remedial coaching, nutritional supplements, and child rights advocacy.",
    iconName: "Baby",
    tagline: "Every child deserves opportunity, safety, and a dignified future.",
    keyInitiatives: [
      "Remedial & foundational literacy learning camps",
      "Nutrition & mid-day wholesome meal drives",
      "Child rights awareness & rescue rehabilitation",
      "School enrollment assistance & book kit distribution",
      "Street child psycho-social counselling"
    ],
    sdgGoals: ["SDG 1: No Poverty", "SDG 4: Quality Education", "SDG 10: Reduced Inequalities"],
    metricsPlaceholder: [
      { label: "Children Enrolled in Learning Hubs", value: "[4,850+ Children]" },
      { label: "Nutritional Rations Distributed", value: "[18,200+ Kits]" },
      { label: "Community Schools Supported", value: "[24+ Centers]" }
    ]
  },
  {
    id: "youth-skilling",
    title: "Youth Empowerment & Skill Development",
    clauseRef: "Clause III (A) - Items 2 & 6",
    shortDesc: "Vocational training, career guidance, healthcare skilling, rozgar melas, and entrepreneurship development.",
    fullDesc: "Establishing and operating state-of-the-art Skill Development Centres, Healthcare Skill Training Centres, and Vocational Hubs. We execute CSR and Government skilling programs to prepare underserved youth for industry readiness and self-employment.",
    iconName: "Briefcase",
    tagline: "Transforming demographic potential into sustainable livelihood.",
    keyInitiatives: [
      "NSDC-aligned Healthcare & Allied Sector skill certifications",
      "Vocational trades: IT/ITeS, Electrician, Apparel & Retail",
      "Job Fairs (Rozgar Melas) & direct employer placement drives",
      "Micro-entrepreneurship incubation & mentorship",
      "Youth sports leagues & anti-addiction counselling"
    ],
    sdgGoals: ["SDG 8: Decent Work & Economic Growth", "SDG 9: Industry & Innovation"],
    metricsPlaceholder: [
      { label: "Youth Certified in Vocational Trades", value: "[3,400+ Candidates]" },
      { label: "Placement & Wage Linkage Rate", value: "[72% Avg. Placement]" },
      { label: "Active Skill Training Labs", value: "[12+ Specialized Labs]" }
    ]
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment & Self Help Groups (SHGs)",
    clauseRef: "Clause III (A) - Item 3",
    shortDesc: "Gender equality, formation and promotion of Self Help Groups, micro-livelihoods, and financial independence.",
    fullDesc: "We catalyze grassroots leadership by mobilizing rural and peri-urban women into dynamic Self Help Groups (SHGs). Through financial literacy, vocational artisan crafts, micro-credit linkages, and market access, women become independent decision-makers.",
    iconName: "Users",
    tagline: "Empowering a woman transforms an entire community.",
    keyInitiatives: [
      "SHG formation, federating, and bank linkage",
      "Enterprise training: tailoring, agro-processing & handicraft",
      "Financial literacy, digital banking, and micro-savings",
      "Legal awareness, gender equality & domestic safety workshops",
      "Market collective selling stalls & e-commerce onboarding"
    ],
    sdgGoals: ["SDG 5: Gender Equality", "SDG 8: Decent Work", "SDG 1: No Poverty"],
    metricsPlaceholder: [
      { label: "Active Self Help Groups Formed", value: "[310+ SHGs]" },
      { label: "Women Entrepreneurs Incubated", value: "[2,150+ Women]" },
      { label: "Micro-Credit Capital Mobilized", value: "[₹1.85 Cr+ Linked]" }
    ]
  },
  {
    id: "education-digital",
    title: "Education, E-Learning & Digital Literacy",
    clauseRef: "Clause III (A) - Item 4",
    shortDesc: "Adult literacy, digital literacy, computer education, community e-libraries, and educational sponsorship.",
    fullDesc: "Bridging the digital divide in rural schools and urban slum settlements. We establish smart community libraries, computer learning centres, and tablet-based interactive classrooms to ensure no student is left behind in the digital age.",
    iconName: "Laptop",
    tagline: "Knowledge and digital fluency are the fundamental tools of modern equality.",
    keyInitiatives: [
      "Community Computer & Digital Literacy Hubs",
      "Adult non-formal literacy & functional numeracy classes",
      "E-Learning smart class setup in municipal & village schools",
      "Free community libraries & digital book archives",
      "Merit-cum-need academic scholarship support"
    ],
    sdgGoals: ["SDG 4: Quality Education", "SDG 10: Reduced Inequalities"],
    metricsPlaceholder: [
      { label: "Digital Literacy Learners Trained", value: "[5,200+ Learners]" },
      { label: "Community Digital Libraries Active", value: "[16+ Hubs]" },
      { label: "Student Scholarships Awarded", value: "[840+ Students]" }
    ]
  },
  {
    id: "healthcare-welfare",
    title: "Healthcare, Family Welfare & Nutrition",
    clauseRef: "Clause III (A) - Item 5",
    shortDesc: "Public health camps, maternal & child healthcare, mental health counselling, blood donation, and nutrition support.",
    fullDesc: "Delivering preventative and primary healthcare to doorstep communities. We conduct specialized medical checkup camps, anemia screening, blood donation drives, maternal wellness education, and psychological counselling services.",
    iconName: "HeartPulse",
    tagline: "Healthy families build the foundation of resilient communities.",
    keyInitiatives: [
      "Multi-specialty free diagnostic & health screening camps",
      "Maternal & infant nutrition guidance sessions",
      "Preventive anemia testing and iron supplementation",
      "Blood donation drives with regional hospital partners",
      "Mental health awareness and confidential counselling desks"
    ],
    sdgGoals: ["SDG 3: Good Health & Well-Being", "SDG 2: Zero Hunger"],
    metricsPlaceholder: [
      { label: "Health Camp Beneficiaries Screened", value: "[14,600+ Patients]" },
      { label: "Blood Units Donated & Mobilized", value: "[1,250+ Units]" },
      { label: "Maternal Health Sessions Held", value: "[180+ Camps]" }
    ]
  },
  {
    id: "environment-water",
    title: "Environment, Water Conservation & Sanitation",
    clauseRef: "Clause III (A) - Items 8, 9 & 10",
    shortDesc: "Rainwater harvesting, tree plantation, social forestry, clean sanitation, solar energy, and sustainable agriculture.",
    fullDesc: "Restoring local ecosystems through community-led ecological stewardship. We implement check dams, rooftop rainwater harvesting, massive afforestation drives, solar energy adoption, organic farming, and clean village sanitation infrastructure.",
    iconName: "Sprout",
    tagline: "Protecting our shared environment for generations to come.",
    keyInitiatives: [
      "Rainwater harvesting & groundwater recharge pits",
      "Mass afforestation & indigenous tree sapling plantations",
      "Rural household sanitation & clean toilet construction",
      "Farmer training in organic farming & bio-fertilizers",
      "Solar rooftop installations at community centers"
    ],
    sdgGoals: ["SDG 6: Clean Water & Sanitation", "SDG 13: Climate Action", "SDG 15: Life on Land"],
    metricsPlaceholder: [
      { label: "Saplings Planted & Maintained", value: "[28,000+ Trees]" },
      { label: "Rainwater Recharge Units Built", value: "[35+ Units]" },
      { label: "Farmers Trained in Sustainable Agro", value: "[950+ Farmers]" }
    ]
  },
  {
    id: "tech-innovation",
    title: "Emerging Tech, AI, Robotics & Tinkering Labs",
    clauseRef: "Clause III (A) - Item 11",
    shortDesc: "Information Technology, AI, Robotics, Drone tech, EV technology, Tinkering Labs, and startup incubation.",
    fullDesc: "Preparing grassroots youth for next-generation frontier technologies. We establish STEAM Tinkering Labs, coding bootcamps, introductory AI & robotics workshops, and drone piloting familiarization sessions to kindle innovation in tier-2/3 regions.",
    iconName: "Cpu",
    tagline: "Democratizing artificial intelligence and future technologies for every youth.",
    keyInitiatives: [
      "School STEAM Tinkering Labs (Robotics & IoT kits)",
      "Foundational AI, Python & Data Literacy workshops",
      "Drone technology demonstration & applications in agro",
      "Electric Vehicle (EV) maintenance technician basics",
      "Grassroots youth innovation & startup ideation challenges"
    ],
    sdgGoals: ["SDG 9: Industry, Innovation & Infrastructure", "SDG 4: Quality Education"],
    metricsPlaceholder: [
      { label: "Youth Exposed to AI & STEAM Labs", value: "[1,850+ Students]" },
      { label: "Tinkering & Robotics Labs Set Up", value: "[8+ Innovation Hubs]" },
      { label: "Grassroots Tech Prototypes Built", value: "[42+ Projects]" }
    ]
  }
];
