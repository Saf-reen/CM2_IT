import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const Energy = () => {
  return <IndustryTemplate data={industriesData["energy"]} relatedIndustries={relatedIndustries} />;
};

export default Energy;
