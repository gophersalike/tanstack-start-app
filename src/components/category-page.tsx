import { ArticleCard, type Article } from "./article-card";
import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  featured: Article;
  articles: Article[];
}

export function CategoryPage({ eyebrow, title, intro, heroImage, featured, articles }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
      <header className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl font-black leading-[0.95]">{title}</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>
      </header>

      <div className="rule mt-12" />

      <section className="grid lg:grid-cols-2 gap-10 mt-12">
        <div className="aspect-[4/3] overflow-hidden">
          {featured.slug ? (
            <Link to="/article/$slug" params={{ slug: featured.slug }}>
              <img
                src={heroImage}
                alt={featured.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
          ) : (
            <img
              src={heroImage}
              alt={featured.title}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{featured.category} · Lead Story</p>
          {featured.slug ? (
            <Link to="/article/$slug" params={{ slug: featured.slug }}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold leading-[1.05] hover:text-primary transition-colors">
                {featured.title}
              </h2>
            </Link>
          ) : (
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold leading-[1.05]">
              {featured.title}
            </h2>
          )}
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{featured.excerpt}</p>
          <div className="mt-6 text-xs text-muted-foreground tracking-wide uppercase">
            By {featured.author} · {featured.date} · {featured.readTime}
          </div>
          {featured.slug ? (
            <Link
              to="/article/$slug"
              params={{ slug: featured.slug }}
              className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-primary border-b border-primary pb-1"
            >
              Read the full story
            </Link>
          ) : (
            <span className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-muted-foreground/60 border-b border-muted-foreground/30 pb-1">
              Read the full story
            </span>
          )}
        </div>
      </section>

      <div className="rule mt-16" />

      <section className="grid md:grid-cols-3 gap-10 mt-12">
        {articles.map((a) => (
          <ArticleCard key={a.title} article={a} />
        ))}
      </section>
    </div>
  );
}
