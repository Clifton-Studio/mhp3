import { Bot, BrainCircuit, ShieldCheck, Workflow } from "lucide-react";

import SectionHeader from "../elements/section-header";

const agentifyFeatures = [
  {
    title: "The Maestro Bot",
    description:
      "Activate Maestro's cloud agent in your CI to react to every PR, analyzing code changes and binaries to create or fix tests automatically.",
    icon: Bot,
  },
  {
    title: "Trust but verify",
    description:
      "Receive PR reports with crisp summaries, evidence of coverage, and test run histories - with full logs for you or your agent to dive deeper.",
    icon: ShieldCheck,
  },
  {
    title: "Fully autonomous QA",
    description:
      "Treat the Maestro Bot like you would a true Head of QA. Set guidelines. Ask questions. Request further coverage. Build institutional knowledge.",
    icon: BrainCircuit,
  },
];

const Agentify = () => {
  return (
    <section id="agentify">
      <SectionHeader
        iconTitle="Automation Automation"
        title="Agentify your workflow"
        icon={Workflow}
        description="Bring Maestro into your pull requests - and go full self-driving"
      />

      <div className="container border-x p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agentifyFeatures.map((feature) => {
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
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Agentify;
