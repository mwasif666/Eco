import React from "react";
import { Metadata } from "next";
import AboutMeMain from "@/pages/about/about-me";

export const metadata: Metadata = {
  title: "Econetix - About us page",
};

const AboutMePage = () => {
  return <AboutMeMain />;
};

export default AboutMePage;
