import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const rolloutsData: ServicePageData = {
    heroTitle: "Seamless SAP Rollouts: Global Reach, Local Expertise, Rapid Deployment",
    heroDescription: "SAP rollouts involve the extension of an existing SAP implementation to new business units, regions, or subsidiaries while maintaining the core configuration and minimizing disruptions. Our SAP rollout services help organizations standardize processes, achieve faster deployments, and ensure alignment with global business objectives.",
    heroBackgroundImage: "https://images.unsplash.com/photo-1744680740445-0dcf900ce2ed?auto=format&fit=crop&q=80&w=2070",

    processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
    processSteps: [
        {
            title: "Global Template Design & Gap Analysis",
            items: [
                "Review and customize the global SAP template",
                "Conduct Fit-Gap analysis for local legal, statutory, and business requirements"
            ]
        },
        {
            title: "Localization & Compliance",
            items: [
                "Adapt configuration for local tax laws, financial reporting, and statutory compliance",
                "Language packs and translation services",
                "Country-specific legal requirements (e.g., SAF-T, GST, e-invoicing)"
            ]
        },
        {
            title: "Master Data Harmonization",
            items: [
                "Synchronization of material masters, vendor/customer masters, chart of accounts, etc."
            ]
        },
        {
            title: "Configuration & Customization",
            items: [
                "Local adaptations in finance, procurement, sales, production, etc.",
                "Support for multiple currencies and units of measure"
            ]
        },
        {
            title: "Integration",
            items: [
                "Seamless integration with the central SAP instance (S/4HANA, ECC)",
                "Interfaces with local systems or third-party applications"
            ]
        },
        {
            title: "Data Migration",
            items: [
                "Legacy data extraction, cleansing, and loading",
                "Validation and reconciliation"
            ]
        },
        {
            title: "Testing & Training",
            items: [
                "Unit, Integration, and User Acceptance Testing (UAT)",
                "Training local users in native languages and workflows"
            ]
        },
        {
            title: "Go-Live & Post-Go-Live Support",
            items: [
                "Cutover planning and execution",
                "Hypercare support to ensure stabilization"
            ]
        }
    ]
};

const Rollouts = () => {
    return <ServiceTemplate data={rolloutsData} />;
};

export default Rollouts;
