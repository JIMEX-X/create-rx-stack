import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Create RX App",
}

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg text-muted-foreground">Common questions about Create RX App</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Create RX App?</AccordionTrigger>
          <AccordionContent>
            Create RX App is a CLI tool for bootstrapping Next.js applications with tRPC, TypeScript, and other modern
            web development tools. It provides a streamlined developer experience with sensible defaults and optional
            features.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How is Create RX App different from create-next-app?</AccordionTrigger>
          <AccordionContent>
            While create-next-app sets up a basic Next.js project, Create RX App goes further by integrating tRPC for
            end-to-end type safety, configuring TypeScript properly, and offering optional features like shadcn/ui
            components. It's specifically designed for full-stack TypeScript applications with a focus on developer
            experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need to know tRPC to use Create RX App?</AccordionTrigger>
          <AccordionContent>
            While prior knowledge of tRPC is helpful, it's not required. Create RX App sets up a basic tRPC
            configuration with examples that you can learn from. The tRPC documentation is also an excellent resource
            for learning as you go.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I use Create RX App for production projects?</AccordionTrigger>
          <AccordionContent>
            Yes, Create RX App is designed for both personal and production projects. It follows best practices for
            security, performance, and code organization, making it suitable for production use.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>How do I update my Create RX App project?</AccordionTrigger>
          <AccordionContent>
            Create RX App generates a standard Next.js project with additional features, so you can update dependencies
            using your package manager (npm, yarn, or pnpm). For major version updates, refer to the migration guides
            for Next.js, tRPC, and other dependencies.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Can I add more features to my project after creation?</AccordionTrigger>
          <AccordionContent>
            Yes, you can add more features to your project at any time. For example, you can add more shadcn/ui
            components using the shadcn CLI, integrate Prisma for database access, or add NextAuth.js for
            authentication. The project structure is designed to be extensible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Is Create RX App compatible with Vercel deployment?</AccordionTrigger>
          <AccordionContent>
            Yes, projects created with Create RX App are fully compatible with Vercel deployment. In fact, they're
            optimized for Vercel's platform, taking advantage of features like Edge Functions and Vercel Analytics.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>How can I contribute to Create RX App?</AccordionTrigger>
          <AccordionContent>
            Contributions are welcome! You can contribute by opening issues for bugs or feature requests, submitting
            pull requests, or improving the documentation. Check out the GitHub repository for more information on
            contributing.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
