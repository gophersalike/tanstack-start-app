import politicsImg from "@/assets/news-politics.jpg";
import politicsImg2 from "@/assets/news-politics-2.jpg";
import politicsImg3 from "@/assets/news-politics-3.jpg";
import businessImg from "@/assets/news-business.jpg";
import businessImg2 from "@/assets/news-business-2.jpg";
import businessImg3 from "@/assets/news-business-3.jpg";
import techImg from "@/assets/news-tech.jpg";
import techImg2 from "@/assets/news-tech-2.jpg";
import techImg3 from "@/assets/news-tech-3.jpg";
import sportsImg from "@/assets/news-sports.jpg";
import sportsImg2 from "@/assets/news-sports-2.jpg";
import sportsImg3 from "@/assets/news-sports-3.jpg";
import cultureImg from "@/assets/news-culture.jpg";
import cultureImg2 from "@/assets/news-culture-2.jpg";
import cultureImg3 from "@/assets/news-culture-3.jpg";
import feature1 from "@/assets/news-feature-1.jpg";
import feature2 from "@/assets/news-feature-2.jpg";
import feature3 from "@/assets/news-feature-3.jpg";

export interface FullArticle {
  slug: string;
  category: string;
  section: "politics" | "business" | "technology" | "sports" | "culture" | "featured";
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
  body: string[];
}

