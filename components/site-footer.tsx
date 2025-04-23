import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-5 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-zinc-400 to-purple-700"></div>
            <span className="font-bold">Create RX App</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/JIMEX-M"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Caleb . JIMEX
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/JIMEX-M/create-rx-app"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/docs"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Documentation
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <a
            href="https://twitter.com/jimex_m"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            X (formerly Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
}
