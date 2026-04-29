import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Meridian" },
      {
        name: "description",
        content:
          "Reach the editors, pitch a story, or report a correction. The Meridian's contact desk.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
      <header className="max-w-3xl">
        <p className="eyebrow">Get in touch</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl font-black leading-[0.95]">
          Tell us what you're working on.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Pitches, tips, corrections and the occasional kind word — they all
          land in the same inbox, and we read every one. Expect a reply within
          two working days.
        </p>
      </header>

      <div className="rule mt-12" />

      <div className="grid lg:grid-cols-12 gap-12 mt-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-7 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" required className="h-12 rounded-sm bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="h-12 rounded-sm bg-background" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" required className="h-12 rounded-sm bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={8} className="rounded-sm bg-background resize-none" />
          </div>
          <Button type="submit" className="h-12 rounded-sm px-8 text-base">
            Send message
          </Button>
        </form>

        <aside className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Newsroom</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">Meridian House</h3>
            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                <span>14 Greville Street, London EC1N 8SB, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:hello@themeridian.press" className="hover:text-primary">
                  hello@themeridian.press
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                <span>+44 (0)20 7946 0117</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">Desks</p>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Pitches", "pitches@themeridian.press"],
                ["Corrections", "corrections@themeridian.press"],
                ["Press & syndication", "press@themeridian.press"],
                ["Subscriptions", "subscribe@themeridian.press"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-border pb-3">
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">Office hours</p>
            <p className="mt-3 text-muted-foreground">Monday – Friday · 09:00 – 18:00 GMT</p>
            <p className="text-muted-foreground">Closed on UK bank holidays.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
