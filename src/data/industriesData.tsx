import {
    Landmark,
    Building2,
    Zap,
    Heart,
    Factory,
    ShoppingBag,
    Plane,
    Phone,
    Code,
    BarChart3,
    Cpu,
    Workflow
} from "lucide-react";
import { MilkIcon, ShirtIcon } from "@/components/icons/IndustryIcons";
import { IndustryData } from "@/components/IndustryTemplate";

export const relatedIndustries = [
    { name: "Banking & Finance", icon: Landmark, image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000", path: "/industries/banking-finance" },
    { name: "Dairy", icon: MilkIcon, image: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=1000", path: "/industries/dairy" },
    { name: "Travel", icon: Plane, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000", path: "/industries/travel" },
    { name: "Public Sector", icon: Building2, image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=1000", path: "/industries/public-sector" },
    { name: "Textile", icon: ShirtIcon, image: "https://images.unsplash.com/photo-1534639077088-d702bcf685e7?auto=format&fit=crop&q=80&w=1000", path: "/industries/textile" },
    { name: "Telecom", icon: Phone, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000", path: "/industries/telecom" },
    { name: "Energy & Utilities", icon: Zap, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000", path: "/industries/energy" },
    { name: "Manufacturing", icon: Factory, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", path: "/industries/manufacturing" },
    { name: "Healthcare", icon: Heart, image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000", path: "/industries/healthcare" },
    { name: "Retail", icon: ShoppingBag, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", path: "/industries/retail" },
];

export const industriesData: Record<string, IndustryData> = {
    "banking-finance": {
        id: "banking-finance",
        title: "Accelerating Smart Finance Transformation with SAP Solutions",
        subtitle: "Empowering financial institutions with intelligent, SAP-driven solutions.",
        heroImage: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
        introTitle: "Accelerating Smart Finance Transformation",
        introText: "Our innovative technologies empower financial institutions to streamline operations, enhance customer experiences, and drive growth.",
        introImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Core Banking Solutions",
        coreFeaturesSubtitle: "Comprehensive banking transformation",
        coreFeatures: [
            {
                title: "Efficient Transaction Management",
                description: "Ensure seamless processing of high-volume transactions.",
                icon: Workflow
            },
            {
                title: "Customer Data Integration",
                description: "Deliver a 360-degree view of customers for personalized banking experiences.",
                icon: Code
            },
            {
                title: "Scalability",
                description: "Adapt to business growth and market demands.",
                icon: BarChart3
            }
        ],
        secondaryFeaturesTitle: "Risk and Compliance Management",
        secondaryFeatures: [
            "Risk Analytics: Real-time insights into credit, market, and operational risks.",
            "Regulatory Reporting: Automated compliance with global and regional requirements.",
            "Fraud Detection: Advanced tools to mitigate financial crime and improve security."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Financial Planning and Analysis",
        statsSubtitle: "Data-driven financial insights",
        statsFeatures: [
            "Predictive Analytics: Leverage AI to forecast market trends and customer behavior.",
            "Performance Monitoring: Track key financial metrics with customizable dashboards.",
            "Scenario Analysis: Simulate economic changes and their impacts on your business."
        ],
        carouselTitle: "Customer Experience Management",
        carouselItems: [
            {
                title: "Omnichannel Banking",
                description: "Provide consistent services across web, mobile, and in-branch.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Customer Feedback Integration",
                description: "Use real-time feedback to refine services.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "AI-Powered Personalization",
                description: "Deliver offers and recommendations based on individual preferences.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Digital Transformation",
        transformationPillars: [
            {
                title: "Cloud Adoption",
                description: "Migrate operations to secure, scalable cloud platforms.",
                icon: Cpu
            },
            {
                title: "Blockchain Solutions",
                description: "Enhance transparency and efficiency in financial transactions.",
                icon: Code
            },
            {
                title: "Process Automation",
                description: "Reduce operational costs with AI and robotic process automation.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "public-sector": {
        id: "public-sector",
        title: "Driving Smart Transformation in Public Sector with SAP",
        subtitle: "Empowering government organizations with intelligent solutions.",
        heroImage: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Transforming Public Sector Operations",
        introText: "Our innovative technologies empower government institutions to streamline operations, enhance citizen experiences, and drive digital transformation.",
        introImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Government Resource Planning (GRP)",
        coreFeaturesSubtitle: "Comprehensive government solutions",
        coreFeatures: [
            {
                title: "Budget Planning and Forecasting",
                description: "Advanced tools for efficient budget management.",
                icon: BarChart3
            },
            {
                title: "Public Sector Financial Management",
                description: "Streamline financial operations and reporting.",
                icon: Workflow
            },
            {
                title: "Real-time Data Insights",
                description: "Make informed decisions with live data analytics.",
                icon: Cpu
            }
        ],
        secondaryFeaturesTitle: "Citizen Engagement and Experience",
        secondaryFeatures: [
            "Multi-channel communication platforms",
            "Personalized citizen services",
            "Feedback and grievance management systems"
        ],
        secondaryImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Smart City Solutions",
        statsSubtitle: "Building intelligent cities",
        statsFeatures: [
            "IoT-enabled infrastructure management",
            "Data-driven urban planning",
            "Public safety and disaster response tools"
        ],
        carouselTitle: "Human Capital Management",
        carouselItems: [
            {
                title: "Workforce Planning and Analytics",
                description: "Optimize government workforce management.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Talent Acquisition and Management",
                description: "Attract and retain top public sector talent.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Training and Development Solutions",
                description: "Continuous learning for government employees.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            }
        ],
        transformationTitle: "Regulatory Compliance",
        transformationPillars: [
            {
                title: "Integrated Compliance Reporting Tools",
                description: "Automated compliance and reporting systems.",
                icon: Code
            },
            {
                title: "Automated Audit Processes",
                description: "Streamline audit workflows and documentation.",
                icon: Workflow
            },
            {
                title: "Risk Assessment and Mitigation Strategies",
                description: "Proactive risk management for public sector.",
                icon: BarChart3
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "energy": {
        id: "energy",
        title: "Enabling Intelligent Energy and Utility Enterprises through SAP Solutions",
        subtitle: "Powering the future with smart energy solutions.",
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Energy Transition Support",
        introText: "Our innovative technologies empower energy and utility companies to streamline operations, enhance customer experiences, and drive sustainable growth.",
        introImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Digital Transformation",
        coreFeaturesSubtitle: "Modernizing energy operations",
        coreFeatures: [
            {
                title: "Assessment and Roadmap",
                description: "Evaluate current systems and processes to develop a comprehensive digital transformation roadmap.",
                icon: BarChart3
            },
            {
                title: "SAP S/4HANA Migration",
                description: "Transition seamlessly from legacy systems to SAP S/4HANA for improved efficiency and decision-making.",
                icon: Cpu
            },
            {
                title: "Custom Development",
                description: "Tailor SAP solutions to meet specific business needs.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Asset Management and Maintenance Optimization",
        secondaryFeatures: [
            "SAP EAM Integration: Implement SAP Enterprise Asset Management (EAM) to optimize asset lifecycle management.",
            "Predictive Maintenance: Leverage IoT and machine learning to predict and prevent asset failures.",
            "Regulatory Compliance: Ensure adherence to industry standards and safety regulations."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Customer Engagement and Experience",
        statsSubtitle: "Enhanced customer interactions",
        statsFeatures: [
            "SAP C/4HANA Solutions: Enhance customer interactions and loyalty through personalized, omnichannel experiences.",
            "Billing and Revenue Management: Streamline billing processes and ensure accurate revenue management with SAP IS-U.",
            "Self-Service Platforms: Deploy customer portals to enable real-time access to account and service information."
        ],
        carouselTitle: "Energy Transition Support",
        carouselItems: [
            {
                title: "Renewable Energy Integration",
                description: "Utilize SAP solutions to manage renewable energy portfolios and grid integration.",
                image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Carbon Accounting",
                description: "Implement tools to track, report, and reduce carbon emissions.",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Smart Grid Management",
                description: "Optimize energy distribution networks through real-time data insights.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
            }
        ],
        transformationTitle: "Advanced Analytics and Insights",
        transformationPillars: [
            {
                title: "SAP Analytics Cloud",
                description: "Gain actionable insights with real-time data analytics and reporting.",
                icon: BarChart3
            },
            {
                title: "Data-Driven Decision Making",
                description: "Empower teams with predictive models and machine learning algorithms.",
                icon: Cpu
            },
            {
                title: "KPI Monitoring",
                description: "Develop dashboards to monitor key operational and financial performance metrics.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "dairy": {
        id: "dairy",
        title: "Delivering Smarter Dairy Services",
        subtitle: "Turning Dairy Operations Into Smart Enterprises with SAP",
        heroImage: "https://images.unsplash.com/photo-1528498033381-a9e5c4a5c925?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Transforming Dairy Operations",
        introText: "The dairy industry is evolving rapidly, with challenges ranging from regulatory compliance and supply chain complexities to consumer demands for transparency and sustainability. SAP provides tailored solutions to address these challenges, enabling dairy producers, processors, and distributors to optimize operations, improve profitability, and ensure quality at every step of the value chain.",
        introImage: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Supply Chain Management",
        coreFeaturesSubtitle: "End-to-end dairy supply chain optimization",
        coreFeatures: [
            {
                title: "Production Planning",
                description: "Streamline production schedules to align with demand forecasts.",
                icon: Workflow
            },
            {
                title: "Inventory Management",
                description: "Real-time tracking of raw materials, finished goods, and storage conditions.",
                icon: BarChart3
            },
            {
                title: "Logistics Optimization",
                description: "Enhance milk collection, transportation, and delivery efficiency.",
                icon: Cpu
            },
            {
                title: "Supplier Collaboration",
                description: "Foster strong relationships with farmers and raw material suppliers.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Quality and Compliance Management",
        secondaryFeatures: [
            "Traceability Systems: End-to-end product traceability, from farm to shelf.",
            "Compliance Tools: Ensure adherence to food safety standards like HACCP, FSMA, and local regulations.",
            "Lab Testing Integration: Automate and centralize lab test results for better decision-making."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Sustainability and Environmental Impact",
        statsSubtitle: "Eco-friendly dairy operations",
        statsFeatures: [
            "Carbon Footprint Tracking: Monitor and reduce emissions throughout the production and supply chain.",
            "Waste Management: Optimize processes to reduce waste and improve resource utilization.",
            "Sustainable Sourcing: Promote eco-friendly farming and procurement practices."
        ],
        carouselTitle: "Customer Experience and Consumer Insights",
        carouselItems: [
            {
                title: "Product Personalization",
                description: "Support diverse product lines tailored to market demands.",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Transparency Tools",
                description: "Enable customers to trace product origins and production processes.",
                image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Marketing Analytics",
                description: "Gain insights into customer preferences and behaviors.",
                image: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?q=80&w=2070&auto=format&fit=crop"
            }
        ],
        transformationTitle: "Digital Transformation",
        transformationPillars: [
            {
                title: "IoT Integration",
                description: "Leverage smart sensors for milk quality monitoring and equipment maintenance.",
                icon: Cpu
            },
            {
                title: "Data Analytics",
                description: "Utilize advanced analytics for demand forecasting and operational efficiency.",
                icon: BarChart3
            },
            {
                title: "Cloud Solutions",
                description: "Enable scalable and flexible IT infrastructure.",
                icon: Code
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "textile": {
        id: "textile",
        title: "Enabling Smart, Sustainable Textile Operations with SAP",
        subtitle: "Transforming textile manufacturing with intelligent solutions.",
        heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea1f5db3?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Smart Textile Manufacturing",
        introText: "Our innovative technologies empower textile manufacturers to streamline operations, enhance sustainability, and drive growth in a competitive market.",
        introImage: "https://images.unsplash.com/photo-1534639077088-d702bcf685e7?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "SAP Implementation and Integration",
        coreFeaturesSubtitle: "Comprehensive textile solutions",
        coreFeatures: [
            {
                title: "SAP S/4HANA Implementation",
                description: "Streamline core processes with a comprehensive ERP platform tailored for manufacturing.",
                icon: Cpu
            },
            {
                title: "Integration Services",
                description: "Seamlessly connect SAP solutions with existing systems to ensure data integrity and operational efficiency.",
                icon: Workflow
            },
            {
                title: "Cloud Migration",
                description: "Transition from on-premises systems to SAP's cloud platforms for enhanced scalability and reduced IT overhead.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Smart Factory Enablement",
        secondaryFeatures: [
            "IoT and Industry 4.0 Integration: Harness IoT to enable predictive maintenance, real-time monitoring, and advanced analytics.",
            "Digital Twin Deployment: Implement digital twins for simulating and optimizing production processes.",
            "Advanced Analytics: Leverage AI-driven insights to enhance production efficiency and quality control."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Supply Chain Optimization",
        statsSubtitle: "Resilient textile supply chains",
        statsFeatures: [
            "SAP Integrated Business Planning (IBP): Align demand, supply, and inventory planning for a resilient supply chain.",
            "Logistics and Transportation Management: Optimize logistics with SAP's advanced transportation management solutions.",
            "Supplier Collaboration: Enhance collaboration and transparency across the supplier network using SAP Ariba."
        ],
        carouselTitle: "Workforce Empowerment",
        carouselItems: [
            {
                title: "SAP SuccessFactors",
                description: "Manage workforce planning, learning, and performance to upskill employees for modern manufacturing challenges.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Digital Work Instructions",
                description: "Equip employees with real-time instructions via SAP's digital solutions to reduce errors and increase efficiency.",
                image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Change Management Services",
                description: "Support cultural and operational shifts during technology adoption.",
                image: "https://images.unsplash.com/photo-1534639077088-d702bcf685e7?q=80&w=2070&auto=format&fit=crop"
            }
        ],
        transformationTitle: "Sustainability and Compliance",
        transformationPillars: [
            {
                title: "Energy and Resource Management",
                description: "Track and optimize energy consumption with SAP Environment, Health, and Safety Management (EHS).",
                icon: Zap
            },
            {
                title: "Regulatory Compliance",
                description: "Stay compliant with evolving global and industry-specific regulations.",
                icon: Code
            },
            {
                title: "Circular Economy Enablement",
                description: "Support sustainable practices like recycling and waste reduction with SAP's integrated tools.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "manufacturing": {
        id: "manufacturing",
        title: "From Shop Floor to Customer Success – Reinventing Manufacturing Services",
        subtitle: "Transforming manufacturing with intelligent SAP solutions.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Smart Manufacturing Excellence",
        introText: "Our innovative technologies empower manufacturers to streamline operations, enhance production efficiency, and drive sustainable growth.",
        introImage: "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "SAP Implementation and Integration",
        coreFeaturesSubtitle: "Comprehensive manufacturing solutions",
        coreFeatures: [
            {
                title: "SAP S/4HANA Implementation",
                description: "Streamline core processes with a comprehensive ERP platform tailored for manufacturing.",
                icon: Cpu
            },
            {
                title: "Integration Services",
                description: "Seamlessly connect SAP solutions with existing systems to ensure data integrity and operational efficiency.",
                icon: Workflow
            },
            {
                title: "Cloud Migration",
                description: "Transition from on-premises systems to SAP's cloud platforms for enhanced scalability and reduced IT overhead.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Smart Factory Enablement",
        secondaryFeatures: [
            "IoT and Industry 4.0 Integration: Harness IoT to enable predictive maintenance, real-time monitoring, and advanced analytics.",
            "Digital Twin Deployment: Implement digital twins for simulating and optimizing production processes.",
            "Advanced Analytics: Leverage AI-driven insights to enhance production efficiency and quality control."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1565514020176-dbf2277f18f3?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Supply Chain Optimization",
        statsSubtitle: "Resilient manufacturing supply chains",
        statsFeatures: [
            "SAP Integrated Business Planning (IBP): Align demand, supply, and inventory planning for a resilient supply chain.",
            "Logistics and Transportation Management: Optimize logistics with SAP's advanced transportation management solutions.",
            "Supplier Collaboration: Enhance collaboration and transparency across the supplier network using SAP Ariba."
        ],
        carouselTitle: "Workforce Empowerment",
        carouselItems: [
            {
                title: "SAP SuccessFactors",
                description: "Manage workforce planning, learning, and performance to upskill employees for modern manufacturing challenges.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Digital Work Instructions",
                description: "Equip employees with real-time instructions via SAP's digital solutions to reduce errors and increase efficiency.",
                image: "https://images.unsplash.com/photo-1565514020176-dbf2277f18f3?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Change Management Services",
                description: "Support cultural and operational shifts during technology adoption.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Sustainability and Compliance",
        transformationPillars: [
            {
                title: "Energy and Resource Management",
                description: "Track and optimize energy consumption with SAP Environment, Health, and Safety Management (EHS).",
                icon: Zap
            },
            {
                title: "Regulatory Compliance",
                description: "Stay compliant with evolving global and industry-specific regulations.",
                icon: Code
            },
            {
                title: "Circular Economy Enablement",
                description: "Support sustainable practices like recycling and waste reduction with SAP's integrated tools.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "retail": {
        id: "retail",
        title: "Creating Impactful Retail Experiences with Customer-Centric Innovation",
        subtitle: "Transforming retail with intelligent, customer-focused solutions.",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Retail Excellence",
        introText: "Our innovative technologies empower retailers to streamline operations, enhance customer experiences, and drive growth in a competitive market.",
        introImage: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "SAP Implementation",
        coreFeaturesSubtitle: "Comprehensive retail solutions",
        coreFeatures: [
            {
                title: "SAP S/4HANA Implementation",
                description: "Comprehensive SAP S/4HANA implementation tailored to retail operations.",
                icon: Cpu
            },
            {
                title: "Seamless Integration",
                description: "Seamless integration with legacy systems and third-party applications.",
                icon: Workflow
            },
            {
                title: "Accelerated Deployment",
                description: "Accelerated deployment with minimal disruption to daily operations.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Customer-Centric Solutions",
        secondaryFeatures: [
            "Personalized shopping experiences powered by SAP Customer Experience (SAP CX).",
            "Real-time insights into customer preferences through advanced analytics.",
            "Omni-channel support to deliver consistent experiences across physical and digital touchpoints."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Inventory and Supply Chain Optimization",
        statsSubtitle: "Smart inventory management",
        statsFeatures: [
            "Intelligent inventory management powered by SAP Integrated Business Planning (SAP IBP).",
            "Real-time supply chain visibility to mitigate risks and optimize costs.",
            "Automated replenishment processes to prevent stockouts and overstocking."
        ],
        carouselTitle: "Retail-Specific Insights",
        carouselItems: [
            {
                title: "Advanced Analytics",
                description: "Advanced analytics and dashboards tailored to the retail industry.",
                image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Sales Tracking",
                description: "Real-time sales tracking and predictive analysis to forecast trends.",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Data-Driven Decisions",
                description: "Data-driven decision-making to improve marketing strategies and product offerings.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Digital Transformation Enablement",
        transformationPillars: [
            {
                title: "AI and Machine Learning",
                description: "AI and machine learning capabilities integrated into retail processes.",
                icon: Cpu
            },
            {
                title: "Cloud-Based Solutions",
                description: "Cloud-based solutions for scalability and flexibility.",
                icon: Code
            },
            {
                title: "Enhanced Productivity",
                description: "Enhanced workforce productivity with SAP Fiori apps.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "travel": {
        id: "travel",
        title: "Driving Memorable Journeys with Intelligent Travel Solutions",
        subtitle: "Transforming travel experiences with innovative SAP solutions.",
        heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Intelligent Travel Platform",
        introText: "Our innovative technologies empower travel companies to streamline operations, enhance customer experiences, and drive growth in the travel industry.",
        introImage: "https://images.unsplash.com/photo-1713461983836-de0a45009424?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Intelligent Travel Platform",
        coreFeaturesSubtitle: "Comprehensive travel management",
        coreFeatures: [
            {
                title: "Comprehensive Platform",
                description: "A comprehensive platform integrating all aspects of travel management, including booking, payments, and customer engagement.",
                icon: Workflow
            },
            {
                title: "Real-time Itinerary Management",
                description: "Real-time itinerary management and updates.",
                icon: Cpu
            },
            {
                title: "Personalized Marketing",
                description: "Personalized marketing and promotions.",
                icon: BarChart3
            },
            {
                title: "Integrated Payment Solutions",
                description: "Integrated payment solutions for seamless transactions.",
                icon: Code
            }
        ],
        secondaryFeaturesTitle: "Aviation Solutions",
        secondaryFeatures: [
            "Tailored tools for airlines to optimize operations and enhance passenger satisfaction",
            "Fleet management and maintenance",
            "Crew scheduling and optimization",
            "Dynamic pricing and revenue management"
        ],
        secondaryImage: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Hospitality Solutions",
        statsSubtitle: "Exceptional guest experiences",
        statsFeatures: [
            "Empower hotels and resorts to deliver exceptional guest experiences and operational excellence.",
            "Property management systems",
            "Automated check-in and check-out systems",
            "Guest feedback and sentiment analysis"
        ],
        carouselTitle: "Car Rental and Mobility Services",
        carouselItems: [
            {
                title: "Fleet Tracking",
                description: "Fleet tracking and optimization for rental services.",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Dynamic Pricing",
                description: "Dynamic pricing strategies for maximum revenue.",
                image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Contactless Service",
                description: "Contactless customer service options for modern travelers.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Corporate Travel Management",
        transformationPillars: [
            {
                title: "Expense Management",
                description: "Expense and reimbursement management for corporate travel.",
                icon: BarChart3
            },
            {
                title: "Traveller Safety",
                description: "Traveller safety and risk management systems.",
                icon: Code
            },
            {
                title: "Policy Enforcement",
                description: "Policy enforcement and approvals for compliance.",
                icon: Workflow
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "telecom": {
        id: "telecom",
        title: "Enhancing Customer Connectivity Through Smarter Telecom Services",
        subtitle: "Empowering telecom providers with intelligent SAP solutions.",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
        introTitle: "SAP for Telecom",
        introText: "Our innovative technologies empower telecom providers to streamline operations, enhance customer experiences, and drive growth in the telecommunications industry.",
        introImage: "https://images.unsplash.com/photo-1552926738-05d2482b9c36?q=80&w=1974&auto=format&fit=crop",
        coreFeaturesTitle: "Customer Experience Management",
        coreFeaturesSubtitle: "Personalized telecom experiences",
        coreFeatures: [
            {
                title: "SAP Customer Data Cloud",
                description: "Centralized customer data for better insights and engagement.",
                icon: Code
            },
            {
                title: "SAP Sales and Service Cloud",
                description: "Enabling personalized sales and exceptional service experiences.",
                icon: Workflow
            },
            {
                title: "Omnichannel Integration",
                description: "Unified customer interactions across multiple channels.",
                icon: Cpu
            }
        ],
        secondaryFeaturesTitle: "Revenue Management and Billing",
        secondaryFeatures: [
            "SAP Billing and Revenue Innovation Management (BRIM): Comprehensive solutions for subscription-based and usage-based billing.",
            "Revenue Assurance and Compliance: Ensure accuracy and adherence to regulatory standards.",
            "Flexible Monetization Models: Enable diverse pricing and billing strategies."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Network and Asset Management",
        statsSubtitle: "Optimized network performance",
        statsFeatures: [
            "SAP S/4HANA for Asset Management: Proactive maintenance and improved asset lifecycle management.",
            "SAP Predictive Maintenance and Service: Utilize IoT and machine learning for predictive insights.",
            "Resource Planning Tools: Efficient allocation of network and physical assets."
        ],
        carouselTitle: "Digital Transformation and Innovation",
        carouselItems: [
            {
                title: "SAP Business Technology Platform",
                description: "Integration, data management, and analytics capabilities.",
                image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "AI and Machine Learning",
                description: "Enhance automation and service intelligence.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "IoT Solutions",
                description: "Enable smart, connected devices for advanced telecom services.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Operational Excellence",
        transformationPillars: [
            {
                title: "SAP S/4HANA",
                description: "Streamline business processes and enable real-time decision-making.",
                icon: Cpu
            },
            {
                title: "Supply Chain Optimization",
                description: "Align supply chain processes with customer demand.",
                icon: Workflow
            },
            {
                title: "Risk and Compliance Management",
                description: "Minimize disruptions with proactive risk management.",
                icon: Code
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    },

    "healthcare": {
        id: "healthcare",
        title: "Transforming Healthcare with Intelligent Solutions",
        subtitle: "Empowering healthcare providers with innovative SAP solutions.",
        heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2070",
        introTitle: "Healthcare Innovation",
        introText: "Our innovative technologies empower healthcare organizations to streamline operations, enhance patient experiences, and drive better health outcomes.",
        introImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        coreFeaturesTitle: "Patient Care Excellence",
        coreFeaturesSubtitle: "Comprehensive healthcare solutions",
        coreFeatures: [
            {
                title: "Electronic Health Records",
                description: "Centralized patient data management for better care coordination.",
                icon: Code
            },
            {
                title: "Patient Engagement",
                description: "Enhanced patient communication and self-service portals.",
                icon: Workflow
            },
            {
                title: "Clinical Decision Support",
                description: "AI-powered insights for improved clinical outcomes.",
                icon: Cpu
            }
        ],
        secondaryFeaturesTitle: "Operational Efficiency",
        secondaryFeatures: [
            "Resource Management: Optimize staff scheduling and facility utilization.",
            "Supply Chain Optimization: Streamline medical supply procurement and inventory.",
            "Financial Management: Integrated billing and revenue cycle management."
        ],
        secondaryImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop",
        statsTitle: "Quality and Compliance",
        statsSubtitle: "Healthcare standards excellence",
        statsFeatures: [
            "Regulatory Compliance: Ensure adherence to healthcare regulations and standards.",
            "Quality Metrics: Track and improve clinical quality indicators.",
            "Risk Management: Proactive identification and mitigation of healthcare risks."
        ],
        carouselTitle: "Digital Health Innovation",
        carouselItems: [
            {
                title: "Telemedicine",
                description: "Enable remote consultations and virtual care delivery.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Health Analytics",
                description: "Advanced analytics for population health management.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Mobile Health",
                description: "Patient engagement through mobile applications.",
                image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2070"
            }
        ],
        transformationTitle: "Healthcare Digital Transformation",
        transformationPillars: [
            {
                title: "AI in Healthcare",
                description: "Leverage AI for diagnostics and treatment planning.",
                icon: Cpu
            },
            {
                title: "Interoperability",
                description: "Seamless data exchange across healthcare systems.",
                icon: Workflow
            },
            {
                title: "Security and Privacy",
                description: "Robust data protection and HIPAA compliance.",
                icon: Code
            }
        ],
        techIconsTitle: "Drive Innovation and Excellence with the Latest Tech Trends",
        techIcons: [
            { name: "ABAP", icon: Code },
            { name: "SAC", icon: BarChart3 },
            { name: "FIORI", icon: Cpu },
            { name: "RPA", icon: Workflow },
            { name: "CPI", icon: Workflow },
            { name: "AI", icon: Cpu }
        ]
    }
};
