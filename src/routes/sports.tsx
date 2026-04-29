import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { Newsletter } from "@/components/newsletter";
import sportsImg from "@/assets/news-sports.jpg";
import sportsImg2 from "@/assets/news-sports-2.jpg";
import sportsImg3 from "@/assets/news-sports-3.jpg";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports — The Meridian" },
      {
        name: "description",
        content:
          "The game, behind the game. Long-form sports writing on athletes, coaches and the cultures around them.",
      },
      { property: "og:image", content: sportsImg },
    ],
  }),
  component: SportsPage,
});

function SportsPage() {
  return (
    <>
      <CategoryPage
        eyebrow="Section · Sport"
        title="The game, behind the game."
        intro="We don't do scores. We do the people, the rooms and the decades that decide them. Sports writing for readers who already know the result."
        heroImage={sportsImg}
        featured={{
          category: "Sport",
          title: "The lonely brilliance of the long-distance runner",
          excerpt:
            "A new generation of elite athletes is choosing solitude over spectacle: training alone, racing rarely, and ignoring the algorithm. Their coaches are quietly rewriting the playbook to keep up.",
          author: "Theo Bell",
          readTime: "8 min",
          date: "April 24, 2026",
          slug: "lonely-brilliance-long-distance-runner",
        }}
        articles={[
          {
            category: "Tactics",
            title: "Why the best teams are getting boring on purpose",
            excerpt:
              "Possession is up, goals are down, and managers couldn't be happier about it.",
            author: "Theo Bell",
            readTime: "7 min",
            date: "Apr 20",
            image: sportsImg2,
            slug: "best-teams-getting-boring",
          },
          {
            category: "Profile",
            title: "The 38-year-old who isn't done yet",
            excerpt:
              "He was supposed to retire two seasons ago. Instead, he changed sports.",
            author: "Daniel Okafor",
            readTime: "9 min",
            date: "Apr 14",
            image: sportsImg3,
            slug: "38-year-old-not-done",
          },
          {
            category: "Opinion",
            title: "We watch sport for the silence between the noise",
            excerpt:
              "Stadium pyrotechnics, second-screen stats — and the one moment a year that quiets all of it.",
            author: "Iris Lambert",
            readTime: "5 min",
            date: "Apr 09",
          },
        ]}
      />
      <Newsletter />
    </>
  );
}
