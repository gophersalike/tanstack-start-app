import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { Newsletter } from "@/components/newsletter";
import techImg from "@/assets/news-tech.jpg";
import techImg2 from "@/assets/news-tech-2.jpg";
import techImg3 from "@/assets/news-tech-3.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — The Meridian" },
      {
        name: "description",
        content:
          "Code, capital and consequence. The Meridian's technology desk covers the industry that's rewriting the world.",
      },
      { property: "og:image", content: techImg },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <>
      <CategoryPage
        eyebrow="Section · Technology"
        title="Technology, in plain sight."
        intro="The technology industry doesn't need more hype. It needs scrutiny. We cover the engineers, the capital and the consequences — without falling for the demos."
        heroImage={techImg}
        featured={{
          category: "Technology",
          title: "Inside the open-source kitchens cooking up the next AI",
          excerpt:
            "A loose network of researchers, hobbyists and disillusioned ex-employees is quietly building tomorrow's models — on shoestring budgets, in shared garages, with a stubborn belief that the future shouldn't belong to four companies.",
          author: "Maya Chen",
          readTime: "11 min",
          date: "April 25, 2026",
          slug: "open-source-ai-kitchens",
        }}
        articles={[
          {
            category: "Infrastructure",
            title: "Battery storage is the dull miracle of our decade",
            excerpt:
              "It won't trend on social media. It will, however, quietly rewire the global economy.",
            author: "Maya Chen",
            readTime: "10 min",
            date: "Apr 22",
            image: techImg2,
            slug: "battery-storage-dull-miracle",
          },
          {
            category: "Privacy",
            title: "The slow comeback of the personal computer",
            excerpt:
              "After fifteen years in the cloud, a generation of developers is bringing the data home.",
            author: "Theo Bell",
            readTime: "6 min",
            date: "Apr 17",
            image: techImg3,
            slug: "personal-computer-comeback",
          },
          {
            category: "Opinion",
            title: "Against the cult of the founder",
            excerpt:
              "The most interesting companies of the last decade had two things in common: ten people, and no manifesto.",
            author: "Iris Lambert",
            readTime: "5 min",
            date: "Apr 13",
          },
        ]}
      />
      <Newsletter />
    </>
  );
}
