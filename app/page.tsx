import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import {
  Link2,
  BarChart3,
  Zap,
  Shield,
  Globe,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Link2,
    title: "Instant Link Shortening",
    description:
      "Transform any long URL into a concise, shareable link in seconds. No sign-up required to try.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Track clicks, geographic data, referrers, and more. Understand exactly how your links perform.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Redirects",
    description:
      "Our globally distributed infrastructure ensures your links resolve in milliseconds, every time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Every link is protected and monitored. Enjoy 99.9% uptime with enterprise-grade security.",
  },
  {
    icon: Globe,
    title: "Custom Short Domains",
    description:
      "Use your own branded domain for short links to reinforce your identity with every click.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Management",
    description:
      "Organise, edit, and deactivate your links at any time from a clean, intuitive dashboard.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Free to get started
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Shorten Links.{" "}
          <span className="text-primary">Track Everything.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          The simplest way to create short, memorable links and gain powerful
          insights into how your audience engages with your content.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-8">
              Get Started — It&apos;s Free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-8">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to manage your links
          </h2>
          <p className="mt-3 text-muted-foreground">
            Powerful features designed to help you share smarter.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to shorten your first link?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Join thousands of users who trust us to power their links. Create your
          free account today.
        </p>
        <div className="mt-8">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-10">
              Create Free Account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} LinkShortener. All rights reserved.</p>
      </footer>
    </div>
  );
}
