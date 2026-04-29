import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="my-20 mx-auto max-w-7xl px-6">
      <div className="rounded-sm border border-border bg-card px-8 py-14 md:px-16 md:py-20 text-center">
        <p className="eyebrow">The Daily Brief</p>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-[1.1]">
          The morning edition, delivered to your inbox.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          One email. Six stories. Zero noise. Join 240,000 readers starting their day with us.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 rounded-sm bg-background"
          />
          <Button type="submit" className="h-12 rounded-sm px-6">
            Subscribe
          </Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
