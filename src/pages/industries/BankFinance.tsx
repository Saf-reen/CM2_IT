import React from "react";
import IndustryTemplate from "@/components/IndustryTemplate";
import { industriesData, relatedIndustries } from "@/data/industriesData";

const BankFinance = () => {
  return <IndustryTemplate data={industriesData["banking-finance"]} relatedIndustries={relatedIndustries} />;
};

export default BankFinance;
