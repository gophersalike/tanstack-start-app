import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Newsletter } from "@/components/newsletter";
import { ArticleCard } from "@/components/article-card";
import heroImg from "@/assets/news-hero.jpg";
import politicsImg from "@/assets/news-politics.jpg";
import businessImg from "@/assets/news-business.jpg";
import techImg from "@/assets/news-tech.jpg";
import cultureImg from "@/assets/news-culture.jpg";
import sportsImg from "@/assets/news-sports.jpg";
import politicsImg3 from "@/assets/news-politics-3.jpg";
import techImg2 from "@/assets/news-tech-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Meridian — Today's edition" },
      {
        name: "description",
        content:
          "The home of The Meridian: today's lead stories across politics, business, technology, sport and culture.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 md:pt-16">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-10">
          <p className="eyebrow">Vol. XXIV · The Morning Edition</p>
          <p className="text-xs text-muted-foreground tracking-wide uppercase hidden sm:block">
            Six stories worth your attention
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 anim-rise">
            <p className="eyebrow mb-4">Lead Story · Politics</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight">
              A quieter chamber, a louder country: inside the new political mood.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              After a year of headline fatigue, voters are turning toward local
              questions and away from spectacle. We spent six weeks in three
              capitals to find out what comes next.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/featured"
                className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-primary text-primary pb-1"
              >
                Read the dispatch <ArrowUpRight className="size-4" />
              </Link>
              <span className="text-xs text-muted-foreground">
                By Helena Marsh · 12 min read
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 anim-rise">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroImg}
                alt="A reader with a morning broadsheet"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top stories grid */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Today's edition</h2>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Updated hourly
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <ArticleCard
            article={{
              category: "Business",
              title: "The quiet collapse of the productivity dream",
              excerpt:
                "After a decade of dashboards and time-trackers, knowledge workers are pushing back — and bosses are listening.",
              author: "Daniel Okafor",
              readTime: "9 min",
              date: "Today",
              image: businessImg,
              slug: "productivity-dream-collapse",
            }}
          />
          <ArticleCard
            article={{
              category: "Technology",
              title: "Inside the open-source kitchens cooking up the next AI",
              excerpt:
                "A loose network of researchers, hobbyists and disillusioned ex-employees is quietly building tomorrow's models.",
              author: "Maya Chen",
              readTime: "11 min",
              date: "Today",
              image: techImg,
              slug: "open-source-ai-kitchens",
            }}
          />
          <ArticleCard
            article={{
              category: "Culture",
              title: "Museums are quiet again. Their curators couldn't be happier.",
              excerpt:
                "Post-blockbuster, a generation of curators is rediscovering the radical idea of looking slowly.",
              author: "Iris Lambert",
              readTime: "7 min",
              date: "Yesterday",
              image: cultureImg,
              slug: "museums-quiet-again",
            }}
          />
        </div>
      </section>

      {/* Sections directory */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="border-y border-border py-3 flex items-center justify-between">
          <p className="eyebrow">Sections</p>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            Nine reads, hand-picked
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border border-b border-border">
          {[
            { to: "/politics" as const, label: "Politics", line: "Power, parliaments, the public mood." },
            { to: "/business" as const, label: "Business", line: "Markets, money and the people behind them." },
            { to: "/technology" as const, label: "Technology", line: "Code, capital and consequence." },
            { to: "/sports" as const, label: "Sports", line: "The game, behind the game." },
            { to: "/culture" as const, label: "Culture", line: "Books, art and the long now." },
          ].map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group p-8 hover:bg-secondary/60 transition-colors"
            >
              <p className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                {s.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.line}</p>
              <span className="mt-6 inline-flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Visit section →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured pull-quote */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={politicsImg}
                alt="An empty parliament chamber"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow">Editor's letter</p>
            <blockquote className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-[1.1]">
              "We don't think you need more news. You need better news. Slower,
              quieter, surer of itself — and of you."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground tracking-wide uppercase">
              — Helena Marsh, Editor in Chief
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center text-sm font-semibold border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Read our manifesto
            </Link>
          </div>
        </div>
      </section>

      {/* Sport */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="border-b border-border pb-4 mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Also reading</h2>
          <Link to="/sports" className="text-xs font-semibold text-primary tracking-widest uppercase">
            Sport →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <ArticleCard
            article={{
              category: "Sport",
              title: "The lonely brilliance of the long-distance runner",
              excerpt:
                "Why a generation of athletes is choosing solitude over spectacle, and what coaches are learning from them.",
              author: "Theo Bell",
              readTime: "8 min",
              date: "2 days ago",
              image: sportsImg,
              slug: "lonely-brilliance-long-distance-runner",
            }}
          />
          <ArticleCard
            article={{
              category: "Politics",
              title: "How to read a coalition before it forms",
              excerpt:
                "A field guide to the small signals — handshakes, hires, hashtags — that decide the next government.",
              author: "Helena Marsh",
              readTime: "6 min",
              date: "3 days ago",
              image: politicsImg3,
              slug: "how-to-read-a-coalition",
            }}
          />
          <ArticleCard
            article={{
              category: "Technology",
              title: "Battery storage is the dull miracle of our decade",
              excerpt:
                "It won't trend on social media. It will, however, quietly rewire the global economy.",
              author: "Maya Chen",
              readTime: "10 min",
              date: "4 days ago",
              image: techImg2,
              slug: "battery-storage-dull-miracle",
            }}
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
