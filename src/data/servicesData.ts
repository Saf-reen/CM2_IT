import { LucideIcon } from "lucide-react";

// Service Page Data Interface
export interface ServiceStep {
    title: string;
    items: string[];
}

export interface ServicePageData {
    // Hero Section
    heroTitle: string;
    heroDescription: string;
    heroBackgroundImage?: string;

    // Process Section
    processTitle: string;
    processSteps: ServiceStep[];

    // Optional custom sections
    customContent?: React.ReactNode;
}

// Shared Data across all service pages
export const sharedCapabilities = [
    {
        title: "End-to-End SAP Services",
        description: "Implementation, migration, support, and optimization across SAP S/4HANA, ECC, BTP, and Industry Cloud."
    },
    {
        title: "Industry Expertise",
        description: "Deep domain knowledge in manufacturing, oil & gas, healthcare, retail, and public sector."
    },
    {
        title: "Certified SAP Professionals",
        description: "Team of certified consultants with cross-functional and technical expertise."
    },
    {
        title: "Rapid Deployment & Methodologies",
        description: "Accelerated delivery using SAP Activate, best practices, and agile frameworks"
    },
    {
        title: "Cloud & On-Prem Expertise",
        description: "Proven capabilities in SAP S/4HANA Cloud (Public & Private), RISE with SAP, and on-premise transformations."
    },
    {
        title: "Innovation-Driven",
        description: "Leveraging AI/ML, IoT, and mobility within SAP BTP to deliver intelligent enterprise solutions."
    },
    {
        title: "Global Delivery Model",
        description: "Onsite-offshore hybrid delivery with 24x7 support and managed services."
    }
];

export const techStackItems = [
    { name: "Application Development", category: "Development" },
    { name: "Data & Analytics", category: "Analytics" },
    { name: "Automation", category: "Automation" },
    { name: "Integration", category: "Integration" },
    { name: "ABAP", category: "Development" },
    { name: "SAC", category: "Analytics" },
    { name: "FIORI", category: "UI/UX" },
    { name: "RPA", category: "Automation" },
    { name: "CPI", category: "Integration" },
    { name: "AI", category: "Innovation" }
];

export const sapServices = [
    { name: "Implementation", path: "/services/implementation" },
    { name: "Rollouts", path: "/services/rollouts" },
    { name: "Training", path: "/services/training" },
    { name: "Migrations", path: "/services/migration" },
    { name: "Upgrades", path: "/services/upgrades" },
    { name: "Development", path: "/services/development" },
    { name: "Support", path: "/services/support" },
    { name: "Integration", path: "/services/integration" },
    { name: "Testing", path: "/services/testing" }
];
