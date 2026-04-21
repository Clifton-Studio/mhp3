import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DATA = [
  {
    subTitle: "AI",
    title: "Power up your favorite agent",
    description:
      'Turn your coding agent into a mobile expert with our official Skill, MCP server, and Claude Plugin. Give agents the "eyes and hands" to build and verify E2E coverage locally, ensuring every change is fully tested before you ever open a PR.',
    imageFirst: true,
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
    imageFirst: false,
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
    imageFirst: true,
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
    <div className="p-1 md:p-3 lg:p-4">
      <div className="grid flex-1 lg:grid-cols-3">
        {DATA.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "overflow-hidden rounded-md p-4 shadow-none",
              index > 0 && "border-t-0 lg:border-l-0 lg:border-t",
              index === 0 && "rounded-b-none lg:rounded-r-none lg:rounded-bl-md",
              index === 1 && "rounded-none",
              index === DATA.length - 1 &&
                "rounded-t-none lg:rounded-l-none lg:rounded-tr-md",
            )}
          >
            <div className="flex h-full flex-col">
              <div
                className={cn(
                  "overflow-hidden rounded-sm border bg-muted",
                  item.imageFirst ? "order-1" : "order-1 lg:order-2 lg:mt-4",
                )}
              >
                <img
                  src={item.image.dark}
                  alt={item.title}
                  width={item.image.width}
                  height={item.image.height}
                  className="h-auto w-full"
                />
              </div>
              <CardContent
                className={cn(
                  "p-0",
                  item.imageFirst ? "order-2 mt-4" : "order-2 mt-4 lg:order-1 lg:mb-4 lg:mt-0",
                )}
              >
                <Badge
                  variant="default"
                  className="w-fit border-transparent bg-foreground px-1 py-0.5 text-xs font-bold leading-none tracking-[0.06em] text-background shadow-none hover:bg-foreground"
                >
                  {item.subTitle}
                </Badge>
                <h3 className="mt-2 text-lg tracking-[-0.36px]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-4 text-sm tracking-[-0.28px]">
                  {item.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveList;
