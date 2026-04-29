import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { articleBySlug, articles } from "@/data/articles";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — The Meridian` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.image },
        ]
      : [{ title: "Article — The Meridian" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl font-black">Article not found</h1>
      <p className="mt-4 text-muted-foreground">The story you're looking for has moved or never existed.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary pb-1">
        Return home
      </Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles
    .filter((a) => a.section === article.section && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article>
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary uppercase tracking-widest"
        >
          <ArrowLeft className="size-3" />
          Back to home
        </Link>
        <p className="eyebrow mt-8">{article.category}</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl font-black leading-[1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed font-serif italic">
          {article.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground tracking-widest uppercase border-t border-b border-border py-4">
          <span>By {article.author}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} read</span>
        </div>
      </header>

      <figure className="mx-auto max-w-5xl px-6">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            width={1280}
            height={832}
            className="h-full w-full object-cover"
          />
        </div>
      </figure>

      <div className="mx-auto max-w-2xl px-6 mt-16 anim-rise">
        {article.body.map((para: string, i: number) => (
          <p
            key={i}
            className={`text-lg leading-[1.8] text-foreground/90 ${
              i === 0
                ? "first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.9] first-letter:text-primary"
                : "mt-6"
            }`}
          >
            {para}
          </p>
        ))}

        <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">{article.author}</span> writes for The Meridian.
            This piece appeared in the {article.date} edition.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 mt-24">
          <div className="border-y border-border py-3 mb-10 flex items-center justify-between">
            <p className="eyebrow">Keep reading · {article.category}</p>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">More from this desk</span>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {related.map((r) => (
              <Link key={r.slug} to="/article/$slug" params={{ slug: r.slug }} className="block">
                <ArticleCard
                  article={{
                    category: r.category,
                    title: r.title,
                    excerpt: r.excerpt,
                    author: r.author,
                    readTime: r.readTime,
                    date: r.date,
                    image: r.image,
                  }}
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      <Newsletter />
    </article>
  );
}
