import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Retail = () => {
    return <IndustryTemplate data={industriesData["retail"]} relatedIndustries={relatedIndustries} />;
};

export default Retail;
