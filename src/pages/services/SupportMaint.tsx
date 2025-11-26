import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const supportData: ServicePageData = {
    heroTitle: "Reliable SAP Support & Maintenance – Ensuring Performance, Stability & Continuous Innovation!",
    heroDescription: "In today's dynamic business environment, SAP solutions are critical for streamlining operations and driving business transformation. Our SAP Support & Maintenance offering ensures your SAP systems operate at peak efficiency, enabling you to focus on your core business activities.",

    processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
    processSteps: [
        {
            title: "Application Support",
            items: [
                "Incident management (L1, L2, L3 support)",
                "Bug fixing and troubleshooting",
                "User support and query handling",
                "Month-end/quarter-end support activities"
            ]
        },
        {
            title: "System Maintenance",
            items: [
                "SAP system health checks",
                "Performance tuning",
                "Transport management",
                "Patch and OSS Note implementation"
            ]
        },
        {
            title: "Enhancement & Change Management",
            items: [
                "Small enhancements or configuration changes",
                "Functional  improvements based on user feedback",
                "New report or form development"
            ]
        },
        {
            title: "SAP Basis Support",
            items: [
                "User and role management",
                "System monitoring and job scheduling",
                "Kernel upgrades and system patches"
            ]
        },
        {
            title: "Integration Support",
            items: [
                "Middleware monitoring (PI/PO/CPI)",
                "Support for integrations with third-party systems (CRM, PLM, HRMS, etc.)"
            ]
        },
        {
            title: "Upgrades & Legal Compliance",
            items: [
                "SAP version upgrades (Support Pack / Enhancement Pack)",
                "Country-specific legal changes (GST, VAT, e-invoicing, etc.)"
            ]
        },
        {
            title: "Service Levels",
            items: [
                "SLA-Based Support: Define response and resolution times by issue priority",
                "24x7 or Business Hours Support: Flexible support timing based on client needs",
                "Dedicated / Shared Resource Models"
            ]
        },
        {
            title: "Reporting & Governance",
            items: [
                "Monthly service reports (incidents, SLA compliance, user feedback)",
                "Quarterly service review meetings (CSAT, improvements, roadmap alignment)"
            ]
        },
        {
            title: "Optional Add-ons",
            items: [
                "Training & Knowledge Transfer for end-users",
                "System Audit & Optimization reviews",
                "Cloud Hosting or Infrastructure Management (for SAP S/4HANA Private Cloud)"
            ]
        }
    ]
};

const SupportMaint = () => {
    return <ServiceTemplate data={supportData} />;
};

export default SupportMaint;
