import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Travel = () => {
    return <IndustryTemplate data={industriesData["travel"]} relatedIndustries={relatedIndustries} />;
};

export default Travel;
