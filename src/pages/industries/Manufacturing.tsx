import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Manufacturing = () => {
    return <IndustryTemplate data={industriesData["manufacturing"]} relatedIndustries={relatedIndustries} />;
};

export default Manufacturing;
