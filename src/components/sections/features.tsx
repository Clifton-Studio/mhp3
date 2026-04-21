import React from "react";

import { PocketKnife } from "lucide-react";
import SectionHeader from "../elements/section-header";
import FeaturesList from "../elements/features-list";

const Features = () => {
  return (
    <section id="smart-productivity" className="">
      <div className="border-t">
        <SectionHeader
          iconTitle="Features"
          title="Battle-tested. AI-native."
          icon={PocketKnife}
          description={
            "Robust, open-source, time-tested - and now fully primed for human+AI development."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <FeaturesList />
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Features;
