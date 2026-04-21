import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    subTitle: "AI",
    title: "Power up your favorite agent",
    description:
      'Turn your coding agent into a mobile expert with our official Skill, MCP server, and Claude Plugin. Give agents the "eyes and hands" to build and verify E2E coverage locally, ensuring every change is fully tested before you ever open a PR.',
    icon: "CircleHelp",
    image: {
      light: "/images/homepage/adaptive-agent-light.png",
      dark: "/images/homepage/adaptive-agent-dark.png",
      width: 1000,
      height: 602,
    },
  },
  {
    subTitle: "Desktop",
    title: "Build tests in Maestro Studio",
    description:
      'A visual IDE for Mac and Windows that makes manual test creation feel like magic. Contextual autocomplete, "tap-tap-tap" YAML generation, deep selector inspection, and an embedded emulator to fix broken flows or validate agent-generated coverage in seconds.',
    icon: "Volume2",
    image: {
      light: "/images/homepage/adaptive-studio-light.png",
      dark: "/images/homepage/adaptive-studio-dark.png",
      width: 1740,
      height: 1050,
    },
  },
  {
    subTitle: "Command Line",
    title: "Use the Maestro CLI",
    description:
      "The lightweight, open-source engine for developers who prefer to bring their own IDE. Use the CLI to run human-readable YAML tests with the fastest, most dependable runner in mobile - whether you're iterating locally or executing at scale in CI.",
    icon: "Lightbulb",
    image: {
      light: "/images/homepage/adaptive-cli-light.png",
      dark: "/images/homepage/adaptive-cli-dark.png",
      width: 1112,
      height: 658,
    },
  },
];
const AdaptiveList = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className={`relative isolate pt-5 text-start lg:pt-20`}
          >
            <div className="px-1 lg:px-8">
              <Badge
                variant="default"
                className="w-fit border-transparent bg-foreground px-1 py-0.5 text-xs font-bold leading-none tracking-[0.06em] text-background shadow-none hover:bg-foreground"
              >
                {item.subTitle}
              </Badge>
            </div>
            <h3 className={`mt-2 px-1 text-lg tracking-[-0.36px] lg:px-8`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground px-1 py-4 tracking-[-0.32px] lg:px-8">
              {item.description}
            </p>
            <div className="border-t py-4 lg:px-2">
              <img
                src={item.image.dark}
                alt={item.title}
                width={item.image.width}
                height={item.image.height}
                className="h-auto w-full rounded-md shadow-md lg:rounded-xl lg:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveList;
