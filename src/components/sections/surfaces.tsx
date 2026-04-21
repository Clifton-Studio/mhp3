import React from "react";

import { Shapes } from "lucide-react";

import SectionHeader from "../elements/section-header";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SURFACES = [
  {
    label: "AI",
    title: "Power up your favorite agent",
    description:
      'Turn your coding agent into a mobile expert with our official Skill, MCP server, and Claude Plugin. Give agents the "eyes and hands" to build and verify E2E coverage locally, ensuring every change is fully tested before you ever open a PR.',
    image: {
      src: "/images/homepage/adaptive-agent-dark.png",
      width: 1000,
      height: 602,
    },
  },
  {
    label: "Desktop",
    title: "Build tests in Maestro Studio",
    description:
      'A visual IDE for Mac and Windows that makes manual test creation feel like magic. Contextual autocomplete, "tap-tap-tap" YAML generation, deep selector inspection, and an embedded emulator to fix broken flows or validate agent-generated coverage in seconds.',
    image: {
      src: "/images/homepage/adaptive-studio-dark.png",
      width: 1740,
      height: 1050,
    },
  },
  {
    label: "Command Line",
    title: "Use the Maestro CLI",
    description:
      "The lightweight, open-source engine for developers who prefer to bring their own IDE. Use the CLI to run human-readable YAML tests with the fastest, most dependable runner in mobile - whether you're iterating locally or executing at scale in CI.",
    image: {
      src: "/images/homepage/adaptive-cli-dark.png",
      width: 1112,
      height: 658,
    },
  },
];

const Surfaces = () => {
  return (
    <section id="surfaces">
      <SectionHeader
        iconTitle="Surfaces"
        title="Build like the wind [layout 2]"
        icon={Shapes}
        description="Write and manage tests wherever you like, however fast you like."
      />

      <div className="container border-x">
        {SURFACES.map((item, index) => (
          <div
            key={item.title}
            className="grid lg:grid-cols-2 lg:items-center lg:gap-12"
          >
            <div
              className={cn(
                "",
                index % 2 === 1 && "lg:order-2",
              )}
            >
              <img
                src={item.image.src}
                alt={item.title}
                width={item.image.width}
                height={item.image.height}
                className="h-auto w-full rounded-3xl border lg:rounded-[3rem]"
              />
            </div>
            <div
              className={cn(
                "py-6 md:py-8 lg:py-10",
                index % 2 === 1 && "lg:order-1",
              )}
            >
              <Badge
                variant="default"
                className="w-fit border-transparent bg-foreground px-1 py-0.5 text-xs font-bold leading-none tracking-[0.06em] text-background shadow-none hover:bg-foreground"
              >
                {item.label}
              </Badge>
              <h3 className="mt-2 text-lg tracking-[-0.36px]">{item.title}</h3>
              <p className="text-muted-foreground mt-4 text-sm tracking-[-0.28px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Surfaces;
