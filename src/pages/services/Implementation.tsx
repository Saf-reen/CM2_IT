import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const implementationData: ServicePageData = {
  heroTitle: "Seamless SAP Implementation for Smart, Scalable, and Future-Ready Enterprises",
  heroDescription: "Implementing SAP solutions can be a transformative journey for organizations seeking to enhance efficiency, drive growth, and improve decision-making processes. Our SAP implementation offering is designed to deliver tailored solutions that align with your business objectives, ensuring a seamless transition to SAP systems with maximum value realization.",
  heroBackgroundImage: "/images/sap/sap_hero_banner_1764055717393.png",

  processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
  processSteps: [
    {
      title: "Assessment and Planning",
      items: [
        "Business process analysis",
        "Fit-gap analysis",
        "SAP system selection and roadmap creation"
      ]
    },
    {
      title: "System Design and Configuration",
      items: [
        "Detailed system design based on business requirements",
        "Configuration of SAP modules (e.g., SAP S/4HANA, SAP FICO, SAP MM, etc.)",
        "Integration with existing systems"
      ]
    },
    {
      title: "Data Migration and Integration",
      items: [
        "Data cleansing and preparation",
        "Secure and accurate data migration",
        "Integration with third-party applications and legacy systems"
      ]
    },
    {
      title: "Training and Change Management",
      items: [
        "Comprehensive user training programs",
        "Change management strategies to drive user adoption",
        "Development of user documentation and knowledge transfer"
      ]
    },
    {
      title: "Testing and Quality Assurance",
      items: [
        "Unit testing, integration testing, and user acceptance testing (UAT)",
        "System performance optimization",
        "Addressing issues and ensuring system readiness"
      ]
    },
    {
      title: "Go-Live and Post-Implementation Support",
      items: [
        "Deployment planning and execution",
        "Real-time monitoring during go-live",
        "Ongoing support and maintenance services"
      ]
    }
  ]
};

const Implementation = () => {
  return <ServiceTemplate data={implementationData} />;
};

export default Implementation;
