import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { Newsletter } from "@/components/newsletter";
import politicsImg from "@/assets/news-politics.jpg";
import politicsImg2 from "@/assets/news-politics-2.jpg";
import politicsImg3 from "@/assets/news-politics-3.jpg";

export const Route = createFileRoute("/politics")({
  head: () => ({
    meta: [
      { title: "Politics — The Meridian" },
      {
        name: "description",
        content:
          "Reporting on power, parliaments and the shifting public mood, from The Meridian's politics desk.",
      },
      { property: "og:image", content: politicsImg },
    ],
  }),
  component: PoliticsPage,
});

function PoliticsPage() {
  return (
    <>
      <CategoryPage
        eyebrow="Section · Politics"
        title="Politics, considered."
        intro="Reporting on power, parliaments and the public mood — without the shouting. We follow the people, the policies and the long arcs that decide how we are governed."
        heroImage={politicsImg}
        featured={{
          category: "Politics",
          title: "A quieter chamber, a louder country: inside the new political mood",
          excerpt:
            "After a year of headline fatigue, voters are turning toward local questions and away from spectacle. We spent six weeks in three capitals to understand what comes next — and what it means for the parties scrambling to catch up.",
          author: "Helena Marsh",
          readTime: "12 min",
          date: "April 27, 2026",
          slug: "quieter-chamber-louder-country",
        }}
        articles={[
          {
            category: "Analysis",
            title: "How to read a coalition before it forms",
            excerpt:
              "A field guide to the small signals — handshakes, hires, hashtags — that decide the next government.",
            author: "Helena Marsh",
            readTime: "6 min",
            date: "Apr 24",
            image: politicsImg2,
            slug: "how-to-read-a-coalition",
          },
          {
            category: "Profile",
            title: "The mayor who refuses to be a national story",
            excerpt:
              "She turned down two cabinet jobs and a podcast deal. Her city is quietly thriving.",
            author: "Daniel Okafor",
            readTime: "8 min",
            date: "Apr 21",
            image: politicsImg3,
            slug: "mayor-refuses-national-story",
          },
          {
            category: "Opinion",
            title: "Against the politics of the perpetual emergency",
            excerpt:
              "Treating every week like a crisis is, it turns out, the surest way to lose the next one.",
            author: "Iris Lambert",
            readTime: "5 min",
            date: "Apr 18",
            slug: "perpetual-emergency",
          },
        ]}
      />
      <Newsletter />
    </>
  );
}
