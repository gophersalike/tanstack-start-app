import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface Article {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
  slug?: string;
}

export function ArticleCard({ article, large }: { article: Article; large?: boolean }) {
  const ReadMore = () =>
    article.slug ? (
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group/link"
      >
        Read more
        <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </Link>
    ) : (
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground/60">
        Read more
        <ArrowUpRight className="size-4" />
      </span>
    );

  const Title = () =>
    article.slug ? (
      <Link to="/article/$slug" params={{ slug: article.slug }}>
        <h3
          className={`font-serif font-bold leading-[1.15] ${
            large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          } group-hover:text-primary transition-colors`}
        >
          {article.title}
        </h3>
      </Link>
    ) : (
      <h3
        className={`font-serif font-bold leading-[1.15] ${
          large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        } group-hover:text-primary transition-colors`}
      >
        {article.title}
      </h3>
    );

  return (
    <article className="group flex flex-col h-full anim-rise">
      {article.image && (
        <div className={`overflow-hidden mb-5 ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          {article.slug ? (
            <Link to="/article/$slug" params={{ slug: article.slug }}>
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
          ) : (
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
      )}
      <p className="eyebrow mb-3">{article.category}</p>
      <Title />
      <p className="mt-3 text-muted-foreground leading-relaxed">{article.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <span>
          {article.author} · {article.date}
        </span>
        <span>{article.readTime}</span>
      </div>
      <ReadMore />
    </article>
  );
}
