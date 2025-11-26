import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const testingData: ServicePageData = {
    heroTitle: "Maximize SAP Efficiency with Expert Testing—Ensuring Stability, Security, and Scalability",
    heroDescription: "SAP systems are the backbone of many organizations, enabling critical business functions such as finance, supply chain, human resources, and more. Ensuring these systems operate flawlessly is essential for business continuity and growth. Our SAP Testing Services are designed to provide comprehensive, end-to-end testing solutions that ensure the performance, reliability, and scalability of your SAP applications.",

    processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
    processSteps: [
        {
            title: "Functional Testing",
            items: ["Unit Testing", "Integration Testing", "System Testing", "User Acceptance Testing (UAT)", "Regression Testing"]
        },
        {
            title: "Performance Testing",
            items: ["Load Testing", "Stress Testing", "Volume Testing", "Benchmark Testing"]
        },
        {
            title: "Security Testing",
            items: ["Role-based Access Testing", "Authorization Testing", "SOD (Segregation of Duties) Analysis"]
        },
        {
            title: "Data Migration Testing",
            items: ["Source-to-Target Reconciliation", "Data Integrity and Validation Checks", "ETL Testing"]
        },
        {
            title: "End-to-End Business Process Testing",
            items: ["Tests full business scenarios across modules (e.g., O2C, P2P, R2R) involving multiple systems (SAP and non-SAP)."]
        },
        {
            title: "Automation Testing",
            items: ["Test Automation Strategy", "Script Development (e.g., in CBTA, Tricentis Tosca, Selenium)", "Continuous Testing Integration (CI/CD)"]
        },
        {
            title: "SAP Cloud Solutions Testing",
            items: ["SAP S/4HANA Cloud", "SAP SuccessFactors", "SAP Ariba", "SAP Concur"]
        },
        {
            title: "Upgrade and Patch Testing",
            items: ["SPAU/SPDD Analysis", "Post-upgrade Regression Testing"]
        },
        {
            title: "Tools and Accelerators",
            items: ["Test case libraries", "Custom test scripts", "Reusable automation frameworks", "Dashboards and reporting templates"]
        },
        {
            title: "Value-Added Services",
            items: ["Test advisory and CoE setup", "Risk-based testing strategies", "Agile/DevOps aligned testing", "Compliance and audit support (e.g., FDA, GDPR)"]
        }
    ]
};

const Testing = () => {
    return <ServiceTemplate data={testingData} />;
};

export default Testing;
