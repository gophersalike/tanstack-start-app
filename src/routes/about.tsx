import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/news-hero.jpg";
import aboutImg from "@/assets/news-about.jpg";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Meridian" },
      {
        name: "description",
        content:
          "The Meridian is an independent daily for readers who want fewer, better stories. Meet the people behind it.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const team = [
    { name: "Helena Marsh", role: "Editor in Chief", bio: "Reports on politics. Has interviewed four prime ministers and one ferry captain." },
    { name: "Daniel Okafor", role: "Business Editor", bio: "Covers markets, supply chains and the people who actually move them." },
    { name: "Maya Chen", role: "Technology Editor", bio: "Former engineer, recovering optimist. Specialises in AI and infrastructure." },
    { name: "Iris Lambert", role: "Culture Editor", bio: "Books, art, the long now. Believes the album is back." },
    { name: "Theo Bell", role: "Sports Writer", bio: "Long-distance running, slower games, longer reads." },
    { name: "Sara Pennington", role: "Markets Correspondent", bio: "Bonds, central banks, and what the spread really means." },
  ];

  return (
    <>
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">About The Meridian</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl font-black leading-[0.95]">
            A quieter daily, written on purpose.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            The Meridian is an independent newsroom for readers who would rather
            have six good stories than sixty loud ones. We were founded in 2021
            by a small group of journalists tired of the news cycle — and of
            being part of it.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={aboutImg} alt="The Meridian newsroom" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <div className="rule mx-auto max-w-7xl" />

      <section className="mx-auto max-w-7xl px-6 mt-16 grid lg:grid-cols-3 gap-12">
        {[
          {
            num: "01",
            title: "Slow over loud",
            text: "We publish when a story is ready, not when the feed demands one. Our daily edition is six pieces, hand-picked.",
          },
          {
            num: "02",
            title: "Reported, not reposted",
            text: "Every story starts with a notebook and a phone call. We don't aggregate, we don't speculate, and we credit our sources generously.",
          },
          {
            num: "03",
            title: "Reader-funded",
            text: "No clickbait, no programmatic ads. Our readers pay for The Meridian directly — which is why we work for them, and only them.",
          },
        ].map((p) => (
          <div key={p.num}>
            <p className="font-serif text-5xl text-primary font-bold">{p.num}</p>
            <h3 className="mt-4 font-serif text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="border-y border-border py-3 flex items-center justify-between mb-10">
          <p className="eyebrow">The Newsroom</p>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            Six writers, one editor
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {team.map((m) => (
            <div key={m.name} className="border-t border-border pt-6">
              <h4 className="font-serif text-2xl font-bold">{m.name}</h4>
              <p className="eyebrow mt-1">{m.role}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="bg-foreground text-background px-8 py-16 md:px-16 md:py-24 rounded-sm">
          <p className="text-xs tracking-widest uppercase text-background/60">By the numbers</p>
          <div className="mt-8 grid md:grid-cols-4 gap-10">
            {[
              { k: "240k", v: "Daily readers" },
              { k: "6", v: "Stories per edition" },
              { k: "47", v: "Countries reached" },
              { k: "100%", v: "Reader-funded" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-serif text-5xl md:text-6xl font-bold">{s.k}</p>
                <p className="mt-2 text-sm text-background/70">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
