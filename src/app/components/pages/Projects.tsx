import PageLayout from "../PageLayout";
import { PosterIcon, GithubIcon, LiveIcon } from "../Icons";
import imgSewageAlgae from "@/assets/Projects/sewage-algae-blooms.webp";
import imgLegendsOfValor from "@/assets/Projects/legends-of-valor.webp";
import imgBostonCopWatch from "@/assets/Projects/boston-cop-watch.webp";
import imgSoundwaves from "@/assets/Projects/soundwaves.webp";
import imgHereComesTheSun from "@/assets/Projects/here-comes-the-sun.webp";
import imgCapycrew from "@/assets/Projects/capycrew.webp";
import imgAiAtBu from "@/assets/Projects/ai-at-bu.webp";

// Centralized mapping of link "types" to presentation (icon + label).
const LINK_TYPES = {
  github: { icon: GithubIcon, label: "GitHub" },
  poster: { icon: PosterIcon, label: "Poster" },
  live: { icon: LiveIcon, label: "Live" },
} as const;

type LinkType = keyof typeof LINK_TYPES;
type LinkItem = { type: LinkType; href: string };
type ProjectItem = {
  image: string;
  imageClassName?: string;
  title: string;
  description: string;
  alt: string;
  date: string;
  links: LinkItem[];
};

