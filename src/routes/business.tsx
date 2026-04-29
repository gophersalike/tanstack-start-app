import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { Newsletter } from "@/components/newsletter";
import businessImg from "@/assets/news-business.jpg";
import businessImg2 from "@/assets/news-business-2.jpg";
import businessImg3 from "@/assets/news-business-3.jpg";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business — The Meridian" },
      {
        name: "description",
        content:
          "Markets, money, and the people behind them. Sober business reporting from The Meridian.",
      },
      { property: "og:image", content: businessImg },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <>
      <CategoryPage
        eyebrow="Section · Business"
        title="The business of business."
        intro="Markets move on stories. We tell them carefully — what's actually happening inside boardrooms, central banks and the working week, and what it means for everyone outside the room."
        heroImage={businessImg}
        featured={{
          category: "Business",
          title: "The quiet collapse of the productivity dream",
          excerpt:
            "After a decade of dashboards, time-trackers and four-day-week pilots, knowledge workers are pushing back — and a surprising number of bosses are listening. We talked to thirty CEOs about what changed their minds.",
          author: "Daniel Okafor",
          readTime: "9 min",
          date: "April 26, 2026",
          slug: "productivity-dream-collapse",
        }}
        articles={[
          {
            category: "Markets",
            title: "Why the bond market stopped flinching",
            excerpt:
              "A new generation of traders has decided that volatility is the price, not the problem.",
            author: "Sara Pennington",
            readTime: "7 min",
            date: "Apr 23",
            image: businessImg2,
            slug: "bond-market-stopped-flinching",
          },
          {
            category: "Industry",
            title: "Small manufacturers, big year",
            excerpt:
              "Reshoring is no longer a slogan. In four mid-sized cities, it's a hiring spree.",
            author: "Daniel Okafor",
            readTime: "10 min",
            date: "Apr 19",
            image: businessImg3,
            slug: "small-manufacturers-big-year",
          },
          {
            category: "Profile",
            title: "The reluctant CEO who fixed her company by listening",
            excerpt:
              "She inherited a mess, cancelled the off-site, and spent three months on the shop floor.",
            author: "Helena Marsh",
            readTime: "8 min",
            date: "Apr 15",
            slug: "reluctant-ceo-listening",
          },
        ]}
      />
      <Newsletter />
    </>
  );
}
