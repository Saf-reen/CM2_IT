import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const upgradesData: ServicePageData = {
    heroTitle: "Seamless SAP Upgrades for Enhanced Performance & Future-Ready Operations",
    heroDescription: "SAP upgrades are critical for organizations aiming to maintain competitive advantages, enhance system performance, and adopt the latest innovations in enterprise resource planning (ERP) systems. Our SAP upgrade services are designed to deliver a seamless transition to newer SAP versions, whether it's a technical upgrade, a functional enhancement, or a full migration to SAP S/4HANA.",

    processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
    processSteps: [
        {
            title: "Assessment & Planning",
            items: [
                "System Assessment: Analyze the current SAP landscape (ECC, S/4HANA, BW, CRM, etc.)",
                "Upgrade Readiness Check: Use SAP's Readiness Check tools to assess technical and functional impact.",
                "Roadmap Development: Create a phased upgrade plan aligned with the client's business goals.",
                "Custom Code Impact Analysis: Evaluate custom developments for compatibility."
            ]
        },
        {
            title: "Technical Upgrade",
            items: [
                "System Copy/Backup: Ensure safe rollback options.",
                "SAP Software Update Manager (SUM): Execute the technical upgrade process.",
                "Database Upgrade (if needed): Upgrade HANA, Oracle, or other DBs.",
                "SP Stack & Kernel Updates: Apply the latest support packages and kernel patches."
            ]
        },
        {
            title: "Functional Upgrade",
            items: [
                "Business Process Review: Identify opportunities for process optimization.",
                "Activate New Features: Enable innovations and best practices available in the new release.",
                "Fiori Enhancements: Introduce or enhance Fiori apps/UI if moving to S/4HANA.",
                "Testing Support: Regression testing, integration testing, and UAT."
            ]
        },
        {
            title: "Custom Code Remediation",
            items: [
                "Code Cleanup: Remove unused or obsolete code",
                "S/4HANA Adaptation: Use SAP Custom Code Migration tools to adapt custom code.",
                "Performance Optimization: Refactor code for HANA compatibility and performance."
            ]
        },
        {
            title: "Data Management",
            items: [
                "Archiving Strategy: Manage data volume before migration.",
                "Data Consistency Checks: Ensure data integrity post-upgrade."
            ]
        },
        {
            title: "Training & Change Management",
            items: [
                "Key User Training: Train functional teams on new features.",
                "End-User Enablement: Support user adoption with guides and hands-on sessions.",
                "Change Management: Manage organizational change and communication."
            ]
        },
        {
            title: "Post-Upgrade Support",
            items: [
                "Hypercare Support: Immediate support post go-live.",
                "Performance Monitoring: System health checks and tuning.",
                "Ongoing AMS (Application Management Services): Continued support and enhancement."
            ]
        }
    ]
};

const Upgrades = () => {
    return <ServiceTemplate data={upgradesData} />;
};

export default Upgrades;
