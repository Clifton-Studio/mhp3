import { SquarePen, CalendarClock, ChartBar } from "lucide-react";

import DiagonalPattern from "./diagonal-pattern";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FEATURES_DATA = [
  {
    title: "Agentic test management",
    description:
      "Unblock high-velocity development by powering up your local agents or activating fully autonomous agents to manage test coverage upon every PR. Ensure your 100s of PRs are doing what they should, well.",
    icon: SquarePen,
    image: {
      light: "/images/homepage/feature-agentic-test-management-light.png",
      dark: "/images/homepage/feature-agentic-test-management-dark.png",
      width: 626,
      height: 800,
    },
  },
  {
    title: "Deterministic test execution",
    description:
      "Maestro flows are defined in human-readable YAML files so you and your agents always track to ground truth, not a black box. Have complete confidence with concrete, auditable tests.",
    icon: CalendarClock,
    image: {
      light: "/images/homepage/feature-deterministic-test-execution-light.png",
      dark: "/images/homepage/feature-deterministic-test-execution-dark.png",
      width: 800,
      height: 1020,
    },
  },
  {
    title: "Reliable, open-source framework",
    description:
      "Trusted by thousands of top-tier teams, Maestro is a super-efficient, transparent platform for your QA. Build on a trustworthy foundation dedicated to the agentic future. Extend it yourself if you like.",
    icon: ChartBar,
    image: {
      light: "/images/homepage/feature-reliable-open-source-framework-light.png",
      dark: "/images/homepage/feature-reliable-open-source-framework-dark.png",
      width: 800,
      height: 1020,
    },
  },
];

const FeaturesList = () => {
  return (
    <Tabs
      defaultValue={FEATURES_DATA[0].title}
      className="flex items-center max-lg:flex-col lg:divide-x"
    >
      <TabsList className="flex h-auto flex-1 flex-col bg-transparent p-0 max-lg:border-x lg:border-t">
        {FEATURES_DATA.map((item) => (
          <TabsTrigger
            key={item.title}
            value={item.title}
            className="group relative whitespace-normal border-b px-1 py-5 text-start data-[state=active]:shadow-none lg:px-8"
          >
            <div className="">
              <div className="flex items-center gap-1.5">
                <item.icon className="size-4" />
                <h3 className="text-lg tracking-[-0.36px]">{item.title}</h3>
              </div>
              <p className="text-muted-foreground mt-2.5 tracking-[-0.32px]">
                {item.description}
              </p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="hidden flex-1 lg:block">
        {FEATURES_DATA.map((item, index) => (
          <TabsContent
            key={index}
            value={item.title}
            className="m-0 px-6 py-[38px] max-lg:border-x"
          >
            <div className="flex justify-center">
              <div>
                <div className="px-6 lg:px-10">
                  <DiagonalPattern className="h-6 lg:h-10" />
                </div>
                <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
                  <DiagonalPattern className="h-full w-6 lg:w-10" />
                  <div className="m-3">
                    <img
                      src={item.image.light}
                      alt={item.title}
                      width={item.image.width}
                      height={item.image.height}
                      className="rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg dark:hidden"
                    />
                    <img
                      src={item.image.dark}
                      alt={item.title}
                      width={item.image.width}
                      height={item.image.height}
                      className="hidden rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg dark:block"
                    />
                  </div>
                  <DiagonalPattern className="w-6 lg:w-10" />
                </div>
                <div className="px-6 lg:px-10">
                  <DiagonalPattern className="h-6 lg:h-10" />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default FeaturesList;
