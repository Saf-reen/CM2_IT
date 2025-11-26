import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const PublicSector = () => {
  return <IndustryTemplate data={industriesData["public-sector"]} relatedIndustries={relatedIndustries} />;
};

export default PublicSector;
