import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const applicationData: ServicePageData = {
  heroTitle: "Empowering businesses with tailored SAP solutions for seamless application development",
  heroDescription: "Leverage the power of SAP to transform your business processes, enhance operational efficiency, and drive innovation. Our SAP Application Development offering provides customized solutions tailored to your unique business needs. Whether you're looking to enhance existing SAP capabilities or build entirely new applications, we deliver scalable and future-ready solutions to support your digital transformation journey.",
  heroBackgroundImage: "https://images.unsplash.com/photo-1643513208375-df314b16347a?auto=format&fit=crop&q=80&w=2070",

  processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
  processSteps: [
    {
      title: "Custom Application Development",
      items: [
        "Build bespoke SAP applications tailored to your business requirements.",
        "Utilize SAP Business Technology Platform (SAP BTP) for cloud-based innovation.",
        "Seamlessly integrate with on-premise and cloud systems."
      ]
    },
    {
      title: "SAP Fiori and UX Enhancements",
      items: [
        "Develop intuitive, user-friendly interfaces with SAP Fiori.",
        "Modernize user experiences to improve productivity and user satisfaction."
      ]
    },
    {
      title: "Extensions and Integrations",
      items: [
        "Extend core SAP functionalities with custom extensions.",
        "Integrate SAP systems with third-party tools and platforms."
      ]
    },
    {
      title: "SAP S/4HANA Enablement",
      items: [
        "Design and build applications optimized for SAP S/4HANA.",
        "Leverage in-memory computing capabilities for real-time insights."
      ]
    },
    {
      title: "Mobile Solutions",
      items: [
        "Develop mobile applications to access SAP functionalities on the go.",
        "Ensure secure and responsive mobile experiences."
      ]
    },
    {
      title: "Analytics and Reporting",
      items: [
        "Build custom analytics dashboards and reports.",
        "Integrate SAP Analytics Cloud for advanced data visualization."
      ]
    }
  ]
};

const Application = () => {
  return <ServiceTemplate data={applicationData} />;
};

export default Application;
