import { createFileRoute, Link } from "@tanstack/react-router";
import { Newsletter } from "@/components/newsletter";
import { ArticleCard } from "@/components/article-card";
import heroImg from "@/assets/news-hero.jpg";
import politicsImg from "@/assets/news-politics.jpg";
import businessImg from "@/assets/news-business.jpg";
import techImg from "@/assets/news-tech.jpg";
import cultureImg from "@/assets/news-culture.jpg";
import sportsImg from "@/assets/news-sports.jpg";
import feature1 from "@/assets/news-feature-1.jpg";
import feature2 from "@/assets/news-feature-2.jpg";
import feature3 from "@/assets/news-feature-3.jpg";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Featured Stories — The Meridian" },
      {
        name: "description",
        content:
          "The Meridian's featured stories: long-form, slow-read journalism collected in one place.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FeaturedPage,
});

function FeaturedPage() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <p className="eyebrow">The Long Reads</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl font-black leading-[0.95] max-w-4xl">
          Featured stories — the ones that stayed with us.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A rotating collection of our most carefully reported pieces — months in
          the making, written to be re-read. Pour something. Take your time.
        </p>
      </header>

      <div className="rule mx-auto max-w-7xl" />

      {/* Lead long-read */}
      <section className="mx-auto max-w-7xl px-6 mt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 aspect-[4/3] overflow-hidden order-2 lg:order-1">
            <img
              src={feature1}
              alt="A writer's desk with notebook and typewriter"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <p className="eyebrow">Cover Story · 14 min</p>
            <Link to="/article/$slug" params={{ slug: "return-of-morning-paper" }}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold leading-[1.05] hover:text-primary transition-colors">
                The return of the morning paper, in a thousand small ways.
              </h2>
            </Link>
            <p className="mt-5 text-muted-foreground text-lg">
              From neighbourhood newsletters to printed weeklies in college towns,
              a generation that grew up online is rebuilding the daily reading
              habit — slowly, locally, deliberately.
            </p>
            <p className="mt-6 text-xs text-muted-foreground tracking-wide uppercase">
              By Helena Marsh & Iris Lambert
            </p>
            <Link
              to="/article/$slug"
              params={{ slug: "return-of-morning-paper" }}
              className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-primary border-b border-primary pb-1"
            >
              Read the cover story
            </Link>
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-7xl mt-16" />

      <section className="mx-auto max-w-7xl px-6 mt-12 grid md:grid-cols-2 gap-x-12 gap-y-16">
        <ArticleCard
          large
          article={{
            category: "Politics",
            title: "A quieter chamber, a louder country",
            excerpt:
              "Six weeks across three capitals, listening for what voters actually want next.",
            author: "Helena Marsh",
            readTime: "12 min",
            date: "Apr 27",
            image: politicsImg,
            slug: "quieter-chamber-louder-country",
          }}
        />
        <ArticleCard
          large
          article={{
            category: "Business",
            title: "The quiet collapse of the productivity dream",
            excerpt:
              "Thirty CEOs, one uncomfortable consensus: the dashboards weren't helping.",
            author: "Daniel Okafor",
            readTime: "9 min",
            date: "Apr 26",
            image: businessImg,
            slug: "productivity-dream-collapse",
          }}
        />
        <ArticleCard
          large
          article={{
            category: "Technology",
            title: "Inside the open-source kitchens cooking up the next AI",
            excerpt:
              "A loose, stubborn network of researchers is building the future on shoestring budgets.",
            author: "Maya Chen",
            readTime: "11 min",
            date: "Apr 25",
            image: techImg,
            slug: "open-source-ai-kitchens",
          }}
        />
        <ArticleCard
          large
          article={{
            category: "Sport",
            title: "The lonely brilliance of the long-distance runner",
            excerpt:
              "Solitude over spectacle: how elite athletes are quietly rewriting the playbook.",
            author: "Theo Bell",
            readTime: "8 min",
            date: "Apr 24",
            image: sportsImg,
            slug: "lonely-brilliance-long-distance-runner",
          }}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24">
        <div className="border-t border-border pt-10 grid md:grid-cols-3 gap-10">
          <ArticleCard
            article={{
              category: "Culture",
              title: "Museums are quiet again",
              excerpt: "And their curators couldn't be happier about it.",
              author: "Iris Lambert",
              readTime: "7 min",
              date: "Apr 22",
              image: cultureImg,
              slug: "museums-quiet-again",
            }}
          />
          <ArticleCard
            article={{
              category: "Essay",
              title: "Against the politics of the perpetual emergency",
              excerpt:
                "Treating every week like a crisis is the surest way to lose the next one.",
              author: "Iris Lambert",
              readTime: "5 min",
              date: "Apr 18",
              image: feature2,
              slug: "perpetual-emergency",
            }}
          />
          <ArticleCard
            article={{
              category: "Profile",
              title: "The reluctant CEO who fixed her company by listening",
              excerpt:
                "She inherited a mess, cancelled the off-site, and spent three months on the shop floor.",
              author: "Helena Marsh",
              readTime: "8 min",
              date: "Apr 15",
              image: feature3,
              slug: "reluctant-ceo-listening",
            }}
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
