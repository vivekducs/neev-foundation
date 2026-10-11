export interface GeoCenter {
  id: string;
  code: string;
  name: string;
  state: string;
  district: string;
  city: string;
  addressPlaceholder: string;
  pincodePlaceholder: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  status: "Operational" | "Upcoming" | "CSR Co-Funded";
  centerType: "Skill & Vocational Training" | "Child Welfare & Learning Hub" | "Women SHG Enterprise Center" | "Healthcare & Diagnostic Clinic" | "STEAM Tinkering & Innovation Lab";
  contactPersonPlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  metrics: {
    beneficiariesCovered: string;
    activeBatches: string;
    labsEstablished: string;
    placementOrSupportRate: string;
  };
  facilities: string[];
  partnerOrSponsorPlaceholder: string;
}

export const GEO_CENTERS: GeoCenter[] = [
  {
    id: "center-delhi-01",
    code: "[NWF-DL-01]",
    name: "Neev Apex Skill & Innovation Center",
    state: "Delhi NCR",
    district: "South East Delhi",
    city: "Okhla Industrial Area",
    addressPlaceholder: "[Plot No. 42, Phase-III, Okhla Industrial Estate, New Delhi - 110020]",
    pincodePlaceholder: "[110020]",
    coordinates: { lat: 28.5355, lng: 77.2732 },
    status: "Operational",
    centerType: "Skill & Vocational Training",
    contactPersonPlaceholder: "[Center Superintendent / Regional Head]",
    phonePlaceholder: "[+91 11 4987 XXXX]",
    emailPlaceholder: "[okhla.center@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[1,420+ Youth Trained]",
      activeBatches: "[6 Batches Active]",
      labsEstablished: "[3 Modern IT & Healthcare Labs]",
      placementOrSupportRate: "[76% Placement Linkage]"
    },
    facilities: [
      "Healthcare Skill Training Lab",
      "Computer & AI Tinkering Lab",
      "Career Counselling & Rozgar Desk",
      "Smart Interactive Audio-Visual Classroom"
    ],
    partnerOrSponsorPlaceholder: "[Supported under CSR Initiative - Partner Alpha]"
  },
  {
    id: "center-up-01",
    name: "Neev Community Learning & Health Hub",
    code: "[NWF-UP-02]",
    state: "Uttar Pradesh",
    district: "Varanasi",
    city: "Rohania",
    addressPlaceholder: "[Village & Post Rohania, Near Block Office, Varanasi - 221108]",
    pincodePlaceholder: "[221108]",
    coordinates: { lat: 25.2677, lng: 82.9194 },
    status: "Operational",
    centerType: "Child Welfare & Learning Hub",
    contactPersonPlaceholder: "[District Coordinator / Project Officer]",
    phonePlaceholder: "[+91 542 278 XXXX]",
    emailPlaceholder: "[varanasi.hub@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[980+ Children & Mothers]",
      activeBatches: "[4 Learning Batches]",
      labsEstablished: "[1 Remedial E-Library]",
      placementOrSupportRate: "[100% School Retention]"
    },
    facilities: [
      "Remedial Foundational Literacy Center",
      "Maternal & Child Nutrition Clinic",
      "Drinking Water Purification Point",
      "Community Library & Book Bank"
    ],
    partnerOrSponsorPlaceholder: "[Public Welfare & Community Supported]"
  },
  {
    id: "center-mh-01",
    name: "Neev Women SHG Enterprise & Livelihood Center",
    code: "[NWF-MH-03]",
    state: "Maharashtra",
    district: "Pune",
    city: "Hadapsar",
    addressPlaceholder: "[Survey No. 88, Livelihood Complex, Hadapsar, Pune - 411028]",
    pincodePlaceholder: "[411028]",
    coordinates: { lat: 18.5089, lng: 73.9259 },
    status: "Operational",
    centerType: "Women SHG Enterprise Center",
    contactPersonPlaceholder: "[SHG Federation Lead / Officer]",
    phonePlaceholder: "[+91 20 6652 XXXX]",
    emailPlaceholder: "[pune.shg@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[750+ Women Entrepreneurs]",
      activeBatches: "[5 Micro-Enterprise Units]",
      labsEstablished: "[2 Textile & Food Processing Units]",
      placementOrSupportRate: "[₹42 Lakhs Bank Linked]"
    },
    facilities: [
      "Industrial Sewing & Apparel Production Units",
      "Digital Financial Inclusion & Banking Desk",
      "Packaging & Quality Control Workshop",
      "Creche for Children of Trainee Mothers"
    ],
    partnerOrSponsorPlaceholder: "[CSR Co-Funded by Industrial Consortium]"
  },
  {
    id: "center-rj-01",
    name: "Neev Rural Water, Agriculture & Skill Hub",
    code: "[NWF-RJ-04]",
    state: "Rajasthan",
    district: "Alwar",
    city: "Behror",
    addressPlaceholder: "[Gram Panchayat Bhawan Road, Behror, Alwar - 301017]",
    pincodePlaceholder: "[301017]",
    coordinates: { lat: 27.8887, lng: 76.2825 },
    status: "CSR Co-Funded",
    centerType: "Skill & Vocational Training",
    contactPersonPlaceholder: "[Rural Project Lead]",
    phonePlaceholder: "[+91 1494 22 XXXX]",
    emailPlaceholder: "[alwar.center@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[1,120+ Farmers & Youth]",
      activeBatches: "[3 Agricultural Batches]",
      labsEstablished: "[1 Soil & Solar Tech Demo Lab]",
      placementOrSupportRate: "[820+ Acres Rainwater Recharged]"
    },
    facilities: [
      "Farmer Training & FPO Incubation Hall",
      "Rainwater Harvesting Demonstration Site",
      "Solar Tech & EV Maintenance Workshop",
      "Veterinary & Animal Husbandry Support Desk"
    ],
    partnerOrSponsorPlaceholder: "[CSR Sustainable Agriculture Project]"
  },
  {
    id: "center-jh-01",
    name: "Neev Tribal Welfare & STEAM Tinkering Lab",
    code: "[NWF-JH-05]",
    state: "Jharkhand",
    district: "Ranchi",
    city: "Namkum",
    addressPlaceholder: "[Station Road, Namkum Industrial Cluster, Ranchi - 834010]",
    pincodePlaceholder: "[834010]",
    coordinates: { lat: 23.3343, lng: 85.3905 },
    status: "Operational",
    centerType: "STEAM Tinkering & Innovation Lab",
    contactPersonPlaceholder: "[Education Program Coordinator]",
    phonePlaceholder: "[+91 651 290 XXXX]",
    emailPlaceholder: "[ranchi.steam@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[620+ Tribal Students]",
      activeBatches: "[4 STEAM Batches]",
      labsEstablished: "[1 Advanced Robotics Tinkering Lab]",
      placementOrSupportRate: "[100% Scholarship Assisted]"
    },
    facilities: [
      "Robotics, 3D Printer & IoT Hardware Kits",
      "Foundational Python & AI Learning Tablets",
      "Science Exhibition & Prototype Showcase Floor",
      "De-addiction & Sports Guidance Wing"
    ],
    partnerOrSponsorPlaceholder: "[Supported by Technology CSR Partner]"
  },
  {
    id: "center-mp-01",
    name: "Neev Central Healthcare & Mother-Child Center",
    code: "[NWF-MP-06]",
    state: "Madhya Pradesh",
    district: "Bhopal",
    city: "Govindpura",
    addressPlaceholder: "[Sector C, Industrial Area, Govindpura, Bhopal - 462023]",
    pincodePlaceholder: "[462023]",
    coordinates: { lat: 23.2599, lng: 77.4126 },
    status: "Upcoming",
    centerType: "Healthcare & Diagnostic Clinic",
    contactPersonPlaceholder: "[Project Medical Officer / Admin]",
    phonePlaceholder: "[+91 755 422 XXXX]",
    emailPlaceholder: "[bhopal.health@neevwelfare.org.in]",
    metrics: {
      beneficiariesCovered: "[Projected 2,500+ Annual]",
      activeBatches: "[Commissioning Phase Q3]",
      labsEstablished: "[Pathology & Diagnostic Wing]",
      placementOrSupportRate: "[Community Coverage 14 Slums]"
    },
    facilities: [
      "Diagnostic Blood Testing & Screening Wing",
      "Maternal Care & Telemedicine Consultation",
      "Emergency First Responder Training Hub",
      "Mobile Healthcare Camp Van Base"
    ],
    partnerOrSponsorPlaceholder: "[Open for CSR Sponsoring & Healthcare Grants]"
  }
];
