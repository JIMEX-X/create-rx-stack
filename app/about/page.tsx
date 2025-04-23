import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Developer",
  description: "Learn about the developer behind Create RX App",
};

export default function AboutPage() {
  // Developer information
  const DEVELOPER = {
    name: "Caleb Jimmy <RX Developer>",
    role: "Full Stack Developer",
    bio: "Passionate about creating modern web applications with the latest technologies. Specializing in React, Next.js, TypeScript, and tRPC.",
    github: "https://github.com/JIMEX-M",
    twitter: "https://twitter.com/jimex_m",
    website: "https://github.com/JIMEX-M",
  };

  return (
    <div className=" py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-purple-700 dark:from-zinc-200 dark:to-purple-400">
            About the Developer
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Meet the creator behind Create RX App
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-400 to-purple-700 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">RX</span>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{DEVELOPER.name}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{DEVELOPER.role}</p>
          </div>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-center">{DEVELOPER.bio}</p>

          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href={DEVELOPER.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href={DEVELOPER.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link
              href={DEVELOPER.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6 px-5">
          <h2 className="text-2xl font-bold text-center">
            About Create RX App
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Create RX App was born out of the need for a streamlined way to
            bootstrap modern full-stack applications. After setting up numerous
            projects with the same tech stack, I decided to create a tool that
            would automate this process and incorporate best practices.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            The goal of Create RX App is to provide developers with a solid
            foundation for building full-stack applications with Next.js and
            tRPC, while offering flexibility through customization options. It's
            designed to be simple enough for beginners but powerful enough for
            experienced developers.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            I'm constantly working to improve Create RX App and add new features
            based on community feedback. If you have suggestions or encounter
            any issues, please don't hesitate to reach out or contribute to the
            project.
          </p>
        </div>

        <div className="text-center">
          <Link href="/docs">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
              Explore the Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
