import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const integrationData: ServicePageData = {
  heroTitle: "Seamless SAP Integration: Connect, Automate, and Optimize Your Business Effortlessly.",
  heroDescription: "SAP Integration is essential for organizations seeking seamless communication between SAP systems and other enterprise applications. Our integration solutions ensure data consistency, enhance process efficiency, and enable real-time decision-making by connecting diverse systems and applications.",
  heroBackgroundImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2070",

  processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
  processSteps: [
    {
      title: "Integration Strategy & Assessment",
      items: [
        "Evaluate existing landscape and integration architecture",
        "Define integration roadmap aligned with business goals",
        "Assess readiness for SAP BTP (Business Technology Platform) adoption"
      ]
    },
    {
      title: "SAP BTP & Cloud Integration",
      items: [
        "SAP Integration Suite implementation (Cloud Integration, API Management, Event Mesh)",
        "Real-time and batch integration scenarios using iFlows",
        "B2B integration with trading partners using EDI & AS2"
      ]
    },
    {
      title: "SAP PI/PO and CPI Migration",
      items: [
        "Migrate legacy SAP PI/PO scenarios to SAP Cloud Integration (CPI)",
        "Convert message mappings, interface designs, and RFC/BAPI calls"
      ]
    },
    {
      title: "API Management & Development",
      items: [
        "Develop and publish REST/SOAP APIs via SAP API Management",
        "Secure APIs with OAuth, SAML, or API Keys",
        "Govern API usage with throttling and analytics"
      ]
    },
    {
      title: "Integration with Non-SAP Systems",
      items: [
        "Integrate with CRM (Salesforce, MS Dynamics), eCommerce (Magento, Shopify), PLM (Teamcenter, Windchill)",
        "Middleware support for Dell Boomi, MuleSoft, Informatica, etc.",
        "Use of OData, REST, SOAP, IDoc, and RFC/BAPI connectors"
      ]
    },
    {
      title: "IoT & Event-Driven Integration",
      items: [
        "Connect IoT devices and industrial systems to SAP via Event Mesh",
        "Trigger SAP workflows based on IoT data streams"
      ]
    },
    {
      title: "SAP S/4HANA Integration",
      items: [
        "Core Data Services (CDS), OData, and BAPI integrations",
        "Embedded analytics integration",
        "Integration with SAP Fiori apps and side-by-side extensions"
      ]
    },
    {
      title: "Monitoring, Support & Maintenance",
      items: [
        "Proactive monitoring using SAP Solution Manager or SAP BTP tools",
        "SLA-based integration support",
        "Ongoing optimization and updates"
      ]
    }
  ]
};

const Integration = () => {
  return <ServiceTemplate data={integrationData} />;
};

export default Integration;
