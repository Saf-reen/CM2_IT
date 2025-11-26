import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const HealthCare = () => {
    return <IndustryTemplate data={industriesData["healthcare"]} relatedIndustries={relatedIndustries} />;
};

export default HealthCare;
