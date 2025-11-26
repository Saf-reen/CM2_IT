import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Textile = () => {
    return <IndustryTemplate data={industriesData["textile"]} relatedIndustries={relatedIndustries} />;
};

export default Textile;
