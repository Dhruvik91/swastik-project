"use client";

import { ProcessSection } from "../components/ProcessSection";
import { ServiceCTA } from "../components/ServiceCTA";
import { ServiceGrid } from "../components/ServiceGrid";
import { ServiceHero } from "../components/ServiceHero";
import { services, process } from "../constants";

export const ServicesContainer = () => {
    return (
        <div className="overflow-hidden">
          <ServiceHero />
          <ServiceGrid services={services} />
          <ProcessSection processes={process} />
          <ServiceCTA />
        </div>
      );
}