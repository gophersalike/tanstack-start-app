import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { Newsletter } from "@/components/newsletter";
import cultureImg from "@/assets/news-culture.jpg";
import cultureImg2 from "@/assets/news-culture-2.jpg";
import cultureImg3 from "@/assets/news-culture-3.jpg";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Culture — The Meridian" },
      {
        name: "description",
        content:
          "Books, art, music and the long now. Culture writing from The Meridian for readers who like to slow down.",
      },
      { property: "og:image", content: cultureImg },
    ],
  }),
  component: CulturePage,
});

function CulturePage() {
  return (
    <>
      <CategoryPage
        eyebrow="Section · Culture"
        title="Books, art and the long now."
        intro="Culture is the slow news. We write about the books, films, museums and ideas that will still matter next year — and probably the one after."
        heroImage={cultureImg}
        featured={{
          category: "Culture",
          title: "Museums are quiet again. Their curators couldn't be happier.",
          excerpt:
            "Post-blockbuster, post-selfie, a generation of curators is rediscovering the radical idea of looking slowly. We toured five of them to ask what comes after the queue around the block.",
          author: "Iris Lambert",
          readTime: "7 min",
          date: "April 22, 2026",
          slug: "museums-quiet-again",
        }}
        articles={[
          {
            category: "Books",
            title: "The novel is fine. Stop asking.",
            excerpt:
              "A round-up of six debuts that quietly answer every essay declaring fiction is dead.",
            author: "Iris Lambert",
            readTime: "6 min",
            date: "Apr 19",
            image: cultureImg2,
            slug: "novel-is-fine",
          },
          {
            category: "Music",
            title: "Why the album is making a comeback",
            excerpt:
              "Fifty-minute records, sequenced to be heard in order. Streaming, it turns out, didn't kill them.",
            author: "Sara Pennington",
            readTime: "5 min",
            date: "Apr 16",
            image: cultureImg3,
            slug: "album-comeback",
          },
          {
            category: "Film",
            title: "The new patience of arthouse cinema",
            excerpt:
              "Three-hour runtimes, single-shot scenes, and the audiences who can't get enough of them.",
            author: "Helena Marsh",
            readTime: "8 min",
            date: "Apr 11",
          },
        ]}
      />
      <Newsletter />
    </>
  );
}