const projects: ProjectItem[] = [
  {
    image: imgSewageAlgae,
    title: "Sewage & Algae Blooms Monitoring",
    imageClassName: "object-[center_top]",
    description: `Tracking U.S. water pollution from sewage & algae using data scraping`,
    alt: "Sewage overflow in Cambridge, MA",
    date: "Jan 2026 - May 2026",
    links: [
      { type: "poster", href: "https://docs.google.com/presentation/d/1OVog-XRFRZc4-WqfDA9yyuTfsWLQn-mE8V0NLR9cNPI/edit?usp=sharing" },
    ],
  },
  {
    image: imgLegendsOfValor,
    title: "Legends of Valor",
    description: "Battle-arena style terminal game where heroes win by defeating monsters",
    alt: "Terminal gameplay preview",
    date: "Apr 2026",
    links: [{ type: "github", href: "https://github.com/sstangg/legends-of-valor/tree/main" }],
  },
  {
    image: imgBostonCopWatch,
    imageClassName: "object-[top]",
    title: "Boston Cop Watch",
    description: "Explore patterns in local police interactions with youth",
    alt: "Boston Cop Watch home page",
    date: "Feb 2026",
    links: [{ type: "github", href: "https://github.com/jocelynchan042/Boston-Cop-Watch" }],
  },
  {
    image: imgSoundwaves,
    title: "Sounding Out Parkinson's Disease",
    description: "Trained a model to predict Parkinson's disease using speech data",
    alt: "soundwaves",
    date: "July - Sep 2025",
    links: [
      { type: "github", href: "https://github.com/ai4all/ai4all-12a-project.git" },
      { type: "poster", href: "https://docs.google.com/presentation/d/1SELCgKc2lwqRGtYToRHWtA1JymOnDx0v/edit?slide=id.g37f5fe39d61_2_1#slide=id.g37f5fe39d61_2_1" },
    ],
  },
  {
    image: imgHereComesTheSun,
    title: "Here Comes the Sun",
    description: `Discover places with similar sunrise & sunset times as your location`,
    alt: "Map view of Here Comes the Sun",
    date: "Apr 2025",
    links: [{ type: "github", href: "https://github.com/sstangg/technical-assessment-spring-26" }],
  },
  {
    image: imgCapycrew,
    title: "CapyCrew",
    description: `Play with a capybara, navigate & style it!`,
    alt: "Capy",
    date: "Feb 2025",
    links: [
      { type: "github", href: "https://github.com/sstangg/capycrew" },
      { type: "live", href: "https://capycrew.vercel.app" },
    ],
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  const { image, imageClassName, title, description, alt, date, links } = project;
  let imageContainStrategy = "object-cover"; // default
  if (imageClassName && imageClassName.includes("object-contain")) {
    imageContainStrategy = "object-contain";
  }
  return (
    <div className="h-[20rem] sm:h-[18rem] md:h-[23rem]  lg:h-[25rem] gap-4 content-stretch flex flex-col items-start justify-self-stretch relative w-full" data-name="project">
      <div className="h-[60%] w-full overflow-hidden rounded-[5px] shrink-0 border border-black border-dashed pointer-events-none" data-name="img">
        <div className="relative size-full overflow-hidden rounded-[inherit]">
          <img alt={alt} className={`absolute inset-0 h-full w-full pointer-events-none ${imageContainStrategy} ${imageClassName ?? ""}`} src={image} />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit]" style={{
            background: 'radial-gradient(ellipse 50% 50% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 35%, transparent 45%), radial-gradient(ellipse 50% 50% at 100% 100%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 35%, transparent 95%)'
          }} />
        </div>
      </div>

      <div className="overflow-hidden h-full w-full content-stretch flex flex-col gap-1.5 items-start min-h-px relative" data-name="project info">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[clamp(1.25rem,2vw,1.5rem)] text-black w-full">{title}</p>
        <div className="flex flex-col flex-grow content-stretch items-start justify-between overflow-clip relative shrink-0 w-full" data-name="descriptions">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[clamp(1rem,1.5vw,1.25rem)] text-black w-full">{description}</p>
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="subdescription2">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Links">
              {links.map((l, i) => {
                const entry = LINK_TYPES[l.type] ?? { icon: LiveIcon, label: l.type };
                const Icon = entry.icon;
                const label = entry.label;
                return (
                  <div key={i} className="content-stretch flex gap-2 items-center justify-center p-2 relative rounded-[5px] shrink-0 mr-2">
                    <div className="flex items-center justify-center h-6 w-6 overflow-hidden">
                        <Icon className="h-[90%] w-[90%] object-contain" strokeColor="var(--stroke-0, #6750A4)" />
                    </div>
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6750a4] text-[0px] whitespace-nowrap">
                      <a className="block cursor-pointer decoration-solid leading-none text-lg underline" href={l.href} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="px-1 font-['Inter:Light_Italic',sans-serif] font-light italic leading-[normal] relative shrink-0 text-[clamp(1rem,1.5vw,1.25rem)] text-black whitespace-nowrap">{date}</p>
          </div>
        </div>
      </div>
      </div>
  );
}

function ProjectsSection() {
  return (
    <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-12" data-name="projects">
      {projects.map((p, i) => (
        <div key={i}>
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}

function OtherProjectsSection() {
  const otherProject: ProjectItem = {
    image: imgAiAtBu,
    imageClassName: "object-contain",
    title: "Case Study: AI @ Boston University",
    description: "White paper on Boston University's online generative AI course for students",
    alt: "graphic for AI @ Boston University with Terrier licking computer ",
    date: "Mar - May 2026",
    links: [],
  };

  return (
    <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-12" data-name="projects">
      <ProjectCard project={otherProject} />
    </div>
  );
}

function Content() {
  return (
    <div className="flex w-full flex-col gap-16 items-start leading-[0]" data-name="content">
      <div className="flex flex-col w-full gap-5" data-name="section">
        <p className="font-['Helvetica_Neue:Italic',sans-serif] italic leading-[normal] text-[clamp(2rem,4vw,2.5rem)] text-black w-full">projects</p>
        <ProjectsSection />
      </div>
      <div className="flex flex-col w-full gap-5" data-name="section">
        <p className="font-['Helvetica_Neue:Italic',sans-serif] italic leading-[normal] text-[clamp(2rem,4vw,2.5rem)] text-black w-full">other</p>
        <OtherProjectsSection />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="w-full overflow-clip relative shrink-0" data-name="main">
      <Content />
    </div>
  );
}

export default function Projects() {
  return (
    <PageLayout pageName="Projects">
      <Main />
    </PageLayout>
  );
}
