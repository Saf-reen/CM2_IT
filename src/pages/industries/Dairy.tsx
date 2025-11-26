import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Dairy = () => {
    return <IndustryTemplate data={industriesData["dairy"]} relatedIndustries={relatedIndustries} />;
};

export default Dairy;
