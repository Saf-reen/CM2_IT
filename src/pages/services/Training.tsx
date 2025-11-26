import ServiceTemplate from "@/components/ServiceTemplate";
import { ServicePageData } from "@/data/servicesData";

const trainingData: ServicePageData = {
    heroTitle: "Expert SAP Training & Guidance for Seamless Implementation and User Mastery",
    heroDescription: "Our SAP Instructional and Training Services are designed to empower your workforce with the skills and knowledge they need to maximize the value of your SAP investments. By providing tailored learning experiences, we ensure your teams can efficiently leverage SAP's capabilities to meet your business objectives.",

    processTitle: "Delivering Impact-Driven SAP Implementations for Sustainable Growth",
    processSteps: [
        {
            title: "Training Needs Analysis",
            items: [
                "Stakeholder interviews, process review",
                "Skill gap assessments",
                "SAP module mapping to business roles"
            ]
        },
        {
            title: "Curriculum Development",
            items: [
                "Role-based learning paths (e.g., End-user, Power-user, Super-user)",
                "Module-specific content (e.g., SAP S/4HANA Finance, MM, PM, SD)",
                "Onboarding programs for new SAP users"
            ]
        },
        {
            title: "Instructional Design",
            items: [
                "SCORM-compliant eLearning content",
                "Blended learning approach (instructor-led + digital)",
                "Microlearning modules and job aids",
                "Gamified or interactive learning for higher retention"
            ]
        },
        {
            title: "Content Creation",
            items: [
                "SAP simulations using tools like SAP Enable Now, uPerform, Articulate, Captivate",
                "Step-by-step process guides, SOPs, quick reference cards",
                "Video tutorials and recorded webinars",
                "Multilingual content if needed"
            ]
        },
        {
            title: "Delivery Options",
            items: [
                "Instructor-led Training (ILT) – Onsite or Virtual",
                "eLearning portals or LMS integration (e.g., SAP Learning Hub, SuccessFactors LMS)",
                "Webinars & live demos for new rollouts or updates"
            ]
        },
        {
            title: "SAP Change Management Enablement",
            items: [
                "Train-the-trainer programs",
                "Communication plans to support end-user adoption",
                "Reinforcement strategies post go-live"
            ]
        },
        {
            title: "Post-Go-Live Support & Continuous Learning",
            items: [
                "Refresher courses",
                "Helpdesk training content",
                "Change request-based learning updates"
            ]
        }
    ]
};

const Training = () => {
    return <ServiceTemplate data={trainingData} />;
};

export default Training;
