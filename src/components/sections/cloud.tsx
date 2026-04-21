import { Cloud, FastForward, Plug, SearchCheck } from "lucide-react";

import SectionHeader from "../elements/section-header";
import { Button } from "../ui/button";

const cloudFeatures = [
  {
    title: "Parallel execution",
    description:
      "Run your entire test suite across real devices simultaneously to cut CI wait times down to minutes. Enterprise-grade.",
    icon: FastForward,
  },
  {
    title: "Test with context",
    description:
      "Every run includes step-by-step video playback, detailed logs, and flake detection so you can diagnose and fix bugs efficiently.",
    icon: SearchCheck,
  },
  {
    title: "Seamless CI integration",
    description:
      "Plug Maestro into your existing pipeline with a single command to get instant reporting and deep diagnostic context.",
    icon: Plug,
  },
];

const CloudSection = () => {
  return (
    <section id="cloud">
      <SectionHeader
        iconTitle="Maestro Cloud"
        title="Scale in our cloud"
        icon={Cloud}
        description="Maestro Cloud provides high-speed, test-tuned infrastructure"
      />

      <div className="container border-x p-6 md:p-8 lg:p-10">
        <div className="rounded-2xl border p-4 md:p-6">
          <img
            src="/images/homepage/maestro-dashboard.png"
            alt="Maestro Cloud dashboard"
            width={2561}
            height={712}
            className="h-auto w-full rounded-lg"
          />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {cloudFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="flex gap-2.5" key={feature.title}>
                <Icon className="mt-0.5 size-[18px] shrink-0" />
                <div>
                  <h3 className="text-lg !leading-none tracking-[-0.96px] lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-2.5 text-sm tracking-[-0.36px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <a href="/cloud">Learn more about Maestro Cloud</a>
          </Button>
        </div>
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default CloudSection;