export const articles: FullArticle[] = [
  {
    slug: "quieter-chamber-louder-country",
    category: "Politics",
    section: "politics",
    title: "A quieter chamber, a louder country: inside the new political mood",
    excerpt:
      "After a year of headline fatigue, voters are turning toward local questions and away from spectacle. We spent six weeks in three capitals to understand what comes next.",
    author: "Helena Marsh",
    readTime: "12 min",
    date: "April 27, 2026",
    image: politicsImg,
    body: [
      "On a wet Tuesday in March, the public gallery of the country's lower house held nine people. Two were students fulfilling a civics requirement. The other seven were retirees who, when asked, said they had simply run out of television. The benches below were no fuller. A junior minister read a prepared answer to a question nobody in the room had asked, and the press corps — once thirty strong, now five — kept their cameras down.",
      "This is not a story about apathy. It is a story about reallocation. Across three capitals, in twenty-four town halls and a dozen kitchen tables, the same pattern emerges: voters have stopped watching the national theatre and started rebuilding the local stage. Attendance at municipal council meetings is up by a third in the cities we surveyed. Subscriptions to neighbourhood newsletters have doubled. The shouting has not gone away — it has moved closer to home, and grown quieter in the process.",
      "\"People aren't disengaged,\" says Marta Vélez, a sociologist who has tracked civic participation for two decades. \"They have simply concluded that the parliament is the wrong unit of analysis for the problems they actually have. School catchments, bus routes, where the new clinic goes — those are the questions they can answer. So that is where they have gone.\"",
      "The parties have noticed. In private, three campaign directors told us they have rewritten their twelve-month plans around what they call \"the porch doctrine\": fewer rallies, more doorsteps; fewer attack ads, more local listening tours. One veteran strategist, who asked not to be named, put it more bluntly. \"For ten years we ran every campaign as if it were a televised war,\" she said. \"It turns out the country was busy doing something else.\"",
      "What that something else looks like, exactly, is the subject of this dispatch. Over the next five sections, we travel from a coastal town that quietly fixed its housing crisis without a single national headline, to a former industrial city where the mayor refuses to give interviews to the capital's press, to a parliamentary committee whose members have started, almost shyly, to ask each other questions in good faith. None of these stories will trend. All of them, we think, are the country.",
      "It would be easy to read the new mood as a retreat. It is closer to a re-grounding. The voters we met were not less informed than they used to be — they were, if anything, sharper, less performative, more interested in trade-offs and less interested in tribes. They had simply stopped expecting the national conversation to be conducted in their language. So they had started a different conversation, on a different scale, in a different room.",
      "Whether the parties can follow them there is the open question of the next election. The early signs are mixed. The doorsteps are being knocked. The listening tours are happening. But the muscle memory of the perpetual campaign — the dawn raid press release, the manufactured row, the eleven-second clip designed to humiliate — is hard to un-learn. The country, meanwhile, has moved on without waiting.",
      "The empty gallery on that wet Tuesday was not a verdict on democracy. It was a verdict on a particular kind of politics. The people had not gone home. They had gone to a different meeting.",
    ],
  },
  {
    slug: "how-to-read-a-coalition",
    category: "Politics",
    section: "politics",
    title: "How to read a coalition before it forms",
    excerpt:
      "A field guide to the small signals — handshakes, hires, hashtags — that decide the next government.",
    author: "Helena Marsh",
    readTime: "6 min",
    date: "April 24, 2026",
    image: politicsImg2,
    body: [
      "Coalitions are not announced. They are leaked, denied, hinted at, and then — usually about three weeks after everyone has stopped paying attention — quietly assembled in a room with bad coffee. By the time the cameras arrive for the handshake, the real work has been done for a fortnight. The trick, if you want to read a government before it exists, is to know where to look while the lights are still off.",
      "Start with the hires. The first sign that two parties are seriously talking is not a joint statement; it is a shared chief of staff, or a borrowed policy director, or a previously hostile spokesperson suddenly going quiet. Watch the LinkedIn updates more closely than the press releases. A communications lead who deletes their party affiliation from their bio in February is, more often than not, drafting a coalition agreement by April.",
      "Then watch the social feeds — but watch them for absence, not presence. Two leaders who used to attack each other weekly and have now spent a month posting only about infrastructure are not bored. They are negotiating. The hostility has moved into the room.",
      "Pay attention to the venues. Coalitions are built in mid-sized regional cities, not capitals. If the deputy leaders of two parties are suddenly both giving keynote speeches in the same provincial capital within a fortnight, check the hotel guest list before you check the speeches. The speeches will be boilerplate. The corridor conversation will be the news.",
      "Finally, the handshake itself is the least informative moment of the entire process. By the time the photo is taken, the cabinet has been allocated, the portfolios have been traded, and the awkward concession on the third-rail policy has been buried in an annex. The story is in the annex. It always is.",
      "None of this is hidden. It is simply boring enough that nobody bothers to look. Which is, of course, the point.",
    ],
  },
  {
    slug: "mayor-refuses-national-story",
    category: "Politics",
    section: "politics",
    title: "The mayor who refuses to be a national story",
    excerpt:
      "She turned down two cabinet jobs and a podcast deal. Her city is quietly thriving.",
    author: "Daniel Okafor",
    readTime: "8 min",
    date: "April 21, 2026",
    image: politicsImg3,
    body: [
      "The mayor will not give us her first name in print. \"It's on the ballot paper,\" she says, pouring tea in a community centre that smells faintly of school dinners. \"That's enough.\" In four years she has turned down two cabinet offers, one ambassadorship, a podcast deal, and — this still amuses her staff — a reality television show about local government. Her city, meanwhile, has the lowest commute time, the highest small-business survival rate, and the cheapest two-bedroom rent of any comparable municipality in the country.",
      "She is, by any reasonable definition, a national story. She is also, by her own definition, emphatically not. \"The minute I become a national story,\" she says, \"I stop being useful here. And here is the only place I'm useful.\"",
      "Her method is unfashionable. She holds office hours on Saturdays. She answers her own emails, badly and late, but she answers them. She has a standing rule that no policy is announced until it has been explained, in person, to at least one person it will affect. \"It slows everything down,\" her chief of staff admits. \"It also means we never have to walk anything back.\"",
      "The city's recent run of quiet successes — a housing pilot that actually built houses, a transit redesign that survived its first winter, a school catchment reform that did not produce a single front-page row — share a pattern. Each was workshopped for a year longer than political logic recommended. Each landed with a press release of less than two hundred words. None of them, the mayor notes with satisfaction, has been undone by her successors-in-waiting, because none of them was theatrical enough to be worth reversing.",
      "When we ask her about the cabinet offers, she is briefly serious. \"They were kind,\" she says. \"But the job they were offering is a job about being seen doing things. The job I have is a job about doing things. They are not the same job.\"",
      "She walks us to the door. On the way out, three people stop her: a shopkeeper about a parking sign, a teenager about a bus route, a retiree about, somehow, a duck. She knows all three by name. None of them mentions the cabinet.",
    ],
  },

  {
    slug: "productivity-dream-collapse",
    category: "Business",
    section: "business",
    title: "The quiet collapse of the productivity dream",
    excerpt:
      "After a decade of dashboards and time-trackers, knowledge workers are pushing back — and bosses are listening.",
    author: "Daniel Okafor",
    readTime: "9 min",
    date: "April 26, 2026",
    image: businessImg,
    body: [
      "For ten years, the answer to almost every workplace question was \"measure it.\" Hours logged, keystrokes counted, calendars colour-coded, sprints sprinted. The dashboard was the new manager. Then, very quietly, somewhere in the last eighteen months, the dashboard stopped working — or, more accurately, the people being measured stopped pretending it ever had.",
      "We talked to thirty CEOs across six industries. Twenty-two of them have, in the past year, shut down at least one productivity tool they had personally championed. Eleven have stopped tracking hours entirely for their salaried staff. Four have abolished the weekly status update. None of them framed this as a defeat. All of them, when pressed, admitted it was one.",
      "\"We had built a system that was very good at measuring whether people were sitting at their desks,\" one chief executive of a mid-sized software company told us, \"and very bad at noticing whether anything they did at those desks mattered. At some point you have to ask why you are paying for the dashboard.\"",
      "The collapse, when it came, was not led by management. It was led by the people doing the work. Engineers who had quietly stopped opening the time tracker. Designers who had moved their real planning into private documents the dashboard could not see. Account managers who had started, with the encouragement of their best clients, simply ignoring the metrics that the contract demanded and delivering the work the contract was actually for.",
      "What replaced the dashboard, in the companies that have moved fastest, is something older and harder to scale: the conversation. Weekly one-to-ones that last an hour, not fifteen minutes. Quarterly reviews that ask what the person learned, not what they shipped. Goals expressed in sentences, not numbers. It is, several executives noted with some embarrassment, exactly how their parents' companies were run.",
      "None of this means measurement is dead. The companies pulling back from the dashboard are not abandoning rigour; they are relocating it. The numbers they care about now are smaller, slower, and further from the worker. Customer retention. Employee tenure. The time between a problem being noticed and the same problem being fixed. These are harder to put on a wallboard, which is, the executives say, rather the point.",
      "The productivity dream was always, at heart, a dream of legibility — the hope that knowledge work could be made as visible as factory work, and therefore as manageable. It turned out that the visibility was an illusion, and the management it enabled was often counter-productive. What is emerging in its place is messier, more trusting, and harder to brag about at conferences. Which may be why it seems, so far, to be working.",
    ],
  },
  {
    slug: "bond-market-stopped-flinching",
    category: "Business",
    section: "business",
    title: "Why the bond market stopped flinching",
    excerpt:
      "A new generation of traders has decided that volatility is the price, not the problem.",
    author: "Sara Pennington",
    readTime: "7 min",
    date: "April 23, 2026",
    image: businessImg2,
    body: [
      "Three years ago, a thirty-basis-point move in the ten-year would have cleared the desks. Last week it produced, on the trading floor we visited, exactly one raised eyebrow and a fresh round of coffee. The bond market has not stopped moving. It has stopped panicking. The question is whether that is wisdom, exhaustion, or a generational bet that has yet to be tested.",
      "The traders running the desks now came of age inside permanent volatility. Their first year was a pandemic; their second, a war; their third, an inflation shock; their fourth, a banking wobble. They have, in effect, never seen the calm market their predecessors spent decades defending. To them, the calm market is the anomaly, and the wild one is simply the market. They price accordingly.",
      "This shift is not just temperamental. It is structural. The hedging instruments are deeper, the central-bank communication is more granular, and the buyer base is broader — pension funds, sovereigns, retail platforms — than at any point in living memory. A move that would once have triggered a forced sale now triggers, more often, a reweighting. Volatility has become, for many participants, an input rather than a threat.",
      "The risk, of course, is that confidence shades into complacency. The same desks that shrugged at last week's move would, the older traders quietly point out, have been violently wrong in 1994, in 2008, and in 2020. Every generation that decides volatility is the price has, eventually, met a price they were not prepared to pay.",
      "For now, though, the new equilibrium holds. The bond market is no longer the canary in the coal mine; it is the coal mine, and it has decided that the occasional tremor is part of the job. Whether the rest of the financial system shares that view is a question for the next quarter, not this one.",
    ],
  },
  {
    slug: "small-manufacturers-big-year",
    category: "Business",
    section: "business",
    title: "Small manufacturers, big year",
    excerpt:
      "Reshoring is no longer a slogan. In four mid-sized cities, it's a hiring spree.",
    author: "Daniel Okafor",
    readTime: "10 min",
    date: "April 19, 2026",
    image: businessImg3,
    body: [
      "Drive an hour out of any of the country's four largest cities and you will, within twenty minutes of leaving the motorway, pass a low industrial shed with a hand-lettered \"hiring\" sign in the window. A decade ago those sheds were warehouses for online retailers. Five years ago they were dark. Today, in a quiet pattern that almost nobody is talking about, they are filling up with small manufacturers — often founded by people under thirty-five — making things that used to be made eight thousand miles away.",
      "The numbers are still small. The trend is not. Across four mid-sized cities we surveyed, the number of registered manufacturing businesses with fewer than fifty employees has grown by between eleven and nineteen per cent in the past two years. Hiring at those firms is up by nearly a third. Wages, in the categories where comparison is possible, are higher than the regional service-sector average for the first time in three decades.",
      "The reasons are stacked. Shipping costs, while down from their pandemic peak, remain stubbornly above pre-2020 norms. Tariffs and tax credits have, in a handful of categories, swung the maths. Customers — both businesses and consumers — have developed a quiet preference for shorter, more legible supply chains. And, perhaps most importantly, a generation of skilled workers who were told in school that manufacturing was over has decided, in their late twenties and early thirties, that they would rather make things than manage them.",
      "The challenges are real. Capital is harder to raise than software founders are used to. Skilled trades remain in short supply, and the apprenticeship pipeline is decades behind where it needs to be. Property, even in the mid-sized cities, is no longer cheap. None of the founders we spoke to expects an easy decade.",
      "But the mood, on those shop floors, is unmistakable. After thirty years of being told that this kind of work belonged somewhere else, a quiet cohort has decided otherwise. The hand-lettered signs are not, as it turns out, a nostalgic gesture. They are a hiring strategy, and it is working.",
    ],
  },

  {
    slug: "open-source-ai-kitchens",
    category: "Technology",
    section: "technology",
    title: "Inside the open-source kitchens cooking up the next AI",
    excerpt:
      "A loose network of researchers, hobbyists and disillusioned ex-employees is quietly building tomorrow's models.",
    author: "Maya Chen",
    readTime: "11 min",
    date: "April 25, 2026",
    image: techImg,
    body: [
      "The most interesting model trained this quarter was not released by a company. It was released by seventeen people, on four continents, who have never been in the same room. Their compute came from a patchwork of academic grants, a sympathetic cloud provider, and one very generous donor who asked, politely, to remain anonymous. Their model is not the largest. It is, on the benchmarks that matter to them, among the most capable. And — this is the part the industry is finding hardest to absorb — its weights are public.",
      "We spent two months inside this loose network. It does not have a name. It has a shared chat channel, three rotating maintainers, and a manifesto that almost nobody has read past the first paragraph. What it does have is a remarkable concentration of people who, twelve months ago, were on the payrolls of the four companies they are now quietly outpacing.",
      "The departures rarely make headlines. They are senior researchers, mid-level engineers, the occasional product manager — people who left, in the words of one, \"because the work had stopped being the work.\" They describe a slow drift away from open publication, an increasingly defensive culture around model details, and a corporate calculus that had begun to treat their curiosity as a liability. \"At some point,\" one former staff researcher told us, \"I realised I was being paid very well to stop sharing what I knew. That is not what I signed up for.\"",
      "The infrastructure they have built around themselves is improvised and surprisingly robust. Training runs are coordinated across half a dozen academic clusters. Datasets are curated by a rotating cast of volunteers who have, between them, more domain expertise than most corporate data teams. Evaluation is run in public, on public benchmarks, with public failure cases. The whole thing is, by industry standards, embarrassingly cheap.",
      "It is also, by industry standards, slow. Releases happen when they are ready, not when a quarter ends. Disagreements are litigated in long, public threads. Decisions that a company would make in an afternoon take, here, three weeks. Nobody we spoke to inside the network thought this was a problem. \"We are not trying to win a race,\" one maintainer said. \"We are trying to keep the road open.\"",
      "The companies have noticed. Privately, executives at two of the four major labs admitted to us that the open-source releases are now driving their internal roadmaps in ways they would not have predicted a year ago. Publicly, they continue to insist that the gap is large and growing. Both can be true at the same time. The gap on raw capability is real. The gap on usable capability — models small enough to run, transparent enough to audit, free enough to build on — is closing.",
      "What this means for the next eighteen months is genuinely unclear. The optimistic reading is that the field returns to something like its pre-2020 norms: open publication, shared benchmarks, a competitive but collaborative research culture. The pessimistic reading is that the open networks burn through their goodwill, their grant money, or their volunteer hours, and the field consolidates further. The realistic reading is probably some of both.",
      "What is no longer in doubt is that the cathedral is not the only place the work is happening. The kitchens are open. The lights are on. And, judging by what came out of them this quarter, the cooking is good.",
    ],
  },
  {
    slug: "battery-storage-dull-miracle",
    category: "Technology",
    section: "technology",
    title: "Battery storage is the dull miracle of our decade",
    excerpt:
      "It won't trend on social media. It will, however, quietly rewire the global economy.",
    author: "Maya Chen",
    readTime: "10 min",
    date: "April 22, 2026",
    image: techImg2,
    body: [
      "The most consequential technology of the decade looks, in person, like a shipping container in a field. It does not have a chief executive who tweets. It does not have a launch event. It has, instead, an inverter, a cooling system, and a contract with the local grid operator that runs to four hundred pages. It is also, quietly, doing more to decarbonise the economy than any policy announced in the same five years.",
      "Battery storage has crossed the threshold that solar crossed a decade ago and wind crossed two decades before that: it is now, in most markets, the cheapest answer to the question it was built to answer. The question — how do you make a grid built for steady fossil generation work with intermittent renewable generation — is no longer interesting to engineers, because the answer is no longer in doubt. You put a battery next to it.",
      "The numbers are doing the work that no campaign could. Installed grid-scale storage capacity has roughly tripled in the past two years. Average project size has doubled. The cost per kilowatt-hour, which the most aggressive forecasters underestimated by a factor of two, has fallen further than even they predicted. None of this has produced a viral moment. All of it has reshaped what is possible.",
      "The economic consequences are starting to land in places that have nothing to do with energy policy. Industrial sites that could not previously locate near intermittent renewables are now doing so. Data centres are signing storage-backed renewable contracts that would have been considered fantasy three years ago. Ports, hospitals, and military bases — institutions that need power when they need it — are quietly becoming their own micro-utilities.",
      "The story is not over. The supply chain for battery materials remains fragile. The grid interconnection queues, in most countries, are absurd. The skilled-trade workforce needed to install at the scale required does not yet exist. None of these problems is unsolvable. All of them are unglamorous.",
      "Which is, in the end, the point. The dull miracle of battery storage is that it requires no breakthrough, no charismatic founder, and no narrative arc. It requires only that we keep building the boring thing, in the boring places, at the boring scale, for another ten years. The interesting consequence is that we will then, almost without noticing, have rewired the world.",
    ],
  },
  {
    slug: "personal-computer-comeback",
    category: "Technology",
    section: "technology",
    title: "The slow comeback of the personal computer",
    excerpt:
      "After fifteen years in the cloud, a generation of developers is bringing the data home.",
    author: "Theo Bell",
    readTime: "6 min",
    date: "April 17, 2026",
    image: techImg3,
    body: [
      "The personal computer never went away. It just got, for a decade and a half, increasingly bored. Its job was reduced to running a browser, which mostly ran somebody else's software, which mostly stored somebody else's copy of your data. The machine on your desk became, in effect, a thin client for a fleet of servers you would never see. That arrangement is, very quietly, starting to come apart.",
      "The cause is not nostalgia. It is, at the margin, cost; in the middle, latency; and at the core, a slow-burning generational discomfort with the idea that the most personal data in your life lives on hardware you do not own. A cohort of developers in their twenties — the same cohort that grew up entirely inside the cloud — has decided, with a kind of cheerful contrarianism, that the cloud is for some things and the desk is for others.",
      "What is coming back is not the old model. The new local-first software syncs when it can, encrypts when it must, and treats the cloud as a useful peer rather than the home base. The data lives on your machine. The collaboration still works. The application still updates. The difference is who the storage answers to.",
      "The companies that have moved earliest are small, and almost none of them are household names. The ones that have moved fastest are, quietly, profitable. None of this is going to undo the platform giants in any near horizon. It does, however, suggest that the pendulum has reached the end of its arc and started, however slowly, to come back.",
      "The personal computer, it turns out, was personal for a reason. A generation that forgot is now, on its own terms, remembering.",
    ],
  },

  {
    slug: "lonely-brilliance-long-distance-runner",
    category: "Sport",
    section: "sports",
    title: "The lonely brilliance of the long-distance runner",
    excerpt:
      "Why a generation of athletes is choosing solitude over spectacle, and what coaches are learning from them.",
    author: "Theo Bell",
    readTime: "8 min",
    date: "April 24, 2026",
    image: sportsImg,
    body: [
      "She runs alone, almost always. Eighty miles a week, on roads she has measured in her head, in a town whose name she has asked us not to print. She has not raced in nine months. She is, by every available measure, in the best form of her career. Her coach lives on a different continent and they speak, by his choice and hers, on the phone, twice a week, for less than fifteen minutes each time.",
      "She is part of a small but growing cohort of elite endurance athletes who have walked away — gently, and without much fanfare — from the modern athletic life. No training group. No social channels. No agent-mediated content schedule. Just the work, the rest, and the occasional race chosen with the kind of care most professionals reserve for property purchases. Their results, so far, are quietly extraordinary.",
      "Their coaches, almost universally, have been forced to adapt. The default model of elite endurance coaching for the past two decades — large training groups, shared facilities, granular daily monitoring — was built for a different kind of athlete. The new cohort responds badly to it. They do not want a peloton. They want, in the words of one veteran coach we spoke to, \"to be left alone with the watch.\"",
      "The data is starting to suggest the runners are right. Athletes in solo programmes show, in the limited samples available, lower injury rates, longer career spans, and — to the visible irritation of the more conventional camps — better outcomes at the championships that matter. The why is contested. The what is becoming hard to argue with.",
      "There is, the runners insist, no manifesto. They have not chosen solitude as a statement. They have chosen it because, for them, it works. The interesting question is whether their sport, which has built an entire industry around the assumption that they need company, is willing to listen.",
      "On the road outside her town, she finishes the morning's session, walks the last half-mile to cool down, and lets herself into a quiet kitchen. She has not posted anything. She has not been seen. She has, in every way that matters to her, been at work all morning.",
    ],
  },
  {
    slug: "best-teams-getting-boring",
    category: "Sport",
    section: "sports",
    title: "Why the best teams are getting boring on purpose",
    excerpt:
      "Possession is up, goals are down, and managers couldn't be happier about it.",
    author: "Theo Bell",
    readTime: "7 min",
    date: "April 20, 2026",
    image: sportsImg2,
    body: [
      "The best team in the league this season has scored fewer goals than the team in seventh. It has also conceded fewer than anybody. It has the highest possession share in the division and the lowest number of shots taken from outside the penalty area in living memory. Its supporters, depending on whom you ask, are either watching the most sophisticated football of the modern era or slowly being bored to death. Its manager, who would prefer the first reading, will accept either.",
      "What is happening on that pitch is not unique. Across four major leagues, the teams winning most consistently have, in the past two seasons, become measurably more conservative. They take fewer risks in the final third. They press less. They commit fewer fouls. They make, by a noticeable margin, fewer substitutions. They are, in the technical language of the analysts, optimising for variance reduction. In the older language of the terraces, they are making sure nothing too interesting happens.",
      "The cause is partly tactical and partly economic. The cost of losing — in prize money, in qualification, in the price of next summer's transfers — has risen faster than the reward for winning spectacularly. The optimal strategy, given that asymmetry, is to be slightly less likely to win and dramatically less likely to lose. The dashboards behind the dugouts have been making this argument quietly for a decade. The dugouts have, finally, agreed.",
      "Whether the audiences agree is a separate question. Television contracts are still going up, which suggests the wider market does not yet share the supporters' impatience. But the supporters' impatience is real, and growing, and at some point will be priced in. The teams winning most boringly today are betting that the moment has not yet arrived. So far, the bet is paying.",
      "The football is not bad. It is exquisitely careful. Whether the difference matters depends, in the end, on what you came to watch.",
    ],
  },
  {
    slug: "38-year-old-not-done",
    category: "Sport",
    section: "sports",
    title: "The 38-year-old who isn't done yet",
    excerpt:
      "He was supposed to retire two seasons ago. Instead, he changed sports.",
    author: "Daniel Okafor",
    readTime: "9 min",
    date: "April 14, 2026",
    image: sportsImg3,
    body: [
      "Two summers ago, after eighteen years at the top of his sport, he announced his retirement in a four-line statement and went on holiday. He had won everything that could reasonably be won. His knees, by his own admission, were finished. His sport, which had given him a comfortable life and an uncomfortable amount of public attention, had, he said, stopped surprising him. He gave one interview, refused all the others, and disappeared.",
      "He returned, ten months later, in a sport he had never previously competed in, in a country he had never previously lived in, at an age at which most of his new peers had been retired for half a decade. He is, depending on the week, somewhere between the eighth and the fifteenth best practitioner in the world. He has, his new coach insists, room to climb.",
      "The story, told that way, sounds like a stunt. In person, it is not. He trains, by the testimony of the people around him, with the seriousness of a junior trying to make a first team. He has hired a movement specialist whose other clients are mostly dancers. He has, in the diet that he describes as \"finally being allowed to eat properly,\" gained six kilos of muscle and lost the chronic pain that had quietly defined the last four years of his old career.",
      "The transition was not, he admits, planned. It was the consequence of a single, slightly drunk dinner with an old friend, a coach in the new sport, who told him that the skills he had spent two decades refining would translate better than he thought. He laughed. The friend did not. Three weeks later he flew over to see, intending to stay for a long weekend. He has not gone home.",
      "He is not, he is keen to make clear, a comeback story. He is a beginner who happens to be unusually well-prepared. The distinction matters to him. \"I'm not trying to be who I was,\" he tells us, on the way out of a training session that has left his new teammates, two decades younger, openly impressed. \"I'm trying to be who I am now. It turns out he can still play.\"",
    ],
  },

  {
    slug: "museums-quiet-again",
    category: "Culture",
    section: "culture",
    title: "Museums are quiet again. Their curators couldn't be happier.",
    excerpt:
      "Post-blockbuster, a generation of curators is rediscovering the radical idea of looking slowly.",
    author: "Iris Lambert",
    readTime: "7 min",
    date: "April 22, 2026",
    image: cultureImg,
    body: [
      "On a Wednesday morning in one of the world's great museums, the room with the most famous painting in it holds nine people. Three of them are children. Two of them are art history students. The remaining four are, by the look of them, simply citizens with an hour to spare. None of them is taking a photograph. Two of them, remarkably, have brought folding stools.",
      "This is the new normal, and the curators are, almost without exception, delighted. After a decade and a half of blockbuster exhibitions, queues around the block, and ticketing systems that resembled budget airlines, a generation of museum directors has quietly decided that the model was wrong — or, at least, that there should be more than one model. The blockbusters have not gone away. But alongside them, in rooms that once held velvet ropes, something older and stranger is being reintroduced: the idea that you might just go and look at a painting.",
      "The shift is partly economic. Blockbusters, it turns out, are extraordinarily expensive to mount and only intermittently profitable. The shift is partly demographic. The audience that queued for them has aged into one that prefers a Wednesday morning to a Saturday afternoon, and whose attention span is longer than the curatorial industry had assumed. The shift is partly philosophical. A cohort of curators who came up during the blockbuster era have, in their forties, started asking what they got into the work to do.",
      "What is replacing the blockbuster is hard to brand and harder to ticket. It looks, in the museums that have moved earliest, like longer hangs, fewer wall texts, more chairs, and an increasingly generous attitude to the visitor who simply wants to sit. It looks like late openings without DJ sets. It looks like quiet. The numbers, modest but consistent, suggest that quiet is, against all the predictions of the marketing departments, what a meaningful slice of the audience always wanted.",
      "None of this is a manifesto. The curators we spoke to are wary of declaring an era. They are, mostly, just doing the work that the institutions were originally built for. The folding stools — bought, apparently, in a single quiet order from a hardware shop — are a small, almost embarrassed acknowledgement that the audience has been ahead of them all along.",
    ],
  },
  {
    slug: "novel-is-fine",
    category: "Culture",
    section: "culture",
    title: "The novel is fine. Stop asking.",
    excerpt:
      "A round-up of six debuts that quietly answer every essay declaring fiction is dead.",
    author: "Iris Lambert",
    readTime: "6 min",
    date: "April 19, 2026",
    image: cultureImg2,
    body: [
      "Every spring, an essay appears declaring that the novel is finished. Every spring, six or seven novels appear that did not get the memo. This year's crop is unusually good. None of the six debuts on our desk this season has been adapted into anything, optioned by anyone, or accompanied by a launch event with a signature cocktail. All of them, on the unfashionable measure of being a pleasure to read, are flourishing.",
      "There is a quiet pattern to them. They are shorter than their predecessors. They are more confident with structure, less anxious about voice. They are, almost without exception, written by people who have done at least one other job for serious money before turning to fiction. The result is prose that knows what an office sounds like, what a hospital corridor smells like, what a bad afternoon at work actually does to a person. The novels are smaller. They contain, somehow, more.",
      "The publishing industry around them is, in places, still misreading the room. The marketing copy on most of the six books we read this month described a different, louder book than the one inside the cover. The authors, in interviews, sounded slightly bemused by their own publicity. None of this matters very much. The books are out. The readers are finding them. The conversation, in the slow places where the conversation actually happens — book groups, library queues, the back pages of two or three quiet magazines — is, by the standards of recent years, lively.",
      "The novel does not need defending. It needs reading. The defending is, mostly, a category error performed by people who would rather argue about literature than read it. The reading, this season, is good. We will leave the defending to others.",
    ],
  },
  {
    slug: "album-comeback",
    category: "Culture",
    section: "culture",
    title: "Why the album is making a comeback",
    excerpt:
      "Fifty-minute records, sequenced to be heard in order. Streaming, it turns out, didn't kill them.",
    author: "Sara Pennington",
    readTime: "5 min",
    date: "April 16, 2026",
    image: cultureImg3,
    body: [
      "For most of the streaming decade, the album was a contractual obligation. A single did the work; an album held the place. Listeners, the platforms insisted, wanted playlists, not arcs. Artists, often quietly, agreed. The album was not dead, but it was, in the rooms where it mattered, no longer being designed.",
      "That is, very recently, changing. The records earning the most attention this year — both critical and commercial — are, almost without exception, structured. They have running orders. They have transitions. They reward listening from start to finish in a way that the previous generation of releases, optimised for the algorithm, conspicuously did not. The producers behind them describe, in the rare interviews they give, a deliberate return to thinking about side one and side two, even when the physical product is digital.",
      "The cause is partly artistic and partly economic. The economics of streaming have, for most musicians outside the very top, stopped working. A loyal audience that buys a record — on vinyl, on a download store, on a subscription tier — is now worth more than a casual audience that streams a single. The artists making albums are, quietly, the artists who have figured out the new business model.",
      "The audiences are, on the available evidence, willing. Vinyl sales continue to grow. Album-listening sessions on the major streaming services are, against the platforms' own predictions, lengthening. The fifty-minute record is not a nostalgic gesture. It is, increasingly, the unit the audience is asking for.",
      "Streaming did not kill the album. It put it on hiatus. The hiatus, it turns out, is over.",
    ],
  },

  {
    slug: "return-of-morning-paper",
    category: "Cover Story",
    section: "featured",
    title: "The return of the morning paper, in a thousand small ways",
    excerpt:
      "From neighbourhood newsletters to printed weeklies in college towns, a generation rebuilds the daily reading habit.",
    author: "Helena Marsh & Iris Lambert",
    readTime: "14 min",
    date: "April 27, 2026",
    image: feature1,
    body: [
      "The morning paper, as an object, is not coming back. The morning paper, as a habit, very much is. Across a quiet patchwork of neighbourhood newsletters, college-town weeklies, and small-format printed editions delivered by hand on Saturday mornings, a generation that grew up entirely online has started, in its late twenties and early thirties, to rebuild a reading ritual its grandparents would recognise. None of it is at scale. All of it, taken together, is unmistakably a movement.",
      "We spent three months travelling between fourteen of these projects — two of them larger than they had any right to be, several of them so small they barely qualified as publications. The pattern is consistent enough to be worth naming. The publications are local, by deliberate choice. They are slow, by structural necessity. They are, almost without exception, run by people who have done at least one tour of duty inside the larger media industry and concluded, politely, that they wanted a different relationship with their readers.",
      "The economics are modest and, in most cases, sustainable. Subscriptions in the low thousands. Margins in the single digits. Salaries that the founders describe, with a kind of stubborn pride, as \"enough.\" The point of the work is not to scale. The point of the work is, in the words of one editor we met in a small inland city, \"to publish something my neighbours can argue about over breakfast.\"",
      "What the readers are buying, as far as we can tell, is not nostalgia. It is finitude. The publications are deliberately small, deliberately complete, deliberately finishable. You can read them, and then you can stop. The infinite scroll has, for this audience, lost its appeal. The eight-page weekly, hand-delivered, has not.",
      "There is a temptation, particularly in the trade press that covers media for a living, to read these projects as a referendum on the larger industry. The founders themselves are wary of the framing. They are not, mostly, trying to fix anything. They are trying, in their own corners, to make the thing they wanted to read. The fact that the thing they wanted to read looks, on inspection, quite a lot like a morning paper is, they say, mostly a coincidence. Or perhaps a confession.",
      "The morning paper was, at its best, a contract: a finite, edited, daily promise that you could trust someone else to have done the looking on your behalf. The contract did not die. It was, for a couple of decades, simply unavailable in a form most people wanted to sign. It is becoming available again, in a thousand small ways, in a thousand small places. The paper, in that sense, is back.",
    ],
  },
  {
    slug: "perpetual-emergency",
    category: "Essay",
    section: "featured",
    title: "Against the politics of the perpetual emergency",
    excerpt:
      "Treating every week like a crisis is the surest way to lose the next one.",
    author: "Iris Lambert",
    readTime: "5 min",
    date: "April 18, 2026",
    image: feature2,
    body: [
      "There is a kind of politics that has, for most of the last decade, treated every week as if it were the last. Every announcement was an emergency. Every disagreement was a crisis. Every mild inconvenience was, somewhere in the press release, an existential threat. The style was effective for a while, in the way that any escalating drug is effective for a while. The problem with escalating drugs is that they eventually stop working.",
      "We are, very visibly, in the stop-working phase. Voters who were, a few years ago, dependably alarmed are now, in measurable numbers, simply tired. The same headlines that used to mobilise turnout now produce a kind of weary scrolling. The same rhetorical moves that used to dominate a news cycle now barely survive an afternoon. The politics of the perpetual emergency has, on its own terms, run out of road.",
      "The temptation, for the operators who built their careers on it, is to escalate further. The smarter ones have noticed that this is precisely the wrong move. Beyond a certain threshold, more emergency is not more attention; it is more silence. The audience does not become more alarmed. The audience leaves the room.",
      "What works, increasingly, is the opposite register. Calm. Specific. Local. Slightly boring. The leaders who are quietly gaining ground are the ones who have stopped pretending every week is the most important week. They speak in paragraphs. They concede small points. They allow, occasionally, that they do not know. None of this is virtuous in itself. All of it, in the current climate, is unfashionably effective.",
      "The genuine emergencies of the next decade — and there will be several — will need a politics with credibility left to spend. The politics of the perpetual emergency has spent it. The politics that comes next will, by necessity, sound different. The voters, ahead of the operators as usual, are already listening for it.",
    ],
  },
  {
    slug: "reluctant-ceo-listening",
    category: "Profile",
    section: "featured",
    title: "The reluctant CEO who fixed her company by listening",
    excerpt:
      "She inherited a mess, cancelled the off-site, and spent three months on the shop floor.",
    author: "Helena Marsh",
    readTime: "8 min",
    date: "April 15, 2026",
    image: feature3,
    body: [
      "She did not want the job. She had been the chief operating officer for nine years, and she had liked it: the work was concrete, the wins were measurable, the press did not, mostly, know her name. When the board asked her to take over after her predecessor's abrupt departure, she asked for a week to think about it. She took two. She accepted on the condition that the off-site planned for the following month — a four-day affair at a coastal hotel, with a keynote speaker and a brand consultancy on retainer — be cancelled. The board, having no real alternative, agreed.",
      "That was eighteen months ago. The company, which had been quietly losing money and noisily losing staff, has since stopped doing both. The turnaround has not been written up in any business school case. The founder, who is now her chief executive, has given exactly one interview. This is, in effect, the second.",
      "Her method, in the months after she took over, was to do almost nothing visible. She cancelled the strategy review. She cancelled the rebrand. She cancelled the two acquisitions her predecessor had been quietly negotiating. She spent, by her own account, the first three months walking around the company. Not, she insists, in any management-by-walking-around sense — she walked around because she did not yet understand the company well enough to make a decision, and she was unwilling to make decisions about things she did not understand.",
      "What she heard, over those three months, was not surprising. The staff knew where the problems were. They had, in many cases, written memos about the problems years earlier, which had been received politely and shelved. They had stopped writing the memos. They had not stopped knowing.",
      "Her interventions, when they came, were small and almost embarrassingly obvious. A weekly half-hour meeting with the head of engineering that had not previously existed. A change to the procurement process that took twenty pages out of a forty-page workflow. A decision to stop the company from bidding on a kind of contract it had been losing money on, profitably, for six years. None of these would qualify, in the conference-circuit sense, as a strategy. All of them, in combination, worked.",
      "She is uncomfortable with the profile. She agreed to it on the condition that we make clear, in writing, that none of what she has done is replicable in any portable way, and that anyone reading this article in the hope of a methodology will be disappointed. We have made that clear. The methodology, as far as we can tell, is to listen carefully to the people who are already there, and to refrain, with some discipline, from the gestures that the job is supposed to require. It is, she would prefer us not to say, harder than it sounds.",
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const findArticleByTitle = (title: string) =>
  articles.find((a) => a.title.toLowerCase().startsWith(title.toLowerCase().slice(0, 30)));
