import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import DiagonalPattern from "../elements/diagonal-pattern";

const downloadOptions = [
  { label: "Studio desktop app - Mac", href: "/download#studio-mac" },
  { label: "Studio desktop app - Windows", href: "/download#studio-windows" },
  { label: "Studio desktop app - Linux", href: "/download#studio-linux" },
  { label: "Maestro CLI", href: "/download#cli" },
];

export default function Hero() {
  return (
    <section className="text-center">
      <div className="container mx-auto pb-10 pt-16 text-center md:pb-14 md:pt-20 lg:pb-16 lg:pt-28">
        <h1 className="mx-auto max-w-[500px] text-balance text-[2.5rem] leading-[1.2] tracking-[-1.6px] md:text-[4rem] md:!leading-[1.15] md:tracking-[-4.32px] lg:text-7xl">
          <span className="block whitespace-nowrap">Go ahead.</span>
          <span className="block whitespace-nowrap">Code at 150mph.</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-5 max-w-[500px] leading-[1.5] tracking-[-0.32px] md:mt-6">
          Maestro is mobile UI testing at agentic velocity. Open source,
          human-readable code, easy CI integrations, and powerful CLI and
          desktop apps.
        </p>
        <div className="mt-6 inline-flex rounded-md shadow-sm md:mt-8 lg:mt-10">
          <Button asChild className="rounded-r-none">
            <a href="/download">Download</a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Choose download option"
                className="rounded-l-none border-l border-primary-foreground/20 px-3"
              >
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-56">
              {downloadOptions.map((option) => (
                <DropdownMenuItem key={option.href} asChild>
                  <a href={option.href}>{option.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-[24px] border p-1 shadow-lg md:mt-12 md:rounded-[40px] lg:mt-16">
          <img
            src="/images/homepage/dummy-screenshot.png"
            alt="Maestro running a mobile UI test"
            className="h-auto w-full rounded-[20px] object-contain md:rounded-[36px]"
            width={1671}
            height={1202}
          />
        </div>
      </div>
    </section>
  );
}

export function HeroMedia() {
  return (
    <section className="pb-16 text-center lg:pb-0">
      <div className="flex h-8 gap-1 max-lg:hidden">
        <div className="flex-1 border" />
        <DiagonalPattern className="w-52" />
        <div className="w-24 border" />
        <DiagonalPattern className="w-52" />
        <div className="w-24 border" />
        <DiagonalPattern className="w-52" />
        <div className="flex-1 border" />
      </div>
      <div className="flex">
        <BorderedSection className="2xl:flex-1" />
        <div className={`container !pt-0 lg:!p-1.5`}>
          <img
            src="/images/homepage/hero.png"
            alt="Hero"
            className="mx-auto rounded-xl border object-contain p-1 shadow-lg 2xl:max-w-[1092px] dark:invert"
            width={1000}
            height={600}
          />
        </div>
        <BorderedSection className="border-l border-r-0 2xl:flex-1" />
      </div>
      <div className="flex max-lg:hidden">
        <div className="h-8 flex-1 border" />
        <div className="h-[96px] w-[min(753px,55vw)] -translate-y-1.5">
          <DiagonalPattern />
        </div>
        <div className="h-8 flex-1 border" />
      </div>
    </section>
  );
}

const BorderedSection = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("relative w-[159px] border-r p-1 max-lg:hidden", className)}
  >
    {children}
  </div>
);
