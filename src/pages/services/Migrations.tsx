import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const migrationData: ServicePageData = {
  heroTitle: "Future-Proof Your Business with Hassle-Free SAP Migration",
  heroDescription: "Migrating to SAP S/4HANA or other SAP platforms is a transformative opportunity for organizations to modernize their business processes, increase operational efficiency, and achieve scalable growth. Our SAP Migration Offering is designed to ensure a seamless transition from legacy systems to SAP's advanced environment while minimizing risks and disruptions.",
  heroBackgroundImage: "/images/sap/sap_hero_banner_1764055717393.png",

  processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
  processSteps: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Detailed analysis of your existing systems and processes.",
        "Identification of potential risks and mitigation strategies."
      ]
    },
    {
      title: "Migration Planning",
      items: [
        "Customized roadmap for a seamless transition.",
        "Resource allocation and timeline management."
      ]
    },
    {
      title: "Data Migration and Validation",
      items: [
        "Data extraction, transformation, and loading (ETL).",
        "Rigorous testing to ensure data accuracy and completeness"
      ]
    },
    {
      title: "System Configuration",
      items: [
        "Configuration of SAP systems to meet business requirements.",
        "Integration with third-party applications and systems."
      ]
    },
    {
      title: "User Training and Change Management",
      items: [
        "Tailored training programs for end-users and IT staff.",
        "Change management strategies to ensure user adoption."
      ]
    },
    {
      title: "Post-Migration Support",
      items: [
        "Ongoing monitoring and optimization.",
        "Dedicated support to address any issues post-go-live."
      ]
    }
  ]
};

const Migration = () => {
  return <ServiceTemplate data={migrationData} />;
};

export default Migration;
