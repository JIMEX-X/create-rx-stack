import Link from "next/link";
import type { ReactNode } from "react";

interface DocCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export function DocCard({ href, icon, title, description }: DocCardProps) {
  return (
    <Link href={href} className="block">
      <div className="docs-card group">
        <div className="flex items-start gap-4">
          <div className="text-purple-600 dark:text-purple-400">{icon}</div>
          <div>
            <h3 className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
