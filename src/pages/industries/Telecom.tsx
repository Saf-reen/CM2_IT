import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Telecom = () => {
    return <IndustryTemplate data={industriesData["telecom"]} relatedIndustries={relatedIndustries} />;
};

export default Telecom;
