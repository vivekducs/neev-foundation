export interface ImpactStory {
  id: string;
  title: string;
  category: "Child Welfare" | "Youth Skilling" | "Women Empowerment" | "Healthcare" | "Environment";
  beneficiaryPseudonym: string;
  centerRef: string;
  location: string;
  summary: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quotePlaceholder: string;
  tags: string[];
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: "story-youth-healthcare-skill",
    title: "From Daily Wage Laborer to Certified General Duty Assistant",
    category: "Youth Skilling",
    beneficiaryPseudonym: "Beneficiary A.K. (Name anonymized for privacy)",
    centerRef: "[NWF-DL-01 - Okhla Center]",
    location: "New Delhi",
    summary: "Overcoming financial deprivation to secure dignified employment in a multi-specialty regional hospital.",
    challenge: "Faced severe livelihood disruption after family illness, forced to take irregular daily-wage labor without any formal certification or job stability.",
    intervention: "Enrolled in the 3-month Healthcare General Duty Assistant (GDA) curriculum at Neev Apex Skill Center, receiving practical training in patient vitals, emergency triage, and professional communication.",
    outcome: "Successfully placed at an accredited hospital network with medical insurance and steady monthly wages, now supporting his family with pride.",
    quotePlaceholder: "\"Neev's skill lab didn't just give me training; it gave me respect, steady employment, and a true sense of purpose for my future.\"",
    tags: ["Healthcare Skilling", "NSDC Aligned", "Job Placement", "Youth Empowerment"]
  },
  {
    id: "story-women-shg-tailoring",
    title: "Grassroots Women Creating an Apparel Micro-Enterprise Collective",
    category: "Women Empowerment",
    beneficiaryPseudonym: "Lakshmi SHG Group (Federated by Neev)",
    centerRef: "[NWF-MH-03 - Pune Center]",
    location: "Pune, Maharashtra",
    summary: "12 rural women uniting to create a sustainable garment production micro-enterprise.",
    challenge: "Limited local employment options for women, combined with informal lending traps carrying exorbitant interest rates.",
    intervention: "Neev organized them into a registered Self Help Group, provided subsidized industrial stitch machinery training, and facilitated zero-collateral micro-credit bank linkage.",
    outcome: "The collective now produces uniform apparel for local institutions, generating collective monthly revenues of [₹1.15 Lakhs+] and establishing emergency health savings.",
    quotePlaceholder: "\"Before joining Neev SHG, we were dependent. Today, we manage our bank accounts, decide our earnings, and fund our daughters' education.\"",
    tags: ["Self Help Group", "Micro Enterprise", "Financial Inclusion", "Women Dignity"]
  },
  {
    id: "story-child-remedial-education",
    title: "Rekindling the Spark of Learning for Out-of-School Children",
    category: "Child Welfare",
    beneficiaryPseudonym: "Student R.M. (Age 11)",
    centerRef: "[NWF-UP-02 - Varanasi Hub]",
    location: "Varanasi, Uttar Pradesh",
    summary: "Remedial learning and psycho-social support bringing a child back into formal mainstream schooling.",
    challenge: "Dropped out of school for two years following family migration, lagging behind in foundational reading and numeracy.",
    intervention: "Attended daily remedial learning sessions at Neev Learning Hub featuring tablet-based pictorial phonics, nutritional morning meals, and mentorship.",
    outcome: "Passed the state re-entry diagnostic assessment and enrolled in Grade 5 of the local government school, performing in the top decile of her class.",
    quotePlaceholder: "\"I thought school was closed for me forever. At Neev Center, my teacher showed me that learning is my greatest strength.\"",
    tags: ["Child Rights", "Foundational Literacy", "School Re-entry", "Nutrition Support"]
  },
  {
    id: "story-agro-water-conservation",
    title: "Reviving Parched Soil Through Check Dams & Rainwater Harvesting",
    category: "Environment",
    beneficiaryPseudonym: "Village Development Committee (Alwar Cluster)",
    centerRef: "[NWF-RJ-04 - Alwar Hub]",
    location: "Alwar, Rajasthan",
    summary: "Recharging depleted aquifers and training marginal farmers in organic cultivation techniques.",
    challenge: "Falling water table forced farmers to leave fields fallow during dry months, deepening rural indebtedness.",
    intervention: "Constructed 4 community percolation pits, 2 percolation check dams, and conducted organic multi-cropping workshops.",
    outcome: "Groundwater levels rose by an estimated [3.2 meters], enabling 140+ farming households to harvest a second crop cycle.",
    quotePlaceholder: "\"Water is life in our desert village. Neev's water harvesting structures brought greenery back to lands that had been dry for years.\"",
    tags: ["Water Conservation", "Rainwater Harvesting", "Organic Farming", "Rural Ecology"]
  },
  {
    id: "story-tinkering-tribal-steam",
    title: "Grassroots Robotics: Tribal Youth Designing an Agricultural Moisture Sensor",
    category: "Youth Skilling",
    beneficiaryPseudonym: "Student Innovation Team (Ranchi)",
    centerRef: "[NWF-JH-05 - Ranchi Lab]",
    location: "Ranchi, Jharkhand",
    summary: "High-school tribal students coding micro-controllers to automate village crop irrigation.",
    challenge: "Total lack of modern computer hardware and exposure to emerging technology in remote semi-urban school zones.",
    intervention: "Neev established a full STEAM Tinkering Lab with Arduino hardware, sensors, 3D printers, and practical robotics guidance.",
    outcome: "Students prototyped an automated soil-moisture alert buzzer using solar cells, winning recognition at the regional science congress.",
    quotePlaceholder: "\"We had never held a microchip before. Now we are writing code and building automated machines to help our parents in the fields.\"",
    tags: ["Robotics", "Tinkering Labs", "Tribal Welfare", "Emerging Tech"]
  }
];
